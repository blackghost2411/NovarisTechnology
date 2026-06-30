function Nav(){return <header className="nav"><div className="navin"><a href="/" className="brand" style={{textDecoration:'none',color:'inherit'}}><div className="logo">N</div><div><h1>Novaris Technology</h1><p>AI, Cloud & Enterprise Software</p></div></a><nav className="links"><a href="/">Home</a><a href="/about">About</a><a href="/projects/enterprise-erp-suite">Projects</a><a href="/contact">Contact</a><a className="btn" href="/start-project">Start a Project →</a></nav></div></header>}

const projectTypes = ['AI Platform','ERP / CRM','Mobile App','Web Platform','Cloud Infrastructure','DevOps Automation','Cybersecurity','Custom Software']
const industries = ['Healthcare','Education','Government','Banking & Finance','Retail','Manufacturing','Logistics','Hospitality']
const features = ['AI & Automation','Analytics Dashboard','Mobile Apps','API Integrations','Authentication','Payments','Reporting','Notifications','Multi-language','Admin Portal','Cloud Hosting','Data Migration']
const steps = [
  ['01','Discovery','We review the business goals, target users, technical constraints and success metrics.'],
  ['02','Architecture','Novaris defines the platform architecture, security model, integrations and delivery roadmap.'],
  ['03','Design & Build','Our team designs the user experience, develops the product and validates each milestone.'],
  ['04','Launch & Scale','We deploy, monitor, optimize and support the platform for long-term growth.']
]

export default function Page(){
  return <main className="site gridbg"><Nav/>
    <section className="container projectHero">
      <div>
        <span className="pill">Enterprise project intake</span>
        <h1>Tell us what you want to build. <span className="grad">We’ll shape it into a scalable product.</span></h1>
        <p className="lead">Use this page for serious software, cloud, AI, DevOps, cybersecurity and enterprise platform requests. It is designed to capture project scope, technical needs, timeline and business context.</p>
        <div className="actions"><a className="btn" href="#request-form">Start the request →</a><a className="ghost" href="/contact">General contact</a></div>
      </div>
      <div className="intakePreview">
        <div className="previewTop"><span></span><span></span><span></span><b>Novaris Project Desk</b></div>
        <div className="previewGrid">
          <div className="previewCard active"><small>Project Type</small><strong>AI + Enterprise Platform</strong><em>Selected</em></div>
          <div className="previewCard"><small>Timeline</small><strong>12–16 weeks</strong><em>Recommended</em></div>
          <div className="previewCard"><small>Architecture</small><strong>Cloud Native</strong><em>Secure</em></div>
          <div className="previewCard"><small>Delivery</small><strong>Agile Sprints</strong><em>Tracked</em></div>
        </div>
        <div className="previewFlow"><span>Discovery</span><i></i><span>Prototype</span><i></i><span>Build</span><i></i><span>Launch</span></div>
      </div>
    </section>

    <section id="request-form" className="container section">
      <div className="section-head"><div><span className="eyebrow">Project request wizard</span><h2>Structured like a real enterprise brief.</h2><p className="lead wide">This is not a simple contact form. It helps capture what a professional software team needs before preparing a proposal.</p></div></div>
      <div className="wizardLayout">
        <div className="wizardMain">
          <div className="progressRail"><b style={{width:'68%'}}></b></div>
          <div className="wizardBlock"><div className="wizardTitle"><span>01</span><h3>What are you planning to build?</h3></div><div className="optionGrid">{projectTypes.map((x,i)=><label className="option" key={x}><input type="checkbox" defaultChecked={i===0 || i===3}/><span>{x}</span></label>)}</div></div>
          <div className="wizardBlock"><div className="wizardTitle"><span>02</span><h3>Industry and business context</h3></div><div className="optionGrid twoCols">{industries.map((x,i)=><label className="option" key={x}><input type="radio" name="industry" defaultChecked={i===0}/><span>{x}</span></label>)}</div></div>
          <div className="wizardBlock"><div className="wizardTitle"><span>03</span><h3>Budget and timeline</h3></div><div className="formGrid"><select className="field"><option>Estimated budget: $10k – $25k</option><option>$5k – $10k</option><option>$25k – $50k</option><option>$50k – $100k</option><option>$100k+</option></select><select className="field"><option>Timeline: 3 months</option><option>ASAP</option><option>1 month</option><option>6 months</option><option>Flexible</option></select></div></div>
          <div className="wizardBlock"><div className="wizardTitle"><span>04</span><h3>Requested features</h3></div><div className="featureCloud">{features.map((x,i)=><label key={x}><input type="checkbox" defaultChecked={i<5}/><span>{x}</span></label>)}</div></div>
          <div className="wizardBlock"><div className="wizardTitle"><span>05</span><h3>Project description</h3></div><textarea className="field bigText" rows="7" placeholder="Describe the product, users, workflows, integrations, challenges, target launch date and any existing systems you want to replace or connect."/><div className="uploadBox"><b>Upload brief, wireframes or references</b><p>PDF, Figma link, screenshots, diagrams or existing documentation can be attached later after domain email is connected.</p></div></div>
          <div className="wizardBlock"><div className="wizardTitle"><span>06</span><h3>Company information</h3></div><div className="formGrid"><input className="field" placeholder="Company / organization"/><input className="field" placeholder="Contact person"/><input className="field" placeholder="Email address"/><input className="field" placeholder="Country"/><input className="field" placeholder="Website / LinkedIn"/><input className="field" placeholder="WhatsApp / phone"/></div><button className="btn submitWide">Submit project request →</button></div>
        </div>
        <aside className="wizardSide">
          <div className="sideCard glowCard"><span className="eyebrow">Why Novaris?</span><h3>Built for serious software work.</h3><ul><li>Enterprise architecture</li><li>AI-ready product design</li><li>Cloud-native deployment</li><li>Security-first engineering</li><li>Agile delivery milestones</li><li>Long-term maintenance and support</li></ul></div>
          <div className="sideCard"><h3>What happens next?</h3>{steps.map(s=><div className="miniStep" key={s[0]}><b>{s[0]}</b><div><strong>{s[1]}</strong><p>{s[2]}</p></div></div>)}</div>
          <div className="sideCard estimate"><h3>Typical engagement</h3><div><b>2–4 weeks</b><span>Prototype</span></div><div><b>8–16 weeks</b><span>Production build</span></div><div><b>Ongoing</b><span>Support & scaling</span></div></div>
        </aside>
      </div>
    </section>
  </main>
}
