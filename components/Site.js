import Link from 'next/link'
import {ArrowRight, Code2, Cloud, BrainCircuit, ShieldCheck, ServerCog, Smartphone, GraduationCap, DatabaseZap, Cpu, Gauge, Globe2, Layers3, LockKeyhole, Mail, MapPin, Phone, CheckCircle2} from 'lucide-react'

export const services = [
  {icon: Code2, title:'Enterprise Software Development', text:'Custom web platforms, ERP/CRM systems, dashboards, APIs, microservices, internal tools, and scalable business applications.'},
  {icon: Cloud, title:'Cloud Infrastructure', text:'Cloud architecture, migration, high-performance workstations, secure hosting, backups, monitoring, and hybrid environments.'},
  {icon: BrainCircuit, title:'AI & Automation', text:'AI agents, GPT integrations, workflow automation, data intelligence, chatbots, vector search, and intelligent assistants.'},
  {icon: ShieldCheck, title:'Cybersecurity', text:'Security hardening, identity access, vulnerability review, secure networks, policy design, and cloud security best practices.'},
  {icon: ServerCog, title:'DevOps Engineering', text:'CI/CD pipelines, Docker, Kubernetes, infrastructure as code, observability, deployment automation, and reliability engineering.'},
  {icon: Smartphone, title:'Web & Mobile Apps', text:'Modern responsive websites, SaaS products, Flutter and React Native mobile apps, portals, and digital customer experiences.'}
]

export const projects = [
  {title:'Healthcare ERP Platform', category:'Enterprise Software', stack:'React • .NET • SQL Server • Azure', text:'A hospital operations platform for patient records, appointments, billing flows, staff roles, and analytics dashboards.'},
  {title:'AI Customer Support Suite', category:'Artificial Intelligence', stack:'Next.js • Python • GPT • Vector DB', text:'An AI-powered support workspace with chat automation, ticket summaries, knowledge retrieval, and human handoff workflows.'},
  {title:'Cloud Workstation Network', category:'Cloud Infrastructure', stack:'Windows Server • Linux • VPN • Monitoring', text:'Secure remote workstation environments for developers, QA teams, and remote teams requiring scalable compute access.'},
  {title:'E-Commerce Automation Hub', category:'Automation', stack:'Node.js • PostgreSQL • APIs • Webhooks', text:'Order automation, inventory sync, CRM integrations, dashboards, notifications, and business reporting.'},
  {title:'FinTech Analytics Dashboard', category:'Data Engineering', stack:'React • Python • PostgreSQL • BI', text:'Real-time reporting platform with KPI tracking, data pipelines, role-based access, and executive dashboards.'},
  {title:'Government Digital Services Portal', category:'Digital Transformation', stack:'Next.js • Kubernetes • Security • Cloud', text:'A modern portal model for forms, citizen services, document workflows, identity, and secure service delivery.'}
]

export const courses = [
  'Microsoft Azure Fundamentals & Administration','AWS Cloud Practitioner & Solutions Architect','Google Cloud Associate Cloud Engineer','Python Programming from Zero to Professional','JavaScript, React & Next.js Full Stack Development','C# and .NET Enterprise Development','Cybersecurity Fundamentals and SOC Operations','Docker, Kubernetes and DevOps Pipelines','Database Design with SQL and PostgreSQL','AI Tools, Prompt Engineering and Automation'
]

export function Navbar(){return <nav className="nav"><Link className="brand" href="/"><span className="brandMark">N</span><span>NOVARIS</span></Link><div className="navlinks"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/training">Training</Link><Link href="/contact">Contact</Link></div><Link href="/contact" className="navCta">Start Project</Link></nav>}
export function Footer(){return <footer className="footer"><div><div className="brand footerBrand"><span className="brandMark">N</span><span>NOVARIS</span></div><p>Enterprise software, AI automation, cloud infrastructure and IT solutions for modern organizations.</p></div><div><h4>Company</h4><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/training">Training</Link></div><div><h4>Services</h4><Link href="/services">Cloud</Link><Link href="/services">AI</Link><Link href="/services">Software</Link></div><div><h4>Legal</h4><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></footer>}
export function Shell({children}){return <><div className="noise"/><div className="mouseGlow"/><Navbar/>{children}<Footer/></>}
export function Button({href='/',children,secondary}){return <Link className={secondary?'btn secondary':'btn'} href={href}>{children}<ArrowRight size={18}/></Link>}
export function SectionTitle({eyebrow,title,text}){return <div className="sectionTitle"><span>{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
export function ServiceCard({s}){const Icon=s.icon; return <div className="tiltCard serviceCard"><div className="iconOrb"><Icon size={28}/></div><h3>{s.title}</h3><p>{s.text}</p></div>}
export function ProjectCard({p,i}){return <div className="projectCard"><div className="projectVisual"><span>0{i+1}</span><div className="miniWindow"><b>{p.category}</b><i/></div></div><div><small>{p.category}</small><h3>{p.title}</h3><p>{p.text}</p><em>{p.stack}</em></div></div>}
export function ContactBlock(){return <section className="contactBlock"><div><span>Let’s build something serious</span><h2>Tell us what you want to build.</h2><p>Send your project idea, required cloud resources, timeline, and business goals. Our team will respond with a structured technical plan.</p></div><div className="contactCards"><p><Mail/> contact@novaristechnology.com</p><p><Phone/> +1 (000) 000-0000</p><p><MapPin/> Global Remote Operations</p></div></section>}
export function FeatureList(){return <div className="featuresGrid">{['Secure architecture','Budget-aware cloud usage','No spam, no abuse, no mining','Monitoring and access control','Scalable deployment models','Professional documentation'].map(x=><div key={x}><CheckCircle2/> {x}</div>)}</div>}
