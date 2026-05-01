// Brutalist hi-fi — Hero + Currently strip + scrolling marquee.

function BrutHero() {
  return (
    <section className="brut-hero" id="top">
      <div className="brut-hero-meta" data-reveal>
        <span>DevOps Engineer · Remote (PH)</span>
        <span>Available — Q3 2026</span>
      </div>
      <h1 className="brut-name" data-reveal>
        CHRISTOPHER<br />
        TULABUT.
      </h1>
      <p className="brut-tagline" data-reveal>
        I build the cloud infrastructure teams run on, automate the parts
        nobody wants to think about, and keep the platform calm enough
        that people forget it's there.
      </p>
      <div className="brut-hero-cta" data-reveal>
        <a href="mailto:christopher@tulabut.com" className="brut-cta">
          Get in touch <span>→</span>
        </a>
        <a href="https://rxresu.me/chris.tulabut/devops-engineer" target="_blank" rel="noreferrer" className="brut-cta brut-cta-ghost">
          View résumé <span>↗</span>
        </a>
      </div>
    </section>
  );
}

function BrutMarquee() {
  const items = ['AWS', 'TERRAFORM', 'GITHUB ACTIONS', 'POSTGRES', 'DOCKER', 'ANSIBLE', 'NEW RELIC', 'PYTHON', 'NODE.JS', 'JENKINS'];
  // Repeat twice so the loop is seamless.
  const row = [...items, ...items, ...items];
  return (
    <div className="brut-marquee">
      <div className="brut-marquee-track">
        {row.map((t, i) => (
          <span key={i} className="brut-marquee-item">{t} <span className="brut-marquee-sep">/</span></span>
        ))}
      </div>
    </div>
  );
}

function BrutNow() {
  return (
    <section id="now" className="brut-section brut-now">
      <div className="brut-section-head" data-reveal>
        <span className="brut-label">§ Currently</span>
        <span className="brut-label">May 2026</span>
      </div>
      <div className="brut-now-grid">
        <div className="brut-now-card brut-now-card--accent" data-reveal>
          <div className="brut-label">Looking for</div>
          <h3>Senior DevOps, SRE or platform roles. Remote. International OK.</h3>
        </div>
        <div className="brut-now-card" data-reveal>
          <div className="brut-label">Last shipped</div>
          <h3>Restructured a platform's infrastructure-as-code so it cleanly mirrored its production environments.</h3>
        </div>
        <div className="brut-now-card" data-reveal>
          <div className="brut-label">Currently exploring</div>
          <h3>A consolidated AI workflow — research frontend, code agent, self-hosted memory bridging the two.</h3>
        </div>
        <div className="brut-now-card brut-now-card--dark" data-reveal>
          <div className="brut-label" style={{opacity: 0.6}}>Based in</div>
          <h3>Philippines · works comfortably across US / AU / EU time zones.</h3>
        </div>
      </div>
    </section>
  );
}

window.BrutHero = BrutHero;
window.BrutMarquee = BrutMarquee;
window.BrutNow = BrutNow;
