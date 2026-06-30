import Link from 'next/link';

const programs = [
  {
    title:'Full Stack Web Development', label:'Software Engineering', duration:'16 weeks', level:'Beginner → Advanced', hours:'140+ hours', accent:'cyan',
    summary:'Build modern production web applications with React, Next.js, Node.js, REST APIs, authentication, SQL databases and deployment workflows.',
    outcomes:['SaaS dashboard','Auth & roles','REST APIs','Database design'], tools:['React','Next.js','Node.js','PostgreSQL','Docker','Vercel'],
    project:'Launch a complete SaaS platform with admin dashboard, users, analytics and secure deployment.', visual:'fullstack'
  },
  {
    title:'Python Automation & Data', label:'Automation Track', duration:'12 weeks', level:'Intermediate', hours:'90+ hours', accent:'green',
    summary:'Automate business workflows, process data, integrate APIs and build practical Python tools for operations, reporting and cloud automation.',
    outcomes:['Automation bots','Data pipelines','API integrations','Scheduled jobs'], tools:['Python','FastAPI','Pandas','PostgreSQL','APIs','Linux'],
    project:'Build an automation engine that processes files, sends reports and integrates with external APIs.', visual:'python'
  },
  {
    title:'AI Engineering & Prompt Systems', label:'AI Professional', duration:'14 weeks', level:'Advanced', hours:'110+ hours', accent:'purple',
    summary:'Design AI assistants, RAG systems, prompt architectures, vector search and enterprise-ready LLM applications with evaluation flows.',
    outcomes:['AI agents','RAG search','Prompt pipelines','Evaluation'], tools:['Python','OpenAI','LangChain','Vector DB','Redis','FastAPI'],
    project:'Build an AI knowledge assistant that answers from documents, summarizes tickets and routes tasks.', visual:'ai'
  },
  {
    title:'React & Next.js Professional', label:'Frontend Architecture', duration:'10 weeks', level:'Intermediate', hours:'80+ hours', accent:'blue',
    summary:'Master advanced React patterns, Next.js App Router, server components, performance optimization and scalable frontend architecture.',
    outcomes:['App Router','Server components','Performance','Design systems'], tools:['React','Next.js','TypeScript','Tailwind','Framer','Vercel'],
    project:'Build a high-performance enterprise portal with reusable components and optimized routing.', visual:'react'
  },
  {
    title:'Flutter Mobile Development', label:'Mobile Product', duration:'14 weeks', level:'Intermediate', hours:'105+ hours', accent:'sky',
    summary:'Build cross-platform Android and iOS apps with Firebase, REST APIs, authentication, notifications and production release workflows.',
    outcomes:['Mobile UI','API integration','Push notifications','App release'], tools:['Flutter','Dart','Firebase','REST APIs','Figma','GitHub'],
    project:'Build a mobile operations app connected to a secure backend and dashboard.', visual:'mobile'
  },
  {
    title:'Cloud Computing Foundations', label:'Cloud Core', duration:'12 weeks', level:'Beginner', hours:'85+ hours', accent:'teal',
    summary:'Learn Azure, AWS, networking, virtualization, Linux, Docker and cloud architecture through guided labs and real deployment scenarios.',
    outcomes:['Cloud basics','Linux servers','Networking','Docker labs'], tools:['Azure','AWS','Linux','Docker','Nginx','Git'],
    project:'Deploy a secure web application with monitoring, backups and domain configuration.', visual:'cloud'
  },
  {
    title:'Azure / AWS Deployment', label:'Production Infrastructure', duration:'8 weeks', level:'Advanced', hours:'70+ hours', accent:'indigo',
    summary:'Deploy scalable production environments using Azure, AWS, CI/CD pipelines, Kubernetes, monitoring, backups and Infrastructure as Code.',
    outcomes:['Kubernetes','IaC','Monitoring','Cloud security'], tools:['Azure','AWS','Kubernetes','Terraform','GitHub Actions','Grafana'],
    project:'Provision a production-grade cloud environment with CI/CD, alerts and rollback strategy.', visual:'deployment'
  },
  {
    title:'DevOps with Docker & CI/CD', label:'DevOps Track', duration:'10 weeks', level:'Advanced', hours:'85+ hours', accent:'orange',
    summary:'Build automated deployment pipelines using Docker, GitHub Actions, Terraform, Kubernetes and enterprise DevOps best practices.',
    outcomes:['Docker images','CI/CD pipelines','Rollback flows','Release strategy'], tools:['Docker','GitHub Actions','Terraform','Kubernetes','Nginx','Linux'],
    project:'Build a complete CI/CD pipeline that tests, builds and deploys multiple services automatically.', visual:'devops'
  },
  {
    title:'Cybersecurity Fundamentals', label:'Security Operations', duration:'12 weeks', level:'Intermediate', hours:'95+ hours', accent:'red',
    summary:'Understand ethical hacking, network defense, vulnerability assessment, SIEM, IAM and secure infrastructure fundamentals.',
    outcomes:['OWASP Top 10','SOC basics','IAM','Vulnerability reports'], tools:['Linux','Burp Suite','OWASP ZAP','SIEM','Cloud IAM','Wireshark'],
    project:'Perform a security assessment and create a hardening plan for a web platform.', visual:'security'
  },
  {
    title:'Business Analytics & Power BI', label:'Data Intelligence', duration:'8 weeks', level:'Beginner', hours:'65+ hours', accent:'yellow',
    summary:'Transform raw data into executive dashboards, KPIs, reports and business intelligence insights for decision makers.',
    outcomes:['KPI design','Data modeling','Dashboards','Executive reporting'], tools:['Power BI','SQL','Excel','Python','PostgreSQL','Looker'],
    project:'Build an executive BI dashboard for sales, finance, operations and customer growth.', visual:'bi'
  }
];

const corporate = [
  'Customized training roadmaps for internal teams',
  'Private workshops for cloud, AI, DevOps and cybersecurity',
  'Hands-on labs using realistic business scenarios',
  'Progress reports, assessments and completion certificates',
  'Executive technology awareness sessions',
  'Remote, hybrid or on-site delivery formats'
];

const faqs = [
  ['Are the programs practical?', 'Yes. Every path includes labs, assignments and a final project that simulates real business delivery.'],
  ['Do participants receive certificates?', 'Yes. Completion certificates can be issued after attendance, assessments and project submission.'],
  ['Can Novaris train a company team?', 'Yes. Corporate programs can be customized around your technology stack, timeline and team level.'],
  ['Are programs online or in person?', 'Both formats can be supported depending on the location, group size and program requirements.']
];

function Nav(){return <header className="nav"><div className="navin"><Link href="/" className="brand" style={{textDecoration:'none',color:'inherit'}}><div className="logo">N</div><div><h1>Novaris Technology</h1><p>Novaris Academy</p></div></Link><nav className="links"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/start-project">Start a Project</Link><Link href="/contact">Contact</Link></nav></div></header>}

function AcademyVisual(){return <div className="academyVisual">
  <div className="academyTop"><span>Learning Operations</span><b>Live Cohort Dashboard</b></div>
  <div className="academyGrid">
    <div className="academyCard wide"><small>Program Completion</small><strong>78%</strong><div className="academyProgress"><i style={{width:'78%'}}></i></div></div>
    <div className="academyCard"><small>Active Learners</small><strong>426</strong></div>
    <div className="academyCard"><small>Labs Completed</small><strong>1,284</strong></div>
    <div className="academyCard chart"><small>Weekly Progress</small><div className="miniBars"><i></i><i></i><i></i><i></i><i></i></div></div>
    <div className="academyCard list"><small>Current Tracks</small><p>AI Engineering</p><p>Cloud DevOps</p><p>Full Stack</p></div>
  </div>
</div>}

function ProgramVisual({type}){return <div className={`programVisual ${type}`}>
  <div className="pvTop"><span></span><span></span><span></span><b>{type === 'ai' ? 'AI Lab' : type === 'mobile' ? 'Mobile Preview' : type === 'security' ? 'SOC Console' : 'Program Lab'}</b></div>
  <div className="pvBody">
    {type === 'mobile' ? <><div className="phoneFrame"><i></i><b></b><b></b><em></em></div><div className="phoneFrame small"><i></i><b></b><em></em></div></> : null}
    {type === 'security' ? <><div className="radar"><i></i><i></i><i></i></div><div className="alertList"><b>Threat scan</b><span>IAM review</span><span>Endpoint check</span></div></> : null}
    {type === 'cloud' || type === 'deployment' || type === 'devops' ? <><div className="pipe"><b>Build</b><span></span><b>Test</b><span></span><b>Deploy</b></div><div className="serverRows"><i></i><i></i><i></i></div></> : null}
    {type === 'ai' ? <><div className="chatPane"><p>Prompt</p><p>RAG Search</p><p>AI Response</p></div><div className="vectorDots"><i></i><i></i><i></i><i></i><i></i></div></> : null}
    {type === 'bi' || type === 'python' ? <><div className="analyticsChart"><i></i><i></i><i></i><i></i><i></i></div><div className="dataRows"><span></span><span></span><span></span></div></> : null}
    {type === 'fullstack' || type === 'react' ? <><div className="codePane"><span></span><span></span><span></span><span></span></div><div className="browserPane"><b></b><i></i><i></i></div></> : null}
  </div>
</div>}

export default function Training(){return <main className="site gridbg"><Nav/>
  <section className="container trainingHero">
    <div>
      <span className="pill">Novaris Academy</span>
      <h1>Practical technology training for modern teams and ambitious professionals.</h1>
      <p className="lead">Industry-focused programs in software engineering, AI, cloud infrastructure, DevOps, cybersecurity, data analytics and mobile development. Built around real projects, not theory alone.</p>
      <div className="actions"><a className="btn" href="#programs">Explore Programs</a><Link className="ghost" href="/start-project">Corporate Training</Link></div>
      <div className="trainingStats"><div><b>10</b><span>Specialized programs</span></div><div><b>70+</b><span>Practical labs</span></div><div><b>100%</b><span>Project-based</span></div></div>
    </div>
    <AcademyVisual />
  </section>

  <section id="programs" className="container section">
    <div className="section-head"><div><span className="eyebrow">Learning Paths</span><h2>Every program has a different goal, stack and outcome.</h2><p className="lead wide">Each path includes a unique curriculum, practical labs, tools, capstone project and career outcome, so the academy feels real instead of repeated templates.</p></div><Link className="ghost" href="/contact">Request Information</Link></div>
    <div className="programGrid">{programs.map((p)=><article className={`programCard ${p.accent}`} key={p.title}>
      <ProgramVisual type={p.visual} />
      <div className="programHead"><span className="tag">{p.label}</span><b>{p.duration}</b></div>
      <h3>{p.title}</h3><p>{p.summary}</p>
      <div className="programMeta"><span>{p.level}</span><span>{p.hours}</span><span>Certificate</span></div>
      <h4>What you will build</h4><div className="moduleList">{p.outcomes.map(m=><span key={m}>{m}</span>)}</div>
      <h4>Tools & Technologies</h4><div className="chips">{p.tools.map(t=><span className="chip" key={t}>{t}</span>)}</div>
      <div className="projectBox"><small>Capstone Project</small><strong>{p.project}</strong></div>
      <div className="programActions"><Link className="caseLink" href="/contact">View Curriculum →</Link><Link className="caseLink soft" href="/start-project">Request Information →</Link></div>
    </article>)}</div>
  </section>

  <section className="container section">
    <div className="academySplit">
      <div><span className="eyebrow">Corporate Training</span><h2>Upskill your team with customized technology programs.</h2><p className="lead">Novaris can design private workshops for companies that need practical enablement in cloud, AI, programming, DevOps and secure software delivery.</p><div className="actions"><Link className="btn" href="/contact">Talk to Novaris</Link></div></div>
      <div className="corporateList">{corporate.map((item,i)=><div className="corporateItem" key={item}><b>{String(i+1).padStart(2,'0')}</b><span>{item}</span></div>)}</div>
    </div>
  </section>

  <section className="container section">
    <div className="processPanel">
      <div><span className="eyebrow">How Training Works</span><h2>A structured learning experience from assessment to certification.</h2><p className="lead">We align the program with the learner level, define milestones, deliver hands-on sessions, measure progress and close with a practical project.</p></div>
      <div className="processTimeline"><div className="timelineCard"><b>01</b><div><h3>Skill Assessment</h3><p>Understand learner level, goals and required outcomes.</p></div></div><div className="timelineCard"><b>02</b><div><h3>Guided Learning</h3><p>Live sessions, labs, exercises and mentor feedback.</p></div></div><div className="timelineCard"><b>03</b><div><h3>Real Projects</h3><p>Build practical applications that reflect real business needs.</p></div></div><div className="timelineCard"><b>04</b><div><h3>Certification</h3><p>Evaluate final work and issue completion documentation.</p></div></div></div>
    </div>
  </section>

  <section className="container section">
    <div className="section-head"><div><span className="eyebrow">FAQ</span><h2>Training questions, answered.</h2></div></div>
    <div className="faqGrid">{faqs.map(([q,a])=><div className="faqItem" key={q}><h3>{q}</h3><p>{a}</p></div>)}</div>
  </section>

  <section className="container section"><div className="finalcta"><span className="eyebrow">Novaris Academy</span><h2>Ready to build skills that turn into real products?</h2><p className="lead">Explore professional programs or request a customized corporate training roadmap for your team.</p><div className="actions"><a className="btn" href="#programs">Explore Programs</a><Link className="ghost" href="/contact">Contact Novaris</Link></div></div></section>
</main>}
