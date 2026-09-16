import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, PageHero } from "@/components/SiteShell";

type PageData = { eyebrow:string; title:string; description:string; sections:{title:string; copy?:string; items?:string[]}[]; cta?:string };

const pages: Record<string, PageData> = {
  services: {
    eyebrow:"SERVICES", title:"Focused advisory across four retail planning capabilities.", description:"Averin provides independent advisory, technology-selection support, process design and implementation assurance specifically across assortment planning, merchandise financial planning, allocation and replenishment, and the data and AI capabilities that support them.",
    sections:[
      {title:"Assortment Planning Advisory",copy:"Improve pre-season and in-season assortment decisions with clearer planning logic, localization, clustering and planner workflows.",items:["Assortment architecture","Breadth and depth","Localization and clustering","Size profiling","In-season assortment decisions","Process and workflow design"]},
      {title:"Merchandise Financial Planning Advisory",copy:"Strengthen financial planning logic, measures and decision processes from strategic targets through OTB and scenario management.",items:["Sales, margin and markdown planning","Inventory, receipts and OTB","AUR, AUC and unit economics","Measure dependencies","What holds and what flexes","Scenario and reconciliation logic"]},
      {title:"Allocation & Replenishment Advisory",copy:"Improve how inventory is positioned and replenished across stores, channels and locations using clear rules, constraints and exception management.",items:["Initial allocation","Store eligibility","Size and pack logic","Target inventory","Replenishment rules","Exceptions and planner overrides"]},
      {title:"Data Management & AI Advisory",copy:"Create the data foundation required for reliable planning and apply AI where it can materially improve planner decisions across assortment, MFP, allocation and replenishment.",items:["Planning data models","Hierarchies, attributes and measures","Data quality and reconciliation","Integration requirements","AI use-case prioritization","Adaptive planning and decision intelligence"]}
    ]
  },
  capabilities:{eyebrow:"CAPABILITIES",title:"Four areas of specialized retail planning expertise.",description:"Averin is deliberately focused on the planning decisions, data and technology that matter most across assortment planning, merchandise financial planning, allocation and replenishment.",sections:[
    {title:"Assortment Planning",copy:"Pre-season and in-season assortment planning designed around the decisions merchants and planners actually make.",items:["Assortment architecture","Option counts and breadth/depth","Store and channel clustering","Localization","Price architecture","Size profiling and buy quantities","Sell-through and rate of sale","In-season assortment actions"]},
    {title:"Merchandise Financial Planning",copy:"Financial planning logic and process design across sales, margin, inventory and receipts.",items:["Sales, units, AUR and AUC","Margin, markdown and COGS","Inventory, receipts and OTB","Turns, GMROI and scenarios","Top-down and bottom-up reconciliation","Measure dependencies","Hold/flex behavior"]},
    {title:"Allocation & Replenishment",copy:"Inventory positioning and replenishment decisions from initial allocation through ongoing store and channel execution.",items:["Initial allocation","Store eligibility","Presentation minimums","Size curves and packs","Inventory position","Target inventory","Replenishment logic","Prioritization, exceptions and overrides"]},
    {title:"Data Management & AI Advisory",copy:"Planning data architecture and practical AI advisory designed specifically around assortment, MFP, allocation and replenishment.",items:["Planning hierarchies and attributes","Measure definitions and governance","Data quality and reconciliation","Planning integrations","AI readiness","Decision intelligence","Adaptive planning agents","Human approval and control design"]}
  ]},
  "technology-advisory":{eyebrow:"PLANNING TECHNOLOGY ADVISORY",title:"Select planning technology with confidence.",description:"Averin provides vendor-neutral software-selection support for assortment planning, merchandise financial planning, allocation and replenishment, with data and AI requirements evaluated as part of the solution—not as separate buzzwords.",sections:[
    {title:"Compare planning decisions—not feature lists.",copy:"We define common business scenarios so platforms are evaluated against the same assortment, MFP, allocation and replenishment decisions, data needs, workflows and business outcomes."},
    {title:"Selection Method",items:["Current-state assessment","Capability requirements","Functional requirements","Data and integration requirements","AI and decision-intelligence requirements","Vendor longlist and shortlist","RFI / RFP","Scripted demonstrations","Scoring and TCO","Architecture assessment","Recommendation and roadmap"]},
    {title:"Vendor-neutral by design",copy:"The objective is fit—not a predetermined vendor. Evaluations consider planning capability, data fit, user experience, implementation risk, TCO and long-term operating needs."}
  ],cta:"Planning a software evaluation?"},
  "ai-retail-planning":{eyebrow:"DATA MANAGEMENT & AI ADVISORY",title:"Build trusted planning data first. Apply AI where it improves decisions.",description:"Averin helps retailers strengthen the data foundations behind assortment planning, MFP, allocation and replenishment, then identify where AI, adaptive intelligence and automation can create measurable planning value.",sections:[
    {title:"Planning Data Foundation",copy:"Define the hierarchies, attributes, measures, grain and governance required for reliable planning decisions.",items:["Product and location hierarchies","Planning measures","Attribute strategy","Calendar and time grain","Data ownership","Quality and reconciliation rules"]},
    {title:"Planning Integration & Reconciliation",copy:"Make planning data traceable and trustworthy across source systems and planning applications.",items:["Source-to-planning mapping","Measure reconciliation","Data validation","Interface requirements","Exception monitoring","Auditability"]},
    {title:"AI Decision Intelligence",copy:"Use AI to interpret planner behavior, exceptions and decision context rather than simply adding another analytical dashboard.",items:["Intent inference","Adaptive planning agents","Decision-memory design","Scenario intelligence","Exception prioritization","Explainable recommendations"]},
    {title:"AI Governance & Adoption",copy:"Define where AI should observe, recommend or act, with explicit controls around consequential planning decisions.",items:["Human approval boundaries","Confidence thresholds","Audit trails","Outcome measurement","Planner feedback loops","Responsible automation"]}
  ]},
  "health-check":{eyebrow:"RETAIL PLANNING HEALTH CHECK™",title:"Find out where planning is getting stuck—and what to improve next.",description:"A focused independent diagnostic across assortment planning, MFP, allocation and replenishment, together with the data and AI capabilities supporting those processes.",sections:[
    {title:"What We Assess",items:["Assortment planning process and decisions","Merchandise financial planning measures and dependencies","Allocation and replenishment logic","Planning data, hierarchies and KPIs","Technology and integration","AI readiness and decision intelligence"]},
    {title:"Maturity Model",items:["Level 1 — Reactive: manual and spreadsheet-heavy","Level 2 — Standardized: defined processes and measures","Level 3 — Integrated: connected planning processes and shared data","Level 4 — Predictive: stronger analytics, optimization and exception management","Level 5 — Adaptive: AI-assisted, evidence-driven planning decisions"]},
    {title:"Typical Deliverables",items:["Executive summary and maturity score","Capability heatmap across the four focus areas","Top process and decision gaps","Data, measure and hierarchy observations","Technology and integration observations","AI opportunities and readiness constraints","Quick wins and prioritized roadmap"]}
  ],cta:"Start with an independent planning diagnostic."},
  about:{eyebrow:"ABOUT AVERIN",title:"Practitioner-led retail planning advisory with a deliberate focus.",description:"Averin Consulting focuses on four areas: Assortment Planning, Merchandise Financial Planning, Allocation & Replenishment, and Data Management & AI Advisory around these planning solutions.",sections:[
    {title:"Built around the decisions planners actually make.",copy:"Our approach combines deep retail-planning expertise, solution architecture, data discipline and modern AI methods. The objective is practical: improve planning decisions, reduce transformation risk and make technology work better for planners."},
    {title:"Focused",copy:"We do not try to cover every enterprise-planning domain. We concentrate on the four capabilities where Averin brings deep planning and solution expertise."},
    {title:"Independent",copy:"Vendor-neutral advice based on client requirements, fit and measurable outcomes."},
    {title:"Modern",copy:"Traditional retail-planning discipline combined with data management, decision intelligence, optimization and AI."},
    {title:"Our Principles",items:["Design the decision before the workflow","Make planning measures and dependencies explicit","Treat trusted data as a prerequisite for AI","Make vendors prove real planning scenarios","Use AI where planner judgment can be augmented responsibly"]}
  ]},
  insights:{eyebrow:"AVERIN INSIGHTS",title:"Practical thinking for retail planning leaders.",description:"Perspectives focused on assortment planning, merchandise financial planning, allocation and replenishment, planning data and AI.",sections:[
    {title:"The 20 Questions Every Retailer Should Answer Before Selecting a Planning Platform",copy:"A practical decision framework to clarify requirements before vendor demonstrations begin."},
    {title:"Why Merchandise Financial Planning Transformations Fail",copy:"Common failure modes across measures, dependencies, planning levels, operating model and implementation design."},
    {title:"Pre-Season vs In-Season Assortment Planning",copy:"How decision cadence, signals and actions should evolve once the season is underway."},
    {title:"When Should Retailers Allocate Versus Replenish Inventory?",copy:"Understanding the different decisions, constraints and planning logic behind allocation and replenishment."},
    {title:"Why Planning Data Design Matters Before AI",copy:"AI recommendations are only as reliable as the hierarchies, measures, dependencies, policies and data quality underneath them."},
    {title:"What an Adaptive Planning Agent Should Actually Learn",copy:"Why planner edit sequences, decision memory and outcome learning can be more valuable than another conversational planning assistant."}
  ]},
  contact:{eyebrow:"CONTACT",title:"Start with the planning problem—not a sales pitch.",description:"Tell us where assortment planning, MFP, allocation, replenishment, data or AI is getting stuck. We can begin with a focused conversation and determine whether an advisory engagement would be useful.",sections:[
    {title:"Good reasons to reach out",items:["Your assortment planning process needs redesign","Your MFP measures, dependencies or OTB logic need improvement","Your allocation or replenishment process needs redesign","Your planning data is difficult to reconcile or govern","You are selecting a planning platform for one of these areas","You are defining practical AI or adaptive-agent use cases around these planning solutions"]}
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
