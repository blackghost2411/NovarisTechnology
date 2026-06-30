import { Shell, PageHero } from '../../components/Site'
import { projects } from '../../components/data'
export default function Projects(){return <Shell><PageHero title="Projects and case studies." subtitle="A polished portfolio of enterprise-grade platform concepts and implementation patterns."/><section className="section"><div className="portfolio">{projects.map(p=><article className="case" key={p.title}><span>{p.tag}</span><h2>{p.title}</h2><p>{p.desc}</p><div className="chips">{p.stack.map(s=><em key={s}>{s}</em>)}</div><strong>{p.metric}</strong></article>)}</div></section></Shell>}
