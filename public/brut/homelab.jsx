// Brutalist hi-fi — Homelab section.
// Real services from my actual setup. Names kept generic where useful;
// the household-load-bearing ones are flagged.

const SERVICES = [
  // load-bearing for the household
  { name: 'Home Assistant',  role: 'Lights, alerts, TTS', icon: '⌂', tier: 'core' },
  { name: 'Pi-hole',         role: 'Network DNS + filtering', icon: '◍', tier: 'core' },
  { name: 'Caddy',           role: 'Reverse proxy + wildcard TLS', icon: '⇄', tier: 'core' },
  { name: 'Frigate NVR',     role: 'PoE cameras + person detection', icon: '◉', tier: 'core' },
  { name: 'Mosquitto',       role: 'MQTT broker for IoT', icon: '⊹', tier: 'core' },
  { name: 'Paperless-ngx',   role: 'Document archive', icon: '⊟', tier: 'core' },

  // personal / experimental
  { name: 'n8n',             role: 'Automation workflows', icon: '⌥', tier: 'personal' },
  { name: 'Open WebUI',      role: 'Local AI chat frontend', icon: '◐', tier: 'personal' },
  { name: 'LiteLLM',         role: 'Unified provider gateway', icon: '⊕', tier: 'personal' },
  { name: 'CORE Memory',     role: 'Self-hosted MCP memory', icon: '◇', tier: 'personal' },
  { name: 'InvenTree',       role: 'Parts &amp; consumables inventory', icon: '◫', tier: 'personal' },
  { name: 'Uptime Kuma',     role: 'Service health monitor', icon: '◈', tier: 'personal' },
  { name: 'OpenMediaVault',  role: 'NAS on a ZFS pool', icon: '⊞', tier: 'personal' },
  { name: 'WireGuard relay', role: 'CGNAT punch-through (off-box)', icon: '⤳', tier: 'personal' },
  { name: 'Hoarder',         role: 'Bookmark &amp; note saver', icon: '☰', tier: 'personal' },
  { name: 'code-server',     role: 'Browser VS Code', icon: '⌖', tier: 'personal' },
  { name: 'Traccar',         role: 'GPS tracking', icon: '⊙', tier: 'personal' },
  { name: 'Homer',           role: 'Service dashboard', icon: '☐', tier: 'personal' },
];

function BrutHomelab() {
  return (
    <section id="homelab" className="brut-section brut-homelab">
      <div className="brut-section-head" data-reveal>
        <span className="brut-label">§ For fun</span>
        <span className="brut-label">Ongoing · ~5 yrs</span>
      </div>
      <h2 className="brut-section-title" data-reveal>
        The <span className="brut-accent-word">homelab.</span>
      </h2>
      <p className="brut-section-lede" data-reveal>
        One always-on box doing the work of fifteen — a Proxmox host running a
        mix of containers and VMs, plus a tiny cloud relay so the network
        survives CGNAT. Some of it the household relies on. Some of it is
        purely for me.
      </p>

      <div className="brut-lab-stats" data-reveal>
        <div className="brut-stat">
          <div className="brut-stat-num"><CountUp to={SERVICES.length} suffix="+" /></div>
          <div className="brut-stat-label">Services running</div>
        </div>
        <div className="brut-stat">
          <div className="brut-stat-num"><CountUp to={1} /></div>
          <div className="brut-stat-label">Beefy box, no cluster (yet)</div>
        </div>
        <div className="brut-stat">
          <div className="brut-stat-num">●○</div>
          <div className="brut-stat-label">Mix of household-critical &amp; personal</div>
        </div>
        <div className="brut-stat">
          <div className="brut-stat-num">∞</div>
          <div className="brut-stat-label">Weekends spent on it</div>
        </div>
      </div>

      <div className="brut-services brut-services--full" data-reveal>
        <div className="brut-services-head">
          <span className="brut-label">What's running</span>
          <span className="brut-label">● load-bearing for the house · ○ personal</span>
        </div>
        <div className="brut-services-grid brut-services-grid--wide">
          {SERVICES.map((s, i) => (
            <div key={i} className={`brut-service brut-service--${s.tier}`}>
              <span className="brut-service-icon">{s.icon}</span>
              <div className="brut-service-meta">
                <div className="brut-service-name">
                  <span className={`brut-service-dot brut-service-dot--${s.tier}`} aria-hidden></span>
                  {s.name}
                </div>
                <div className="brut-service-role" dangerouslySetInnerHTML={{__html: s.role}} />
              </div>
            </div>
          ))}
        </div>
        <p className="brut-services-foot">
          Backed up, monitored, and intentionally boring. The household
          notices when it breaks — which isn't often — and otherwise nobody
          thinks about it.
        </p>
      </div>
    </section>
  );
}

window.BrutHomelab = BrutHomelab;
