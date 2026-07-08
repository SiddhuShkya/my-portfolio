import { useEffect, useState } from 'react';

const profile = {
  name: 'Siddhartha Shakya',
  role: 'AI/ML Engineer • Data Scientist • Backend Architect',
  location: 'Dubai, UAE',
  summary:
    'I build production-ready AI systems with Python, SQL, and FastAPI, turning data into scalable insights and automated workflows.',
  stats: [
    { label: 'Years in AI/ML', value: '6+' },
    { label: 'Data products shipped', value: '17' },
    { label: 'Datasets modeled', value: '580+' }
  ]
};

const highlights = [
  'Python-driven model development and deployment',
  'End-to-end ML pipelines with FastAPI and cloud data stores',
  'SQL analytics, feature engineering, and real-time inference'
];

const projects = [
  {
    title: 'Predictive Talent Engine',
    type: 'ML system for recruitment',
    description: 'Built a FastAPI service that scores candidate fit using structured HR data and production-grade feature pipelines.'
  },
  {
    title: 'Sales Forecast Platform',
    type: 'Demand forecasting solution',
    description: 'Developed Python models and SQL ETL to predict weekly revenue for a retail chain across 120 stores.'
  },
  {
    title: 'Customer Insights API',
    type: 'Real-time analytics service',
    description: 'Delivered a FastAPI-backed data platform to serve personalized recommendations and segmentation data to marketing teams.'
  }
];

const experience = [
  { title: 'Senior AI/ML Engineer', period: '2023 — Present', company: 'Data Nexus Labs' },
  { title: 'Data Scientist', period: '2020 — 2023', company: 'InsightFlow Analytics' },
  { title: 'Machine Learning Engineer', period: '2018 — 2020', company: 'Apex Data Systems' }
];

const testimonials = [
  {
    quote: 'Siddhartha turned our messy data into a reliable prediction service that became central to our operations.',
    author: 'Neha Patel',
    role: 'Head of Analytics, InsightFlow'
  },
  {
    quote: 'His API-first approach made integration seamless and accelerated the deployment of our analytics products.',
    author: 'Rohan Mehta',
    role: 'Product Lead, Data Nexus'
  }
];

const skills = ['Python', 'SQL', 'FastAPI', 'Pandas', 'scikit-learn', 'Docker', 'AWS'];

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const themeLabel = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  return (
    <div className="page-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <header className="topbar">
        <div className="brand">Siddhartha / Labs</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {themeLabel}
          </button>
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
        <h3>hello@siddharthashakya.ai</h3>
        <p>{profile.location} • Open to remote and hybrid collaborations</p>
      </footer>
    </div>
  );
}

export default App;
