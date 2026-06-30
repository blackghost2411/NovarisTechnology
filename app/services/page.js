function Nav(){return <header className="nav"><div className="navin"><a href="/" className="brand" style={{textDecoration:'none',color:'inherit'}}><div className="logo">N</div><div><h1>Novaris Technology</h1><p>AI, Cloud & Enterprise Software</p></div></a><nav className="links"><a href="/">Home</a><a href="/about">About</a><a href="/projects/enterprise-erp-suite">Projects</a><a href="/contact">Contact</a><a className="btn" href="/start-project">Start a Project →</a></nav></div></header>}

const services = [
  {
    badge:'AI & Automation',
    title:'AI Solutions',
    text:'Build intelligent products using AI agents, conversational assistants, document intelligence, semantic search, workflow automation and analytics.',
    features:['AI Agents','Chatbots','RAG Search','OCR & Documents','Workflow Automation','AI Analytics'],
    stack:['OpenAI','Python','Vector DB','Redis','APIs'],
    visual:'ai'
  },
  {
    badge:'Enterprise Platforms',
    title:'Enterprise Software',
    text:'Custom ERP, CRM, HR, finance, procurement, inventory and reporting platforms designed for scale, security and daily operations.',
    features:['ERP Modules','CRM Systems','HR & Payroll','Finance Dashboards','Inventory Control','Approval Workflows'],
    stack:['Next.js','.NET','PostgreSQL','Docker','RBAC'],
    visual:'erp'
  },
  {
    badge:'Cloud Native',
    title:'Cloud Infrastructure',
    text:'Secure cloud architecture, migration planning, containerized deployment, monitoring, backup strategy and cost-aware operations.',
    features:['Cloud Migration','Kubernetes','Docker','CI/CD','Monitoring','Backup Strategy'],
    stack:['Azure','AWS','GCP','Terraform','Linux'],
    visual:'cloud'
  },
  {
    badge:'Security First',
    title:'Cybersecurity',
    text:'Strengthen applications and infrastructure with secure architecture, identity controls, audit trails, vulnerability review and operational hardening.',
    features:['IAM','Security Review','Audit Trails','Threat Monitoring','Compliance','App Hardening'],
    stack:['SOC','SIEM','Zero Trust','OWASP','IAM'],
    visual:'security'
  },
  {
    badge:'Digital Products',
    title:'Web & Mobile Development',
    text:'Premium SaaS portals, mobile applications, admin dashboards, APIs and customer platforms with polished UX and reliable engineering.',
    features:['SaaS Platforms','Mobile Apps','Dashboards','APIs','Marketplaces','Customer Portals'],
    stack:['React','Next.js','Flutter','Node.js','APIs'],
    visual:'product'
  },
  {
    badge:'Teams & Skills',
    title:'Training Academy',
    text:'Practical learning paths for developers, enterprise teams and professionals in programming, cloud, DevOps, AI, cybersecurity and data.',
    features:['Bootcamps','Corporate Training','Cloud Labs','AI Programs','DevOps Paths','Certificates'],
    stack:['Python','React','Azure','AWS','DevOps'],
    visual:'academy'
  }
];

const tech = ['React','Next.js','Python','.NET','Node.js','Flutter','PostgreSQL','MongoDB','Redis','Docker','Kubernetes','Azure','AWS','Google Cloud','OpenAI','TensorFlow','GitHub Actions','Linux'];
const process = [
  ['01','Discovery','We analyze goals, users, workflows, risks and success metrics before writing code.'],
  ['02','Architecture','We define data models, security, integrations, infrastructure and delivery roadmap.'],
  ['03','Design & Engineering','We design premium interfaces and build scalable modules with clean code and QA.'],
  ['04','Launch & Scale','We deploy, monitor, optimize and support the platform after release.']
];

function ServiceVisual({type}){
  if(type==='ai') return <div className="svcVisual aiVisual"><div className="chatBubble">AI Agent</div><div className="chatLine big"></div><div className="chatLine"></div><div className="aiGrid"><span>Intent</span><span>Knowledge</span><span>Action</span><span>Analytics</span></div></div>;
  if(type==='erp') return <div className="svcVisual erpVisual"><div className="dashHeader"><b>ERP Command Center</b><em>Live</em></div><div className="kpiRow"><span>$4.8M</span><span>1,248</span><span>98%</span></div><div className="chartBars"><i></i><i></i><i></i><i></i><i></i></div><div className="tableRows"><b></b><b></b><b></b></div></div>;
  if(type==='cloud') return <div className="svcVisual cloudVisual"><div className="node top">Users</div><div className="node mid">API Gateway</div><div className="node left">Kubernetes</div><div className="node right">Database</div><div className="node bottom">Monitoring</div></div>;
  if(type==='security') return <div className="svcVisual secVisual"><div className="shield">✓</div><div className="scanLines"><i></i><i></i><i></i><i></i></div><p>Threat monitoring • IAM • Audit trail</p></div>;
  if(type==='product') return <div className="svcVisual productVisual"><div className="phoneMock"><span></span><b></b><b></b><b></b></div><div className="webMock"><span></span><i></i><i></i><i></i></div></div>;
  return <div className="svcVisual academyVisual"><div className="courseStack"><span>Full Stack</span><span>AI Engineering</span><span>Cloud & DevOps</span><span>Cybersecurity</span></div></div>;
}

export default function Page(){return <main className="site gridbg"><Nav/>
  <section className="container servicesHero">
    <div>
      <span className="pill">Enterprise Services</span>
      <h1>Technology services designed for modern enterprises.</h1>
      <p className="lead">From AI-powered platforms to enterprise software, cloud infrastructure and digital transformation, Novaris helps organizations build secure, scalable and future-ready solutions.</p>
      <div className="actions"><a className="btn" href="#services-list">Explore Services</a><a className="ghost" href="/start-project">Start a Project</a></div>
      <div className="serviceHeroStats"><div><b>10+</b><span>Service lines</span></div><div><b>24/7</b><span>Cloud ready support</span></div><div><b>AI</b><span>Automation first</span></div></div>
    </div>
    <div className="serviceHeroMock">
      <div className="mockTop"><span></span><span></span><span></span><b>Novaris Services OS</b></div>
      <div className="serviceDashboard">
        <div className="serviceDashPanel large"><small>Enterprise Delivery</small><strong>Cloud + AI Roadmap</strong><div className="waveChart"><i></i><i></i><i></i></div></div>
        <div className="serviceDashPanel"><small>AI</small><strong>Agents</strong><em>Active</em></div>
        <div className="serviceDashPanel"><small>Cloud</small><strong>99.9%</strong><em>Target uptime</em></div>
        <div className="serviceDashPanel"><small>Security</small><strong>Zero Trust</strong><em>Architecture</em></div>
        <div className="serviceDashPanel"><small>DevOps</small><strong>CI/CD</strong><em>Automated</em></div>
      </div>
    </div>
  </section>

  <section className="container section" id="services-list">
    <div className="section-head"><div><span className="eyebrow">What We Build</span><h2>Services that cover the full digital product lifecycle.</h2><p className="lead wide">Every service is designed to connect strategy, UI/UX, engineering, cloud, security and long-term support.</p></div><a className="ghost" href="/start-project">Request a proposal →</a></div>
    <div className="enterpriseServices">
      {services.map((s,i)=><article className="enterpriseService" key={s.title}>
        <div className="serviceText"><span className="tag">{s.badge}</span><h3>{s.title}</h3><p>{s.text}</p><div className="featureGrid">{s.features.map(f=><span key={f}>✓ {f}</span>)}</div><div className="chips">{s.stack.map(t=><span className="chip" key={t}>{t}</span>)}</div><a className="caseLink" href="/start-project">Plan this service →</a></div>
        <ServiceVisual type={s.visual}/>
      </article>)}
    </div>
  </section>

  <section className="container section">
    <div className="processPanel">
      <div><span className="eyebrow">Delivery Process</span><h2>From idea to launch with engineering discipline.</h2><p className="lead">Novaris combines product strategy, system architecture, agile delivery and operational support to reduce risk and ship reliable platforms.</p></div>
      <div className="processTimeline">{process.map(([n,t,d])=><div className="timelineCard" key={t}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
    </div>
  </section>

  <section className="container section">
    <div className="section-head"><div><span className="eyebrow">Technology Stack</span><h2>Modern tools for enterprise-grade platforms.</h2></div></div>
    <div className="techCloud">{tech.map(t=><span key={t}>{t}</span>)}</div>
  </section>

  <section className="container section"><div className="finalcta"><span className="eyebrow">Ready when you are</span><h2>Need an AI platform, enterprise system, cloud architecture or digital product?</h2><p className="lead">Tell us what you want to build and we will structure the project scope, roadmap and delivery approach.</p><div className="actions"><a className="btn" href="/start-project">Start Your Project →</a><a className="ghost" href="/contact">Contact Us</a></div></div></section>
  <footer className="footer">© 2026 Novaris Technology. Enterprise Software, AI, Cloud & Training.</footer>
</main>}
