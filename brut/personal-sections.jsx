// Personal page — Workshop + Now playing + Music.
// Looser energy than the career page. Same brutalist DNA.

const WORKSHOP = [
  { tag: 'Build',    name: 'Office nook extension',   note: 'Steel frame, board cladding, daylight from above.' },
  { tag: 'Metal',    name: '19" homelab rack',        note: 'Custom frame, mixed materials, thermostat-driven cooling. The lab gets a real home.' },
  { tag: 'Auto',     name: 'Vehicle roof rails',      note: 'Aluminum extrusion across a steel canopy.' },
  { tag: 'Electric', name: 'Indoor power subpanel',   note: 'Drawn out on paper. Strict bonding rules, single feeder, a few branches.' },
  { tag: 'Build',    name: 'Steel-framed tool shed',  note: 'Small footprint, cut list ready. Materials waiting on a slow weekend.' },
  { tag: 'Yard',     name: 'Frame pool, pavered',     note: 'Goes up in spring, comes down before storm season.' },
];

const STATUS_TONE = {
  'In build': 'live', 'In design': 'live', 'Sourcing': 'live',
  'In planning': 'idle', 'Seasonal': 'idle',
};

const GAMES = [
  { state: 'Currently',  name: 'Battlefield 6',   note: 'Quick sessions when the shop is closed for the night.' },
  { state: 'On pause',   name: 'Apex Legends',    note: 'Might come back to it soon. The squad knows.' },
  { state: 'Up next',    name: 'Silksong',        note: 'On the horizon. The wait continues.' },
];

function PersonalHero() {
  return (
    <section className="brut-hero personal-hero" id="top">
      <div className="brut-hero-meta" data-reveal>
        <span>Personal · not a CV</span>
        <span><a href="index.html" className="personal-back">← back to work</a></span>
      </div>
      <h1 className="brut-name" data-reveal>
        OFF THE<br />KEYBOARD.
      </h1>
      <p className="brut-tagline" data-reveal>
        What I'm doing when I'm not heads-down in Terraform — workshop builds,
        whatever game's on, and the guitar that keeps getting picked up
        and put down again.
      </p>
    </section>
  );
}

function PersonalWorkshop() {
  return (
    <section id="workshop" className="brut-section brut-hobbies">
      <div className="brut-section-head" data-reveal>
        <span className="brut-label">§ Workshop</span>
        <span className="brut-label">Evenings &amp; weekends</span>
      </div>
      <h2 className="brut-section-title" data-reveal>
        I like to <span className="brut-accent-word">make things.</span>
      </h2>
      <p className="brut-section-lede" data-reveal>
        I plan a deck build the same way I plan a deploy — measure twice, cut
        once, write down what broke. Steel and wood when I'm home, a tent and
        a fire when I can get out of the city.
      </p>

      <div className="brut-hobby-list" data-reveal style={{marginTop: 36}}>
        <div className="brut-hobby-list-head">
          <span>The build queue</span>
          <span className="brut-label">In some state of done</span>
        </div>
        <ul className="brut-hobby-rows">
          {WORKSHOP.map((p, i) => (
            <li key={i} className="brut-hobby-row">
              <span className="brut-hobby-row-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="brut-hobby-row-tag">{p.tag}</span>
              <span className="brut-hobby-row-name">{p.name}</span>
              <span className="brut-hobby-row-note">{p.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PersonalGames() {
  return (
    <section id="games" className="brut-section">
      <div className="brut-section-head" data-reveal>
        <span className="brut-label">§ Now playing</span>
        <span className="brut-label">Headphones on</span>
      </div>
      <h2 className="brut-section-title" data-reveal>
        Some <span className="brut-accent-word">games</span><br />in rotation.
      </h2>
      <p className="brut-section-lede" data-reveal>
        Nothing serious. Mostly to decompress after a build, or when the family's
        asleep and the house finally gets quiet.
      </p>

      <div className="personal-games-grid" data-reveal>
        {GAMES.map((g, i) => (
          <article key={i} className="personal-game-card">
            <div className="brut-label">{g.state}</div>
            <h3 className="personal-game-name">{g.name}</h3>
            <p className="personal-game-note">{g.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PersonalMusic() {
  return (
    <section id="music" className="brut-section personal-music-section">
      <div className="brut-section-head" data-reveal>
        <span className="brut-label">§ Music</span>
        <span className="brut-label">Casually, badly, happily</span>
      </div>
      <h2 className="brut-section-title" data-reveal>
        And a <span className="brut-accent-word">guitar</span><br />in the corner.
      </h2>
      <div className="personal-music-grid" data-reveal>
        <p className="personal-music-lede">
          I play guitar — not seriously, not for anyone, just for me. The kind
          of practice that happens in fifteen-minute pockets between other
          things, and sometimes for an hour when the house is empty. No
          gear talk; the gear isn't the point.
        </p>
        <div className="personal-music-aside">
          <div className="brut-label">The vibe</div>
          <p>Pick it up. Mess around. Put it down. Repeat indefinitely.</p>
        </div>
      </div>
    </section>
  );
}

function PersonalFoot() {
  return (
    <section className="personal-foot">
      <div className="brut-foot">
        <span>© 2026 Christopher Tulabut</span>
        <span><a href="index.html">← back to the work page</a></span>
      </div>
    </section>
  );
}

window.PersonalHero = PersonalHero;
window.PersonalWorkshop = PersonalWorkshop;
window.PersonalGames = PersonalGames;
window.PersonalMusic = PersonalMusic;
window.PersonalFoot = PersonalFoot;
