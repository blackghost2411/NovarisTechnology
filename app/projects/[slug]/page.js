import Link from 'next/link';
import {projects} from '../../../lib/data';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export function generateMetadata({params}){const p=projects.find(x=>x.slug===params.slug);return {title:`${p?.title||'Project'} | Novaris Technology`, description:p?.summary||'Novaris Technology case study'}}

function Nav(){return <header className="nav"><div className="navin"><Link href="/" className="brand"><div className="logo">N</div><div><h1>Novaris Technology</h1><p>Enterprise Case Study</p></div></Link><nav className="links"><Link href="/">Home</Link><Link href="/#projects">Projects</Link><Link href="/services">Services</Link><Link className="btn" href="/start-project">Start a Project →</Link></nav></div></header>}
function Stat({value,label}){return <div className="metric"><b>{value}</b><p>{label}</p></div>}
function Architecture({items}){return <div className="architecture">{items.map((item,i)=><div className="arch-node" key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b>{i<items.length-1&&<em>→</em>}</div>)}</div>}

function Win({title,children,kind=''}){return <div className={`product-window ${kind}`}><div className="window-head"><span></span><span></span><span></span><b>{title}</b></div><div className="window-body">{children}</div></div>}
function Side({items}){return <aside className="mock-side"><b>NOVARIS</b>{items.map(x=><i key={x}>{x}</i>)}</aside>}
function Kpis({items}){return <div className="kpi-row">{items.map(([a,b,c])=><div className="kpi" key={b}><small>{b}</small><strong>{a}</strong><em>{c}</em></div>)}</div>}
function LineChart({bars=false}){return <div className={bars?'bar-chart':'line-chart'}>{bars?Array.from({length:9}).map((_,i)=><i key={i} style={{height:`${35+(i*11)%58}%`}}/>):<svg viewBox="0 0 500 180" preserveAspectRatio="none"><polyline points="0,140 60,102 105,118 160,62 220,92 275,44 340,80 405,35 500,58"/><path d="M0 140 L60 102 L105 118 L160 62 L220 92 L275 44 L340 80 L405 35 L500 58 L500 180 L0 180Z"/></svg>}</div>}
function Donut({label='Orders'}){return <div className="donut"><div><b>3,247</b><span>{label}</span></div></div>}
function Table({rows}){return <div className="mock-table">{rows.map((r,i)=><div key={i}><span>{r[0]}</span><b>{r[1]}</b><em>{r[2]}</em></div>)}</div>}
function MapMock(){return <div className="map-mock"><svg viewBox="0 0 500 250"><path d="M25 200 C90 125 140 185 205 100 S330 45 470 85"/><path d="M55 50 C150 80 160 170 260 140 S400 180 455 40"/><circle cx="65" cy="168" r="8"/><circle cx="205" cy="100" r="8"/><circle cx="328" cy="57" r="8"/><circle cx="440" cy="84" r="8"/><circle cx="255" cy="142" r="8"/></svg></div>}
function ChatMock(){return <div className="chat-mock"><div className="chat-list"><p>Sarah Johnson</p><p>Michael Brown</p><p>Emily Davis</p><p>James Wilson</p></div><div className="chat-main"><i>I need help with invoice #2481</i><b>AI suggested response ready</b><span>Reply confidence 94%</span></div></div>}
function CardsGrid({labels}){return <div className="cards-grid">{labels.map((l,i)=><div key={l}><small>{l}</small><strong>{["$8.42M","2,890","48","99.98%","76%","1,248"][i%6]}</strong><em>{i%2?'+8.3%':'+12.5%'}</em></div>)}</div>}

function ERPScreens(){return <div className="real-screens erp-theme">
 <Win title="Executive ERP Dashboard"><div className="mock-layout"><Side items={['Dashboard','Finance','HR','Inventory','Reports']}/><main><Kpis items={[["$8.42M","Revenue","+12%"],["$1.91M","Profit","+8%"],["$2.12M","Expenses","-3%"],["48","Approvals","pending"]]}/><div className="two"><LineChart/><Donut/></div><Table rows={[["PO-20491","Approved","2m"],["Invoice #981","Paid","15m"],["Low stock","Review","Now"]]}/></main></div></Win>
 <Win title="Finance & Accounting"><div className="mock-layout"><Side items={['Invoices','Payments','Ledger','Tax','P&L']}/><main><Kpis items={[["312","Invoices","this month"],["$640K","Receivables","open"],["$118K","Tax","estimate"]]}/><div className="two"><LineChart/><Table rows={[["INV-2026-441","$18,420","Paid"],["INV-2026-442","$9,200","Due"],["PAY-904","$4,180","Cleared"]]}/></div></main></div></Win>
 <Win title="Inventory Control"><div className="inventory-ui"><div><CardsGrid labels={['SKUs','Warehouses','Low stock','Suppliers']}/><Table rows={[["Dell Servers","142 units","stable"],["SSD NVMe","18 units","low"],["Routers","64 units","ok"]]}/></div><div className="warehouse-map"><span>A1</span><span>B4</span><span>C2</span><span>D8</span></div></div></Win>
 <Win title="HR Management"><div className="hr-ui"><CardsGrid labels={['Employees','Attendance','Payroll','Leave']}/><div className="people-row">{['A','M','S','R','L','K'].map(x=><b key={x}>{x}</b>)}</div><LineChart bars/></div></Win>
 <Win title="Procurement Workflow"><div className="proc-ui"><Table rows={[["REQ-771","Laptops","Manager review"],["RFQ-44","Cloud credits","Supplier sent"],["PO-112","Network gear","Delivered"]]}/><div className="flow"><span>Request</span><span>Approval</span><span>PO</span><span>Delivery</span></div></div></Win>
 <Win title="Executive Analytics Center"><div className="analytics-ui"><div className="two"><LineChart/><Donut label="Growth"/></div><CardsGrid labels={['Forecast','Regions','Customers','Exports']}/></div></Win>
 </div>}

function AIScreens(){return <div className="real-screens ai-theme">
 <Win title="AI Support Inbox"><ChatMock/></Win>
 <Win title="Agent Console"><div className="agent-ui"><ChatMock/><div className="ai-panel"><b>AI Recommendations</b><p>Use refund policy article #12</p><p>Escalate if sentiment drops</p><p>Suggested answer ready</p></div></div></Win>
 <Win title="Knowledge Retrieval"><div className="kb-ui"><input value="Search policy, order, refund..." readOnly/><Table rows={[["Refund policy","94% match","Updated"],["Shipping SLA","88% match","Active"],["Warranty FAQ","81% match","Active"]]}/></div></Win>
 <Win title="Ticket Analytics"><Kpis items={[["1,842","Tickets","+9%"],["70%","AI replies","auto"],["14m","Avg triage","target"]]}/><LineChart/></Win>
 <Win title="Workflow Builder"><div className="workflow-ui"><span>New ticket</span><span>Classify</span><span>RAG Search</span><span>AI Reply</span><span>Escalate</span></div></Win>
 <Win title="Quality Monitor"><div className="two"><Donut label="Quality"/><LineChart bars/></div></Win>
 </div>}

function HospitalScreens(){return <div className="real-screens hospital-theme">
 <Win title="Patient Records"><div className="mock-layout"><Side items={['Patients','Appointments','Billing','Lab','Pharmacy']}/><main><Kpis items={[["1,248","Patients","today"],["386","Appointments","+8%"],["84","Beds","available"]]}/><Table rows={[["Dr. Saleh","Emergency","Active"],["Dr. Lina","Cardiology","Queued"],["Dr. Omar","Radiology","Ready"]]}/></main></div></Win>
 <Win title="Appointment Board"><div className="calendar-ui">{['09:00','10:30','12:00','14:30','16:00'].map((t,i)=><div key={t}><b>{t}</b><span>{['John Doe','Emily Smith','Michael Brown','Sarah Johnson','Nour Ali'][i]}</span><em>{['Cardiology','Neurology','Pediatrics','Orthopedics','Dental'][i]}</em></div>)}</div></Win>
 <Win title="Department Capacity"><div className="two"><LineChart bars/><Donut label="Beds"/></div></Win>
 <Win title="Billing Dashboard"><Kpis items={[["$1.25M","Revenue","+12%"],["98%","Billing","closed"],["42","Claims","review"]]}/><LineChart/></Win>
 <Win title="Laboratory Queue"><Table rows={[["CBC Test","32 pending","High"],["X-Ray","14 waiting","Medium"],["MRI","6 scheduled","Low"]]}/><LineChart bars/></Win>
 <Win title="Pharmacy Stock"><div className="inventory-ui"><Table rows={[["Antibiotics","240 units","ok"],["Insulin","22 units","low"],["IV Fluids","510 units","ok"]]}/><div className="warehouse-map"><span>P1</span><span>P2</span><span>P3</span></div></div></Win>
 </div>}

function BankingScreens(){return <div className="real-screens banking-theme">
 <Win title="Transaction Monitor"><Kpis items={[["128,430","Transactions","+18%"],["$2.84B","Volume","+3%"],["18,642","Users","+6%"]]}/><LineChart/></Win>
 <Win title="Fraud Detection"><div className="risk-ui"><Table rows={[["TX-8821","High risk","Review"],["TX-8822","Medium","Monitor"],["TX-8823","Low","Clear"]]}/><Donut label="Risk"/></div></Win>
 <Win title="Customer Segments"><div className="two"><LineChart bars/><Donut label="Segments"/></div></Win>
 <Win title="AML Watchlist"><Table rows={[["Account 441","Flagged","KYC"],["Account 882","Normal","Clear"],["Transfer 551","Review","Pending"]]}/></Win>
 <Win title="Loans Portfolio"><CardsGrid labels={['Applications','Approved','Processing','Default risk']}/><LineChart/></Win>
 <Win title="Executive Report"><div className="analytics-ui"><Kpis items={[["$8.2M","Net revenue","+9%"],["14","Branches","active"],["99.98%","Uptime","stable"]]}/><LineChart/></div></Win>
 </div>}

function LogisticsScreens(){return <div className="real-screens logistics-theme">
 <Win title="Fleet Live Map"><MapMock/></Win>
 <Win title="Route Optimizer"><div className="route-ui"><MapMock/><div><Kpis items={[["92%","On time","today"],["156","In transit","now"]]}/></div></div></Win>
 <Win title="Warehouse Status"><div className="inventory-ui"><div className="warehouse-map"><span>W1</span><span>W2</span><span>W3</span><span>W4</span></div><Table rows={[["Zone A","72% full","ok"],["Zone B","91% full","alert"],["Zone C","54% full","ok"]]}/></div></Win>
 <Win title="Delivery Timeline"><Table rows={[["Order #1244","Dispatched","09:12"],["Order #1245","In transit","10:40"],["Order #1246","Delivered","11:18"]]}/><LineChart/></Win>
 <Win title="Driver Dispatch"><div className="people-row">{['A','B','C','D','E','F','G'].map(x=><b key={x}>{x}</b>)}</div><LineChart bars/></Win>
 <Win title="Alert Center"><Table rows={[["Route delay","High","Action"],["Truck 18 fuel","Medium","Notify"],["Warehouse B full","High","Plan"]]}/></Win>
 </div>}

function LMSScreens(){return <div className="real-screens lms-theme">
 <Win title="Learning Dashboard"><Kpis items={[["4,782","Students","+11%"],["128","Courses","+6%"],["78%","Completion","+9%"]]}/><LineChart/></Win>
 <Win title="Course Catalog"><div className="course-ui">{['React Pro','Python Data','AWS Cloud','UI/UX','Cybersecurity','DevOps'].map(c=><div key={c}><b>{c}</b><span>12 lessons • project</span></div>)}</div></Win>
 <Win title="Exam Management"><Table rows={[["React Final","342 submissions","Open"],["Python Quiz","212 submissions","Closed"],["Cloud Lab","118 submissions","Review"]]}/></Win>
 <Win title="Certificates"><div className="cert-ui"><b>Certificate of Completion</b><span>Issued automatically after assessment approval</span></div></Win>
 <Win title="Instructor Analytics"><div className="two"><LineChart/><Donut label="Progress"/></div></Win>
 <Win title="Student Progress"><CardsGrid labels={['Lessons','Projects','Exams','Certificates']}/><LineChart bars/></Win>
 </div>}

function GovernmentScreens(){return <div className="real-screens gov-theme"><Win title="Citizen Services"><Kpis items={[["32,840","Applications","+14%"],["28,540","Approved","+12%"],["4,300","Processing","today"]]}/><Table rows={[["ID Card","42%","top"],["License","28%","active"],["Passport","18%","active"]]}/></Win><Win title="Approval Queue"><Table rows={[["APP-2281","Manager review","2h"],["APP-2282","Documents needed","Now"],["APP-2283","Approved","5m"]]}/></Win><Win title="Document Tracking"><LineChart/></Win><Win title="Service Reports"><LineChart bars/></Win><Win title="Admin Console"><CardsGrid labels={['Services','Agents','Queues','Reports']}/></Win><Win title="Audit Trail"><Table rows={[["User update","Admin","Now"],["Application approved","Officer","15m"],["Document verified","System","24m"]]}/></Win></div>}
function EcommerceScreens(){return <div className="real-screens commerce-theme"><Win title="Sales Overview"><Kpis items={[["$2.4M","Sales","+16%"],["8,642","Orders","+8%"],["6,324","Customers","+12%"]]}/><LineChart/></Win><Win title="Orders Pipeline"><Table rows={[["ORD-8841","Packed","Today"],["ORD-8842","Shipping","Today"],["ORD-8843","Returned","Review"]]}/></Win><Win title="Product Ranking"><LineChart bars/></Win><Win title="Customer Segments"><Donut label="Customers"/></Win><Win title="Inventory Health"><CardsGrid labels={['SKUs','Low stock','Suppliers','Returns']}/></Win><Win title="Campaign Report"><LineChart/></Win></div>}

function Screens({slug}){
 if(slug==='enterprise-erp-suite') return <ERPScreens/>;
 if(slug==='ai-customer-support-platform') return <AIScreens/>;
 if(slug==='hospital-management-system') return <HospitalScreens/>;
 if(slug==='banking-analytics-suite') return <BankingScreens/>;
 if(slug==='smart-logistics-dashboard') return <LogisticsScreens/>;
 if(slug==='learning-management-platform') return <LMSScreens/>;
 if(slug==='government-service-portal') return <GovernmentScreens/>;
 return <EcommerceScreens/>;
}

export default function Project({params}){
 const p=projects.find(x=>x.slug===params.slug)||projects[0];
 return <main className="site gridbg"><Nav/>
  <section className="container case-hero">
    <div><span className="pill">{p.category} • Case Study</span><h1>{p.title}</h1><p className="lead">{p.story || p.summary}</p><div className="chips bigchips">{p.tags.map(t=><span className="chip" key={t}>{t}</span>)}</div></div>
    <div className="case-hero-img"><img src={p.image} alt={p.title}/></div>
  </section>
  <section className="container section"><div className="hero-metrics case-stats">{(p.stats||[]).map(([v,l])=><Stat key={l} value={v} label={l}/>)}</div></section>
  <section className="container section detail-grid"><div className="case-block"><span className="eyebrow">CHALLENGE</span><h2>What needed to be solved.</h2><p className="muted xl">{p.challenge}</p></div><div className="case-block"><span className="eyebrow">SOLUTION</span><h2>How Novaris would structure it.</h2><p className="muted xl">{p.solution}</p></div></section>
  <section className="container section"><div className="section-head"><div><span className="eyebrow">REAL PRODUCT SCREENS</span><h2>Unique interface views for this product.</h2><p className="muted wide">These views are designed specifically for this domain, so every case study has a different interface language and realistic operational screens.</p></div></div><Screens slug={p.slug}/></section>
  <section className="container section split-case"><div><span className="eyebrow">FEATURES</span><h2>Capabilities designed for real business use.</h2><div className="feature-list">{(p.features||[]).map(f=><div className="feature" key={f}>✓ {f}</div>)}</div></div><div className="glass-screen"><img src={p.image} alt={`${p.title} dashboard details`}/></div></section>
  <section className="container section"><div className="section-head"><div><span className="eyebrow">ARCHITECTURE</span><h2>A clean delivery architecture.</h2><p className="muted wide">A practical high-level model showing how the solution could be structured from interface to data and monitoring.</p></div></div><Architecture items={p.architecture||[]}/></section>
  <section className="container section"><div className="section-head"><div><span className="eyebrow">TIMELINE</span><h2>How this type of system would be delivered.</h2></div></div><div className="timeline">{(p.timeline||[]).map((t,i)=><div className="timeline-item" key={t}><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p className="muted">A focused delivery phase with clear outputs, validation and measurable progress.</p></div>)}</div></section>
  <section className="container section"><div className="finalcta"><span className="pill">Build something similar</span><h2>Ready to design your own enterprise platform?</h2><p className="muted">Start with a structured discovery session and turn your idea into a production-ready roadmap.</p><Link className="btn" href="/start-project">Start a Project →</Link></div></section>
  <footer className="footer">© 2026 Novaris Technology. Enterprise software, AI, cloud and training.</footer>
 </main>
}
