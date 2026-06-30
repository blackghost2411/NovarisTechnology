export const projects = [
 {slug:'enterprise-erp-suite', title:'Enterprise ERP Suite', category:'Enterprise Software', image:'/images/erp.png', tags:['Next.js','PostgreSQL','Docker','AWS','RBAC'], summary:'A modular ERP platform for finance, HR, procurement, inventory, approvals and executive analytics.', challenge:'Disconnected spreadsheets and manual approvals slowed financial, HR and inventory operations.', solution:'Novaris designed a unified ERP workspace with role-based dashboards, automated approvals, audit trails and real-time reporting.', results:['42% faster approval cycles','Single source of truth for operations','Executive dashboards for finance and procurement']},
 {slug:'ai-customer-support-platform', title:'AI Customer Support Platform', category:'AI Solutions', image:'/images/ai-helpdesk.png', tags:['Python','RAG','LLM','Redis','Agents'], summary:'An AI helpdesk that answers questions, routes tickets and summarizes customer conversations.', challenge:'Support teams were overwhelmed by repeated questions and fragmented ticket history.', solution:'We designed an AI assistant with knowledge retrieval, smart routing, escalation logic and conversation summaries.', results:['70% automated first responses','Faster ticket triage','Consistent multilingual support experience']},
 {slug:'banking-analytics-suite', title:'Banking Analytics Suite', category:'FinTech', image:'/images/banking.png', tags:['React','BI','Security','Cloud','Fraud'], summary:'Real-time analytics platform for transactions, risk signals, customer insights and reporting.', challenge:'Executives needed secure visibility across transaction trends, risk patterns and digital adoption.', solution:'Novaris designed a secure analytics suite with KPI cards, fraud indicators, transaction charts and role-based dashboards.', results:['Real-time transaction visibility','Risk patterns surfaced earlier','Board-ready executive reports']},
 {slug:'hospital-management-system', title:'Hospital Management System', category:'Healthcare', image:'/images/hospital.png', tags:['Next.js','React','API','Security','FHIR'], summary:'A healthcare platform for appointments, departments, billing, patient profiles and operational reports.', challenge:'Patient flow, appointments and billing were managed across disconnected systems.', solution:'We created a unified hospital workspace with department views, appointment scheduling, billing and clinical reporting.', results:['Improved appointment visibility','Better patient record access','Operational reporting for management']},
 {slug:'smart-logistics-dashboard', title:'Smart Logistics Dashboard', category:'Logistics', image:'/images/logistics.png', tags:['Maps','Analytics','IoT','Cloud','Alerts'], summary:'Fleet, warehouse and shipment visibility with KPI tracking, route intelligence and alerts.', challenge:'Logistics teams lacked live visibility into routes, deliveries and warehouse operations.', solution:'Novaris built a command dashboard combining route maps, delivery KPIs, fleet health and operational alerts.', results:['Live route monitoring','Delivery performance tracking','Warehouse and fleet visibility']},
 {slug:'learning-management-platform', title:'Learning Management Platform', category:'Education', image:'/images/lms.png', tags:['LMS','Video','Exams','Reports','Certificates'], summary:'A training portal for courses, lessons, exams, certificates and student progress tracking.', challenge:'Training providers needed a polished learning portal with progress, certificates and content management.', solution:'We designed an LMS with course catalogs, student dashboards, exams, certificates and instructor analytics.', results:['Structured learning paths','Progress dashboards','Certificate-ready training programs']},
 {slug:'government-service-portal', title:'Government Service Portal', category:'Government', image:'/images/government.png', tags:['Portal','Workflow','Security','Reports','Forms'], summary:'A citizen-service platform for digital applications, approvals, document tracking and reports.', challenge:'Manual public-service workflows created delays and poor visibility for applicants and managers.', solution:'Novaris designed a service portal with application tracking, approval queues, status updates and dashboards.', results:['Clear digital application flow','Reduced manual follow-up','Transparent service status tracking']},
 {slug:'ecommerce-analytics-suite', title:'E-commerce Analytics Suite', category:'Retail', image:'/images/ecommerce.png', tags:['Commerce','Orders','Analytics','Cloud','CRM'], summary:'Commerce intelligence for orders, revenue, inventory, customers and product performance.', challenge:'Retail teams needed one place to understand sales, inventory and customer behavior.', solution:'We built a modern commerce analytics dashboard with revenue trends, orders, products and customer segments.', results:['Better inventory decisions','Revenue and product performance insight','Customer behavior visibility']}
];
export const services = [
 {title:'Enterprise Software',text:'ERP, CRM, HR, finance, procurement and internal workflow platforms designed for scale.',stack:['ERP','CRM','Dashboards']},
 {title:'AI Automation',text:'AI assistants, RAG search, document processing, ticket routing and business process automation.',stack:['LLM','RAG','Agents']},
 {title:'Cloud Infrastructure',text:'Secure deployment architectures, monitoring, backup strategy and cloud migration roadmaps.',stack:['Azure','AWS','Docker']},
 {title:'Web Platforms',text:'High-performance websites, SaaS portals, admin panels and customer-facing applications.',stack:['Next.js','React','API']},
 {title:'Mobile Applications',text:'Mobile experiences for operations, customers, training and field teams.',stack:['Flutter','iOS','Android']},
 {title:'DevOps & CI/CD',text:'Automated delivery pipelines, containers, observability and release workflows.',stack:['CI/CD','K8s','Monitoring']},
 {title:'Cybersecurity',text:'Secure application architecture, IAM, audit trails, vulnerability review and hardening.',stack:['IAM','Audit','SOC']},
 {title:'UI/UX Design',text:'Premium interfaces, product flows, design systems and dashboard experiences.',stack:['Design','UX','Systems']},
 {title:'Data Analytics',text:'Business intelligence, reporting, KPI dashboards and operational analytics.',stack:['BI','ETL','Reports']},
 {title:'Professional Training',text:'Practical technology courses for developers, teams and enterprise departments.',stack:['Academy','Labs','Certs']}
];
export const courses = ['Full Stack Web Development','Python Automation & Data','AI Engineering & Prompt Systems','React & Next.js Professional','Flutter Mobile Development','Cloud Computing Foundations','Azure / AWS Deployment','DevOps with Docker & CI/CD','Cybersecurity Fundamentals','Business Analytics & Power BI'];
export const industries = ['Healthcare','Finance','Education','Government','Retail','Logistics','Manufacturing','Hospitality','Startups','Enterprise Teams'];
export const process = [
 {title:'Discovery',text:'Clarify the business goal, workflows, users, risks and success metrics.'},
 {title:'Architecture',text:'Plan the data model, infrastructure, security, integrations and delivery roadmap.'},
 {title:'Design & Build',text:'Create polished interfaces and develop clean, scalable application modules.'},
 {title:'Launch & Improve',text:'Deploy, monitor, collect feedback and iterate with measurable improvements.'}
];


const caseBlueprints = {
  'enterprise-erp-suite': {
    subtitle: 'Finance • HR • Procurement • Inventory • Executive analytics',
    modules: ['Finance ledger','HR workspace','Procurement flow','Inventory control','Approval engine','Executive BI'],
    features: ['Role-based access control','Multi-branch reporting','Automated purchase approvals','Inventory alerts and audit logs','Finance dashboards','Export-ready reports'],
    timeline: ['Discovery & process mapping','Information architecture','ERP module development','Dashboard and reporting layer','Security review','Deployment readiness'],
    stats: [['42%','Faster approvals'],['6','Core modules'],['18','Management reports'],['99.9%','Cloud uptime target']],
    gallery: ['Finance dashboard','Procurement approvals','Inventory health','HR overview','Executive report','Audit trail'],
    architecture: ['Next.js portal','API gateway','Business modules','PostgreSQL','Object storage','Monitoring'],
    story: 'A modular operating system for organizations that need one place to manage finance, human resources, procurement, stock movement and executive performance indicators.'
  },
  'ai-customer-support-platform': {
    subtitle: 'AI agents • tickets • knowledge base • multilingual support',
    modules: ['AI assistant','Ticket inbox','Knowledge base','Routing rules','Conversation summaries','Quality analytics'],
    features: ['RAG knowledge retrieval','Smart escalation logic','Conversation summarization','Multilingual responses','Agent handoff','SLA dashboards'],
    timeline: ['Support workflow analysis','Knowledge base structure','AI assistant prototype','Ticket routing logic','Analytics dashboard','Safety and escalation testing'],
    stats: [['70%','Automated first replies'],['24/7','AI support coverage'],['4','Escalation paths'],['15m','Average triage target']],
    gallery: ['Conversation inbox','AI answer panel','Knowledge retrieval','Ticket analytics','Agent routing','SLA monitor'],
    architecture: ['Web widget','LLM orchestration','Vector database','Ticket API','Redis cache','Analytics'],
    story: 'A support platform built to reduce repetitive requests, improve response consistency and give managers clear visibility into customer experience.'
  },
  'banking-analytics-suite': {
    subtitle: 'Transactions • risk • fraud signals • executive reporting',
    modules: ['Transaction monitor','Risk indicators','Customer segments','Fraud alerts','Executive reports','Compliance dashboard'],
    features: ['Real-time transaction charts','Risk score tracking','Anomaly indicators','Branch and channel analytics','Board-ready reporting','Secure user roles'],
    timeline: ['KPI definition','Data model planning','Analytics interface','Risk visualization','Access control','Report exports'],
    stats: [['128K','Transactions modeled'],['24.8K','Active users view'],['99.98%','Uptime target'],['8','Risk signals']],
    gallery: ['Risk dashboard','Transaction volume','Fraud alerts','Customer insight','Compliance view','Executive summary'],
    architecture: ['Dashboard UI','Analytics API','Event pipeline','Data warehouse','Risk engine','Audit logs'],
    story: 'A secure analytics workspace for decision makers who need fast visibility into financial performance, transaction behavior and emerging risk signals.'
  },
  'hospital-management-system': {
    subtitle: 'Patients • appointments • billing • departments • reporting',
    modules: ['Patient registry','Appointments','Department capacity','Billing','Doctor schedule','Operational reports'],
    features: ['Patient profile management','Appointment scheduling','Department queue tracking','Billing status','Clinical role permissions','Management reports'],
    timeline: ['Hospital workflow mapping','Patient data model','Appointments module','Billing module','Department dashboard','Security review'],
    stats: [['1,248','Patient records'],['386','Appointments tracked'],['84','Bed capacity view'],['98%','Billing status visibility']],
    gallery: ['Patient flow','Appointment board','Department capacity','Billing dashboard','Doctor schedule','Operations report'],
    architecture: ['Patient portal','Clinical API','Scheduling engine','Billing service','Database','Reporting'],
    story: 'A healthcare operations platform designed to organize patient movement, appointments, departmental load and billing visibility in one secure workspace.'
  },
  'smart-logistics-dashboard': {
    subtitle: 'Fleet • routes • warehouses • delivery visibility • alerts',
    modules: ['Fleet map','Route optimizer','Warehouse status','Shipment tracker','Driver tasks','Alert center'],
    features: ['Live map interface','Shipment progress tracking','Delivery KPI dashboard','Warehouse capacity indicators','Route exception alerts','Fleet status overview'],
    timeline: ['Route workflow discovery','Map interface design','Tracking module','Alerts system','Warehouse dashboards','Operations rollout'],
    stats: [['92%','On-time tracking'],['156','In-transit shipments'],['342','Delivered today'],['24/7','Route visibility']],
    gallery: ['Fleet map','Route performance','Shipment details','Warehouse status','Alert center','Driver dispatch'],
    architecture: ['Map UI','Telemetry API','Route service','Event stream','Operations DB','Alert engine'],
    story: 'A command center for logistics teams that need to see routes, deliveries, warehouses and exceptions without switching between disconnected tools.'
  },
  'learning-management-platform': {
    subtitle: 'Courses • students • exams • certificates • progress tracking',
    modules: ['Course catalog','Student dashboard','Lessons','Exams','Certificates','Instructor analytics'],
    features: ['Structured learning paths','Video and lesson pages','Exam management','Progress reports','Certificate generation','Instructor insights'],
    timeline: ['Learning journey design','Course structure','Student dashboard','Assessments module','Certificate flow','Analytics'],
    stats: [['4,782','Students modeled'],['128','Courses'],['78%','Completion tracking'],['6','Learning paths']],
    gallery: ['Course catalog','Student progress','Exam dashboard','Certificate view','Instructor analytics','Learning path'],
    architecture: ['Learner portal','Content API','Assessment engine','Certificate service','Database','Analytics'],
    story: 'A training platform for organizations that want polished learning paths, measurable progress and certificate-ready programs.'
  },
  'government-service-portal': {
    subtitle: 'Digital applications • approvals • status tracking • citizen services',
    modules: ['Citizen portal','Applications','Approval queues','Document tracking','Service status','Management reports'],
    features: ['Online application forms','Status tracking','Approval workflows','Document upload flow','Service dashboards','Audit logs'],
    timeline: ['Service mapping','Portal design','Workflow engine','Document module','Dashboard layer','Security review'],
    stats: [['32,840','Applications modeled'],['28,540','Approved services'],['4,300','Processing items'],['20+','Service flows']],
    gallery: ['Citizen dashboard','Application workflow','Approval queue','Document tracker','Service reports','Admin console'],
    architecture: ['Citizen UI','Workflow API','Document store','Approval engine','Reporting DB','Audit service'],
    story: 'A public-service portal that improves transparency and helps teams manage applications, approvals and citizen communication.'
  },
  'ecommerce-analytics-suite': {
    subtitle: 'Orders • revenue • product performance • customer intelligence',
    modules: ['Revenue dashboard','Orders monitor','Product analytics','Customer segments','Inventory trends','Campaign reports'],
    features: ['Sales performance charts','Customer behavior visibility','Inventory indicators','Product ranking','Order funnel analytics','Campaign reporting'],
    timeline: ['Commerce KPI mapping','Data structure','Revenue dashboard','Customer insights','Product analytics','Reporting polish'],
    stats: [['$2.4M','Sales modeled'],['8,642','Orders tracked'],['6,324','Customers'],['12','Product segments']],
    gallery: ['Sales overview','Orders pipeline','Customer segments','Inventory health','Product ranking','Campaign report'],
    architecture: ['Storefront API','Orders service','Customer data','Analytics DB','Reporting layer','Dashboard UI'],
    story: 'A commerce intelligence suite for teams that need reliable revenue visibility, product performance and customer behavior insights.'
  }
};
projects.forEach(p=>Object.assign(p, caseBlueprints[p.slug]||{}));
