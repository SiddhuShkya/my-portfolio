const profile = {
  name: 'Maya Chen',
  role: 'Product Designer • Frontend Developer • Storyteller',
  location: 'London, UK',
  summary:
    'I build elegant digital experiences that feel effortless, convert better, and help teams ship with confidence.',
  stats: [
    { label: 'Years crafting products', value: '7+' },
    { label: 'Products launched', value: '32' },
    { label: 'Happy collaborators', value: '18' }
  ]
};

const highlights = [
  'Design systems with scalable UI foundations',
  'Conversion-focused product storytelling',
  'Cross-functional leadership from concept to launch'
];

const projects = [
  {
    title: 'Northstar Studio',
    type: 'SaaS launch experience',
    description: 'Led the UX direction for a B2B platform refresh that helped increase qualified demos by 31%.'
  },
  {
    title: 'Lumen Analytics',
    type: 'Dashboard redesign',
    description: 'Reimagined a data-heavy interface into a calmer workflow for faster onboarding and weekly engagement.'
  },
  {
    title: 'Halo Commerce',
    type: 'E-commerce experience',
    description: 'Crafted a mobile-first shopping journey with stronger clarity, faster checkout, and improved trust signals.'
  }
];

const experience = [
  { title: 'Senior Product Designer', period: '2022 — Present', company: 'Northstar Labs' },
  { title: 'Frontend Developer', period: '2019 — 2022', company: 'Studio Vale' },
  { title: 'Visual Designer', period: '2016 — 2019', company: 'Brightline Agency' }
];

const testimonials = [
  {
    quote: 'Maya brought calm precision to our launch and made complex product ideas feel beautifully simple.',
    author: 'Alicia Hart',
    role: 'VP Product, Northstar'
  },
  {
    quote: 'Every interaction she designed felt intentional, polished, and genuinely user-centered.',
    author: 'Jordan Singh',
    role: 'Founder, Lumen'
  }
];

const skills = ['React', 'UI Systems', 'Figma', 'Motion Design', 'Accessibility', 'Next.js', 'Brand Strategy'];

function App() {
  return (
    <div className="page-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <header className="topbar">
        <div className="brand">Maya / Studio</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content-grid">
        <section className="hero-card">
          <p className="eyebrow">Available for select collaborations</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="button primary" href="#contact">Book a call</a>
            <a className="button secondary" href="#work">View projects</a>
          </div>

          <div className="stats-row">
            {profile.stats.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <aside className="panel-card" id="about">
          <p className="eyebrow">Profile</p>
          <h3>Designing purposeful products that feel effortless.</h3>
          <p>
            I blend strategy, visual craft, and a practical coding lens to turn product ideas into experiences people remember.
          </p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </main>

      <section className="section-card experience-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h3>Trusted across startups and fast-moving teams.</h3>
        </div>
        <div className="timeline-list">
          {experience.map((item) => (
            <div key={item.title} className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <h4>{item.title}</h4>
                <p>{item.company}</p>
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h3>Recent launches with measurable impact.</h3>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <p className="project-type">{project.type}</p>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card skills-section">
        <div className="section-heading">
          <p className="eyebrow">Toolkit</p>
          <h3>Focused on the stack that makes products shine.</h3>
        </div>
        <div className="chip-row">
          {skills.map((skill) => (
            <span key={skill} className="chip">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section-card testimonial-section">
        <div className="section-heading">
          <p className="eyebrow">Voices from collaborators</p>
          <h3>What it feels like to work together.</h3>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.author} className="testimonial-card">
              <p>“{item.quote}”</p>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-card" id="contact">
        <p className="eyebrow">Let’s build something refined</p>
        <h3>hello@maya-chen.design</h3>
        <p>{profile.location} • Open to remote and hybrid collaborations</p>
      </footer>
    </div>
  );
}

export default App;
