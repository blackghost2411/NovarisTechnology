import Link from 'next/link';
import { ArrowRight, Bot, Cloud, Code2, Database, Gauge, Globe2, Lock, Network, ShieldCheck, Sparkles, TerminalSquare, Zap } from 'lucide-react';

export const services = [
  { icon: Code2, title: 'Enterprise Software Development', desc: 'Custom business platforms, portals, APIs, dashboards, and internal systems built for scale, security, and long-term maintainability.', tags: ['Next.js', '.NET', 'Node.js'] },
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Secure cloud architecture, deployments, virtual workstations, hosting environments, monitoring, backups, and cost-aware infrastructure.', tags: ['Azure', 'AWS', 'GCP'] },
  { icon: Bot, title: 'AI & Automation Solutions', desc: 'AI-assisted workflows, intelligent assistants, document automation, data pipelines, and productivity tools for modern teams.', tags: ['LLMs', 'Python', 'Automation'] },
  { icon: ShieldCheck, title: 'Cybersecurity & Compliance', desc: 'Security-first cloud setups, identity management, access controls, vulnerability reviews, and responsible-use infrastructure policies.', tags: ['IAM', 'Zero Trust', 'Monitoring'] },
  { icon: TerminalSquare, title: 'DevOps Engineering', desc: 'CI/CD pipelines, containerization, deployment automation, infrastructure as code, and reliable production release workflows.', tags: ['Docker', 'Kubernetes', 'CI/CD'] },
  { icon: Globe2, title: 'Web & Mobile Applications', desc: 'Premium websites, SaaS products, customer portals, mobile apps, and conversion-focused digital experiences.', tags: ['React', 'Mobile', 'SaaS'] },
];

export const useCases = [
  'High-performance development workstations',
  'Cloud labs and testing environments',
  'Secure web application hosting',
  'AI-assisted software development',
  'Remote access and VPN environments',
  'Backup and disaster recovery planning',
];

export const technologies = ['Azure', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Linux', 'Windows', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL'];

export function Header(){return <nav className="nav"><div className="container navin"><Link href="/" className="brand"><span className="mark">N</span><span>NOVARIS</span></Link><div className="links"><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><Link href="/contact" className="btn primary">Start a Project</Link></div></nav>}
export function Footer(){return <footer className="footer"><div className="container footgrid"><div><div className="brand"><span className="mark">N</span><span>NOVARIS</span></div><p>Enterprise software, cloud infrastructure, AI automation, and secure IT solutions for modern organizations.</p></div><div><b>Company</b><p><Link href="/about">About</Link></p><p><Link href="/projects">Projects</Link></p><p><Link href="/contact">Contact</Link></p></div><div><b>Services</b><p><Link href="/services">Software</Link></p><p><Link href="/solutions">Cloud</Link></p><p><Link href="/services">Security</Link></p></div><div><b>Legal</b><p><Link href="/privacy">Privacy</Link></p><p><Link href="/terms">Terms</Link></p><p><Link href="/acceptable-use">Acceptable Use</Link></p></div></div></footer>}
export function ServiceCards(){return <div className="cards">{services.map((s)=>{const Icon=s.icon; return <div className="service" key={s.title}><div className="icon"><Icon size={25}/></div><h3>{s.title}</h3><p>{s.desc}</p><div className="chips">{s.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div></div>})}</div>}
export function HeroDashboard(){return <div className="heroPanel"><div className="topbar"><span className="dot"/><span className="dot"/><span className="dot"/><span className="muted" style={{marginLeft:8}}>Novaris Operations Cloud</span></div><div className="dashboard"><div className="card"><p className="muted">Infrastructure readiness</p><div className="metric">98.7%</div><div className="bar"><div className="fill"/></div><p className="muted">Secure deployments, monitored workloads, cost-aware scaling, and production-grade delivery workflows.</p></div><div className="card"><p className="muted">Active solution areas</p><div className="list"><div className="item"><span className="check">✓</span><div><b>Cloud & DevOps</b><br/><span className="muted">CI/CD, containers, servers, observability</span></div></div><div className="item"><span className="check">✓</span><div><b>AI Automation</b><br/><span className="muted">Assistants, workflows, data extraction</span></div></div><div className="item"><span className="check">✓</span><div><b>Secure Software</b><br/><span className="muted">Web apps, dashboards, APIs, portals</span></div></div></div></div></div></div>}
export function CTA(){return <section className="section"><div className="container"><div className="cta"><div><h2>Ready to build a serious technology presence?</h2><p className="head">Let Novaris Technology design and deliver secure software, cloud systems, and intelligent automation for your next project.</p></div><div className="actions"><Link className="btn primary" href="/contact">Contact Us <ArrowRight size={18}/></Link><Link className="btn" href="/services">Explore Services</Link></div></div></div></section>}
export function TechLogos(){return <div className="logos">{technologies.map(t=><div className="logo" key={t}>{t}</div>)}</div>}
export const icons = { ArrowRight, Sparkles, Lock, Database, Network, Gauge, Zap };
