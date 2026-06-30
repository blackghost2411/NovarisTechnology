import Link from 'next/link'
import { PageShell, Hero, SectionTitle, Card } from '../components/Frame'
import { stats, services, projects, courses, solutions, faqs } from '../content/site'

export default function Home(){
 return <PageShell>
  <Hero title="Engineering the future with intelligent technology." subtitle="Novaris Technology designs premium enterprise software, AI automation, cloud infrastructure and digital platforms that help organizations operate faster, smarter and more securely." />
  <section className="stats">{stats.map(([n,t])=><div className="stat" key={t}><b>{n}</b><span>{t}</span></div>)}</section>
  <section className="section"><SectionTitle kicker="What we do" title="Intelligent solutions for modern businesses." desc="From concept to launch, Novaris combines software engineering, cloud architecture, AI systems and security-minded delivery into one unified technology partner."/><div className="grid cols-3">{services.map(s=><Card key={s.title}><div className="icon">{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p></Card>)}</div></section>
  <section className="section"><SectionTitle kicker="Portfolio" title="Showcase projects built around serious business problems." desc="These solution showcases demonstrate the type of enterprise-grade platforms Novaris can design, build and operate."/><div className="grid cols-2">{projects.slice(0,4).map(p=><Card key={p.slug} className="project"><div><div className="visual"/><span className="eyebrow">{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tech.slice(0,4).map(t=><span className="tag" key={t}>{t}</span>)}</div></div><Link className="btn ghost" href={`/projects#${p.slug}`}>View case study</Link></Card>)}</div></section>
  <section className="section split"><div><SectionTitle kicker="Training Academy" title="Professional courses for people who want practical technology skills." desc="A focused academy model for programming, AI, cloud, DevOps, cybersecurity and modern product development."/><Link className="btn" href="/training">Explore Training</Link></div><div className="grid">{courses.slice(0,4).map(([t,d])=><Card key={t}><h3>{t}</h3><p>{d}</p></Card>)}</div></section>
  <section className="section"><SectionTitle kicker="Industries" title="Built for organizations that need reliable digital transformation."/><div className="tags">{solutions.map(s=><span className="tag" key={s}>{s}</span>)}</div></section>
  <section className="section"><SectionTitle kicker="FAQ" title="Clear answers before we start."/><div className="grid cols-2">{faqs.map(([q,a])=><Card key={q}><h3>{q}</h3><p>{a}</p></Card>)}</div></section>
 </PageShell>
}
