import Link from 'next/link';
import { ArrowRight, BrainCircuit, CloudCog, Code2, DatabaseZap, LockKeyhole, Network, Sparkles, ShieldCheck, Rocket, Layers3, Gauge, Globe2 } from 'lucide-react';

const services = [
  ['AI Automation', 'Autonomous workflows, intelligent assistants, data copilots and enterprise automation built around measurable outcomes.', BrainCircuit],
  ['Cloud Platforms', 'Secure cloud architecture, migration, scaling, observability and infrastructure-as-code for modern operations.', CloudCog],
  ['Custom Software', 'High-performance web apps, portals, dashboards and APIs engineered with clean architecture.', Code2],
  ['Cyber & Reliability', 'Security-first systems, access controls, monitoring, backups and resilient production delivery.', LockKeyhole],
  ['Data Systems', 'Databases, analytics layers, reporting pipelines and decision intelligence dashboards.', DatabaseZap],
  ['DevOps Acceleration', 'CI/CD, containerization, deployment pipelines and release automation for faster delivery.', Network],
];

const metrics = [['24/7', 'Operational mindset'], ['99.9%', 'Reliability target'], ['10x', 'Automation impact'], ['Global', 'Delivery standards']];

const projects = [
  ['NOVA Cloud Console', 'A secure executive dashboard for cloud operations, resource governance and billing intelligence.'],
  ['Atlas AI Workflows', 'An intelligent automation layer for document processing, alerts, support and internal operations.'],
  ['Vertex Commerce Core', 'A scalable commerce and logistics platform with API-first architecture and real-time insights.'],
];

export default function Home(){
  return <main>
    <section className="hero">
      <div className="ambient one"/><div className="ambient two"/><div className="grid-floor"/>
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={15}/> Enterprise IT • Software • AI • Cloud</div>
        <h1>Build digital systems that look powerful, feel premium, and perform under pressure.</h1>
        <p>Novaris Technology designs and deploys elegant enterprise software, AI automation and secure cloud platforms for organizations that need credibility, speed and real business impact.</p>
        <div className="hero-actions">
          <Link className="btn primary" href="/contact">Start Your Project <ArrowRight size={18}/></Link>
          <Link className="btn ghost" href="/projects">Explore Case Studies</Link>
        </div>
        <div className="trust-row"><span>Built for</span><b>Startups</b><b>Enterprises</b><b>Cloud Teams</b><b>AI Operations</b></div>
      </div>
      <div className="hero-visual">
        <div className="orbital-card main-card">
          <div className="window-bar"><i/><i/><i/><span>Novaris Intelligence Cloud</span></div>
          <div className="pulse-map">
            <div className="node n1"/><div className="node n2"/><div className="node n3"/><div className="node n4"/>
            <div className="beam b1"/><div className="beam b2"/><div className="beam b3"/>
          </div>
          <div className="console-grid">
            <div><span>Latency</span><strong>18ms</strong></div>
            <div><span>Deployments</span><strong>142</strong></div>
            <div><span>Security</span><strong>Active</strong></div>
            <div><span>AI Tasks</span><strong>8.7k</strong></div>
          </div>
        </div>
        <div className="float-card fc1"><ShieldCheck size={18}/> Secure by design</div>
        <div className="float-card fc2"><Rocket size={18}/> Fast delivery</div>
        <div className="float-card fc3"><Gauge size={18}/> Enterprise performance</div>
      </div>
    </section>

    <section className="metrics glass-section">
      {metrics.map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}
    </section>

    <section className="section intro-split">
      <div><p className="section-kicker">Premium engineering studio</p><h2>Not a simple website. A serious technology presence.</h2></div>
      <p className="lead">The brand is positioned for quota requests, cloud provider reviews, client conversations and professional outreach — with detailed services, clear use cases, technical credibility and polished visual design.</p>
    </section>

    <section className="section cards-section">
      <div className="section-head"><p className="section-kicker">Capabilities</p><h2>Everything a modern software company needs to look real, capable and trusted.</h2></div>
      <div className="service-grid">
        {services.map(([title, text, Icon]) => <article className="service-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p><span>Learn more →</span></article>)}
      </div>
    </section>

    <section className="showcase">
      <div className="showcase-copy"><p className="section-kicker">Signature systems</p><h2>Designed for software, AI and cloud infrastructure projects.</h2><p>From MVPs to internal platforms, Novaris Technology presents itself as a partner capable of building, operating and scaling critical systems.</p></div>
      <div className="stacked-panels">
        <div className="panel p1"><Layers3/><b>Application Layer</b><span>Portals, dashboards, APIs</span></div>
        <div className="panel p2"><BrainCircuit/><b>Intelligence Layer</b><span>AI automation & insights</span></div>
        <div className="panel p3"><CloudCog/><b>Infrastructure Layer</b><span>Cloud, DevOps, security</span></div>
      </div>
    </section>

    <section className="section">
      <div className="section-head"><p className="section-kicker">Case studies</p><h2>Premium project presentation that feels enterprise-ready.</h2></div>
      <div className="project-grid">
        {projects.map(([title,text], i) => <article className="project-card" key={title}><div className={`project-art art${i+1}`}/><h3>{title}</h3><p>{text}</p><Link href="/projects">View case study</Link></article>)}
      </div>
    </section>

    <section className="tech-marquee">
      <div><span>Next.js</span><span>React</span><span>Node.js</span><span>Python</span><span>Docker</span><span>Kubernetes</span><span>Azure</span><span>AWS</span><span>GCP</span><span>PostgreSQL</span><span>AI</span><span>DevOps</span></div>
    </section>

    <section className="cta-panel">
      <Globe2 className="cta-icon"/>
      <h2>Ready to make Novaris Technology look like a serious global technology company?</h2>
      <p>Use this version as the premium foundation, then we customize text, projects, services, domains and email identity.</p>
      <Link className="btn primary" href="/contact">Launch the next phase <ArrowRight size={18}/></Link>
    </section>
  </main>
}
