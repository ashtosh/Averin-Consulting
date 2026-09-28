import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["Replenishment Diagnostic", "/inventory-replenishment-sprint"],
  ["Capabilities", "/capabilities"],
  ["Data & AI", "/ai-retail-planning"],
  ["Insights", "/insights"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="brand brand-image" href="/" aria-label="Averin Consulting home">
      <img src="/averin-logo.svg" alt="Averin Consulting" className="brand-logo" />
    </Link>
    <nav className="desktop-nav">{nav.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}</nav>
    <Link className="button button-small" href="/contact">Discuss a Diagnostic</Link>
  </div><div className="mobile-nav">{nav.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}<Link href="/contact">Contact</Link></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid"><div>
    <Link className="brand footer-brand brand-image" href="/" aria-label="Averin Consulting home"><img src="/averin-logo.svg" alt="Averin Consulting" className="footer-logo" /></Link>
    <p>Decision-first retail planning advisory focused on inventory replenishment, exception management, planner overrides and practical AI adoption.</p>
    <p className="footer-lifecycle" aria-label="Primary offering">CURRENT TOOL <span>→</span> PLANNER JUDGMENT <span>→</span> EXECUTION <span>→</span> OUTCOME</p>
  </div><div><h4>Primary Offer</h4><Link href="/inventory-replenishment-sprint">Replenishment Decision Diagnostic</Link><Link href="/contact">Discuss a Diagnostic</Link></div>
  <div><h4>Broader Expertise</h4><Link href="/capabilities">Planning Capabilities</Link><Link href="/services">Advisory Services</Link><Link href="/ai-retail-planning">Data & AI Advisory</Link><Link href="/technology-advisory">Technology Advisory</Link></div>
  <div><h4>Start with one decision</h4><p>Use an agreed extract from the systems you already have. Averin can independently assess the replenishment decision before you add more software or automation.</p><Link className="text-link" href="/contact">Contact Averin →</Link></div></div>
  <div className="container footer-bottom"><span>© {new Date().getFullYear()} Averin Consulting. All rights reserved.</span><span>Independent advisory • Retail planning expertise • Practical AI</span></div></footer>;
}

export function PageHero({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children?:ReactNode}) {
  return <section className="page-hero"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{description.replaceAll("&apos;", "'")}</p>{children}</div></section>;
}

export function CTA({title="Start with the replenishment decision you already make today.",copy="No new application is required for the first engagement. Use an agreed extract from the systems you already have and identify where better rules, exception intelligence or AI can create value."}:{title?:string;copy?:string}) {
  return <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow light">START WITH THE DECISION</p><h2>{title}</h2><p>{copy}</p></div><Link className="button button-light" href="/contact">Discuss a Diagnostic</Link></div></section>;
}
