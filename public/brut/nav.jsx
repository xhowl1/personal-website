// Brutalist hi-fi — sticky nav with scroll-spy, command palette (⌘K),
// and a "shrinking name" effect that pulls the hero name into the nav.

function BrutNav({ open, setOpen }) {
  const ids = ['top', 'now', 'work', 'homelab', 'stack', 'contact'];
  const labels = {
    top: 'Top', now: 'Now', work: 'Work', homelab: 'Homelab',
    stack: 'Stack', contact: 'Contact',
  };
  const active = useScrollSpy(ids);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="brut-nav" aria-label="primary">
      <div className={`brut-nav-name ${scrolled ? 'is-shrunk' : ''}`}>
        CT/2026 <span className="brut-dot">●</span>
      </div>
      <div className="brut-nav-items">
        {ids.slice(1).map(id => (
          <button
            key={id}
            className={`brut-nav-link ${active === id ? 'is-active' : ''}`}
            onClick={() => scrollToId(id)}
          >
            {labels[id]}
          </button>
        ))}
        <button className="brut-nav-cmd" onClick={() => setOpen(true)} aria-label="Open command palette">
          <span>⌘</span>K
        </button>
      </div>
    </nav>
  );
}

function CommandPalette({ open, setOpen }) {
  const [q, setQ] = React.useState('');
  const inputRef = React.useRef(null);
  const items = [
    { label: 'Jump to: Now',      kind: 'nav', go: () => scrollToId('now') },
    { label: 'Jump to: Work',     kind: 'nav', go: () => scrollToId('work') },
    { label: 'Jump to: Homelab',  kind: 'nav', go: () => scrollToId('homelab') },
    { label: 'Jump to: Stack',    kind: 'nav', go: () => scrollToId('stack') },
    { label: 'Jump to: Contact',  kind: 'nav', go: () => scrollToId('contact') },
    { label: 'Off the keyboard (personal page)', kind: 'act', go: () => window.location.href = 'off-the-keyboard.html' },
    { label: 'Email christopher@tulabut.com', kind: 'act', go: () => window.location.href = 'mailto:christopher@tulabut.com' },
    { label: 'Open GitHub · xhowl1', kind: 'act', go: () => window.open('http://github.com/xhowl1', '_blank') },
    { label: 'Open LinkedIn · christulabut', kind: 'act', go: () => window.open('https://www.linkedin.com/in/christulabut/', '_blank') },
    { label: 'Toggle dark mode', kind: 'act', go: () => window.dispatchEvent(new CustomEvent('brut:toggleDark')) },
    { label: 'Cycle accent color', kind: 'act', go: () => window.dispatchEvent(new CustomEvent('brut:cycleAccent')) },
  ];
  const filtered = items.filter(it => it.label.toLowerCase().includes(q.toLowerCase()));

  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="brut-cmd-bg" onClick={() => setOpen(false)}>
      <div className="brut-cmd" onClick={(e) => e.stopPropagation()}>
        <div className="brut-cmd-head">
          <span className="brut-cmd-prompt">›</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type to search…"
            className="brut-cmd-input"
          />
          <span className="brut-cmd-esc">ESC</span>
        </div>
        <ul className="brut-cmd-list">
          {filtered.length === 0 && <li className="brut-cmd-empty">no matches.</li>}
          {filtered.map((it, i) => (
            <li
              key={i}
              className="brut-cmd-item"
              onClick={() => { it.go(); setOpen(false); }}
            >
              <span className="brut-cmd-kind">{it.kind === 'nav' ? '↳' : '→'}</span>
              {it.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

window.BrutNav = BrutNav;
window.CommandPalette = CommandPalette;
