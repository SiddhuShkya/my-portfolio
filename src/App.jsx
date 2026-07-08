import { useEffect, useState } from 'react';

const profile = {
  name: 'Siddhartha Shakya',
  role: 'Data Analyst & Engineering • AI/ML Enthusiast',
  location: 'Dubai, UAE',
  summary:
    'Data specialist in Dubai with 3+ years of experience modeling 100+ datasets. I build production-ready AI systems and scalable data engineering pipelines with Python, SQL, and FastAPI to ship impactful data products.',
  stats: [
    { label: 'Years in Data/Analytics', value: '3+' },
    { label: 'Data products shipped', value: '12+' },
    { label: 'Datasets modeled', value: '50+' }
  ]
};

const highlights = [
  'Python-driven Model & App development with Automated deployment',
  'End-to-end Data Pipelines with Airflow, DBT & Snowflake',
  'Advanced SQL modeling & Feature Engineering with Production workflows'
];

const projects = [
  {
    title: 'EduFin Loan Portfolio Risk Investigation',
    type: 'Data Analytics / BI Project',
    description: 'A Databricks-based analysis of an education loan portfolio to uncover default patterns, identify high-risk regions and customers, evaluate partner institutions, and support data-driven risk mitigation decisions.'
  },
  {
    title: 'NYC Parking Violations Pipeline',
    type: 'Data Engineering Project',
    description: 'A dbt-based project that builds end-to-end data pipelines for NYC parking violation data using the medallion architecture to transform raw data into curated, analytics-ready layers.'
  },
  {
    title: 'Text Summarization with HuggingFace',
    type: 'End-to-end NLP/ML project',
    description: 'A Python-based text summarization application that fine-tunes a Hugging Face T5 model and serves it through a FastAPI web interface for generating concise summaries.'
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
            <a className="button cv-download" href="https://raw.githubusercontent.com/SiddhuShkya/autoCV/build/cv.pdf" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
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
          <h3>Building scalable AI systems that turn data into impact.</h3>
          <p>
            I blend data engineering, model development, and a practical coding lens to turn complex datasets into production-ready workflows and automated insights.
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

        <div className="footer-contact-primary" style={{ margin: '1.5rem 0' }}>
          <a href="mailto:siddhuushakyaa@gmail.com" className="contact-link-large" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit', fontSize: '1.5rem', fontWeight: 'bold' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>siddhuushakyaa@gmail.com</span>
          </a>
        </div>

        <p>{profile.location} • Open to remote and hybrid collaborations</p>

        <div className="footer-links" style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', alignItems: 'center' }}>
          <a href="tel:+971551830660" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+971 55 183 0660</span>
          </a>

          <a href="https://linkedin.com/in/sidShkya" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/SiddhuShkya" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </footer>
    </div >
  );
}

export default App;
