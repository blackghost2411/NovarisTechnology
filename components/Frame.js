import Link from 'next/link'
import { brand } from '../content/site'

export function Logo(){
  return <Link href="/" className="logo"><span className="mark">N</span><span><strong>{brand.name}</strong><small>{brand.tagline}</small></span></Link>
}

export function Navbar(){
  const links = [['/about','About'],['/services','Services'],['/projects','Projects'],['/training','Training'],['/contact','Contact']]
  return <header className="nav"><div className="nav-inner"><Logo/><nav>{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}<Link href="/ar" className="lang">العربية</Link></nav><Link className="btn small" href="/contact">Start a Project</Link></div></header>
}

export function Footer(){
  const cols = [
    ['Company',[['/about','About'],['/projects','Projects'],['/training','Training'],['/contact','Contact']]],
    ['Services',[['/services','Enterprise Software'],['/services','AI Solutions'],['/services','Cloud Infrastructure'],['/services','DevOps']]],
    ['Legal',[['/privacy','Privacy'],['/terms','Terms'],['/acceptable-use','Acceptable Use']]]
  ]
  return <footer className="footer"><div className="footer-cta"><div><span className="eyebrow">Ready for the next move?</span><h2>Build a digital platform that looks premium and works seriously.</h2></div><Link className="btn" href="/contact">Talk to Novaris</Link></div><div className="footer-grid"><div><Logo/><p>Novaris Technology designs enterprise software, cloud infrastructure, AI solutions and training programs for modern organizations.</p></div>{cols.map(([t,items])=><div key={t}><h4>{t}</h4>{items.map(([href,label])=><Link key={label} href={href}>{label}</Link>)}</div>)}</div><div className="copyright">© 2026 Novaris Technology. All rights reserved.</div></footer>
}

export function PageShell({children}){return <><div className="bg"><span/><span/><span/></div><Navbar/><main>{children}</main><Footer/></>}

export function Hero({title,subtitle,kicker='Novaris Technology',children}){
 return <section className="hero"><div className="mesh"/><div className="hero-content"><div className="pill">{kicker}</div><h1>{title}</h1><p>{subtitle}</p><div className="hero-actions"><Link href="/services" className="btn">Explore Services</Link><Link href="/projects" className="btn ghost">View Projects</Link></div>{children}</div><DashboardMockup/></section>
}

export function DashboardMockup(){
 return <div className="mockup" aria-hidden="true"><div className="mockup-top"><span/><span/><span/></div><div className="mockup-grid"><div className="metric"><b>$98.7k</b><small>Cloud efficiency</small></div><div className="metric"><b>99.9%</b><small>Reliability target</small></div><div className="chart"><i/><i/><i/><i/><i/></div><div className="orb-card"><div className="orb">N</div><p>AI Operations Cloud</p></div></div></div>
}

export function SectionTitle({kicker,title,desc}){return <div className="section-title"><span className="eyebrow">{kicker}</span><h2>{title}</h2>{desc&&<p>{desc}</p>}</div>}

export function Card({children,className=''}){return <div className={'card '+className}>{children}</div>}
