import Link from 'next/link';

export default function Page(){
  const title = 'Projects';
  return <main className="subpage">
    <section className="sub-hero">
      <p className="section-kicker">Novaris Technology</p>
      <h1>{title}</h1>
      <p>Premium enterprise technology content for Novaris Technology. This page is designed to strengthen company credibility and present services with a polished professional tone.</p>
    </section>
    <section className="content-grid">
      <article className="content-card"><h2>Enterprise-grade delivery</h2><p>We design, develop and deploy reliable software, cloud infrastructure and AI-powered systems with a focus on performance, security and maintainability.</p></article>
      <article className="content-card"><h2>Professional positioning</h2><p>Every page supports the company image with clear capabilities, technical language, realistic service descriptions and a premium digital presence.</p></article>
      <article className="content-card"><h2>Next step</h2><p>Customize this section with specific company details, client use cases, projects, service packages and contact information.</p><Link href="/contact">Contact Novaris →</Link></article>
    </section>
  </main>
}
