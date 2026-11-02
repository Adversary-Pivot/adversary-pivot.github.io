const focusAreas = [
  {
    number: '01',
    title: 'Cloud control planes',
    copy: 'Explore how identity, permissions, and configuration choices combine into exploitable paths across modern cloud environments.',
    label: 'IDENTITY / IAM / CLOUD',
  },
  {
    number: '02',
    title: 'CI/CD & supply chain',
    copy: 'Trace trust from source to production and examine the places where pipelines, runners, artifacts, and secrets can be turned against you.',
    label: 'PIPELINES / SECRETS / TRUST',
  },
  {
    number: '03',
    title: 'Adversary workflows',
    copy: 'Move beyond isolated findings. Practice connecting small weaknesses into the pivots an attacker would use to reach a meaningful objective.',
    label: 'DISCOVERY / PIVOT / IMPACT',
  },
]

const trainingFlow = [
  ['Map', 'Understand the environment, trust boundaries, and the identities that connect them.'],
  ['Break', 'Work through guided offensive scenarios in a focused, hands-on setting.'],
  ['Defend', 'Translate the attack path into concrete detection and hardening priorities.'],
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  )
}

function CloudMark() {
  return (
    <svg viewBox="0 0 112 84" role="img" aria-label="Adversary Pivot mark">
      <path d="M26 70h56c13 0 23-9 23-21S95 28 82 28c-1 0-2 0-3 .2C76 15 64 6 50 6 32 6 18 20 18 38v2C9 43 3 51 3 60c0 6 3 10 7 10h16Z" />
      <path d="M111 49H51" />
      <circle cx="51" cy="49" r="10" />
      <circle cx="108" cy="49" r="4" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Adversary Pivot home">
          <CloudMark />
          <span>
            <b>ADVERSARY</b>
            <em>PIVOT</em>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#focus">Focus</a>
          <a href="#approach">Approach</a>
          <a className="nav-cta" href="#contact">Start a conversation</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Cloud & DevOps Offensive Security Training</p>
            <h1>Break the path<br />before attackers do.</h1>
            <p className="hero-lede">
              Hands-on training that turns cloud identities, delivery pipelines, and hidden trust relationships into attack paths your team can see—and stop.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Explore training <ArrowIcon /></a>
              <a className="text-link" href="#focus">See the focus areas <span>↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-label">ATTACK PATH / 001</div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="node node-start"><span>01</span><b>ENTRY</b></div>
            <div className="node node-pivot"><span>02</span><b>PIVOT</b></div>
            <div className="node node-impact"><span>03</span><b>IMPACT</b></div>
            <svg className="path-map" viewBox="0 0 600 600">
              <path className="path-muted" d="M90 430C150 270 250 360 285 235S470 160 515 88" />
              <path className="path-active" d="M90 430C150 270 250 360 285 235S470 160 515 88" />
            </svg>
            <div className="crosshair"><i /><i /></div>
            <div className="coordinate coordinate-a">43.6532° N</div>
            <div className="coordinate coordinate-b">79.3832° W</div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Training principles">
          <span>THREAT-INFORMED</span><i />
          <span>HANDS-ON</span><i />
          <span>ATTACK-PATH FOCUSED</span><i />
          <span>BUILT FOR MODERN INFRASTRUCTURE</span>
        </section>

        <section className="focus section-pad" id="focus">
          <div className="section-intro">
            <p className="eyebrow"><span /> Where we focus</p>
            <h2>Security lives in<br />the connections.</h2>
            <p>Adversary Pivot training is organized around the relationships that create real risk—not a checklist of disconnected vulnerabilities.</p>
          </div>

          <div className="focus-list">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.number}>
                <div className="card-number">{area.number}</div>
                <div className="card-copy">
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                </div>
                <div className="card-label">{area.label}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach section-pad" id="approach">
          <div className="approach-heading">
            <p className="eyebrow"><span /> The approach</p>
            <h2>Follow the path.<br /><em>Change the outcome.</em></h2>
          </div>
          <div className="flow-grid">
            {trainingFlow.map(([title, copy], index) => (
              <article key={title}>
                <div className="flow-top">
                  <span>0{index + 1}</span>
                  {index < trainingFlow.length - 1 && <ArrowIcon />}
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="outcome-line">
            <span>THE OUTCOME</span>
            <p>A shared mental model for how attacks move—and where defenders can interrupt them.</p>
          </div>
        </section>

        <section className="audience section-pad">
          <div>
            <p className="eyebrow"><span /> Designed for the people in the path</p>
            <h2>Offense that<br />strengthens defense.</h2>
          </div>
          <div className="audience-grid">
            <div><span>01</span><h3>Cloud security</h3><p>Connect technical controls to the ways adversaries actually navigate cloud environments.</p></div>
            <div><span>02</span><h3>DevOps & platform</h3><p>See how delivery architecture and operational choices shape the attack surface.</p></div>
            <div><span>03</span><h3>Detection & response</h3><p>Build visibility around the behaviors and transitions that matter during an intrusion.</p></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-mark"><CloudMark /></div>
          <p className="eyebrow"><span /> Ready to map the path?</p>
          <h2>Bring the adversary<br />into the room.</h2>
          <p className="contact-copy">Start a conversation about hands-on cloud and DevOps offensive security training for your team.</p>
          <a className="button button-light" href="https://github.com/filipjodoin-ap" target="_blank" rel="noreferrer">
            Connect on GitHub <ArrowIcon />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand brand-footer" href="#top"><CloudMark /><span><b>ADVERSARY</b><em>PIVOT</em></span></a>
        <p>Cloud & DevOps Offensive Security Training</p>
        <p>© {new Date().getFullYear()} Adversary Pivot</p>
      </footer>
    </div>
  )
}

export default App
