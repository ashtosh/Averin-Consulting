import Link from "next/link";
import { CTA } from "@/components/SiteShell";

const capabilities = [
  ["MFP", "Merchandise Financial Planning", "Financial targets, margin, inventory, receipts, OTB and scenario planning."],
  ["ASP", "Assortment & Category Planning", "Pre-season and in-season assortment, localization, breadth, depth and category decisions."],
  ["DP", "Demand Planning & Forecasting", "Forecasting, demand signals, exceptions and decision-oriented planning."],
  ["INV", "Allocation & Inventory Planning", "Initial allocation, replenishment, inventory positioning, size and store-level execution."],
  ["SC", "Supply Chain & Distribution Planning", "Distribution, deployment, balancing, constraints and network inventory decisions."],
  ["BOM", "Procurement & BOM Planning", "Supplier, material, BOM, lead-time, MOQ and recommended procurement planning."],
  ["AI", "AI & Analytics for Retail Planning", "AI use cases, planning intelligence, decision support, automation and architecture."],
];

const impact = [
  ["01", "Strategic Planning Excellence", "Driving smarter decisions and stronger financial alignment."],
  ["02", "Inventory Optimization", "Improving inventory turns while reducing markdown and availability risk."],
  ["03", "Operational Efficiency", "Streamlining planning processes, decision flows and planner interaction."],
  ["04", "AI-Enabled Transformation", "Applying data, AI and automation where they can unlock measurable value."],
];

const services = [
  ["Retail Planning Advisory", "Assess planning maturity, expose decision gaps and define operating-model, KPI and transformation priorities."],
  ["Technology & Software Selection", "Translate planning decisions into requirements and evaluate platforms through comparable business scenarios."],
  ["Planning Transformation", "Connect merchandise, demand, inventory and supply planning into one coherent decision system."],
  ["Independent Design Authority", "Provide retailer-side architecture, process and solution assurance through implementation."],
];

export default function Home() {
  return <>
    <section className="home-hero home-hero-brand"><div className="container hero-brand-grid">
      <div className="hero-brand-copy">
        <p className="eyebrow gold">INDEPENDENT RETAIL PLANNING • SUPPLY CHAIN • AI ADVISORY</p>
        <h1>Retail Planning.<br/>Supply Chain.<br/><span>Powered by AI.</span></h1>
        <p className="hero-copy">Independent advisory for ambitious fashion, luxury and specialty retailers—connecting strategy, planning, inventory, technology and AI to better business decisions.</p>
        <div className="hero-actions"><Link className="button button-gold" href="/contact">Talk to an Advisor <span>→</span></Link><Link className="button button-outline-light" href="/capabilities">Explore Capabilities <span>→</span></Link></div>
        <div className="lifecycle" aria-label="Retail lifecycle"><span><b>01</b>PLAN</span><i>→</i><span><b>02</b>BUY</span><i>→</i><span><b>03</b>MOVE</span><i>→</i><span><b>04</b>SELL</span></div>
      </div>
      <div className="hero-impact-panel">
        <p className="panel-label">OUR IMPACT</p>
        {impact.map(([n,t,c]) => <article className="impact-item" key={t}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></article>)}
      </div>
    </div></section>

    <section className="capability-ribbon"><div className="container">
      <div className="section-header ribbon-heading"><p className="eyebrow">OUR CAPABILITIES</p><h2>End-to-end retail planning expertise.</h2></div>
      <div className="capability-grid">{capabilities.map(([code,title,copy]) => <article className="capability-card" key={title}><span className="capability-icon">{code}</span><h3>{title}</h3><p>{copy}</p><Link href="/capabilities">Explore →</Link></article>)}</div>
    </div></section>

    <section className="achievement-band"><div className="container achievement-grid">
      <div><strong>15+</strong><span>Years of planning and transformation experience</span></div>
      <div><strong>Global</strong><span>Retail & manufacturing expertise across planning and supply chain</span></div>
      <div><strong>Independent</strong><span>Objective advisory aligned to client outcomes—not software quotas</span></div>
      <div><strong>End-to-end</strong><span>Strategy through process, architecture, implementation and value realization</span></div>
    </div></section>

    <section className="section"><div className="container"><div className="section-header"><p className="eyebrow">HOW AVERIN HELPS</p><h2>Advisory built around decisions—not software features.</h2><p className="lede">Averin helps planning leaders define what good looks like, select technology with confidence and translate strategy into executable planning capabilities.</p></div><div className="card-grid">{services.map(([t,c],i)=><article className="card premium-card" key={t}><span className="card-number">0{i+1}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>

    <section className="section section-dark luxe-dark"><div className="container"><div className="section-header"><p className="eyebrow light">AVERIN RETAIL PLANNING EXCELLENCE FRAMEWORK™</p><h2>Transformation requires more than technology.</h2><p className="lede" style={{color:"#d7dce4"}}>We assess six dimensions together so planning improvements are anchored in the decisions the business needs to make.</p></div><div className="framework">{["Strategy","Process","People","Data","Technology","Intelligence"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><span>{["Business objectives and financial outcomes","Decision flows, calendars and policies","Roles, governance and planner interaction","Hierarchies, attributes, measures and quality","Applications, integration and architecture","Analytics, optimization, ML and AI"][i]}</span></div>)}</div></div></section>

    <section className="section"><div className="container split"><div><p className="eyebrow">FLAGSHIP OFFER</p><h2>Retail Planning Health Check™</h2><p className="lede">A structured independent assessment of process, organization, KPIs, data, technology, analytics and AI readiness.</p><div className="hero-actions"><Link className="button" href="/health-check">See the Health Check</Link></div></div><div className="callout"><h3>Typical outcomes</h3><ul className="plain-list"><li>Planning maturity score and capability heatmap</li><li>Top process and decision gaps</li><li>Technology and integration gaps</li><li>Prioritized AI opportunities</li><li>Quick wins and transformation priorities</li><li>12–24 month roadmap</li></ul></div></div></section>

    <section className="section section-soft"><div className="container split"><div><p className="eyebrow">SOFTWARE SELECTION ADVISORY</p><h2>Don’t compare features. Compare decisions.</h2><p className="lede">Averin defines common business scenarios so every platform is evaluated against the same planning decisions, constraints, workflows and financial outcomes.</p><div className="hero-actions"><Link className="button" href="/technology-advisory">Explore Technology Advisory</Link></div></div><div className="metric-strip"><div className="metric"><strong>Requirements</strong><span>Business, functional, data and architecture</span></div><div className="metric"><strong>Scripted demos</strong><span>Comparable scenarios across vendors</span></div><div className="metric"><strong>Recommendation</strong><span>Fit, risk, TCO and readiness</span></div></div></div></section>
    <CTA />
  </>;
}
