import Link from 'next/link';
import {industries, process} from '../../lib/data';

function Nav(){return <header className="nav"><div className="navin"><Link href="/" className="brand"><div className="logo">N</div><div><h1>Novaris Technology</h1><p>AI, Cloud & Enterprise Software</p></div></Link><nav className="links"><Link href="/#services">Services</Link><Link href="/#projects">Projects</Link><Link href="/training">Training</Link><Link href="/about">About</Link><Link href="/ar">العربية</Link><Link className="btn" href="/start-project">Start a Project →</Link></nav></div></header>}

const values = [
  ['Innovation','We design practical systems that combine modern engineering with measurable business outcomes.'],
  ['Security','Every solution is planned with access control, auditability, data protection and operational resilience.'],
  ['Scalability','We build platforms that can grow from a focused MVP into enterprise-grade infrastructure.'],
  ['Clarity','Clear requirements, clean delivery stages and transparent communication from discovery to launch.'],
  ['Craft','Premium interfaces, reliable architecture and maintainable code are treated as core deliverables.'],
  ['Partnership','We work as a long-term technology partner, not a one-time vendor.']
];
const stack = ['React','Next.js','Node.js','Python','.NET','PostgreSQL','MongoDB','Docker','Kubernetes','Azure','AWS','Google Cloud','OpenAI APIs','TensorFlow','Redis','Linux'];
const timeline = [
  ['01','Discovery','We understand business goals, operations, user journeys, risks and success metrics.'],
  ['02','Architecture','We define the application structure, database model, integrations, security and cloud plan.'],
  ['03','Design','We create premium interfaces, dashboards and user flows before development begins.'],
  ['04','Development','We build clean modules, APIs, dashboards, automation and deployment workflows.'],
  ['05','Launch','We prepare production deployment, monitoring, backups, performance checks and handover.']
];

function ValueCard({v,i}){return <div className="valueCard"><div className="valueNum">{String(i+1).padStart(2,'0')}</div><h3>{v[0]}</h3><p>{v[1]}</p></div>}

export default function About(){return <main className="site gridbg"><Nav/>
<section className="container aboutHero">
  <div><span className="pill">ABOUT NOVARIS TECHNOLOGY</span><h1>Building intelligent software for the next generation of businesses.</h1><p className="lead">Novaris Technology is a software engineering and digital transformation company focused on enterprise platforms, cloud infrastructure, AI automation and professional technology training.</p><div className="actions"><Link className="btn" href="/start-project">Work With Novaris →</Link><Link className="ghost" href="/#projects">View Case Studies</Link></div></div>
  <div className="aboutOrb"><div className="orbit one">AI</div><div className="orbit two">Cloud</div><div className="orbit three">ERP</div><div className="orbit four">DevOps</div><div className="orbCore">NOVARIS</div></div>
</section>

<section className="container section split"><div><span className="eyebrow">OUR STORY</span><h2>From software ideas to production-ready digital systems.</h2><p className="muted xl">Novaris was created for organizations that need more than a basic website. We help teams design, develop and operate modern digital platforms: enterprise dashboards, AI assistants, cloud deployments, internal portals, training systems and business automation workflows.</p><p className="muted xl">Our work is built around clarity, strong architecture and polished user experience. The goal is simple: create systems that look premium, work reliably and support real operational needs.</p></div><div className="storyPanel"><h3>What we focus on</h3><ul className="list"><li>✓ Enterprise software and internal business systems</li><li>✓ AI automation, assistants and intelligent workflows</li><li>✓ Cloud infrastructure, deployment and monitoring</li><li>✓ Premium dashboards and SaaS-style interfaces</li><li>✓ Practical training programs for technical teams</li></ul></div></section>

<section className="container section"><div className="section-head"><div><span className="eyebrow">MISSION & VISION</span><h2>Reliable engineering with a premium product mindset.</h2></div></div><div className="missionGrid"><div className="missionCard"><span>Mission</span><h3>Deliver secure, scalable and elegant software that turns complex operations into clear digital experiences.</h3></div><div className="missionCard"><span>Vision</span><h3>Become a trusted technology partner for organizations building AI-enabled, cloud-ready and enterprise-grade platforms.</h3></div></div></section>

<section className="container section"><span className="eyebrow">CORE VALUES</span><h2>Principles behind every project.</h2><div className="valuesGrid">{values.map((v,i)=><ValueCard v={v} i={i} key={v[0]}/>)}</div></section>

<section className="container section"><div className="section-head"><div><span className="eyebrow">INDUSTRIES</span><h2>Built for teams with real operational complexity.</h2><p className="muted wide">Novaris structures solutions around the workflows and compliance needs of each sector, from healthcare and finance to logistics, education and government services.</p></div></div><div className="industryGrid pro">{industries.map(x=><div className="industry" key={x}>{x}</div>)}</div></section>

<section className="container section"><div className="section-head"><div><span className="eyebrow">TECHNOLOGY STACK</span><h2>Modern tools for modern products.</h2></div></div><div className="techWall">{stack.map(x=><span key={x}>{x}</span>)}</div></section>

<section className="container section"><span className="eyebrow">HOW WE WORK</span><h2>A structured delivery process from idea to launch.</h2><div className="timeline">{timeline.map(t=><div className="timelineItem" key={t[0]}><b>{t[0]}</b><div><h3>{t[1]}</h3><p>{t[2]}</p></div></div>)}</div></section>

<section className="container section"><div className="statsBand"><div><b>50+</b><span>Product & project showpieces</span></div><div><b>12</b><span>Solution domains</span></div><div><b>99.9%</b><span>Cloud uptime mindset</span></div><div><b>24/7</b><span>Monitoring approach</span></div></div></section>

<section className="container section"><div className="finalcta"><span className="pill">Ready to build?</span><h2>Let us turn your idea into a polished, scalable product.</h2><p className="muted">Start with a structured project request and we will help shape the technical direction.</p><Link className="btn" href="/start-project">Start a Project →</Link></div></section>
<footer className="footer">© 2026 Novaris Technology. Enterprise software, AI, cloud and training.</footer>
</main>}
