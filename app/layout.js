import './globals.css';
import { company } from '../content/site';

export const metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: company.summary,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg" />
        <div className="grid" />
        <nav className="nav">
          <a className="brand" href="/"><span className="logo" />{company.name}</a>
          <div className="links">
            <a href="/about">About</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/training">Training</a><a href="/contact">Contact</a>
          </div>
          <a className="btn" href="/contact">Start a Project</a>
        </nav>
        {children}
        <footer className="footer"><div className="wrap"><span>© 2026 {company.name}. All rights reserved.</span><span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span></div></footer>
      </body>
    </html>
  );
}
