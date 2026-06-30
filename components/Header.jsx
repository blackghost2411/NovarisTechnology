import Link from 'next/link';

const nav = [
  ['Services', '/services'],
  ['Solutions', '/solutions'],
  ['Projects', '/projects'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function Header() {
  return (
    <header className="header">
      <Link className="brand" href="/">
        <span className="brand-mark"><span>N</span></span>
        <span><strong>Novaris</strong><em>Technology</em></span>
      </Link>
      <nav className="nav">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="nav-cta" href="/contact">Start a Project</Link>
    </header>
  );
}
