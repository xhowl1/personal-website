// Brutalist hi-fi — Stack + Contact.

const STACK = [
  { head: 'Cloud / Infra',     plain: 'Run the servers and ship to them safely.', items: ['AWS', 'Terraform', 'Ansible', 'Docker', 'Linux', 'Heroku', 'Proxmox'] },
  { head: 'CI/CD & Observability', plain: 'Automate releases, watch them in production.', items: ['GitHub Actions', 'Jenkins', 'New Relic', 'CloudWatch', 'Grafana', 'Prometheus', 'CodeceptJS'] },
  { head: 'Data',              plain: 'Store it, query it, keep it fast.', items: ['PostgreSQL', 'MongoDB', 'SQL', 'GraphQL', 'PgBouncer'] },
  { head: 'Languages',         plain: 'What I write the back-end in.', items: ['Python', 'Node.js', 'C#', 'Java', 'TypeScript'] },
  { head: 'Frontend',          plain: 'What the user actually sees.', items: ['React', 'Vue', 'Angular', 'NestJS', 'ExpressJS'] },
  { head: 'The dark arts',     plain: 'Things I will never claim to fully understand.', items: ['regex', 'bash one-liners', 'YAML indentation', 'git rebase', 'DNS', 'CORS'] },
];

function BrutStack() {
  return (
    <section id="stack" className="brut-section brut-stack">
      <div className="brut-section-head" data-reveal>
        <span className="brut-label">§ Stack</span>
        <span className="brut-label">Tools I reach for first</span>
      </div>
      <div className="brut-stack-grid">
        {STACK.map((g, i) => (
          <div key={i} className="brut-stack-group" data-reveal>
            <div className="brut-stack-head">{g.head}</div>
            {g.plain && <div className="brut-stack-plain">{g.plain}</div>}
            <div className="brut-stack-pills">
              {g.items.map(it => <span key={it} className="brut-tag">{it}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrutContact() {
  return (
    <section id="contact" className="brut-section brut-contact">
      <div className="brut-contact-bg">
        <div className="brut-contact-meta">
          <span className="brut-label">§ Get in touch</span>
        </div>
        <h2 className="brut-contact-title" data-reveal>
          Let's talk shop. Or just say hi —<br />
          either is fine.
        </h2>
        <a href="mailto:christopher@tulabut.com" className="brut-cta brut-cta-onbg" data-reveal>
          christopher@tulabut.com <span>→</span>
        </a>
        <div className="brut-contact-links" data-reveal>
          <a href="https://rxresu.me/chris.tulabut/devops-engineer" target="_blank" rel="noreferrer">résumé ↗</a>
          <span>·</span>
          <a href="http://github.com/xhowl1" target="_blank" rel="noreferrer">github/xhowl1</a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/christulabut/" target="_blank" rel="noreferrer">linkedin/christulabut</a>
        </div>
      </div>
      <div className="brut-foot">
        <span>© 2026 Christopher Tulabut</span>
        <span><a href="off-the-keyboard.html" style={{color: 'inherit'}}>Off the keyboard →</a></span>
        <span>Built in HTML · No frameworks were harmed</span>
      </div>
    </section>
  );
}

window.BrutStack = BrutStack;
window.BrutContact = BrutContact;
