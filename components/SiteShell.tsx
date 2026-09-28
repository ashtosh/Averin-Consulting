import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["Replenishment Sprint", "/inventory-replenishment-sprint"],
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
    <Link className="button button-small" href="/contact">Apply for Pilot</Link>
  </div><div className="mobile-nav">{nav.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}<Link href="/contact">Contact</Link></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid"><div>
    <Link className="brand footer-brand brand-image" href="/" aria-label="Averin Consulting home"><img src="/averin-logo.svg" alt="Averin Consulting" className="footer-logo" /></Link>
    <p>Decision-first retail planning advisory focused on inventory replenishment, exception management and practical AI adoption.</p>
    <p className="footer-lifecycle" aria-label="Primary offering">INVENTORY <span>•</span> REPLENISHMENT <span>•</span> EXCEPTIONS <span>•</span> AI DECISIONS</p>
  </div><div><h4>Primary Offer</h4><Link href="/inventory-replenishment-sprint">Replenishment Decision Sprint</Link><Link href="/contact">Design Partner Pilot</Link></div>
  <div><h4>Broader Expertise</h4><Link href="/capabilities">Planning Capabilities</Link><Link href="/services">Advisory Services</Link><Link href="/ai-retail-planning">Data & AI Advisory</Link><Link href="/technology-advisory">Technology Advisory</Link></div>
  <div><h4>Start with one decision</h4><p>Pick one recurring replenishment or inventory exception decision. Averin can map it, prototype it on your data and back-test it before you scale.</p><Link className="text-link" href="/contact">Contact Averin →</Link></div></div>
  <div className="container footer-bottom"><span>© {new Date().getFullYear()} Averin Consulting. All rights reserved.</span><span>Decision-first advisory • Retail planning expertise • Practical AI</span></div></footer>;
}

export function PageHero({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children?:ReactNode}) {
  return <section className="page-hero"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{description.replaceAll("&apos;", "'")}</p>{children}</div></section>;
}

export function CTA({title="Test one replenishment decision on your own data.",copy="Start with one recurring inventory or replenishment decision. Averin can map the decision, build a working exception prototype and back-test it before you make a larger AI investment."}:{title?:string;copy?:string}) {
  return <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow light">START SMALL. PROVE VALUE.</p><h2>{title}</h2><p>{copy}</p></div><Link className="button button-light" href="/contact">Discuss the Sprint</Link></div></section>;
}
