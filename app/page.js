import { content } from '../content/site';

function Shell({ lang='en' }) {
  const t = content[lang];
  const rtl = lang === 'ar';
  return <main dir={rtl?'rtl':'ltr'} className={rtl?'rtl':''}>
    <div className="noise"/><div className="aurora"/><div className="spotlight"/>
    <nav className="nav glass"><a className="brand" href="#top"><span className="logo">N</span><span>Novaris<br/><small>Technology</small></span></a><div className="navlinks">{t.nav.map((n,i)=><a key={i} href={'#'+['services','solutions','projects','training','about','contact'][i]}>{n}</a>)}</div><a className="lang" href={lang==='en'?'/ar':'/'}>{lang==='en'?'العربية':'English'}</a></nav>
    <section id="top" className="hero section"><div className="heroText"><p className="pill">{t.heroKicker}</p><h1>{t.heroTitle}</h1><p className="lead">{t.heroText}</p><div className="actions"><a href="#services" className="btn primary">{t.primary}</a><a href="#projects" className="btn ghost">{t.secondary}</a></div></div><Mockup /></section>
    <section className="stats glass">{t.stats.map((s,i)=><div key={i}><b>{s[0]}</b><span>{s[1]}</span></div>)}</section>
    <section id="about" className="section split"><div><p className="eyebrow">{rtl?'من نحن':'About Novaris'}</p><h2>{t.aboutTitle}</h2></div><p className="text">{t.aboutText}</p></section>
    <Cards id="services" title={t.servicesTitle} eyebrow={rtl?'خدماتنا':'What we do'} items={t.services}/>
    <section id="solutions" className="section"><p className="eyebrow">{rtl?'الحلول':'Solutions'}</p><h2>{t.solutionsTitle}</h2><div className="chips">{t.solutions.map(x=><span key={x}>{x}</span>)}</div></section>
    <section id="projects" className="section"><p className="eyebrow">{rtl?'الأعمال':'Showcase'}</p><h2>{t.projectsTitle}</h2><div className="projects">{t.projects.map((p,i)=><article className="project glass" key={p[0]}><div><span className="num">0{i+1}</span><h3>{p[0]}</h3><p>{p[1]}</p><small>{p[2]}</small></div><div className="screen"><span/><span/><span/></div></article>)}</div></section>
    <section id="training" className="section"><p className="eyebrow">{rtl?'التدريب':'Training'}</p><h2>{t.trainingTitle}</h2><div className="courses">{t.courses.map(c=><div className="course glass" key={c}>{c}<b>↗</b></div>)}</div></section>
    <section id="contact" className="section cta glass"><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="btn primary" href="mailto:hello@novaris.technology">{rtl?'ابدأ مشروعك':'Start a Project'}</a></section>
    <footer><div className="brand"><span className="logo">N</span><span>Novaris Technology</span></div><p>© 2026 Novaris Technology. AI, Cloud & Enterprise Software.</p></footer>
  </main>
}
function Mockup(){return <div className="mock"><div className="orbit"/><div className="dashboard glass"><div className="dashTop"><span/><span/><span/></div><h3>Novaris Operations Cloud</h3><div className="grid"><div><b>$98,764</b><small>Cloud Spend</small></div><div><b>99.99%</b><small>Uptime</small></div><div><b>86%</b><small>Automation</small></div><div><b>24</b><small>Active Apps</small></div></div><div className="chart"><i/><i/><i/><i/></div></div><div className="phone glass"><b>AI Monitor</b><span>Operational</span><div className="wave"/></div></div>}
function Cards({id,title,eyebrow,items}){return <section id={id} className="section"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><div className="cards">{items.map((it,i)=><article className="card glass" key={it[0]}><div className="cube">{i+1}</div><h3>{it[0]}</h3><p>{it[1]}</p><a>Explore →</a></article>)}</div></section>}
export default function Page(){return <Shell lang="en"/>}
