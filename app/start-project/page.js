function Nav(){return <header className="nav"><div className="navin"><a href="/" className="brand" style={{textDecoration:'none',color:'inherit'}}><div className="logo">N</div><div><h1>Novaris Technology</h1><p>AI, Cloud & Enterprise Software</p></div></a><nav className="links"><a href="/">Home</a><a href="/about">About</a><a href="/services">Services</a><a href="/contact">Contact</a><a className="btn" href="/start-project">Start a Project →</a></nav></div></header>}

const projectTypes = [
  ['AI Platform','AI agents, automation, chatbots, RAG and intelligent workflows'],
  ['Enterprise Software','ERP, CRM, HR, procurement, finance and business systems'],
  ['Cloud Infrastructure','Azure, AWS, Google Cloud, Kubernetes, security and scaling'],
  ['Mobile Application','iOS, Android, Flutter and React Native product delivery'],
  ['Web Platform','SaaS portals, dashboards, marketplaces and customer platforms'],
  ['DevOps & Automation','CI/CD, monitoring, infrastructure as code and reliability']
]

const industries = ['Healthcare','Banking & Finance','Education','Government','Retail','Logistics','Manufacturing','Hospitality']
const features = ['AI Assistant','Admin Dashboard','Mobile App','API Integrations','Payments','Authentication','Analytics','Reporting','Notifications','Multi-language','Cloud Hosting','Data Migration']
const process = [
  ['01','Discovery Call','We understand business goals, users, constraints and success metrics.'],
  ['02','Solution Blueprint','Architecture, integrations, security model and delivery roadmap.'],
  ['03','Prototype & Design','Clickable UI, user flows, dashboard mockups and product scope.'],
  ['04','Build & Launch','Agile sprints, QA, deployment, monitoring and support.']
]

export default function Page(){return <main className="site gridbg"><Nav/>
  <section className="container startHero">
    <div className="startCopy">
      <span className="pill">Enterprise project request</span>
      <h1>Let’s turn your idea into a secure, scalable digital product.</h1>
      <p className="lead">This page is designed for serious software, AI, cloud and enterprise platform requests. It captures the information needed to prepare a professional technical proposal.</p>
      <div className="actions"><a className="btn" href="#project-wizard">Start the request →</a><a className="ghost" href="/contact">General contact</a></div>
      <div className="startStats"><div><b>48h</b><span>Response window</span></div><div><b>4</b><span>Delivery phases</span></div><div><b>Cloud</b><span>Ready architecture</span></div></div>
    </div>
    <div className="proposalMockup">
      <div className="mockTop"><span></span><span></span><span></span><b>Novaris Proposal Desk</b></div>
      <div className="mockBody">
        <div className="mockPanel big"><small>Selected Solution</small><h3>AI-powered enterprise platform</h3><p>Architecture, product design, development, deployment and support.</p><div className="mockBars"><i style={{width:'86%'}}></i><i style={{width:'63%'}}></i><i style={{width:'74%'}}></i></div></div>
        <div className="mockPanel"><small>Budget</small><strong>$25k–$50k</strong><em>Recommended</em></div>
        <div className="mockPanel"><small>Timeline</small><strong>12–16 weeks</strong><em>Agile sprint plan</em></div>
        <div className="mockPanel"><small>Security</small><strong>Cloud native</strong><em>Zero-trust ready</em></div>
        <div className="mockPanel"><small>Team</small><strong>Dedicated squad</strong><em>Design + engineering</em></div>
      </div>
    </div>
  </section>

  <section id="project-wizard" className="container section">
    <div className="section-head"><div><span className="eyebrow">Project wizard</span><h2>Structured like an enterprise brief.</h2><p className="lead wide">Choose the project type, industry, budget, timeline and required features. Contact details will be connected later after the domain email is ready.</p></div></div>
    <div className="startLayout">
      <div className="wizardCard">
        <div className="wizardProgress"><span>Project type</span><b><i></i></b><span>Review</span></div>

        <div className="wizardSection"><div className="wizardTitle"><span>01</span><h3>What are you planning to build?</h3></div><div className="projectChoiceGrid">{projectTypes.map((p,i)=><label className="choiceCard" key={p[0]}><input type="checkbox" defaultChecked={i===0 || i===1}/><div><strong>{p[0]}</strong><p>{p[1]}</p></div></label>)}</div></div>

        <div className="wizardSection"><div className="wizardTitle"><span>02</span><h3>Industry</h3></div><div className="chipGrid">{industries.map((x,i)=><label key={x}><input type="radio" name="industry" defaultChecked={i===0}/><span>{x}</span></label>)}</div></div>

        <div className="wizardSection"><div className="wizardTitle"><span>03</span><h3>Budget and timeline</h3></div><div className="formGrid"><select className="field"><option>Estimated budget: $10k – $25k</option><option>$5k – $10k</option><option>$25k – $50k</option><option>$50k – $100k</option><option>$100k+</option></select><select className="field"><option>Timeline: 3 months</option><option>ASAP</option><option>1 month</option><option>6 months</option><option>Flexible</option></select></div></div>

        <div className="wizardSection"><div className="wizardTitle"><span>04</span><h3>Required features</h3></div><div className="featurePills">{features.map((x,i)=><label key={x}><input type="checkbox" defaultChecked={i<6}/><span>{x}</span></label>)}</div></div>

        <div className="wizardSection"><div className="wizardTitle"><span>05</span><h3>Project description</h3></div><textarea className="field bigText" rows="7" placeholder="Describe the product, users, workflows, integrations, target launch date and current challenges."/><div className="uploadBox"><b>Project files and references</b><p>When the official email is connected, this area can support PDF briefs, screenshots, Figma links and technical documents.</p></div></div>

        <div className="wizardSection"><div className="wizardTitle"><span>06</span><h3>Company information</h3></div><div className="formGrid"><input className="field" placeholder="Company / organization"/><input className="field" placeholder="Contact person"/><input className="field" placeholder="Business email"/><input className="field" placeholder="Country"/><input className="field" placeholder="Company website / LinkedIn"/><input className="field" placeholder="WhatsApp / phone"/></div><button className="btn submitWide">Submit project request →</button></div>
      </div>

      <aside className="projectSidebar">
        <div className="sideCard premium"><span className="eyebrow">Why Novaris?</span><h3>Built for serious product delivery.</h3><ul><li>Enterprise architecture</li><li>AI-ready product design</li><li>Cloud-native deployment</li><li>Security-first engineering</li><li>Agile delivery milestones</li><li>Long-term support model</li></ul></div>
        <div className="sideCard"><h3>Delivery process</h3>{process.map(p=><div className="miniStep" key={p[0]}><b>{p[0]}</b><div><strong>{p[1]}</strong><p>{p[2]}</p></div></div>)}</div>
        <div className="sideCard estimate"><h3>Typical engagement</h3><div><b>2–4 weeks</b><span>Prototype</span></div><div><b>8–16 weeks</b><span>Build</span></div><div><b>Ongoing</b><span>Support</span></div></div>
      </aside>
    </div>
  </section>
</main>}
