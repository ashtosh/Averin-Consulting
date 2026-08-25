import Link from "next/link";
import { CTA } from "@/components/SiteShell";

const services = [
  ["01", "Retail Planning Advisory", "Assess planning maturity, expose decision gaps and define the operating model, KPIs and transformation roadmap needed to improve outcomes."],
  ["02", "Planning Technology & Software Selection", "Translate business decisions into requirements, run scenario-based vendor evaluations and recommend technology with independence."],
  ["03", "Planning Transformation", "Connect merchandise, demand, inventory and supply planning so the process works as an integrated decision system—not disconnected tools."],
  ["04", "AI-Enabled Retail Planning", "Identify practical AI use cases across forecasting, exception management, scenario evaluation, decision support and planning automation."],
];

const capabilities = ["Merchandise Financial Planning", "Pre-Season Assortment", "In-Season Assortment", "Demand Planning", "Allocation", "Replenishment", "Distribution Planning & BOD", "Procurement & BOM Planning"];

export default function Home() {
  return <>
    <section className="home-hero"><div className="container">
      <p className="eyebrow">INDEPENDENT RETAIL PLANNING & SUPPLY CHAIN ADVISORY</p>
      <h1>Better retail planning decisions. Better technology choices.</h1>
      <p className="hero-copy">Averin Consulting helps retailers and manufacturers improve planning decisions, modernize planning processes, select the right technology and build more intelligent planning organizations.</p>
      <div className="hero-actions"><Link className="button" href="/contact">Talk to a Retail Planning Advisor</Link><Link className="button button-outline" href="/capabilities">Explore Our Capabilities</Link></div>
      <div className="hero-proof"><div><strong>Practitioner-led</strong><span>Deep planning and solution experience</span></div><div><strong>Vendor-neutral</strong><span>Advice based on business fit</span></div><div><strong>Decision-focused</strong><span>From metrics to planner action</span></div><div><strong>AI-enabled</strong><span>Modern methods without AI theatre</span></div></div>
    </div></section>

    <section className="section"><div className="container"><div className="section-header"><p className="eyebrow">WHAT WE HELP SOLVE</p><h2>Planning complexity should not become decision complexity.</h2><p className="lede">Averin connects business strategy, planning processes, data, technology and AI so teams can make faster, clearer and more financially aligned decisions.</p></div><div className="card-grid">{services.map(([n,t,c])=><article className="card" key={t}><span className="card-number">{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>

    <section className="section section-soft"><div className="container"><div className="section-header"><p className="eyebrow">END-TO-END PLANNING EXPERTISE</p><h2>Retail planning capabilities from financial targets to inventory execution.</h2></div><div className="card-grid">{capabilities.map(c=><div className="card" key={c}><h3>{c}</h3><Link className="text-link" href="/capabilities">Explore capability →</Link></div>)}</div></div></section>

    <section className="section section-dark"><div className="container"><div className="section-header"><p className="eyebrow light">AVERIN RETAIL PLANNING EXCELLENCE FRAMEWORK™</p><h2>Technology is only one part of a planning transformation.</h2><p className="lede" style={{color:"#cbd7e4"}}>We assess six dimensions together so improvements are anchored in the decisions the business needs to make.</p></div><div className="framework">{["Strategy","Process","People","Data","Technology","Intelligence"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><span>{["Business objectives and financial outcomes","Decision flows, calendars and policies","Roles, governance and planner interaction","Hierarchies, attributes, measures and quality","Applications, integration and architecture","Analytics, optimization, ML and AI"][i]}</span></div>)}</div></div></section>

    <section className="section"><div className="container split"><div><p className="eyebrow">FLAGSHIP OFFER</p><h2>Retail Planning Health Check™</h2><p className="lede">A structured independent assessment of process, organization, KPIs, data, technology, analytics and AI readiness.</p><div className="hero-actions"><Link className="button" href="/health-check">See the Health Check</Link></div></div><div className="callout"><h3>Typical outcomes</h3><ul className="plain-list"><li>Planning maturity score and capability heatmap</li><li>Top process and decision gaps</li><li>Technology and integration gaps</li><li>Prioritized AI opportunities</li><li>Quick wins and transformation priorities</li><li>12–24 month roadmap</li></ul></div></div></section>

    <section className="section section-soft"><div className="container split"><div><p className="eyebrow">SOFTWARE SELECTION ADVISORY</p><h2>Don’t compare features. Compare decisions.</h2><p className="lede">Averin defines common business scenarios so every platform is evaluated against the same planning decisions, constraints, workflows and financial outcomes.</p><div className="hero-actions"><Link className="button" href="/technology-advisory">Explore Technology Advisory</Link></div></div><div className="metric-strip"><div className="metric"><strong>Requirements</strong><span>Business, functional, data and architecture</span></div><div className="metric"><strong>Scripted demos</strong><span>Comparable scenarios across vendors</span></div><div className="metric"><strong>Recommendation</strong><span>Fit, risk, TCO and readiness</span></div></div></div></section>
    <CTA />
  </>;
}
