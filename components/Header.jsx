import Link from 'next/link';
const nav=[['Services','/services'],['Solutions','/solutions'],['Projects','/projects'],['About','/about'],['Contact','/contact']];
export default function Header(){return <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">N</span><span><strong>NOVARIS</strong><small>TECHNOLOGY</small></span></Link><nav>{nav.map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</nav><Link className="header-cta" href="/contact">Start a Project</Link></header>}
