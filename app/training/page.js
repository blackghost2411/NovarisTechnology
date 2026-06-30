import Link from 'next/link';

const paths = [
  {
    title:'Software Engineering Bootcamp',
    label:'Career Track',
    duration:'16 weeks',
    level:'Beginner to Advanced',
    hours:'120+ hours',
    summary:'A complete practical path for building modern web platforms, APIs, dashboards and production-ready applications.',
    modules:['HTML/CSS foundations','JavaScript & TypeScript','React & Next.js','Node.js APIs','Databases & authentication','Capstone SaaS project'],
    tools:['React','Next.js','Node.js','PostgreSQL','GitHub','Vercel'],
    project:'Build a full SaaS dashboard with users, roles, analytics and deployment.'
  },
  {
    title:'AI Engineering & Automation',
    label:'Advanced Program',
    duration:'10 weeks',
    level:'Intermediate',
    hours:'80+ hours',
    summary:'Learn how to design AI agents, RAG systems, document intelligence and workflow automation for real business use cases.',
    modules:['Prompt systems','LLM integration','RAG pipelines','Vector search','AI agents','Evaluation & safety'],
    tools:['Python','OpenAI APIs','LangChain','Vector DB','FastAPI','Redis'],
    project:'Build an AI helpdesk that answers from a knowledge base and routes tickets.'
  },
  {
    title:'Cloud & DevOps Professional',
    label:'Infrastructure Track',
    duration:'12 weeks',
    level:'Intermediate to Advanced',
    hours:'90+ hours',
    summary:'Hands-on cloud deployment, containers, CI/CD pipelines, monitoring, security and scalable infrastructure design.',
    modules:['Linux & networking','Docker','CI/CD pipelines','Cloud architecture','Monitoring','Backup & disaster recovery'],
    tools:['AWS','Azure','Docker','GitHub Actions','Nginx','Terraform'],
    project:'Deploy a secure multi-service application with CI/CD and monitoring.'
  },
  {
    title:'Cybersecurity Fundamentals',
    label:'Security Track',
    duration:'8 weeks',
    level:'Beginner to Intermediate',
    hours:'60+ hours',
    summary:'A practical introduction to application security, identity, hardening, audit trails and security-first development.',
    modules:['Security foundations','OWASP Top 10','IAM basics','Network security','Logging & audit','Incident response'],
    tools:['Linux','Burp Suite','OWASP ZAP','SIEM concepts','Cloud IAM','Git'],
    project:'Perform a security review and hardening plan for a web application.'
  },
  {
    title:'Data Analytics & BI',
    label:'Business Track',
    duration:'8 weeks',
    level:'Beginner to Intermediate',
    hours:'64+ hours',
    summary:'Transform raw business data into dashboards, KPIs, executive reports and decision-ready insights.',
    modules:['SQL essentials','Data cleaning','Dashboard design','KPI modeling','Power BI','Executive reporting'],
    tools:['SQL','Power BI','Excel','Python','PostgreSQL','Looker concepts'],
    project:'Build an executive analytics dashboard for sales, finance and operations.'
  },
  {
    title:'Mobile App Development',
    label:'Product Track',
    duration:'10 weeks',
    level:'Intermediate',
    hours:'75+ hours',
    summary:'Design and build mobile applications with authentication, APIs, notifications, dashboards and deployment workflows.',
    modules:['Mobile UI patterns','Flutter foundations','API integration','Authentication','Push notifications','Release workflow'],
    tools:['Flutter','Dart','Firebase','REST APIs','Figma','GitHub'],
    project:'Build a mobile operations app connected to a backend dashboard.'
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
  ['Are the programs practical?', 'Yes. Each learning path includes labs, assignments and a final project that simulates real business delivery.'],
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

export default function Training(){return <main className="site gridbg"><Nav/>
  <section className="container trainingHero">
    <div>
      <span className="pill">Novaris Academy</span>
      <h1>Practical technology training for modern teams and ambitious professionals.</h1>
      <p className="lead">Industry-focused programs in software engineering, AI, cloud infrastructure, DevOps, cybersecurity, data analytics and mobile development. Built around real projects, not theory alone.</p>
      <div className="actions"><a className="btn" href="#programs">Explore Programs</a><Link className="ghost" href="/start-project">Corporate Training</Link></div>
      <div className="trainingStats"><div><b>6</b><span>Learning paths</span></div><div><b>40+</b><span>Practical labs</span></div><div><b>100%</b><span>Project-based</span></div></div>
    </div>
    <AcademyVisual />
  </section>

  <section id="programs" className="container section">
    <div className="section-head"><div><span className="eyebrow">Learning Paths</span><h2>Programs designed around real-world delivery.</h2><p className="lead wide">Each path combines structured curriculum, guided labs, practical assignments and a final project that demonstrates job-ready skills.</p></div><Link className="ghost" href="/contact">Request Information</Link></div>
    <div className="programGrid">{paths.map((p)=><article className="programCard" key={p.title}>
      <div className="programHead"><span className="tag">{p.label}</span><b>{p.duration}</b></div>
      <h3>{p.title}</h3><p>{p.summary}</p>
      <div className="programMeta"><span>{p.level}</span><span>{p.hours}</span><span>Certificate</span></div>
      <h4>Curriculum</h4><div className="moduleList">{p.modules.map(m=><span key={m}>{m}</span>)}</div>
      <h4>Tools & Technologies</h4><div className="chips">{p.tools.map(t=><span className="chip" key={t}>{t}</span>)}</div>
      <div className="projectBox"><small>Final Project</small><strong>{p.project}</strong></div>
      <Link className="caseLink" href="/start-project">Request this program →</Link>
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
