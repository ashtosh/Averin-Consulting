import Link from "next/link";
import { CTA } from "@/components/SiteShell";

const diagnosticFacts = [
  ["01", "Focused Diagnostic", "A short, defined engagement around one real replenishment decision—not a software implementation."],
  ["02", "No New Application", "Start with an agreed Excel, CSV, POS or planning-system extract. No new login, SSO or production deployment is required for V1."],
  ["03", "Compare Existing Decisions", "Evaluate current-tool recommendations, planner overrides, actual execution and an independent Averin diagnostic side by side."],
  ["04", "AI Adoption Path", "Identify where better rules, exception prioritization, analytics or AI can improve the decision before investing in automation."],
];

const deliverables = [
  ["01", "Replenishment Decision Map", "Document how the decision is actually made today: data, thresholds, current-system logic, planner judgment, overrides and execution."],
  ["02", "Decision & Exception Workbook", "Prioritize SKU-location exceptions and compare current-tool recommendations, planner overrides and independent diagnostic recommendations."],
  ["03", "Historical & Policy Assessment", "Use available historical snapshots and outcomes to examine where existing rules, planner judgment and alternative logic differ."],
  ["04", "AI & Automation Roadmap", "Define the practical progression from better rules and filtering to decision recommendations, AI assistance and controlled automation."],
];

const broaderCapabilities = [
  ["ASP", "Assortment Planning", "Pre-season and in-season assortment design, localization, breadth, depth, clustering and size decisions."],
  ["MFP", "Merchandise Financial Planning", "Sales, margin, markdown, inventory, receipts, OTB, scenarios and planning-measure dependencies."],
  ["A&R", "Allocation & Replenishment", "Initial allocation, replenishment rules, target inventory, size logic, exceptions and planner overrides."],
  ["D+AI", "Data Management & AI Advisory", "Planning data foundations, measure governance, AI decision intelligence and practical adoption roadmaps."],
];

export default function Home() {
  return <>
    <section className="home-hero home-hero-brand"><div className="container hero-brand-grid">
      <div className="hero-brand-copy">
        <p className="eyebrow gold">PRIMARY OFFERING • INVENTORY REPLENISHMENT DECISION DIAGNOSTIC</p>
        <h1>Improve the Decision.<br/><span>Before Adding More Software.</span></h1>
        <p className="hero-copy">Averin helps retailers assess how replenishment decisions are being made today—across existing planning tools, planner overrides and execution—and identifies where rules, exception intelligence and AI can improve decision quality.</p>
        <div className="hero-actions"><Link className="button button-gold" href="/inventory-replenishment-sprint">Explore the Diagnostic <span>→</span></Link><Link className="button button-outline-light" href="/contact">Discuss One Decision <span>→</span></Link></div>
      </div>
      <div className="hero-impact-panel">
        <p className="panel-label">DIAGNOSTIC AT A GLANCE</p>
        {diagnosticFacts.map(([n,t,c]) => <article className="impact-item" key={t}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></article>)}
      </div>
    </div></section>

    <section className="section"><div className="container"><div className="section-header"><p className="eyebrow">THE BUSINESS QUESTION</p><h2>Is your current replenishment process consistently surfacing the right decision?</h2><p className="lede">The diagnostic does not assume that the existing platform is wrong or that a new AI application is needed. It examines what the current tool recommends, where planners override it, what is actually executed, and where recurring exceptions or decision gaps remain.</p></div><div className="card-grid">{deliverables.map(([n,t,c])=><article className="card premium-card" key={t}><span className="card-number">{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>

    <section className="section section-soft"><div className="container split"><div><p className="eyebrow">DECISION COMPARISON</p><h2>Current tool. Planner judgment. Actual execution. Independent diagnostic.</h2><p className="lede">Averin captures the full decision sequence instead of evaluating replenishment from a single output. Repeated overrides and their reasons can become valuable evidence for future configuration changes, exception intelligence and later AI models.</p><div className="hero-actions"><Link className="button" href="/inventory-replenishment-sprint">See What We Analyze</Link></div></div><div className="callout"><h3>Example decision history</h3><ul className="plain-list"><li><strong>Existing tool:</strong> Replenish 24 units</li><li><strong>Planner override:</strong> 12 units</li><li>Reason: upcoming markdown / seasonal exit</li><li><strong>Actual executed:</strong> 12 units</li><li><strong>Averin diagnostic:</strong> compares decision context and exception logic</li><li><strong>Later phase:</strong> compare each decision against the actual outcome</li></ul></div></div></section>

    <section className="section section-dark luxe-dark"><div className="container"><div className="section-header"><p className="eyebrow light">WHY THIS IS DIFFERENT</p><h2>Independent decision assessment—not another platform implementation.</h2><p className="lede" style={{color:"#d7dce4"}}>Averin can work across Blue Yonder, o9, ERP, Excel or internally built planning environments. The objective is not to replace a system that already works; it is to determine where decision quality, exception handling, configuration, planner overrides or automation can be improved.</p></div><div className="framework">{["Vendor Independent","No Deployment V1","Decision Evidence","Practical AI"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><span>{["Evaluate the replenishment decision across the retailer's existing ecosystem rather than starting from a software vendor's feature set.","Begin with an agreed data extract and consulting deliverables—no new production application is required.","Capture tool recommendation, planner override, execution and eventually outcome as separate pieces of evidence.","Recommend AI only where it adds value after rules, data quality and decision design have been assessed."][i]}</span></div>)}</div></div></section>

    <section className="section"><div className="container split"><div><p className="eyebrow">HOW AN ENGAGEMENT STARTS</p><h2>One workflow. One extract. One independent assessment.</h2><p className="lede">Averin starts by observing how a planner or buyer makes the replenishment decision today. The retailer then provides an agreed extract, and Averin returns a decision workbook, findings and a practical improvement roadmap.</p><div className="hero-actions"><Link className="button" href="/contact">Discuss a Diagnostic</Link></div></div><div className="callout"><h3>Typical engagement inputs</h3><ul className="plain-list"><li>Recent sales and inventory</li><li>Open / incoming inventory</li><li>Lead times, pack sizes and target stock policies</li><li>Current replenishment-tool recommendation where available</li><li>Planner override quantity and reason where available</li><li>Actual executed quantity</li><li>Historical outcomes where available for validation</li></ul></div></div></section>

    <section className="capability-ribbon"><div className="container">
      <div className="section-header ribbon-heading"><p className="eyebrow">BROADER AVERIN EXPERTISE</p><h2>Deep retail-planning expertise behind the diagnostic.</h2><p className="lede">The replenishment diagnostic is the primary front-door service. Broader advisory remains available where findings expand into assortment planning, merchandise financial planning, allocation, data management or AI.</p></div>
      <div className="card-grid">{broaderCapabilities.map(([code,title,copy]) => <article className="capability-card" key={title}><span className="capability-icon">{code}</span><h3>{title}</h3><p>{copy}</p><Link href="/capabilities">Explore →</Link></article>)}</div>
    </div></section>

    <CTA title="Start with the replenishment decision you already make today." copy="No new application is required for the first engagement. Use an agreed extract from the systems you already have and identify where better rules, exception intelligence or AI can create value." />
  </>;
}
