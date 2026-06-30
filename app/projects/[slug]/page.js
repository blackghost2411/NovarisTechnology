import Link from 'next/link';
import {projects} from '../../../lib/data';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export function generateMetadata({params}){const p=projects.find(x=>x.slug===params.slug);return {title:`${p?.title||'Project'} | Novaris Technology`, description:p?.summary||'Novaris Technology case study'}}

function Nav(){return <header className="nav"><div className="navin"><Link href="/" className="brand"><div className="logo">N</div><div><h1>Novaris Technology</h1><p>Enterprise Case Study</p></div></Link><nav className="links"><Link href="/">Home</Link><Link href="/#projects">Projects</Link><Link href="/services">Services</Link><Link className="btn" href="/start-project">Start a Project →</Link></nav></div></header>}
function Stat({value,label}){return <div className="metric"><b>{value}</b><p>{label}</p></div>}
function MiniPanel({title,index}){return <div className="mini-panel"><div className="mini-top"><span></span><b>{title}</b></div><div className="mini-lines"><i style={{width:`${82-(index%4)*8}%`}}></i><i style={{width:`${56+(index%3)*9}%`}}></i><i style={{width:`${44+(index%5)*7}%`}}></i></div></div>}
function Architecture({items}){return <div className="architecture">{items.map((item,i)=><div className="arch-node" key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b>{i<items.length-1&&<em>→</em>}</div>)}</div>}

export default function Project({params}){
 const p=projects.find(x=>x.slug===params.slug)||projects[0];
 return <main className="site gridbg"><Nav/>
  <section className="container case-hero">
    <div>
      <span className="pill">{p.category} • Case Study</span>
      <h1>{p.title}</h1>
      <p className="lead">{p.story || p.summary}</p>
      <div className="chips bigchips">{p.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div>
    </div>
    <div className="case-hero-img"><img src={p.image} alt={p.title}/></div>
  </section>

  <section className="container section"><div className="hero-metrics case-stats">{(p.stats||[]).map(([v,l])=><Stat key={l} value={v} label={l}/>)}</div></section>

  <section className="container section detail-grid">
    <div className="case-block"><span className="eyebrow">CHALLENGE</span><h2>What needed to be solved.</h2><p className="muted xl">{p.challenge}</p></div>
    <div className="case-block"><span className="eyebrow">SOLUTION</span><h2>How Novaris would structure it.</h2><p className="muted xl">{p.solution}</p></div>
  </section>

  <section className="container section">
    <div className="section-head"><div><span className="eyebrow">PRODUCT MODULES</span><h2>Inside the platform.</h2><p className="muted wide">Each module is designed around daily operational workflows, executive visibility and secure access.</p></div></div>
    <div className="module-grid">{(p.modules||[]).map((m,i)=><MiniPanel key={m} title={m} index={i}/>)}</div>
  </section>

  <section className="container section split-case">
    <div><span className="eyebrow">FEATURES</span><h2>Capabilities designed for real business use.</h2><div className="feature-list">{(p.features||[]).map(f=><div className="feature" key={f}>✓ {f}</div>)}</div></div>
    <div className="glass-screen"><img src={p.image} alt={`${p.title} dashboard details`}/></div>
  </section>

  <section className="container section">
    <div className="section-head"><div><span className="eyebrow">ARCHITECTURE</span><h2>A clean delivery architecture.</h2><p className="muted wide">A practical high-level model showing how the solution could be structured from interface to data and monitoring.</p></div></div>
    <Architecture items={p.architecture||[]}/>
  </section>

  <section className="container section">
    <div className="section-head"><div><span className="eyebrow">SCREENSHOTS</span><h2>Multiple views, not a single static card.</h2></div></div>
    <div className="gallery-grid">{(p.gallery||[]).map((g,i)=><div className="gallery-card" key={g}><div className="gallery-window"><div className="gallery-bar"><span></span><span></span><span></span><b>{g}</b></div><div className="gallery-body"><div className="chartline"></div><div className="data-row"></div><div className="data-row short"></div><div className="bars"><i></i><i></i><i></i><i></i></div></div></div><h3>{g}</h3><p className="muted">A focused interface view for this module with KPI, workflow and reporting details.</p></div>)}</div>
  </section>

  <section className="container section">
    <div className="section-head"><div><span className="eyebrow">DELIVERY PLAN</span><h2>Indicative project timeline.</h2></div></div>
    <div className="timeline">{(p.timeline||[]).map((t,i)=><div className="timeline-item" key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p className="muted">Structured delivery checkpoint with design, engineering and review outputs.</p></div>)}</div>
  </section>

  <section className="container section"><div className="finalcta"><span className="pill">Build something similar</span><h2>Turn this kind of solution into a real project plan.</h2><p className="muted">Share your requirements and Novaris can shape the scope, modules, architecture and delivery roadmap.</p><Link className="btn" href="/start-project">Start a Project →</Link></div></section>
  <footer className="footer">© 2026 Novaris Technology.</footer>
 </main>
}
