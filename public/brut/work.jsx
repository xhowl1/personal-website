// Brutalist hi-fi — Work history with expandable details + scroll-revealed timeline.

const WORK = [
  {
    yr: '2024 — 2025', range: 'Mar 2024 — Sept 2025',
    role: 'DevOps Engineer', co: 'PropHero',
    loc: 'NSW, Australia · Remote (PH)',
    one: 'Owned Terraform, AWS posture, and observability for the platform team.',
    bullets: [
      'Migrated Terraform state from Terraform Cloud to AWS S3 — tighter version control and review story.',
      'Owned New Relic across the org: dashboards, alert routing, app coverage.',
      'Closed Security Hub & Inspector findings; lifted overall cloud posture.',
      'Maintained EC2, S3, RDS, IAM and supporting AWS surface area.',
      'Reorganized the Terraform repo to 1:1 mirror AWS environments, lowering the cost of future change.',
      'Used CloudWatch + New Relic to read logs and unblock developers.',
    ],
    tags: ['Terraform', 'AWS', 'New Relic', 'Security Hub', 'CloudWatch'],
  },
  {
    yr: '2022 — 2024', range: 'Jan 2022 — Feb 2024',
    role: 'DevOps Engineer', co: 'R-Zero',
    loc: 'Salt Lake City, UT · Remote (PH)',
    one: 'Modernized the platform — ECS, GitHub Actions, HA Postgres.',
    bullets: [
      'Migrated legacy applications to AWS ECS — better scaling, cleaner resource use.',
      'Moved CI from Jenkins to GitHub Actions; deploys got materially faster.',
      'Stood up high-availability PostgreSQL with PgBouncer + HAProxy load balancing.',
      'Designed robust backup systems for production databases.',
      'Automated multi-environment deploys with Terraform and Ansible.',
      'Partnered with QA for smooth integration during legacy pipeline cutover.',
    ],
    tags: ['AWS ECS', 'GitHub Actions', 'Postgres HA', 'Ansible', 'PgBouncer'],
  },
  {
    yr: '2018 — 2022', range: 'Jan 2018 — Jan 2022',
    role: 'DevOps · Full-Stack · QA Automation',
    co: 'Analytics Fire',
    loc: 'Palo Alto · Remote (PH) · acquired by R-Zero',
    one: 'Three roles across four years. Pipelines, product, automated tests.',
    bullets: [
      'Maintained deployment pipelines and infrastructure across multiple client projects.',
      'Built a custom time-tracking tool integrated with Jira and Trello, plus 3rd-party trackers.',
      'Automated diverse test suites under QA leadership; covered browser/device matrix on BrowserStack.',
    ],
    tags: ['Pipelines', 'Full-Stack', 'BrowserStack'],
  },
  {
    yr: '2020 — 2021', range: '2020 — 2021',
    role: 'Full-Stack & Angular Developer',
    co: 'Teralink PH + IRRI',
    loc: 'Laguna · Remote (PH)',
    one: 'Two parallel contracts. Lottery on Lambda, and a planting-recommendation engine for IRRI.',
    bullets: [
      'Spearheaded an online lottery system on AWS Lambda microservices — scalable, reliable.',
      'Contributed to IRRI\'s "Rice Crop Manager" — planting recommendations supporting agricultural decisions.',
    ],
    tags: ['AWS Lambda', 'Angular', 'Microservices'],
  },
  {
    yr: '2009 — 2016', range: '2009 — 2016',
    role: 'Earlier — Educator, MIS Officer, Freelance Dev',
    co: 'Dominican College · O&G Leather · Freelance',
    loc: 'Tarlac & Pampanga, Philippines',
    one: 'College-level CS instructor, then IT operations, then a freelance secure-chat client.',
    bullets: [
      'Taught programming, networking, and software development at Dominican College of Tarlac.',
      'Ran IT functions at O&G Leather: hardware, legacy manufacturing software, email systems, IT team.',
      'Shipped a secure desktop chat application built on XMPP for Windows.',
    ],
    tags: ['Teaching', 'IT Ops', 'XMPP'],
  },
];

function WorkRow({ job, idx }) {
  const [open, setOpen] = React.useState(idx === 0);
  return (
    <article className={`brut-work-row ${open ? 'is-open' : ''}`} data-reveal>
      <button className="brut-work-head" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <div className="brut-work-yr">{job.yr}</div>
        <div className="brut-work-role-wrap">
          <h3 className="brut-work-role">{job.role}</h3>
          <div className="brut-work-co">
            <span className="brut-work-co-name">{job.co}</span>
            <span className="brut-work-loc"> · {job.loc}</span>
          </div>
        </div>
        <div className="brut-work-toggle" aria-hidden>
          <span className="brut-work-plus">{open ? '−' : '+'}</span>
        </div>
      </button>
      <div className="brut-work-body" style={{ maxHeight: open ? 800 : 0 }}>
        <div className="brut-work-body-inner">
          <p className="brut-work-one">{job.one}</p>
          <ul className="brut-work-bullets">
            {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="brut-work-tags">
            {job.tags.map(t => <span key={t} className="brut-tag">{t}</span>)}
          </div>
          <div className="brut-work-range">{job.range}</div>
        </div>
      </div>
    </article>
  );
}

function BrutWork() {
  return (
    <section id="work" className="brut-section brut-work">
      <div className="brut-section-head" data-reveal>
        <span className="brut-label">§ Work history</span>
        <span className="brut-label">{WORK.length} roles · 16 yrs</span>
      </div>
      <h2 className="brut-section-title" data-reveal>I join a team and grow<br />the platform alongside it.</h2>
      <div className="brut-work-list">
        {WORK.map((job, i) => <WorkRow key={i} job={job} idx={i} />)}
      </div>
    </section>
  );
}

window.BrutWork = BrutWork;
