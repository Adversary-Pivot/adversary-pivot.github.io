import { useEffect, useState } from 'react'

const content = {
  en: {
    brand: { first: 'ADVERSARY', second: 'PIVOT', aria: 'Adversary Pivot home' },
    pageTitle: 'Adversary Pivot | Cloud & DevOps Offensive Security Training',
    description: 'Adversary Pivot delivers offensive security training for cloud and DevOps teams.',
    nav: { focus: 'Focus', approach: 'Approach', contact: 'Start a conversation', aria: 'Primary navigation' },
    hero: {
      eyebrow: 'Cloud & DevOps Offensive Security Training',
      title: ['Break the path', 'before attackers do.'],
      lede: 'Hands-on training that turns cloud identities, delivery pipelines, and hidden trust relationships into attack paths your team can see—and stop.',
      primary: 'Explore training',
      secondary: 'See the focus areas',
    },
    visual: { label: 'ATTACK PATH / 001', nodes: ['ENTRY', 'PIVOT', 'IMPACT'] },
    principlesAria: 'Training principles',
    principles: ['THREAT-INFORMED', 'HANDS-ON', 'ATTACK-PATH FOCUSED', 'BUILT FOR MODERN INFRASTRUCTURE'],
    focus: {
      eyebrow: 'Where we focus',
      title: ['Security lives in', 'the connections.'],
      intro: 'Adversary Pivot training is organized around the relationships that create real risk—not a checklist of disconnected vulnerabilities.',
      areas: [
        { number: '01', title: 'Cloud control planes', copy: 'Explore how identity, permissions, and configuration choices combine into exploitable paths across modern cloud environments.', label: 'IDENTITY / IAM / CLOUD' },
        { number: '02', title: 'CI/CD & supply chain', copy: 'Trace trust from source to production and examine the places where pipelines, runners, artifacts, and secrets can be turned against you.', label: 'PIPELINES / SECRETS / TRUST' },
        { number: '03', title: 'Adversary workflows', copy: 'Move beyond isolated findings. Practice connecting small weaknesses into the pivots an attacker would use to reach a meaningful objective.', label: 'DISCOVERY / PIVOT / IMPACT' },
      ],
    },
    approach: {
      eyebrow: 'The approach',
      title: 'Follow the path.',
      highlight: 'Change the outcome.',
      flow: [
        ['Map', 'Understand the environment, trust boundaries, and the identities that connect them.'],
        ['Execute', 'Work through guided offensive scenarios in a focused, hands-on setting.'],
        ['Defend', 'Translate the attack path into concrete detection and hardening priorities.'],
      ],
      outcomeLabel: 'THE OUTCOME',
      outcome: 'A shared mental model for how attacks move—and where defenders can interrupt them.',
    },
    audience: {
      eyebrow: 'Designed for the people in the path',
      title: ['Offense that', 'strengthens defense.'],
      groups: [
        ['Cloud security', 'Connect technical controls to the ways adversaries actually navigate cloud environments.'],
        ['DevOps & platform', 'See how delivery architecture and operational choices shape the attack surface.'],
        ['Detection & response', 'Build visibility around the behaviors and transitions that matter during an intrusion.'],
      ],
    },
    contact: {
      eyebrow: 'Ready to map the path?',
      title: ['Bring the adversary', 'into the room.'],
      copy: 'Start a conversation about hands-on cloud and DevOps offensive security training for your team.',
    },
    footer: 'Cloud & DevOps Offensive Security Training',
  },
  fr: {
    brand: { first: 'PIVOT', second: 'ADVERSAIRE', aria: 'Accueil de Pivot Adversaire' },
    pageTitle: 'Pivot Adversaire | Formation en sécurité offensive infonuagique et DevOps',
    description: 'Pivot Adversaire offre de la formation en sécurité offensive aux équipes infonuagiques et DevOps.',
    nav: { focus: 'Domaines', approach: 'Approche', contact: 'Parlons-nous', aria: 'Navigation principale' },
    hero: {
      eyebrow: 'Formation en sécurité offensive infonuagique et DevOps',
      title: ['Interrompez le parcours', 'avant les attaquants.'],
      lede: 'Une formation pratique qui transforme les identités infonuagiques, les pipelines de livraison et les relations de confiance cachées en parcours d’attaque que votre équipe peut voir—et interrompre.',
      primary: 'Découvrir la formation',
      secondary: 'Voir les domaines',
    },
    visual: { label: 'PARCOURS D’ATTAQUE / 001', nodes: ['ENTRÉE', 'PIVOT', 'IMPACT'] },
    principlesAria: 'Principes de formation',
    principles: ['AXÉ SUR LA MENACE', 'PRATIQUE', 'CENTRÉ SUR LES PARCOURS D’ATTAQUE', 'POUR LES INFRASTRUCTURES MODERNES'],
    focus: {
      eyebrow: 'Nos domaines d’expertise',
      title: ['La sécurité réside', 'dans les connexions.'],
      intro: 'La formation de Pivot Adversaire s’articule autour des relations qui créent un risque réel—pas d’une liste de vulnérabilités isolées.',
      areas: [
        { number: '01', title: 'Plans de contrôle infonuagiques', copy: 'Explorez comment l’identité, les autorisations et les choix de configuration se combinent pour créer des parcours exploitables dans les environnements infonuagiques modernes.', label: 'IDENTITÉ / IAM / INFONUAGIQUE' },
        { number: '02', title: 'CI/CD et chaîne logicielle', copy: 'Suivez la confiance du code source à la production et examinez comment les pipelines, les exécuteurs, les artéfacts et les secrets peuvent être retournés contre vous.', label: 'PIPELINES / SECRETS / CONFIANCE' },
        { number: '03', title: 'Méthodes adverses', copy: 'Allez au-delà des constats isolés. Apprenez à relier de petites faiblesses pour former les pivots qu’un attaquant utiliserait afin d’atteindre un objectif concret.', label: 'DÉCOUVERTE / PIVOT / IMPACT' },
      ],
    },
    approach: {
      eyebrow: 'Notre approche',
      title: 'Suivez le parcours.',
      highlight: 'Changez l’issue.',
      flow: [
        ['Cartographier', 'Comprenez l’environnement, ses frontières de confiance et les identités qui les relient.'],
        ['Exécuter', 'Progressez dans des scénarios offensifs guidés au cours d’une expérience pratique et ciblée.'],
        ['Défendre', 'Transformez le parcours d’attaque en priorités concrètes de détection et de renforcement.'],
      ],
      outcomeLabel: 'LE RÉSULTAT',
      outcome: 'Un modèle mental commun de la progression des attaques—et des endroits où les défenseurs peuvent les interrompre.',
    },
    audience: {
      eyebrow: 'Conçu pour les équipes sur le parcours',
      title: ['Une offensive qui', 'renforce la défense.'],
      groups: [
        ['Sécurité infonuagique', 'Reliez les contrôles techniques aux façons dont les adversaires parcourent réellement les environnements infonuagiques.'],
        ['DevOps et plateformes', 'Voyez comment l’architecture de livraison et les choix opérationnels façonnent la surface d’attaque.'],
        ['Détection et réponse', 'Développez une visibilité sur les comportements et les transitions qui comptent pendant une intrusion.'],
      ],
    },
    contact: {
      eyebrow: 'Prêts à cartographier le parcours?',
      title: ['Faites entrer l’adversaire', 'dans la salle.'],
      copy: 'Discutons d’une formation pratique en sécurité offensive infonuagique et DevOps pour votre équipe.',
    },
    footer: 'Formation en sécurité offensive infonuagique et DevOps',
  },
}

const contactEmail = 'info@adversarypivot.com'

function initialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested === 'en' || requested === 'fr') return requested
  const saved = window.localStorage.getItem('adversary-pivot-language')
  if (saved === 'en' || saved === 'fr') return saved
  return window.navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
}

function CloudMark({ label }) {
  return (
    <svg viewBox="0 0 112 84" role="img" aria-label={label}>
      <path d="M26 70h56c13 0 23-9 23-21S95 28 82 28c-1 0-2 0-3 .2C76 15 64 6 50 6 32 6 18 20 18 38v2C9 43 3 51 3 60c0 6 3 10 7 10h16Z" />
      <path d="M111 49H51" />
      <circle cx="51" cy="49" r="10" />
      <circle cx="108" cy="49" r="4" />
    </svg>
  )
}

function Brand({ translation, footer = false }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#top" aria-label={translation.brand.aria}>
      <CloudMark label={translation.brand.aria} />
      <span><b>{translation.brand.first}</b><em>{translation.brand.second}</em></span>
    </a>
  )
}

function App() {
  const [language, setLanguage] = useState(initialLanguage)
  const t = content[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.pageTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.description)
    window.localStorage.setItem('adversary-pivot-language', language)

    const url = new URL(window.location.href)
    if (language === 'fr') url.searchParams.set('lang', 'fr')
    else url.searchParams.delete('lang')
    window.history.replaceState({}, '', url)
  }, [language, t])

  return (
    <div className="site-shell">
      <header className="site-header">
        <Brand translation={t} />
        <nav aria-label={t.nav.aria}>
          <a href="#focus">{t.nav.focus}</a>
          <a href="#approach">{t.nav.approach}</a>
          <div className="language-switch" role="group" aria-label={language === 'fr' ? 'Choix de langue' : 'Language selection'}>
            <button type="button" onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            <button type="button" onClick={() => setLanguage('fr')} aria-pressed={language === 'fr'}>FR</button>
          </div>
          <a className="nav-cta" href={`mailto:${contactEmail}`}>{t.nav.contact}</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> {t.hero.eyebrow}</p>
            <h1>{t.hero.title[0]}<br />{t.hero.title[1]}</h1>
            <p className="hero-lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{t.hero.primary} <ArrowIcon /></a>
              <a className="text-link" href="#focus">{t.hero.secondary} <span>↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-label">{t.visual.label}</div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="node node-start"><span>01</span><b>{t.visual.nodes[0]}</b></div>
            <div className="node node-pivot"><span>02</span><b>{t.visual.nodes[1]}</b></div>
            <div className="node node-impact"><span>03</span><b>{t.visual.nodes[2]}</b></div>
            <svg className="path-map" viewBox="0 0 600 600">
              <path className="path-muted" d="M90 430C150 270 250 360 285 235S470 160 515 88" />
              <path className="path-active" d="M90 430C150 270 250 360 285 235S470 160 515 88" />
            </svg>
            <div className="crosshair"><i /><i /></div>
            <div className="coordinate coordinate-a">43.6532° N</div><div className="coordinate coordinate-b">79.3832° W</div>
          </div>
        </section>

        <section className="signal-strip" aria-label={t.principlesAria}>
          {t.principles.map((principle, index) => (
            <span className="signal-item" key={principle}>{principle}{index < t.principles.length - 1 && <i />}</span>
          ))}
        </section>

        <section className="focus section-pad" id="focus">
          <div className="section-intro">
            <p className="eyebrow"><span /> {t.focus.eyebrow}</p>
            <h2>{t.focus.title[0]}<br />{t.focus.title[1]}</h2>
            <p>{t.focus.intro}</p>
          </div>
          <div className="focus-list">
            {t.focus.areas.map((area) => (
              <article className="focus-card" key={area.number}>
                <div className="card-number">{area.number}</div>
                <div className="card-copy"><h3>{area.title}</h3><p>{area.copy}</p></div>
                <div className="card-label">{area.label}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach section-pad" id="approach">
          <div className="approach-heading">
            <p className="eyebrow"><span /> {t.approach.eyebrow}</p>
            <h2>{t.approach.title}<br /><em>{t.approach.highlight}</em></h2>
          </div>
          <div className="flow-grid">
            {t.approach.flow.map(([title, copy], index) => (
              <article key={title}>
                <div className="flow-top"><span>0{index + 1}</span>{index < t.approach.flow.length - 1 && <ArrowIcon />}</div>
                <h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="outcome-line"><span>{t.approach.outcomeLabel}</span><p>{t.approach.outcome}</p></div>
        </section>

        <section className="audience section-pad">
          <div>
            <p className="eyebrow"><span /> {t.audience.eyebrow}</p>
            <h2>{t.audience.title[0]}<br />{t.audience.title[1]}</h2>
          </div>
          <div className="audience-grid">
            {t.audience.groups.map(([title, copy], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-mark"><CloudMark label={t.brand.aria} /></div>
          <p className="eyebrow"><span /> {t.contact.eyebrow}</p>
          <h2>{t.contact.title[0]}<br />{t.contact.title[1]}</h2>
          <p className="contact-copy">{t.contact.copy}</p>
          <a className="button button-light" href={`mailto:${contactEmail}`}>{contactEmail} <ArrowIcon /></a>
        </section>
      </main>

      <footer>
        <Brand translation={t} footer />
        <p>{t.footer}</p>
        <p>© {new Date().getFullYear()} {language === 'fr' ? 'Pivot Adversaire' : 'Adversary Pivot'}</p>
      </footer>
    </div>
  )
}

export default App
