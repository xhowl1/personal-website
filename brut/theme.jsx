// Brutalist hi-fi — shared style tokens & primitives.
// Theme is driven by CSS variables on `:root` so the Tweaks panel can
// hot-swap accents and light/dark mode without re-rendering React.

const BRUT_ACCENTS = {
  orange:   { name: 'Hazard',   hex: '#e84d2a' },
  acid:     { name: 'Acid',     hex: '#c8e84a' },
  electric: { name: 'Electric', hex: '#3d5afe' },
  cherry:   { name: 'Cherry',   hex: '#e8264a' },
};

function applyBrutTheme({ accent = 'orange', dark = false, intensity = 1 }) {
  const root = document.documentElement;
  root.style.setProperty('--brut-accent', BRUT_ACCENTS[accent].hex);
  if (dark) {
    root.style.setProperty('--brut-bg', '#0d0d0c');
    root.style.setProperty('--brut-fg', '#ecebe6');
    root.style.setProperty('--brut-muted', '#9c9685');
    root.style.setProperty('--brut-line-rgb', '236,235,230');
    root.style.setProperty('--brut-card', '#161614');
  } else {
    root.style.setProperty('--brut-bg', '#ecebe6');
    root.style.setProperty('--brut-fg', '#0d0d0c');
    root.style.setProperty('--brut-muted', '#5e5b53');
    root.style.setProperty('--brut-line-rgb', '13,13,12');
    root.style.setProperty('--brut-card', '#f4f3ee');
  }
  // Intensity: 0 (softened) → 1 (full brutalist). Drives border weight + radius.
  const i = Math.max(0, Math.min(1, intensity));
  root.style.setProperty('--brut-border', `${1 + 1.5 * i}px`);
  root.style.setProperty('--brut-radius', `${(1 - i) * 14}px`);
  root.style.setProperty('--brut-letter', `${-0.045 * i - 0.01 * (1 - i)}em`);
}

// Reveal-on-scroll observer. Adds .brut-in to anything with [data-reveal]
// when it enters the viewport. Cheap, declarative, no per-component refs.
function useScrollReveal() {
  React.useEffect(() => {
    // Use a setAttribute marker (not classList) because React reconciles
    // className on every parent re-render and would strip the imperative
    // class. Custom data-* attributes survive reconciliation.
    const reveal = (el) => el.setAttribute('data-shown', '');
    const observed = new WeakSet();
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    const seed = () => {
      document.querySelectorAll('[data-reveal]:not([data-shown])').forEach(el => {
        if (observed.has(el)) return;
        observed.add(el);
        io.observe(el);
      });
    };
    seed();
    // Re-seed periodically for late-mounted nodes (e.g. accordion bodies,
    // sections that mount after first paint).
    const mo = new MutationObserver(seed);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
}

// Counter that animates from 0 → target when its container enters view.
function CountUp({ to, suffix = '', duration = 1200 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      if (started) return;
      if (entries[0].isIntersecting) {
        started = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(eased * to));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// Active-section scroll spy. Returns id of section currently dominant.
function useScrollSpy(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids.join(',')]);
  return active;
}

// Smooth scroll helper that respects sticky-nav offset.
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

window.BRUT_ACCENTS = BRUT_ACCENTS;
window.applyBrutTheme = applyBrutTheme;
window.useScrollReveal = useScrollReveal;
window.useScrollSpy = useScrollSpy;
window.CountUp = CountUp;
window.scrollToId = scrollToId;
