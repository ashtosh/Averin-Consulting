import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, PageHero } from "@/components/SiteShell";

type PageData = { eyebrow:string; title:string; description:string; sections:{title:string; copy?:string; items?:string[]}[]; cta?:string };

const pages: Record<string, PageData> = {
  services: {
    eyebrow:"SERVICES", title:"Independent advice from planning strategy to implementation assurance.", description:"Engage Averin for a targeted diagnostic, software selection, future-state planning design, AI advisory or independent oversight of a larger transformation.",
    sections:[
      {title:"Retail Planning Advisory",copy:"Assess planning maturity, expose decision gaps and define the operating model, KPIs and transformation roadmap.",items:["Planning maturity assessment","Current-state diagnostic","Operating model and governance","KPI and decision framework","Transformation roadmap"]},
      {title:"Planning Technology & Software Selection",copy:"Vendor-neutral support from requirements through recommendation using business scenarios instead of feature-list comparisons.",items:["Capability and functional requirements","RFI / RFP design","Vendor longlist and shortlist","Scripted demonstrations","Scoring, TCO and architecture assessment"]},
      {title:"Planning Transformation",copy:"Future-state process and solution design built around a closed-loop PLAN → BUY → MOVE → SELL → SHAPE → PLAN operating model.",items:["Process redesign","Decision rights and planner roles","Closed-loop feedback and learning","Planning calendar","Data and hierarchy design","Solution architecture"]},
      {title:"Independent Design Authority",copy:"Client-side solution assurance during planning-system implementation.",items:["Solution design review","Business-rule validation","Architecture review","Requirement traceability","Testing and readiness"]},
      {title:"AI for Retail Planning",copy:"Practical AI advisory grounded in planning decisions, controls and measurable outcomes.",items:["AI readiness","Use-case prioritization","Exception intelligence","Scenario intelligence","Automation roadmap"]}
    ]
  },
  capabilities:{eyebrow:"CAPABILITIES",title:"Planning expertise across a closed-loop retail decision lifecycle.",description:"Averin connects PLAN, BUY, MOVE, SELL and SHAPE so execution signals continuously feed back into the next financial, assortment, inventory and supply decision.",sections:[
    {title:"Closed-Loop Planning: PLAN → BUY → MOVE → SELL → SHAPE → PLAN",copy:"Averin treats retail planning as a continuous learning cycle rather than a one-way handoff. SHAPE converts actual performance and market signals into decisions that reshape the next plan.",items:["PLAN — set financial, assortment, demand and inventory intent","BUY — commit product, materials and supply","MOVE — allocate, replenish and position inventory","SELL — execute across channels and capture demand signals","SHAPE — interpret sell-through, margin, inventory and customer signals","RETURN TO PLAN — reforecast, rebalance and reshape the next decision cycle"]},
    {title:"Merchandise Financial Planning",items:["Sales, units, AUR and AUC","Margin, markdown and COGS","Inventory, receipts and OTB","Turns, GMROI and scenarios","Top-down / bottom-up reconciliation","Measure dependencies: what holds and what flexes"]},
    {title:"Pre-Season Assortment Planning",items:["Assortment architecture","Option counts and breadth/depth","Store / channel clustering","Localization","Price architecture","Size profiling and buy quantities"]},
    {title:"In-Season Assortment Planning",items:["Sell-through and rate of sale","Weeks of supply and availability","Rebuys, cancellations and transfers","Markdown exposure","Localized assortment actions"]},
    {title:"Demand Planning & Forecasting",items:["Baseline and causal forecasting","New product forecasting","Promotions and seasonality","Forecast value add","Exception management"]},
    {title:"Allocation",items:["Initial allocation","Store eligibility","Presentation minimums","Size curves and packs","DC/store constraints","Prioritization and overrides"]},
    {title:"Replenishment",items:["Forecast and inventory position","Safety stock","Lead time and order cycle","MOQ / pack constraints","Target inventory","Recommended order and exceptions"]},
    {title:"Distribution Planning & BOD",items:["DC inventory","Deployment and balancing","Capacity constraints","Shortage management","Store prioritization","Network inventory decisions"]},
    {title:"Procurement & BOM Planning",items:["Finished-goods demand","BOM explosion","Material requirements","Open PO and inventory","Supplier lead time / MOQ / capacity","Recommended procurement plan"]}
  ]},
  "technology-advisory":{eyebrow:"PLANNING TECHNOLOGY ADVISORY",title:"Select planning technology with confidence.",description:"A planning platform can shape processes for years. Averin provides independent support from requirements through recommendation, with business scenarios at the centre of the evaluation.",sections:[
    {title:"Don’t compare features. Compare decisions.",copy:"Averin defines common business scenarios so platforms are evaluated against the same decisions, workflows, constraints, feedback loops, data needs and financial outcomes."},
    {title:"Selection Method",items:["Business strategy","Current-state assessment","Capability requirements","Functional, data and AI requirements","Closed-loop planning requirements","Vendor longlist","RFI / RFP","Scripted demonstrations","Scoring and TCO","Architecture assessment","Recommendation and roadmap"]},
    {title:"Vendor-neutral by design",copy:"The objective is fit—not a predetermined vendor. Evaluations consider business fit, technology fit, implementation risk, TCO and long-term operating needs."}
  ],cta:"Planning a software evaluation?"},
  "ai-retail-planning":{eyebrow:"AI FOR RETAIL PLANNING",title:"Retail expertise first. AI second.",description:"Averin helps planning organizations identify where AI can improve decisions—and where better process, data or decision design should come first.",sections:[
    {title:"Planning Intelligence",copy:"Detect anomalies, risks, conflicts and emerging planning conditions earlier, then use those signals to SHAPE the next planning cycle."},
    {title:"Decision Support",copy:"Move beyond dashboards toward recommendations with context, constraints and financial impact."},
    {title:"Scenario Intelligence",copy:"Evaluate alternative plans and trade-offs across sales, margin, inventory and service."},
    {title:"Planning Automation",copy:"Automate repetitive analysis and exception triage while keeping planners accountable for consequential decisions."},
    {title:"AI Readiness",items:["Define the planning decision","Identify required measures, hierarchies and attributes","Document what holds and what flexes","Encode constraints and policies","Define feedback signals from SELL to SHAPE","Define AI recommendation vs human approval boundaries","Measure financial and operational impact"]}
  ]},
  "health-check":{eyebrow:"RETAIL PLANNING HEALTH CHECK™",title:"Find out where planning is getting stuck—and what to do next.",description:"A focused independent diagnostic designed to create executive-level clarity on planning maturity, capability gaps and transformation priorities.",sections:[
    {title:"What We Assess",items:["Strategy and outcomes","Process and decisions","Closed-loop feedback from execution to planning","People and governance","Data and KPIs","Technology and architecture","Analytics and AI readiness"]},
    {title:"Maturity Model",items:["Level 1 — Reactive: manual and spreadsheet-heavy","Level 2 — Standardized: defined processes and measures","Level 3 — Integrated: connected functions and shared data","Level 4 — Predictive: forecasting, optimization and exceptions","Level 5 — Intelligent: AI-assisted, closed-loop, scenario-driven orchestration"]},
    {title:"Typical Deliverables",items:["Executive summary and maturity score","Capability heatmap","Top process and decision gaps","Technology, integration and data observations","AI opportunities and readiness constraints","Quick wins","Prioritized initiatives","12–24 month roadmap"]}
  ],cta:"Start with an independent planning diagnostic."},
  about:{eyebrow:"ABOUT AVERIN",title:"Practitioner-led retail planning advisory.",description:"Averin Consulting was created to give retailers and manufacturers independent, experienced guidance across planning strategy, process transformation, technology and AI.",sections:[
    {title:"Built around the decisions planners actually make.",copy:"Our approach combines deep retail and supply-chain planning experience with solution architecture and modern AI methods. The objective is practical: improve business decisions, reduce transformation risk and ensure technology supports a closed-loop operating model that learns from execution."},
    {title:"Independent",copy:"Vendor-neutral advice based on client requirements, fit and measurable outcomes."},
    {title:"Experienced",copy:"Planning, solution and transformation experience across complex retailer and manufacturer environments."},
    {title:"Modern",copy:"Traditional planning discipline combined with data, optimization, AI and new forms of decision support."},
    {title:"Our Principles",items:["Design the decision before the workflow","Close the loop between execution and the next plan","Fix the operating model before automating it","Make vendors prove business outcomes","Use AI where judgment can be augmented responsibly"]}
  ]},
  insights:{eyebrow:"AVERIN INSIGHTS",title:"Practical thinking for retail planning leaders.",description:"Perspectives on planning decisions, operating models, software evaluation, architecture and AI—written for practitioners rather than for buzzword cycles.",sections:[
    {title:"The 20 Questions Every Retailer Should Answer Before Selecting a Planning Platform",copy:"A practical decision framework to clarify business requirements before vendor demonstrations begin."},
    {title:"Why Merchandise Financial Planning Transformations Fail",copy:"Common failure modes across measures, dependencies, planning levels, operating model and implementation design."},
    {title:"Pre-Season vs In-Season Assortment Planning",copy:"How decision cadence, signals and actions should evolve once the season is underway."},
    {title:"When Should Retailers Allocate Versus Replenish Inventory?",copy:"Understanding the different decisions, constraints and planning logic behind allocation and replenishment."},
    {title:"Why Retail Planning Needs Decision Architecture Before AI",copy:"AI recommendations are only as good as the decisions, policies, dependencies, feedback loops and metrics they are built around."},
    {title:"The Retail Planning Technology Landscape: What Retailers Should Evaluate in 2026",copy:"A capability-based lens for comparing planning platforms without turning the evaluation into a feature checklist."}
  ]},
  contact:{eyebrow:"CONTACT",title:"Start with the planning problem—not a sales pitch.",description:"Tell us where planning, technology or transformation is getting stuck. We can begin with a focused conversation and determine whether an advisory engagement would be useful.",sections:[
    {title:"Good reasons to reach out",items:["You need an independent planning maturity assessment","You are preparing to select or replace a planning platform","Your MFP, assortment, allocation or replenishment processes need redesign","You need to close the loop between execution signals and the next plan","You need a client-side design authority during implementation","You are defining an AI roadmap for retail planning"]}
  ]}
};

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=pages[slug];return p?{title:p.title,description:p.description}:{} }
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}))}

export default async function DynamicPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=pages[slug]; if(!p) notFound();
  const email=process.env.NEXT_PUBLIC_CONTACT_EMAIL||"info@averinconsulting.com";
  return <><PageHero eyebrow={p.eyebrow} title={p.title} description={p.description}>{slug==="health-check"&&<div className="hero-actions"><Link className="button" href="/contact">Request a Planning Health Check</Link></div>}</PageHero>
    <section className="section"><div className="container card-grid two">{p.sections.map((s,i)=><article className="card" key={s.title}><span className="card-number">{String(i+1).padStart(2,"0")}</span><h3>{s.title}</h3>{s.copy&&<p>{s.copy}</p>}{s.items&&<ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul>}{slug==="insights"&&<span className="text-link">Article coming soon →</span>}</article>)}</div></section>
    {slug==="contact"?<section className="section section-soft"><div className="container"><div className="contact-box"><p className="eyebrow light">CONTACT AVERIN</p><h2>Discuss your planning challenge.</h2><p>Email Averin with a short description of the business problem, the planning area involved and the outcome you are trying to improve.</p><div className="contact-details"><a href={`mailto:${email}?subject=Averin%20Consulting%20inquiry`}>{email}</a></div></div></div></section>:<CTA title={p.cta}/>}</>;
}
