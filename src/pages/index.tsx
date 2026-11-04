import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
  ['Languages', 'TypeScript · Java · C# · Dart'],
  ['Frameworks', 'Next.js · Express.js · ASP.NET Core · Flutter'],
  ['Databases', 'PostgreSQL · MongoDB · Firebase'],
  ['Tools & Platforms', 'Git · Postman · AWS'],
];

const experience = [
  {
    period: 'Sep 2026 — Present', role: 'Software Engineer', company: 'Self-Employed (Freelance)',
    bullets: ['Developed custom Expert Advisors and technical indicators using MQL4 for MetaTrader 4, translating trading strategies into automated or semi-automated solutions.', 'Assisted PT CV Bahagia in selecting an ERP system by evaluating available solutions against business requirements, system capabilities, and operational needs.', 'Provided day-to-day IT support at PT CV Bahagia, resolving hardware, software, and peripheral issues to minimize disruption.'],
    tags: ['MQL4', 'MT4', 'ERP', 'IT Support'],
  },
  {
    period: 'Sep 2025 — Dec 2025', role: 'Software Engineer Intern', company: 'Joget Inc. (Joget Technology Sdn Bhd)',
    bullets: ['Engineered reusable Java-based plugins for Joget DX8, expanding platform capabilities through configurable extensions and reducing repetitive custom development.', 'Developed a centralized broadcast messaging plugin and improved CRUD workflows through sliding-panel interfaces for in-place record editing.', 'Integrated locally hosted Ollama models for AI-assisted code generation and automated ZIP exports. Developed PDF decryption functionality using a provided algorithm.'],
    tags: ['Java', 'JavaScript', 'Ollama', 'MySQL'],
  },
];

const projects = [
  { title: 'Proof-of-Publish', type: 'Blockchain portal', description: 'A verifiable publishing workflow that records content hashes on Ethereum and keeps metadata queryable in PostgreSQL.', image: '/blockchain-preview.png', tags: ['Next.js', 'Solidity', 'PostgreSQL'], href: 'https://github.com/BodhiOng/Proof-of-Publish-Timestamping-Portal' },
  { title: 'Secondhand Marketplace', type: 'Mobile commerce', description: 'A Flutter marketplace for browsing, chat, checkout, wallet payments, order tracking, and seller operations.', image: '/secondhand-preview.jpg', tags: ['Flutter', 'Dart', 'Firebase'], href: 'https://github.com/BodhiOng/Secondhand-Marketplace-App' },
  { title: 'Gamesphere Tournament Hub', type: 'Esports platform', description: 'An esports tournament platform where teams can enlist for competitions, manage schedules, and connect with players looking for competitive opportunities.', image: '/gsth-preview.png', tags: ['React.js', 'ASP.NET Core', 'AWS'], href: 'https://github.com/BodhiOng/Gamesphere-Tournament-Hub' },
  { title: 'CommunityShare', type: 'Social impact', description: 'A donation and request app connecting people with essential items through direct exchanges and community hubs.', image: '/cs-preview.jpeg', tags: ['Flutter', 'Dart', 'Firebase'], href: 'https://github.com/BodhiOng/CommunityShare-Final-Year-Project' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (<>
    <Head><title>Bodhidharma Ong — Full-Stack Developer</title><meta name="description" content="Professional portfolio of Bodhidharma Ong, a backend-oriented full-stack developer." /></Head>
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Main navigation"><a href="#top" className="wordmark">BO<span>.</span></a><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button><div className={`nav-links ${menuOpen ? 'is-open' : ''}`}><a href="#summary" onClick={closeMenu}>Summary</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#projects" onClick={closeMenu}>Projects</a></div></nav>

      <section className="hero section-pad" id="top"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Backend-oriented full-stack developer</p><h1>Build systems<br /><em>that endure.</em></h1><p className="hero-intro">Java plugins, platform integrations, web applications, mobile products, and the practical engineering that connects them.</p><div className="hero-actions"><a className="button button-dark" href="#summary">Enter profile <span>↘</span></a><a className="text-link" href="/Bodhidharma_Ong_Software_Engineer_Resume.pdf" download>Download resume ↓</a></div></div><div className="hero-portrait-wrap"><Image className="hero-portrait" src="/bodhi_pic.jpeg" alt="Bodhidharma Ong" width={560} height={560} priority /></div></section>

      <section className="section-pad cv-section summary-section" id="summary"><div className="section-heading compact"><p className="eyebrow">01 / Professional Summary</p><h2>Engineering with<br /><em>the backend in mind.</em></h2></div><div className="summary-grid"><p className="summary-lede">Backend-oriented Full-Stack Developer with experience extending enterprise software through Java-based plugins, system integrations, and workflow improvements.</p><p>Experienced in building configurable platform extensions, integrating locally hosted AI models, and developing web and mobile applications using modern frameworks. Focused on backend functionality, database integration, and delivering maintainable solutions to practical software engineering problems.</p></div></section>

      <section className="section-pad cv-section skills-section" id="skills"><div className="section-heading compact"><p className="eyebrow">02 / Technical Skills</p><h2>The tools behind<br /><em>the work.</em></h2></div><div className="skills-list">{skills.map(([label, items]) => <div className="skill-line" key={label}><span>{label}</span><strong>{items}</strong></div>)}</div></section>

      <section className="section-pad cv-section education-section" id="education"><div className="section-heading compact"><p className="eyebrow">03 / Education</p><h2>Foundation in<br /><em>software engineering.</em></h2></div><div className="education-card"><div className="apu-logo-frame"><Image src="/APU.png" alt="Asia Pacific University" width={82} height={82} className="education-logo" /></div><div><p className="education-period">2023 — 2026 · GPA 3.25</p><h3>Bachelor of Science (Hons) in Software Engineering</h3><p className="education-school">Asia Pacific University of Technology and Innovation</p><div className="education-tags"><span>Software Architecture</span><span>Algorithms</span><span>Databases</span><span>Blockchain</span><span>Mobile Engineering</span><span>Cloud Applications</span><span>etc.</span></div></div></div></section>

      <section className="section-pad cv-section experience-section" id="experience"><div className="section-heading compact"><p className="eyebrow">04 / Professional Experience</p><h2>Putting systems<br /><em>to work.</em></h2></div><div className="experience-list">{experience.map((item) => <article className="experience-card" key={item.company}><div className="experience-meta"><span>{item.period}</span><span>Experience log</span></div><div><h3>{item.role}</h3><p className="company">{item.company}</p><ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>{item.company.startsWith('Joget') && <Image src="/joget_inc.jpg" alt="Joget Inc." width={92} height={92} className="experience-logo" />}</article>)}</div></section>

      <section className="section-pad cv-section work-section" id="projects"><div className="section-heading compact"><p className="eyebrow">05 / Projects</p><h2>Ideas turned<br /><em>into artifacts.</em></h2></div><div className="project-grid">{projects.map((project, index) => <a className="project-card" href={project.href} target="_blank" rel="noopener noreferrer" key={project.title}><div className="project-image"><Image src={project.image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover-image" /><span className="project-index">0{index + 1}</span></div><div className="project-body"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-arrow">View project ↗</span></div></a>)}</div></section>

      <footer className="footer section-pad" id="contact"><div><p className="eyebrow">06 / Contact Me</p><h2>Let&apos;s make<br /><em>something useful.</em></h2></div><div className="footer-contact"><div className="footer-actions"><a className="button button-light" href="mailto:bodhidharma202@gmail.com">Get in touch ↗</a></div><div className="footer-links"><a href="/Bodhidharma_Ong_Software_Engineer_Resume.pdf" download>Resume PDF</a><a href="https://github.com/BodhiOng" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/bodhidharma-ong-483839150/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div><div className="footer-bottom"><span>© 2026 Bodhidharma Ong</span><span>System status: available</span></div></footer>
    </main>
  </>);
}
