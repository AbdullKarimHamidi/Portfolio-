import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useSpring } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, BrainCircuit, Check,
  ChevronDown, Code2, Database, Download, Github, Linkedin, Mail, MapPin,
  Menu, MoveUpRight, Play, ScanFace, Sparkles, Terminal, X, Zap
} from "lucide-react";
import profileImage from "./assets/h2.png";
import basketballImage from "./assets/bask.png";
import intrusionImage from "./assets/intrusion.png";
import lmsImage from "./assets/lms.png";
import attendanceImage from "./assets/RealTime.png";
import anonymizerImage from "./assets/Face_an.png";
import "./portfolio.css";

const email = "karimjanhamidi10@gmail.com";
const github = "https://github.com/AbdullKarimHamidi";
const linkedin = "https://www.linkedin.com/in/karim-hamidi-647883211/";

const projects = [
  {
    id: "01", category: "COMPUTER VISION / FULL-STACK", title: "Real-time face recognition attendance",
    intro: "Turning a camera feed into a practical attendance workflow.",
    detail: "A web-based attendance platform that connects a live recognition service to a management dashboard. The system uses InsightFace and OpenCV for face identification, with a Python API serving a Next.js interface and MongoDB-backed records.",
    outcome: "Live face identification · Attendance records · Role-based management",
    stack: ["Next.js", "TypeScript", "FastAPI", "InsightFace", "OpenCV", "MongoDB"],
    image: attendanceImage, tone: "blue", featured: true
  },
  {
    id: "02", category: "COMPUTER VISION / SECURITY", title: "Intrusion detection system",
    intro: "Making restricted areas visible to an operator in real time.",
    detail: "A video-monitoring workflow where restricted zones can be defined on a camera feed. Object detection and tracking identify entries and trigger alerts with saved screenshots for later review.",
    outcome: "Restricted-zone monitoring · Detection and tracking · Alert snapshots",
    stack: ["Python", "YOLO", "OpenCV", "NumPy"],
    image: intrusionImage, tone: "orange"
  },
  {
    id: "03", category: "WEB APPLICATION / EDUCATION", title: "Learning management system",
    intro: "One learning product, with clear workflows for every role.",
    detail: "A learning platform with dedicated experiences for administrators, instructors and students. It supports course creation, enrollment and progress workflows through a responsive interface and authenticated backend.",
    outcome: "Role-based dashboards · Course management · Enrollment workflows",
    stack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "JWT"],
    image: lmsImage, tone: "violet"
  },
  {
    id: "04", category: "MACHINE LEARNING / ANTI-SPOOFING", title: "Face liveness detection",
    intro: "Distinguishing a live face from photo- and screen-based attempts.",
    detail: "A real-time liveness workflow built around a custom labeled dataset and a model training and evaluation process.",
    outcome: "Liveness classification · Dataset preparation · Model evaluation",
    stack: ["Python", "YOLOv8", "PyTorch", "OpenCV"],
    image: null, tone: "mint"
  },
  {
    id: "05", category: "COMPUTER VISION / SPORTS", title: "Basketball video analysis",
    intro: "Finding movement and structure inside match footage.",
    detail: "A video analysis pipeline that detects and tracks players and the ball, then visualizes movement trajectories through reusable annotations.",
    outcome: "Player and ball detection · Object tracking · Trajectory visualization",
    stack: ["Python", "YOLOv8", "OpenCV"],
    image: basketballImage, tone: "orange"
  },
  {
    id: "06", category: "AI APPLICATION / CAREER TOOLS", title: "AI interview platform",
    intro: "A structured place to practise, review and improve interviews.",
    detail: "An interview practice application with AI-generated questions, structured feedback, authentication and a personal interview history.",
    outcome: "AI-generated questions · Feedback workflow · User history",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AI APIs"],
    image: null, tone: "blue"
  },
  {
    id: "07", category: "COMPUTER VISION / PRIVACY", title: "Real-time face anonymizer",
    intro: "Applying privacy protection directly to visual data.",
    detail: "A computer vision utility that detects faces in video and applies anonymization to help protect identities in recorded or streamed footage.",
    outcome: "Face detection · Real-time anonymization · Video processing",
    stack: ["Python", "MediaPipe", "OpenCV"],
    image: anonymizerImage, tone: "violet"
  }
];

const experience = [
  {
    period: "NOV 2024 — SEP 2025", role: "Computer Vision Developer", company: "Rahanet IT Company", location: "Herat, Afghanistan",
    bullets: [
      "Developed computer vision features with Python, OpenCV and YOLO for surveillance, monitoring and analytics.",
      "Built face-recognition and object-detection pipelines for people and vehicle tracking in live video.",
      "Implemented automated people- and vehicle-counting reports, with processing tuned for low-resource hardware.",
      "Connected vision modules to backend services and dashboards for reviewing alerts, screenshots and reports."
    ]
  },
  {
    period: "OCT 2023 — JUL 2024", role: "Web Developer", company: "Wassa Company", location: "Herat, Afghanistan",
    bullets: [
      "Built responsive web interfaces using HTML, CSS, JavaScript and React.",
      "Implemented backend functionality and integrated internal and third-party REST APIs.",
      "Improved page performance and accessibility through refactoring and reusable components."
    ]
  },
  {
    period: "FEB 2022 — AUG 2023", role: "MERN Stack Web Developer", company: "Farsrout Company", location: "Herat, Afghanistan",
    bullets: [
      "Developed full-stack applications with MongoDB, Express, React and Node.js.",
      "Designed REST APIs and implemented JWT authentication and role-based access control.",
      "Improved maintainability through refactoring, code reviews and reusable component patterns."
    ]
  }
];

const capabilities = [
  { number: "01", icon: Code2, title: "Product interfaces", copy: "Responsive web experiences with clear information architecture, reusable components and thoughtful interaction.", tools: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS"] },
  { number: "02", icon: Database, title: "Backend systems", copy: "APIs, authentication, data models and integrations designed around real application workflows.", tools: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets", "JWT", "MongoDB", "MySQL"] },
  { number: "03", icon: ScanFace, title: "Computer vision", copy: "Applied vision systems for recognition, detection, tracking, liveness and video analysis.", tools: ["Python", "OpenCV", "YOLOv8", "InsightFace", "MediaPipe", "PyTorch", "scikit-learn", "CNNs", "KNN"] },
  { number: "04", icon: Terminal, title: "Engineering workflow", copy: "Tools and practices that support reliable delivery, debugging and collaboration.", tools: ["Git", "GitHub", "Docker", "Linux", "Postman", "Vercel", "Agile / Scrum"] }
];

const nav = [["Work", "work"], ["Expertise", "expertise"], ["Journey", "journey"], ["About", "about"]];

function Reveal({ children, className = "", delay = 0, y = 28 }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-70px" });
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y }} animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionIntro({ index, eyebrow, title, note }) {
  return <div className="section-intro">
    <div className="section-intro-meta"><span>{index}</span><span>{eyebrow}</span></div>
    <div className="section-intro-main"><h2>{title}</h2>{note && <p>{note}</p>}</div>
  </div>;
}

function ProjectCard({ project, index, onOpen }) {
  return <Reveal className={"project-card project-" + project.tone} delay={index * 0.07}>
    <button className="project-card-button" onClick={() => onOpen(project)} aria-label={"View details for " + project.title}>
      <div className="project-art">
        <span className="project-index">{project.id} / 07</span>
        {project.image ? <img src={project.image} alt={project.title + " preview"} loading="lazy" /> : <div className="project-abstract"><div className="abstract-orbit orbit-one"/><div className="abstract-orbit orbit-two"/><BrainCircuit size={54}/><span>APPLIED AI / SYSTEMS</span></div>}
        <span className="project-open"><ArrowUpRight size={20}/></span>
      </div>
      <div className="project-card-copy">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.intro}</p>
        <div className="project-card-bottom"><span>{project.stack.slice(0, 3).join(" · ")}</span><span>EXPLORE <ArrowUpRight size={13}/></span></div>
      </div>
    </button>
  </Reveal>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(activeProject));
    const onKey = (event) => { if (event.key === "Escape") setActiveProject(null); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("modal-open"); window.removeEventListener("keydown", onKey); };
  }, [activeProject]);

  const closeMenu = () => setMenuOpen(false);
  const shownProjects = showAllProjects ? projects : projects.slice(0, 3);

  return <div className="portfolio">
    <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    <header className="header">
      <a href="#top" className="brand" onClick={closeMenu}><span className="brand-symbol">K<span>.</span></span><span className="brand-copy">KARIM HAMIDI<small>SOFTWARE ENGINEER</small></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>{nav.map(([label, id]) => <a key={id} href={"#" + id} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-grid-bg"/>
        <div className="hero-inner">
          <div className="hero-left">
            <motion.div className="hero-label" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}><span className="live-dot"/> OPEN TO MEANINGFUL ENGINEERING WORK</motion.div>
            <motion.p className="hero-overline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>FULL-STACK DEVELOPMENT <span>+</span> COMPUTER VISION</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>I turn complex<br/>ideas into <em>useful</em><br/><span className="hero-outline">software.</span></motion.h1>
            <motion.p className="hero-summary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>I'm Karim, a developer working across modern web applications and applied computer vision. I build products from the interface and API to systems that interpret real-world visual data.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <a href="#work" className="btn btn-dark">Explore selected work <ArrowDownRight size={17}/></a>
              <a href="/Karim_Hamidi_ATS_Resume.pdf" download className="btn btn-line">Download résumé <Download size={16}/></a>
            </motion.div>
            <motion.div className="hero-footnote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}><MapPin size={14}/> HERAT, AFGHANISTAN <span className="footnote-separator"/> 4+ YEARS BUILDING SOFTWARE</motion.div>
          </div>
          <motion.div className="hero-right" initial={{ opacity: 0, scale: 0.92, y: 25 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero-image-wrap"><img src={profileImage} alt="Karim Hamidi" /><div className="image-grain"/></div>
            <div className="hero-photo-caption"><span>01 — THE ENGINEER</span><span>CURIOUS BY DEFAULT</span></div>
            <div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/>
            <div className="hero-floating-card"><Sparkles size={17}/><span>BUILDING AT THE<br/><strong>INTERSECTION OF IDEAS</strong></span></div>
            <div className="hero-vertical-text">KARIM HAMIDI / PORTFOLIO 2026</div>
          </motion.div>
        </div>
        <a className="hero-scroll" href="#intro"><span>SCROLL TO DISCOVER</span><span className="scroll-line"/></a>
        <div className="hero-index">01 <span>—</span> 05</div>
      </section>

      <section className="intro-band" id="intro">
        <div className="container intro-band-inner">
          <Reveal><span className="micro-label">A PRACTICAL MINDSET</span></Reveal>
          <Reveal delay={0.1}><p>I like solving the part that makes a product <em>work</em> — not just the part that makes it look finished.</p></Reveal>
          <Reveal delay={0.2}><div className="intro-stats"><div><strong>4<span>+</span></strong><small>YEARS EXPERIENCE</small></div><div><strong>3</strong><small>PROFESSIONAL ROLES</small></div><div><strong>7</strong><small>SELECTED PROJECTS</small></div></div></Reveal>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="container">
          <SectionIntro index="01" eyebrow="SELECTED WORK" title={<>Built to solve<br/><em>real problems.</em></>} note="A closer look at web products and computer vision systems I've worked on. Each project starts with a practical problem and a focused technical approach."/>
          <div className="projects-grid">{shownProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject}/>)}</div>
          <div className="projects-footer"><span>SHOWING {shownProjects.length} OF 07 PROJECTS</span><button onClick={() => setShowAllProjects(!showAllProjects)}>{showAllProjects ? "Show featured projects" : "View all projects"} <ArrowUpRight size={16}/></button></div>
        </div>
      </section>

      <section className="expertise-section section-pad" id="expertise">
        <div className="container">
          <SectionIntro index="02" eyebrow="HOW I CONTRIBUTE" title={<>Engineering across<br/><em>the stack.</em></>} note="My work spans user-facing applications, backend services and computer vision — with an emphasis on connecting the pieces into useful products."/>
          <div className="capability-list">{capabilities.map((item, i) => { const Icon = item.icon; return <Reveal key={item.number} delay={i * 0.06}><article className="capability-row"><div className="capability-number">{item.number}</div><div className="capability-title"><Icon size={24}/><h3>{item.title}</h3></div><p className="capability-copy">{item.copy}</p><div className="capability-tools">{item.tools.map(tool => <span key={tool}>{tool}</span>)}</div><ArrowUpRight className="capability-arrow" size={20}/></article></Reveal>; })}</div>
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-bg-word">THINK</div>
        <div className="container statement-inner"><Reveal><span className="micro-label">THE WAY I APPROACH ENGINEERING</span><h2>Good software is<br/>more than <em>code.</em></h2><p>It is a clear understanding of the problem, a thoughtful technical decision, and a reliable experience for the person using it.</p></Reveal><Reveal delay={0.15}><div className="statement-aside"><span>01 / UNDERSTAND</span><span>02 / DESIGN</span><span>03 / BUILD</span><span>04 / REFINE</span></div></Reveal></div>
      </section>

      <section className="journey-section section-pad" id="journey">
        <div className="container">
          <SectionIntro index="03" eyebrow="EXPERIENCE & EDUCATION" title={<>The work behind<br/><em>the work.</em></>} note="Professional experience across computer vision and full-stack web development."/>
          <div className="journey-layout"><div className="experience-list">{experience.map((job, i) => <Reveal key={job.company} delay={i * 0.08}><article className="experience-item"><div className="experience-index">0{i + 1}</div><div className="experience-main"><div className="experience-top"><span>{job.period}</span><span>{job.location}</span></div><h3>{job.role}</h3><h4>{job.company}</h4><ul>{job.bullets.map(point => <li key={point}>{point}</li>)}</ul></div></article></Reveal>)}</div>
            <Reveal className="education-panel" delay={0.2}><span className="micro-label">EDUCATION</span><div className="education-emblem"><Terminal size={27}/></div><span className="education-years">2020 — 2024</span><h3>Bachelor of Science</h3><p>Computer Science</p><div className="education-divider"/><strong>Ghalib University</strong><span>Herat, Afghanistan</span><div className="certification"><Check size={15}/><span><b>MERN Stack Development</b><small>Wassa Company · 2023</small></span></div></Reveal>
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="container about-layout"><div><SectionIntro index="04" eyebrow="A LITTLE ABOUT ME" title={<>Curiosity is part<br/>of the <em>process.</em></>} note="I enjoy moving between different layers of a product — understanding the user need, shaping the interface, connecting the backend and exploring where computer vision can make a difference."/></div>
          <Reveal className="about-details"><div className="language-block"><span className="micro-label">LANGUAGES</span><div><b>Persian</b><span>Native</span></div><div><b>English</b><span>Professional working proficiency</span></div><div><b>Arabic</b><span>Intermediate</span></div></div><div className="principles-block"><span className="micro-label">WHAT MATTERS TO ME</span><p>Clear communication.<br/>Useful details.<br/>Software that holds up.</p></div></Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid-bg"/>
        <div className="container contact-inner"><Reveal><span className="micro-label">HAVE SOMETHING INTERESTING IN MIND?</span><h2>Let's build<br/><em>what's next.</em></h2><p>For project enquiries, engineering conversations or professional opportunities, I'd be glad to hear from you.</p></Reveal>
          <Reveal delay={0.15} className="contact-card"><span className="contact-card-label">START A CONVERSATION</span><a className="contact-email" href={"mailto:" + email}>{email}<ArrowUpRight size={20}/></a><div className="contact-links"><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LINKEDIN</a><a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GITHUB</a></div><a className="contact-resume" href="/Karim_Hamidi_ATS_Resume.pdf" download>DOWNLOAD RÉSUMÉ <Download size={15}/></a></Reveal>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a href="#top" className="brand"><span className="brand-symbol">K<span>.</span></span><span className="brand-copy">KARIM HAMIDI<small>SOFTWARE ENGINEER</small></span></a><span className="footer-note">DESIGNED WITH INTENTION. BUILT WITH CODE.</span><span className="footer-copy">© {new Date().getFullYear()} KARIM HAMIDI</span></div></footer>

    <AnimatePresence>{activeProject && <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}><motion.div className="project-modal" initial={{ opacity: 0, y: 35, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.35 }} onClick={event => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={activeProject.title}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X/></button><span className="project-category">{activeProject.category}</span><h2>{activeProject.title}</h2><p className="modal-intro">{activeProject.intro}</p><p className="modal-detail">{activeProject.detail}</p><div className="modal-outcome"><span>FOCUS AREAS</span><p>{activeProject.outcome}</p></div><div className="modal-stack">{activeProject.stack.map(item => <span key={item}>{item}</span>)}</div><a href={github} target="_blank" rel="noreferrer" className="modal-github">Explore GitHub profile <ArrowUpRight size={16}/></a></motion.div></motion.div>}</AnimatePresence>
  </div>;
}

export default App;
