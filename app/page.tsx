import Link from 'next/link';
import { ArrowRight, Sparkles, Lock, Database, Network, Gauge, Zap } from 'lucide-react';
import { CTA, HeroDashboard, ServiceCards, TechLogos, useCases } from '@/components/site';

export default function Home(){
  return <main>
    <section className="hero"><div className="gridbg"/><div className="container">
      <div className="eyebrow"><span className="pulse"/> Enterprise IT • Software • AI • Cloud Solutions</div>
      <h1><span className="grad">Engineering the Future</span><br/>with Intelligent Technology.</h1>
      <p className="lead">Novaris Technology designs, develops, and deploys secure enterprise software, cloud infrastructure, AI automation, and high-performance digital platforms for modern businesses.</p>
      <div className="actions"><Link href="/services" className="btn primary">Explore Services <ArrowRight size={18}/></Link><Link href="/contact" className="btn">Talk to Novaris</Link></div>
      <HeroDashboard />
    </div></section>

    <section className="section"><div className="container"><div className="eyebrow"><Sparkles size={16}/> What we do</div><h2>Premium technology delivery for serious business workloads.</h2><p className="head">From software engineering to secure infrastructure, Novaris provides the technical foundation companies need to build, launch, and scale.</p><ServiceCards /></div></section>

    <section className="section"><div className="container split"><div><div className="eyebrow"><Lock size={16}/> Responsible cloud operations</div><h2>Built for trust, scale, and responsible use.</h2><p className="head">Our infrastructure approach prioritizes security, identity controls, budget awareness, workload monitoring, backups, and compliance-friendly operating practices.</p><div className="list">{useCases.map(u=><div className="item" key={u}><span className="check">✓</span><div><b>{u}</b><br/><span className="muted">Designed for legitimate business, development, testing, and production workloads.</span></div></div>)}</div></div><div className="card"><p className="muted">Enterprise readiness matrix</p><div className="bar"><div className="fill" style={{width:'91%'}}/></div><p><b>Security-first architecture</b></p><div className="bar"><div className="fill" style={{width:'86%'}}/></div><p><b>Cloud-native scalability</b></p><div className="bar"><div className="fill" style={{width:'82%'}}/></div><p><b>Automation & DevOps maturity</b></p><div className="bar"><div className="fill" style={{width:'94%'}}/></div><p><b>Monitoring and cost visibility</b></p></div></div></section>

    <section className="section"><div className="container"><div className="eyebrow"><Database size={16}/> Technology stack</div><h2>Modern tools for modern systems.</h2><p className="head">We work across cloud, backend, frontend, data, automation, and infrastructure technologies to deliver durable digital products.</p><TechLogos /></div></section>

    <section className="section"><div className="container"><div className="eyebrow"><Network size={16}/> Solutions</div><h2>Practical solutions for high-value technical needs.</h2><div className="casegrid">
      <div className="case"><span className="tag">Cloud Platform</span><h3>Secure business infrastructure</h3><p className="muted">Virtual environments, production hosting, development labs, remote workstations, secure access, monitoring, and backup workflows.</p></div>
      <div className="case"><span className="tag">Software Engineering</span><h3>Custom enterprise platforms</h3><p className="muted">Dashboards, CRMs, portals, SaaS products, APIs, internal tools, and business automation systems.</p></div>
      <div className="case"><span className="tag">AI Automation</span><h3>Intelligent operations</h3><p className="muted">AI assistants, document processing, workflow automation, analytics, support tooling, and productivity copilots.</p></div>
    </div></div></section>

    <section className="section"><div className="container split"><div className="card"><Gauge size={40}/><h3>Delivery standards</h3><p className="muted">Architecture planning, phased implementation, documentation, QA, deployment, monitoring, and continuous improvement.</p></div><div><div className="eyebrow"><Zap size={16}/> Why Novaris</div><h2>A serious technology partner, not just a website vendor.</h2><p className="head">Novaris Technology combines engineering discipline, cloud expertise, cybersecurity awareness, and modern product design to help organizations move faster with confidence.</p></div></div></section>
    <CTA />
  </main>
}
