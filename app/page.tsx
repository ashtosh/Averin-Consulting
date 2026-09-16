import Link from "next/link";
import { CTA } from "@/components/SiteShell";

const capabilities = [
  ["ASP", "Assortment Planning", "Pre-season and in-season assortment planning, localization, breadth, depth, clustering, size profiling and assortment decisions."],
  ["MFP", "Merchandise Financial Planning", "Sales, margin, markdown, inventory, receipts, OTB, scenarios and planning-measure dependencies."],
  ["A&R", "Allocation & Replenishment", "Initial allocation, replenishment, inventory positioning, store eligibility, size and pack logic, target stock and exception management."],
  ["D+AI", "Data Management & AI Advisory", "Planning data models, hierarchies, measures, data quality, integration, AI use cases, decision intelligence and adaptive planning agents."],
];

const impact = [
  ["01", "Assortment Clarity", "Improving assortment structure, localization and category-level decision quality."],
  ["02", "Financial Planning Discipline", "Strengthening sales, margin, inventory, receipts and OTB planning decisions."],
  ["03", "Inventory Productivity", "Improving allocation and replenishment decisions while reducing availability and excess-inventory risk."],
  ["04", "Data & AI Enablement", "Creating trusted planning data foundations and applying AI where it improves planner decisions."],
];

const services = [
  ["Assortment Planning Advisory", "Design and improve pre-season and in-season assortment processes, decision rules, localization, clustering and planning workflows."],
  ["Merchandise Financial Planning Advisory", "Define measures, dependencies, planning levels, hold/flex behavior, scenarios, OTB logic and financial-planning processes."],
  ["Allocation & Replenishment Advisory", "Improve initial allocation, replenishment, inventory-positioning rules, exception management and planner decision flows."],
  ["Data Management & AI Advisory", "Strengthen planning data, hierarchies, measures and integrations, then identify practical AI and adaptive-agent opportunities around these planning solutions."],
];

export default function Home() {
  return <>
    <section className="home-hero home-hero-brand"><div className="container hero-brand-grid">
      <div className="hero-brand-copy">
        <p className="eyebrow gold">ASSORTMENT PLANNING • MFP • ALLOCATION & REPLENISHMENT • DATA & AI</p>
        <h1>Focused Retail Planning.<br/><span>Built for Better Decisions.</span></h1>
        <p className="hero-copy">Independent advisory focused on four areas: Assortment Planning, Merchandise Financial Planning, Allocation & Replenishment, and Data Management & AI Advisory around these planning solutions.</p>
        <div className="hero-actions"><Link className="button button-gold" href="/contact">Talk to an Advisor <span>→</span></Link><Link className="button button-outline-light" href="/capabilities">Explore Capabilities <span>→</span></Link></div>
      </div>
      <div className="hero-impact-panel">
        <p className="panel-label">OUR IMPACT</p>
        {impact.map(([n,t,c]) => <article className="impact-item" key={t}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></article>)}
      </div>
    </div></section>

    <section className="capability-ribbon"><div className="container">
      <div className="section-header ribbon-heading"><p className="eyebrow">OUR FOUR CAPABILITIES</p><h2>Specialized retail planning expertise.</h2></div>
      <div className="card-grid">{capabilities.map(([code,title,copy]) => <article className="capability-card" key={title}><span className="capability-icon">{code}</span><h3>{title}</h3><p>{copy}</p><Link href="/capabilities">Explore →</Link></article>)}</div>
    </div></section>

    <section className="achievement-band"><div className="container achievement-grid">
      <div><strong>15+</strong><span>Years of retail planning and transformation experience</span></div>
      <div><strong>Focused</strong><span>Four core planning and data advisory capabilities</span></div>
      <div><strong>Independent</strong><span>Objective advisory aligned to client outcomes—not software quotas</span></div>
      <div><strong>Data + AI</strong><span>Modern decision intelligence grounded in practical retail-planning expertise</span></div>
    </div></section>

    <section className="section"><div className="container"><div className="section-header"><p className="eyebrow">HOW AVERIN HELPS</p><h2>Deep expertise in the planning decisions that matter.</h2><p className="lede">Averin helps retailers improve process, decision logic, data, technology and AI specifically across assortment planning, merchandise financial planning, allocation and replenishment.</p></div><div className="card-grid">{services.map(([t,c],i)=><article className="card premium-card" key={t}><span className="card-number">0{i+1}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>

    <section className="section section-dark luxe-dark"><div className="container"><div className="section-header"><p className="eyebrow light">AVERIN RETAIL PLANNING EXCELLENCE FRAMEWORK™</p><h2>Better planning requires more than software.</h2><p className="lede" style={{color:"#d7dce4"}}>We assess six dimensions together so improvements across assortment, MFP, allocation and replenishment are supported by the right process, data, technology and intelligence.</p></div><div className="framework">{["Strategy","Process","People","Data","Technology","Intelligence"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><span>{["Business objectives and financial outcomes","Decision flows, calendars and policies","Roles, governance and planner interaction","Hierarchies, attributes, measures and quality","Planning applications, integration and architecture","Analytics, optimization, ML and AI"][i]}</span></div>)}</div></div></section>

    <section className="section"><div className="container split"><div><p className="eyebrow">FLAGSHIP OFFER</p><h2>Retail Planning Health Check™</h2><p className="lede">A focused independent assessment of assortment planning, MFP, allocation and replenishment, together with the data and AI capabilities that support them.</p><div className="hero-actions"><Link className="button" href="/health-check">See the Health Check</Link></div></div><div className="callout"><h3>Typical outcomes</h3><ul className="plain-list"><li>Planning maturity score and capability heatmap</li><li>Top process and decision gaps</li><li>Data, measure and hierarchy gaps</li><li>Technology and integration observations</li><li>Prioritized AI opportunities</li><li>Practical transformation roadmap</li></ul></div></div></section>

    <section className="section section-soft"><div className="container split"><div><p className="eyebrow">SOFTWARE SELECTION ADVISORY</p><h2>Evaluate planning technology against real decisions.</h2><p className="lede">Averin defines comparable business scenarios for assortment planning, MFP, allocation and replenishment so platforms are evaluated against the same workflows, data needs, constraints and business outcomes.</p><div className="hero-actions"><Link className="button" href="/technology-advisory">Explore Technology Advisory</Link></div></div><div className="metric-strip"><div className="metric"><strong>Requirements</strong><span>Business, functional, data and AI requirements</span></div><div className="metric"><strong>Scripted demos</strong><span>Comparable planning scenarios across vendors</span></div><div className="metric"><strong>Recommendation</strong><span>Fit, risk, TCO and readiness</span></div></div></div></section>
    <CTA />
  </>;
}
