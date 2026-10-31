import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Check,
  Code2, Database, Download, Github, Linkedin, Mail, MapPin,
  Menu, Monitor, Sparkles, Terminal, X
} from "lucide-react";
import profileImage from "./assets/h2.png";
import "./portfolio.css";
import basketballImage from "./assets/bask.png";
import intrusionImage from "./assets/intrusion.png";
import lmsImage from "./assets/lms.png";
import attendanceImage from "./assets/RealTime.png";
import anonymizerImage from "./assets/Face_an.png";

const projects = [
  {
    number: "01", title: "Face Recognition Attendance",
    type: "Computer Vision · Full-stack",
    description: "An attendance platform that identifies people from live camera feeds and records attendance automatically. A Python recognition service using InsightFace connects to a Next.js dashboard through REST endpoints.",
    stack: ["Next.js", "TypeScript", "FastAPI", "InsightFace", "OpenCV", "MongoDB"],
    image: attendanceImage, featured: true
  },
  {
    number: "02", title: "Intrusion Detection System",
    type: "Computer Vision · Security",
    description: "A zone-based monitoring tool. Operators define restricted areas on a live video feed; detection and tracking trigger alerts and save screenshots when a person enters a protected zone.",
    stack: ["Python", "YOLO", "OpenCV", "NumPy"],
    image: intrusionImage
  },
  {
    number: "03", title: "Learning Management System",
    type: "Web application · Education",
    description: "A learning platform with separate dashboards for administrators, instructors and students, including course creation, enrollment and progress tracking.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "JWT"],
    image: lmsImage
  },
  {
    number: "04", title: "Face Liveness Detection",
    type: "Machine learning · Anti-spoofing",
    description: "A real-time model that distinguishes live faces from photo- and screen-based spoof attempts. Includes a custom labeled dataset and model training and evaluation workflow.",
    stack: ["Python", "YOLOv8", "PyTorch", "OpenCV"],
    image: null
  },
  {
    number: "05", title: "Basketball Video Analysis",
    type: "Computer Vision · Sports",
    description: "A video analysis pipeline that detects and tracks players and the ball in match footage, then visualizes movement trajectories through reusable annotations.",
    stack: ["Python", "YOLOv8", "OpenCV", "Object tracking"],
    image: basketballImage
  },
  {
    number: "06", title: "AI Interview Platform",
    type: "AI application · Career tools",
    description: "An interview practice platform with AI-generated questions, structured feedback, authentication and a personal interview history for each user.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AI APIs"],
    image: null
  }
];

const skillGroups = [
  { title: "Frontend", icon: Monitor, items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "Framer Motion", "Responsive UI"] },
  { title: "Backend & Data", icon: Database, items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "JWT", "RBAC", "MongoDB", "Mongoose", "MySQL"] },
  { title: "AI & Computer Vision", icon: BrainCircuit, items: ["Python", "OpenCV", "YOLOv8", "InsightFace", "MediaPipe", "PyTorch", "scikit-learn", "CNNs", "KNN", "Object tracking"] },
  { title: "Engineering Tools", icon: Terminal, items: ["Git", "GitHub", "Docker", "Linux", "Postman", "Vercel", "Agile / Scrum", "Code review", "Debugging"] }
];

const experience = [
  { role: "Computer Vision Developer", company: "Rahanet IT Company", place: "Herat, Afghanistan", date: "Nov 2024 — Sep 2025", points: [
    "Developed Python vision features with OpenCV and YOLO for surveillance, monitoring and analytics.",
    "Built face-recognition and object-detection pipelines for people and vehicle tracking in live video.",
    "Added automated people- and vehicle-counting reports, and optimized processing for low-resource hardware.",
    "Connected vision modules to backend services and dashboards for reviewing alerts, screenshots and reports."
  ]},
  { role: "Web Developer", company: "Wassa Company", place: "Herat, Afghanistan", date: "Oct 2023 — Jul 2024", points: [
    "Built responsive interfaces with HTML, CSS, JavaScript and React.",
    "Implemented backend functionality and integrated internal and third-party REST APIs.",
    "Improved page performance and accessibility through refactoring and reusable components."
  ]},
  { role: "MERN Stack Web Developer", company: "Farsrout Company", place: "Herat, Afghanistan", date: "Feb 2022 — Aug 2023", points: [
    "Developed full-stack applications using MongoDB, Express, React and Node.js.",
    "Designed REST APIs and implemented JWT authentication and role-based access control.",
    "Improved maintainability through refactoring, code reviews and reusable component patterns."
  ]}
];

const navItems = [["About", "about"], ["Expertise", "expertise"], ["Projects", "projects"], ["Experience", "experience"], ["Contact", "contact"]];

function SectionHeading({ eyebrow, title, note }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <div className="section-heading-row"><h2>{title}</h2>{note && <p>{note}</p>}</div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Karim Hamidi home">
          <span className="wordmark-mark">K<span>.</span></span>
          <span className="wordmark-name">KARIM HAMIDI<small>SOFTWARE ENGINEER</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" id="about">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></div>
            <p className="hero-kicker">FULL-STACK DEVELOPER <span>×</span> COMPUTER VISION ENGINEER</p>
            <h1>I build software<br/>that <em>solves</em> things.</h1>
            <p className="hero-description">I'm Karim — a software engineer working across modern web applications and computer vision. I turn complex requirements into practical products, from responsive interfaces and APIs to real-time systems that understand visual data.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="/Karim_Hamidi_ATS_Resume.pdf" download>Download CV <Download size={16}/></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15}/> Herat, Afghanistan</span>
              <a href="mailto:karimjanhamidi10@gmail.com"><Mail size={15}/> Email me</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame"><img src={profileImage} alt="Portrait of Karim Hamidi" /></div>
            <div className="hero-image-outline"/>
            <div className="hero-index"><span>01 / 05</span><span>ENGINEERING & IMAGINATION</span></div>
            <div className="hero-stamp"><Sparkles size={16}/><span>BUILD<br/>WITH PURPOSE</span></div>
            <div className="hero-vertical">KARIM HAMIDI · PORTFOLIO 2026</div>
          </div>
          <a className="scroll-cue" href="#expertise"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-grid">
            <p className="intro-label">A LITTLE ABOUT MY WORK</p>
            <p className="intro-text">I enjoy working where <strong>software engineering</strong> meets <strong>applied AI</strong> — building useful products, thoughtful interfaces and systems that work beyond a demo.</p>
            <div className="intro-facts"><div><strong>4+</strong><span>Years of experience</span></div><div><strong>03</strong><span>Professional roles</span></div><div><strong>06</strong><span>Featured projects</span></div></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="expertise">
          <SectionHeading eyebrow="WHAT I WORK ON / 01" title="Areas of expertise" note="A practical mix of product development, backend engineering and applied computer vision."/>
          <div className="expertise-grid">
            <article className="expertise-card expertise-featured"><div className="expertise-top"><span>01</span><Code2 size={23}/></div><h3>Full-stack<br/><em>development</em></h3><p>Building responsive web products with maintainable frontend architecture, reliable APIs, authentication and data-driven features.</p><div className="expertise-tags"><span>React / Next.js</span><span>Node.js</span><span>MongoDB</span></div></article>
            <article className="expertise-card"><div className="expertise-top"><span>02</span><BrainCircuit size={23}/></div><h3>Computer<br/><em>vision & AI</em></h3><p>Developing real-time detection, recognition and video analysis workflows using deep learning and computer vision tools.</p><div className="expertise-tags"><span>Python</span><span>OpenCV</span><span>YOLO</span></div></article>
            <article className="expertise-card"><div className="expertise-top"><span>03</span><Database size={23}/></div><h3>Backend &<br/><em>systems</em></h3><p>Designing API services, authentication flows, database structures and integrations that support real product needs.</p><div className="expertise-tags"><span>FastAPI</span><span>REST APIs</span><span>JWT / RBAC</span></div></article>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap content-section">
            <SectionHeading eyebrow="SELECTED WORK / 02" title="Projects with a purpose" note="A selection of applications and engineering experiments I've worked on."/>
            <div className="projects-grid">
              {projects.map((project) => <article className={project.featured ? "project-card project-featured" : "project-card"} key={project.number}>
                <div className="project-visual">
                  <span className="project-number">{project.number}</span>
                  {project.image ? <img src={project.image} alt={`${project.title} project preview`} loading="lazy"/> : <div className="project-placeholder"><BrainCircuit size={42}/><span>APPLIED ENGINEERING</span></div>}
                  <a href="https://github.com/AbdullKarimHamidi" target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={19}/></a>
                </div>
                <div className="project-content">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </article>)}
            </div>
            <a className="all-work-link" href="https://github.com/AbdullKarimHamidi" target="_blank" rel="noreferrer">More code and experiments on GitHub <ArrowUpRight size={17}/></a>
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <SectionHeading eyebrow="CAREER / 03" title="Experience & education" note="The teams, roles and foundations behind the work."/>
          <div className="career-layout">
            <div className="timeline">
              {experience.map((job, i) => <article className="timeline-item" key={job.company}>
                <div className="timeline-marker">{String(i+1).padStart(2,"0")}</div>
                <div className="timeline-content"><div className="timeline-date">{job.date}</div><h3>{job.role}</h3><div className="timeline-company">{job.company} <span>· {job.place}</span></div><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              </article>)}
            </div>
            <aside className="education-card"><span className="eyebrow">EDUCATION</span><div className="education-icon"><Terminal size={22}/></div><h3>Bachelor of Science</h3><p>Computer Science</p><div className="education-rule"/><strong>Ghalib University</strong><span>Herat, Afghanistan</span><span>2020 — 2024</span><div className="education-cert"><Check size={15}/> MERN Stack Development — Wassa, 2023</div></aside>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-wrap content-section">
            <SectionHeading eyebrow="TOOLS I USE / 04" title="My technical toolkit" note="Technologies and practices I've used across professional work and projects."/>
            <div className="skills-grid">{skillGroups.map((group, i) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-head"><span>0{i+1}</span><Icon size={20}/></div><h3>{group.title}</h3><div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>; })}</div>
            <div className="language-row"><span className="eyebrow">LANGUAGES</span><p>Persian <small>Native</small></p><p>English <small>Professional working proficiency</small></p><p>Arabic <small>Intermediate</small></p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><span className="eyebrow">HAVE A PROJECT IN MIND? / 05</span><h2>Let's make<br/><em>something useful.</em></h2><p>I'm open to software engineering opportunities, collaborations and interesting technical challenges.</p></div>
            <div className="contact-actions"><a className="contact-email" href="mailto:karimjanhamidi10@gmail.com">karimjanhamidi10@gmail.com <ArrowUpRight size={19}/></a><div className="social-links"><a href="https://www.linkedin.com/in/karim-hamidi-647883211/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="https://github.com/AbdullKarimHamidi" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div><a className="button button-primary" href="/Karim_Hamidi_ATS_Resume.pdf" download>Get my resume <Download size={16}/></a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="wordmark" href="#top"><span className="wordmark-mark">K<span>.</span></span><span className="wordmark-name">KARIM HAMIDI<small>SOFTWARE ENGINEER</small></span></a><p>Designed with intention. Built with code.</p><span>© {new Date().getFullYear()} Karim Hamidi</span></div></footer>
    </div>
  );
}

export default App;
