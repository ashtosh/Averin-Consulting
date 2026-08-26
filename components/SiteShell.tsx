import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["Services", "/services"],
  ["Capabilities", "/capabilities"],
  ["Technology Advisory", "/technology-advisory"],
  ["AI Advisory", "/ai-retail-planning"],
  ["Insights", "/insights"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="brand brand-image" href="/" aria-label="Averin Consulting home">
      <img src="/averin-logo.svg" alt="Averin Consulting" className="brand-logo" />
    </Link>
    <nav className="desktop-nav">{nav.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}</nav>
    <Link className="button button-small" href="/contact">Talk to an Advisor</Link>
  </div><div className="mobile-nav">{nav.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}<Link href="/contact">Contact</Link></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid"><div>
    <Link className="brand footer-brand brand-image" href="/" aria-label="Averin Consulting home"><img src="/averin-logo.svg" alt="Averin Consulting" className="footer-logo" /></Link>
    <p>Independent retail planning, supply chain, technology and AI advisory for retailers and manufacturers.</p>
    <p className="footer-lifecycle" aria-label="Closed-loop planning lifecycle">PLAN <span>→</span> BUY <span>→</span> MOVE <span>→</span> SELL <span>→</span> SHAPE <span>↺</span> PLAN</p>
  </div><div><h4>Advisory</h4><Link href="/services">Services</Link><Link href="/technology-advisory">Software Selection</Link><Link href="/health-check">Planning Health Check</Link></div>
  <div><h4>Expertise</h4><Link href="/capabilities">Planning Capabilities</Link><Link href="/ai-retail-planning">AI for Retail Planning</Link><Link href="/insights">Insights</Link></div>
  <div><h4>Start a conversation</h4><p>Planning transformation, software evaluation, implementation assurance or an independent health check.</p><Link className="text-link" href="/contact">Contact Averin →</Link></div></div>
  <div className="container footer-bottom"><span>© {new Date().getFullYear()} Averin Consulting. All rights reserved.</span><span>Independent advisory • Deep domain expertise • Closed-loop planning</span></div></footer>;
}

export function PageHero({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children?:ReactNode}) {
  return <section className="page-hero"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{description}</p>{children}</div></section>;
}

export function CTA({title="Make the next planning decision with confidence.",copy="Tell us where planning is getting stuck. Averin can help assess the problem, define the target state and create a practical path forward."}:{title?:string;copy?:string}) {
  return <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow light">START A CONVERSATION</p><h2>{title}</h2><p>{copy}</p></div><Link className="button button-light" href="/contact">Talk to an Advisor</Link></div></section>;
}
