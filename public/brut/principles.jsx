// Brutalist hi-fi — How I work (principles).

const PRINCIPLES = [
  { rule: 'Boring is a feature.',
    why: 'The best infrastructure is the kind nobody talks about. I choose proven tools and simple setups over clever ones.' },
  { rule: 'Automate it the second time.',
    why: 'Doing a task once by hand shows me how it really works. When it comes back, I script it, so it never costs anyone an afternoon again.' },
  { rule: "If it isn't monitored, it isn't in production.",
    why: 'Every service ships with dashboards and alerts that reach a person. I want to hear about a problem before a customer does.' },
  { rule: 'Docs are part of done.',
    why: "A change is not finished until the next engineer can understand it without asking me." },
];

function BrutPrinciples() {
  return (
    <section id="principles" className="brut-section brut-principles-section">
      <div className="brut-section-head" data-reveal>
        <span className="brut-label">§ How I work</span>
        <span className="brut-label">Principles</span>
      </div>
      <h2 className="brut-section-title" data-reveal>
        How I <span className="brut-accent-word">work.</span>
      </h2>
      <p className="brut-section-lede" data-reveal>
        The rules I bring to every team I join.
      </p>
      <ol className="brut-principles">
        {PRINCIPLES.map((p, i) => (
          <li key={i} className="brut-principle" data-reveal>
            <span className="brut-principle-num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="brut-principle-rule">{p.rule}</h3>
            <p className="brut-principle-why">{p.why}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

window.BrutPrinciples = BrutPrinciples;
