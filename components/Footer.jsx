import Link from 'next/link';

export function Footer(){
  return <footer className="footer">
    <div className="footer-grid">
      <div>
        <div className="footer-brand"><span className="brand-mark"><span>N</span></span><b>Novaris Technology</b></div>
        <p>Enterprise software, AI automation and cloud infrastructure engineered for organizations that expect reliability, speed and executive-grade delivery.</p>
      </div>
      <div><h4>Company</h4><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div>
      <div><h4>Capabilities</h4><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/privacy">Privacy</Link></div>
      <div><h4>Legal</h4><Link href="/terms">Terms</Link><Link href="/acceptable-use">Acceptable Use</Link></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Novaris Technology. All rights reserved.</span><span>Built for secure digital transformation.</span></div>
  </footer>
}
