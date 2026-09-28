import Link from "next/link";
import { CTA } from "@/components/SiteShell";

const sprintFacts = [
  ["01", "2-Week Sprint", "A focused engagement built around one recurring replenishment decision—not a broad transformation program."],
  ["02", "CAD $5,000 Fixed Fee", "A defined scope, working prototype and clear decision outputs without a long consulting commitment."],
  ["03", "Use Your Existing Data", "Start with practical Excel, CSV, POS or planning extracts rather than waiting for a perfect data platform."],
  ["04", "Human-Controlled AI", "The prototype prioritizes and recommends actions while planners remain accountable for consequential decisions."],
];

const deliverables = [
  ["01", "Decision Map", "Document how replenishment decisions are actually made today: inputs, thresholds, constraints, exceptions and planner judgment."],
  ["02", "Exception Decision Prototype", "Turn sales and inventory data into a prioritized list of SKUs and locations that need replenish, hold, transfer or investigate decisions."],
  ["03", "Historical Back-Test", "Run the decision logic against prior periods to see what it would have surfaced and where the recommendations would have helped."],
  ["04", "90-Day AI Adoption Plan", "Define the practical path from manual review to AI-assisted exception management, recommendations and controlled automation."],
];

const broaderCapabilities = [
  ["ASP", "Assortment Planning", "Pre-season and in-season assortment design, localization, breadth, depth, clustering and size decisions."],
  ["MFP", "Merchandise Financial Planning", "Sales, margin, markdown, inventory, receipts, OTB, scenarios and planning-measure dependencies."],
  ["A&R", "Allocation & Replenishment", "Initial allocation, replenishment rules, target inventory, size logic, exceptions and planner overrides."],
  ["D+AI", "Data Management & AI Advisory", "Planning data foundations, measure governance, AI decision intelligence and adaptive planning approaches."],
];

export default function Home() {
  return <>
    <section className="home-hero home-hero-brand"><div className="container hero-brand-grid">
      <div className="hero-brand-copy">
        <p className="eyebrow gold">PRIMARY OFFERING • INVENTORY REPLENISHMENT & EXCEPTION DECISIONS</p>
        <h1>Turn Inventory Data Into<br/><span>Better Replenishment Decisions.</span></h1>
        <p className="hero-copy">Averin helps retailers take one recurring inventory and replenishment decision, encode how it is actually made, and turn it into a working AI-assisted decision prototype using the retailer&apos;s own data.</p>
        <div className="hero-actions"><Link className="button button-gold" href="/inventory-replenishment-sprint">See the 2-Week Sprint <span>→</span></Link><Link className="button button-outline-light" href="/contact">Apply for Design Partner Pilot <span>→</span></Link></div>
      </div>
      <div className="hero-impact-panel">
        <p className="panel-label">SPRINT AT A GLANCE</p>
        {sprintFacts.map(([n,t,c]) => <article className="impact-item" key={t}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></article>)}
      </div>
    </div></section>

    <section className="section"><div className="container"><div className="section-header"><p className="eyebrow">THE BUSINESS DECISION</p><h2>What needs attention this week—and what should the planner do about it?</h2><p className="lede">Instead of asking planners to review hundreds or thousands of SKU-location rows, the sprint focuses on the decisions hidden inside that work: what to replenish, what to hold, where stockout risk is emerging, where excess inventory is building and which exceptions deserve human attention.</p></div><div className="card-grid">{deliverables.map(([n,t,c])=><article className="card premium-card" key={t}><span className="card-number">{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>

    <section className="section section-soft"><div className="container split"><div><p className="eyebrow">WHAT THE PROTOTYPE CAN SURFACE</p><h2>A decision list—not another dashboard.</h2><p className="lede">The output is designed around planner action. Each exception combines the retailer&apos;s own sales, inventory and planning context with explicit decision logic and an explainable recommendation.</p><div className="hero-actions"><Link className="button" href="/inventory-replenishment-sprint">Explore the Sprint</Link></div></div><div className="callout"><h3>Example exception</h3><ul className="plain-list"><li><strong>SKU 123 / Store 4</strong></li><li>Weeks of supply: 1.2</li><li>Recent sales trend: +18%</li><li>On hand: 6 units</li><li>Available inventory: 42 units</li><li><strong>Recommended action: Replenish 12 units</strong></li><li>Reason: projected stockout risk with sufficient available inventory</li></ul></div></div></section>

    <section className="section section-dark luxe-dark"><div className="container"><div className="section-header"><p className="eyebrow light">WHY THIS IS DIFFERENT</p><h2>AI around a real retail decision—not AI for the sake of AI.</h2><p className="lede" style={{color:"#d7dce4"}}>The value is not a prompt that explains replenishment. The value is converting the retailer&apos;s own decision process, rules, data and exceptions into something explicit, testable and reusable.</p></div><div className="framework">{["Decision First","Retailer Data","Back-Tested","Human Controlled"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><span>{["Start with the recurring replenishment decision and planner workflow—not a generic AI use case.","Use real product, location, sales, inventory, incoming and planning data from the retailer.","Test the logic on historical periods before claiming value or moving toward automation.","AI observes, prioritizes and recommends; the retailer defines approval boundaries and control."][i]}</span></div>)}</div></div></section>

    <section className="section"><div className="container split"><div><p className="eyebrow">DESIGN PARTNER PROGRAM</p><h2>One retailer. One decision. One working proof.</h2><p className="lede">Averin is looking for a limited design partner to test the sprint on a real replenishment workflow. The selected retailer can receive the professional-fee portion of the sprint at no cost in exchange for planner access, practical feedback and permission to use anonymized learnings as a case study.</p><div className="hero-actions"><Link className="button" href="/contact">Apply for the Pilot</Link></div></div><div className="callout"><h3>Standard commercial offer</h3><ul className="plain-list"><li><strong>CAD $5,000 fixed fee</strong></li><li>Approximately 2 weeks</li><li>One replenishment / inventory exception decision</li><li>Existing Excel, CSV, POS or planning extracts</li><li>Decision map + working prototype</li><li>Historical back-test + 90-day adoption plan</li></ul></div></div></section>

    <section className="capability-ribbon"><div className="container">
      <div className="section-header ribbon-heading"><p className="eyebrow">BROADER AVERIN EXPERTISE</p><h2>Deep planning expertise behind the primary offer.</h2><p className="lede">The replenishment sprint is the front-door service. Broader advisory remains available where the work naturally expands into assortment planning, merchandise financial planning, allocation, planning data or AI.</p></div>
      <div className="card-grid">{broaderCapabilities.map(([code,title,copy]) => <article className="capability-card" key={title}><span className="capability-icon">{code}</span><h3>{title}</h3><p>{copy}</p><Link href="/capabilities">Explore →</Link></article>)}</div>
    </div></section>

    <CTA title="Test one replenishment decision on your own data." copy="Start small. Pick one recurring inventory or replenishment decision, use the data you already have, and find out whether an AI-assisted decision approach creates measurable value." />
  </>;
}
