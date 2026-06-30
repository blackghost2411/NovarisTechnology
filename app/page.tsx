import { ArrowRight, Bot, Cloud, Code2, Database, Lock, Network, Play, Sparkles, Zap } from 'lucide-react'

const services = [
  ['AI & Automation', 'Smart workflows, AI agents, predictive systems and intelligent business automation.', Bot],
  ['Cloud Engineering', 'Secure, scalable infrastructure across modern cloud and hybrid environments.', Cloud],
  ['Custom Software', 'Enterprise-grade platforms, dashboards, CRMs, portals and internal tools.', Code2],
  ['DevOps & Security', 'CI/CD, observability, automation, hardening and production reliability.', Lock],
  ['Data Platforms', 'Analytics, reporting, pipelines, warehouses and operational intelligence.', Database],
  ['API Ecosystems', 'High-performance integrations, secure APIs and backend systems that scale.', Network],
]

const projects = [
  ['NovaCloud Platform', 'AI-powered cloud operations dashboard for infrastructure teams.', 'Next.js · AI · AWS · Docker'],
  ['FinSecure Pay', 'Secure fintech payment layer with analytics and fraud intelligence.', 'Security · Payments · Analytics'],
  ['DataFlow Intelligence', 'Real-time BI platform for executive decision-making.', 'Data · Automation · Insights'],
]

const stats = [ ['120+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['24/7', 'Monitoring & Support'], ['5+', 'Years of Excellence'] ]

export default function Home() {
  return (
    <main>
      <div className="noise" />
      <div className="mouse-glow" />
      <nav className="nav">
        <a className="brand" href="#top"><span className="logo">N</span><span>Novaris<br/><small>Technology</small></span></a>
        <div className="links"><a href="#services">Services</a><a href="#solutions">Solutions</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="navCta" href="#contact">Start a Project <ArrowRight size={16}/></a>
      </nav>

      <section id="top" className="hero">
        <div className="aurora a1" /><div className="aurora a2" /><div className="aurora a3" />
        <div className="stars" />
        <div className="heroGrid" />
        <div className="heroContent reveal">
          <div className="eyebrow"><Sparkles size={15}/> AI-powered · Future-ready · Cloud-native</div>
          <h1>Engineering the Future with <span>Intelligent Technology.</span></h1>
          <p>Novaris Technology designs, develops and deploys premium enterprise software, cloud infrastructure, AI automation and digital platforms that create real business impact.</p>
          <div className="heroActions"><a className="primary" href="#services">Explore Services <ArrowRight size={18}/></a><a className="secondary" href="#projects"><Play size={16}/> Watch Showreel</a></div>
        </div>
        <div className="deviceStage reveal delay">
          <div className="orbit o1"/><div className="orbit o2"/>
          <div className="platform" />
          <div className="dashboard tilt">
            <div className="dashTop"><span className="appIcon">N</span><span>Novaris Operations Cloud</span><div className="dots"><i/><i/><i/></div></div>
            <div className="dashValue"><small>Infrastructure intelligence</small><strong>$98,764.21</strong><em>+12.2%</em></div>
            <div className="metricRow"><div><b>24</b><span>Active Projects</span></div><div><b>99.99%</b><span>Cloud Uptime</span></div><div><b>18</b><span>AI Models</span></div></div>
            <div className="chart"><span/><span/><span/><span/><span/><span/><span/></div>
            <div className="bottomCards"><div><b>86%</b><span>Performance</span></div><div><b>Operational</b><span className="green">AI Systems</span></div></div>
          </div>
          <div className="phone tilt2"><div className="phoneTop"/><h4>AI Analytics</h4><div className="miniChart"/><p>Systems operational</p></div>
          <div className="floating ball b1"/><div className="floating ball b2"/><div className="floating cube">◆</div>
        </div>
        <div className="scrollHint">Scroll to explore</div>
      </section>

      <section className="trust"><p>Trusted architecture for innovative teams</p><div><span>Microsoft</span><span>AWS</span><span>Google Cloud</span><span>DigitalOcean</span><span>Vercel</span><span>Cloudflare</span></div></section>
      <section className="stats">{stats.map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</section>

      <section id="services" className="section"><div className="sectionHead"><span>What we do</span><h2>Intelligent solutions for <br/><b>modern businesses.</b></h2><p>We combine engineering, strategy and design to build systems that scale, perform and create measurable value.</p></div><div className="serviceGrid">{services.map(([t,d,Icon]: any, i)=><article className="serviceCard" key={t} style={{animationDelay:`${i*80}ms`}}><div className="cardGlow"/><div className="iconBox"><Icon size={30}/></div><h3>{t}</h3><p>{d}</p><a>Explore <ArrowRight size={15}/></a></article>)}</div></section>

      <section id="solutions" className="split"><div><span>Enterprise systems</span><h2>Built for companies that need reliability, speed and beauty.</h2><p>From cloud-native applications to internal automation platforms, Novaris brings product-level polish to serious business infrastructure.</p><ul><li>Secure architecture and scalable foundations</li><li>AI-enhanced operations and automation</li><li>Executive dashboards and real-time analytics</li><li>Production-grade DevOps and monitoring</li></ul></div><div className="glassStack"><div/><div/><div/></div></section>

      <section id="projects" className="section projects"><div className="sectionHead"><span>Our work</span><h2>Digital experiences. <b>Real results.</b></h2><p>Premium case studies crafted for companies that want performance, clarity and a world-class digital presence.</p></div><article className="featured"><div><span className="pill">Featured Project</span><h3>NovaCloud Platform</h3><p>A next-generation cloud management platform that brings infrastructure, AI insights and business operations into one cinematic command center.</p><a className="primary small">View Case Study <ArrowRight size={16}/></a></div><div className="projectVisual"><div className="play"><Play size={24}/></div></div></article><div className="projectGrid">{projects.map(([t,d,tag])=><article key={t}><div className="thumb"/><h3>{t}</h3><p>{d}</p><span>{tag}</span></article>)}</div></section>

      <section id="about" className="marquee"><div><span>AI Engineering</span><span>Cloud Platforms</span><span>Enterprise Software</span><span>Automation</span><span>Security</span><span>Data Intelligence</span></div></section>

      <section id="contact" className="cta"><div><h2>Ready to build something <span>extraordinary?</span></h2><p>Let’s create the future together. Tell us about your project and we’ll make it happen.</p><a className="primary">Start a Project <ArrowRight size={18}/></a></div><div className="bigN">N</div></section>

      <footer><a className="brand" href="#top"><span className="logo">N</span><span>Novaris<br/><small>Technology</small></span></a><div><b>Solutions</b><a>AI Solutions</a><a>Cloud Services</a><a>DevOps</a><a>Data Analytics</a></div><div><b>Company</b><a>About</a><a>Careers</a><a>Blog</a><a>Contact</a></div><div><b>Connect</b><a>hello@novaris.technology</a><a>LinkedIn</a><a>GitHub</a></div></footer>
    </main>
  )
}
