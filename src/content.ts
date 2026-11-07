// Single source of truth for all site copy.
// Facts come from Rohit's resume (public/Rohit-Bandameedi-Resume.pdf) and his own answers.
// Lines marked `// interpretation` are narrative readings of those facts. Rohit should confirm them.
// Strings starting with "TODO:" render as visible dashed placeholders until replaced.

export const person = {
  name: 'Rohit Bandameedi',
  title: 'Data & BI Analyst, becoming an AI Engineer',
  location: 'Saint Louis, MO',
  email: 'bandameedirohit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rohitbandameedi',
  github: 'https://github.com/Rohitgoud45',
  resume: './Rohit-Bandameedi-Resume.pdf',
  availability: 'Open to full-time & contract · Remote or relocation',
  intro:
    'Three-plus years turning operational data into decisions at Cognizant, an M.S. in Information Systems from Saint Louis University, and now building retrieval-augmented AI tools that know when to say "I don\'t know."',
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'work', label: 'Projects' },
  { id: 'mind', label: 'Mindset' },
  { id: 'toolkit', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const quickFacts = [
  { k: 'Experience', v: '3+ yrs · Data Analyst, Cognizant' },
  { k: 'Education', v: 'M.S. Information Systems, SLU · 2026' },
  { k: 'Focus', v: 'BI · Data Analytics · AI Engineering' },
  { k: 'Based in', v: 'Saint Louis, MO' },
]

export const about = {
  paragraphs: [
    "I've never been someone who wants to stand still.",
    'I find excitement in the unfamiliar. A new problem, an ambitious target, or a situation I haven\'t met before gives me a reason to explore, question, and think. Data analytics gave me the thing I look for most: finding problems. Business intelligence is how I show people the problem I found, and the way out of it.',
    "For me, learning doesn't only happen in a classroom. It happens every time something challenges the way I think. The more I challenge my mind, the sharper it gets. The sharper it gets, the bigger the challenges I want to take on.",
  ],
  // Rohit's own story, told in his words
  origin: {
    label: 'Where it started',
    title: 'My dad, and a failed lab.',
    body: [
      'My dad was a very critical thinker, and he made me the person I am today.',
      'The moment that changed things came in 11th standard. I failed a lab, and the professor told me I knew what to do. I just didn\'t care enough to do it properly.',
      "I've cared enough ever since.", // interpretation
    ],
  },
  proof: {
    label: 'Choosing the harder path',
    body: 'I tried out for my regional state team the day before a board exam. I played the match, sat the exam the next morning, and aced both.',
  },
  offDuty: [
    { what: 'Rock climbing', why: 'Every route is a problem you read before you solve.' }, // interpretation
    { what: 'Soccer', why: 'Played seriously enough to try out for the regional state team.' },
    { what: 'Running', why: 'How I clear my head.' },
    { what: 'Working out', why: 'Showing up and getting a little better each time.' }, // interpretation
  ],
  generalist:
    "I'm a generalist. I want to know about everything, at least until I understand how it works.",
}

export type Milestone = {
  when: string
  kind: 'Education' | 'Experience' | 'Project' | 'Transition'
  title: string
  where: string
  doing: string
  learned: string
  points?: string[]
}

export const journey: Milestone[] = [
  {
    when: '2020',
    kind: 'Education',
    title: 'B.E. Electronics & Communication Engineering',
    where: 'Andhra University',
    doing: 'An engineering degree built on signals, systems, and circuits.',
    learned:
      'ECE taught me that the right connections make things work. I found that life is the same: the right connections make everything easier.',
  },
  {
    when: 'Jan 2021 – May 2024',
    kind: 'Experience',
    title: 'Data Analyst',
    where: 'Cognizant Technology Solutions · Hyderabad',
    doing:
      'Gathered reporting requirements from client stakeholders and technical teams and turned them into dashboards, reports, and operational metrics.',
    learned:
      "A metric only helps if everyone agrees on what it means. Most of my reporting wins came from getting people to agree on definitions, not from the SQL.", // interpretation
    points: [
      'Standardized 10+ KPIs with metric owners, cutting reporting-related stakeholder queries by 25%.',
      'Built Python and SQL pipelines (indexing, join optimization, materialized views) reaching 99.9% data accuracy.',
      'Contributed to a delivery optimization model: 30% shorter delivery time, 22% fewer last-mile failures.',
      'Produced about three recurring and ad hoc KPI/SLA reports a week; ran issue validation and UAT in Jira.',
    ],
  },
  {
    when: 'Aug 2024 – May 2026',
    kind: 'Education',
    title: 'M.S. Information Systems',
    where: 'Saint Louis University',
    doing:
      'Went from operating reporting to designing systems: enterprise architecture (TOGAF, ArchiMate), relational modeling, full-stack labs, statistics in R, and Power BI.',
    learned:
      'Led a 5-person team as project manager on a city parking modernization project. Leading taught me that a good plan is one the whole team can follow.', // interpretation
  },
  {
    when: '2026 →',
    kind: 'Transition',
    title: 'Into AI engineering',
    where: 'Self-directed',
    doing:
      'Built a retrieval-augmented IT support assistant with its own evaluation harness, multiple LLM providers, and refusal guardrails.',
    learned:
      'The world is changing fast and I want a hand in it. Moving from analytics into AI felt like the natural next unfamiliar problem.',
  },
]

export type CaseStudy = {
  slug: string
  index: string
  name: string
  kicker: string
  stack: string[]
  context: string
  problem: string
  whyHard: string
  approach: string[]
  contribution: string
  execution: string[]
  results: { value: string; label: string }[]
  learned: string
  link?: { href: string; label: string }
  art: 'rag' | 'parking' | 'routes' | 'dash'
}

export const work: CaseStudy[] = [
  {
    slug: 'rag',
    index: '01',
    name: 'IT Support Assistant',
    kicker: 'Retrieval-augmented generation · Personal project',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'React', 'Docker', 'Gemini / OpenAI / Anthropic / Ollama'],
    context:
      'IT support teams answer the same questions again and again: VPN errors, password policies, account lockouts. The answers already exist in internal docs that are hard to search.',
    problem:
      'Build an assistant that answers plain-language IT questions from a knowledge base, cites its sources, and refuses when the documents do not cover the question.',
    whyHard:
      'A language model will happily make up a confident answer. In IT support a wrong answer is worse than no answer, so the hard part was teaching the system when not to answer.',
    approach: [
      'Kept embeddings local (ONNX all-MiniLM-L6-v2 in ChromaDB) so internal docs never leave the machine.',
      'Added a two-stage refusal guardrail. Stage 1: if the closest passage is too far away (cosine distance > 0.75), refuse without calling the LLM at all. Stage 2: the LLM must return a strict JSON contract that says whether the question is answerable.',
      'Wrote the evaluation harness alongside the assistant instead of after it, so every change could be measured.',
    ],
    contribution: 'Sole builder: ingestion, retrieval, guardrails, provider adapter, API, React UI, tests, and evaluation.',
    execution: [
      'Paragraph-based chunking (800 chars), top-4 cosine retrieval, and a citation sanitizer that removes invalid and duplicate references.',
      'A multi-provider adapter (Gemini, OpenAI, Anthropic, local models via Ollama/vLLM) with exponential backoff and an offline mock mode.',
      'Evaluation harness on a 15-question golden set (11 answerable, 4 unanswerable) measuring retrieval hit rate, answer accuracy, hallucination rate, and refusal accuracy.',
      'FastAPI serves the API and the React app; Docker for one-command runs; CI runs the test suite on every push.',
    ],
    results: [
      { value: '2-stage', label: 'refusal guardrail' },
      { value: '15', label: 'question golden eval set' },
      { value: '13/13', label: 'unit tests passing' },
      { value: '4+', label: 'LLM providers supported' },
    ],
    learned:
      "Saying \"I don't know\" is a feature. You can only trust a model's answers if you can measure when it should refuse.", // interpretation
    link: { href: 'https://github.com/Rohitgoud45/IT-Support-RAG', label: 'View the code on GitHub' },
    art: 'rag',
  },
  {
    slug: 'parking',
    index: '02',
    name: 'City of Riverton Parking Modernization',
    kicker: "Master's research project · Team of 5 · Project manager",
    stack: ['SQL Server', 'Node.js / Express', 'React', 'Looker Studio', 'TOGAF', 'Stripe (sandbox)'],
    context:
      "A city's parking system was producing citations that residents disputed, and permit processing was slow.",
    problem: 'Find out where the system was failing, then design an architecture that fixes it.',
    whyHard:
      'The data looked like a citation problem. The real cause was upstream in permit status, so the fix had to cover the whole process, not just one table.', // interpretation
    approach: [
      'Defined 5 KPIs from a 6-table SQL Server dataset of 1,600+ records.',
      'Followed the data to the root cause: 45.5% of citations were wrongful, and delays in permit status caused 58.8% of those.',
      'Co-designed a TOGAF-based target architecture around that root cause.',
    ],
    contribution:
      'Led the team as project manager, owning the charter, RACI matrix, and 11 milestone deliverables through the final report and presentation.',
    execution: [
      'Architecture: SQL Server, a Node.js/Express REST API, a React citizen portal and officer app, and Stripe sandbox payments.',
      'Simulated the before and after, and presented results in a 3-tab Looker Studio dashboard.',
    ],
    results: [
      { value: '94.9%', label: 'faster permit processing (168.24 → 8.61 hrs, simulated)' },
      { value: '54.5 → 94.75%', label: 'citation accuracy (simulated)' },
      { value: '151 → 35', label: 'disputes (simulated)' },
      { value: '100%', label: 'on all graded deliverables' },
    ],
    learned:
      "The first number you see is rarely the problem. Following wrongful citations back to permit status changed the whole design.", // interpretation
    art: 'parking',
  },
  {
    slug: 'delivery',
    index: '03',
    name: 'Delivery Optimization Model',
    kicker: 'Cognizant · Contributor',
    stack: ['Python', 'SQL', 'Geolocation', 'Clustering'],
    context: 'Last-mile delivery for operations at Cognizant, where late and failed deliveries cost time and money.',
    problem: 'Shorten delivery times and reduce last-mile failures.',
    whyHard: 'TODO: what made this hard (data quality, scale, constraints?)',
    approach: ['Combined geolocation data with clustering to group deliveries more efficiently.'],
    contribution: 'TODO: your specific part of the model (data prep, clustering, SQL, evaluation?)',
    execution: ['Built with Python and SQL on top of geolocation data.'],
    results: [
      { value: '30%', label: 'shorter delivery time' },
      { value: '22%', label: 'fewer last-mile failures' },
    ],
    learned: 'TODO: what this project taught you',
    art: 'routes',
  },
  {
    slug: 'powerbi',
    index: '04',
    name: 'Employment & Student Loan Dashboards',
    kicker: 'Power BI · Team project',
    stack: ['Power BI', 'DAX', 'Power Query'],
    context: 'Two long-running public datasets: U.S. employment (1976–2022) and federal student loan trends (NSLDS, 2007–2025).',
    problem: 'Make decades of public data readable, and connect trends to the policy changes behind them.',
    whyHard:
      'A dashboard over almost fifty years of data can easily become noise. The challenge was choosing what to show so a reader reaches a conclusion.', // interpretation
    approach: ['Designed the reports around written conclusions tied to policy changes, not just charts.'],
    contribution: 'Co-built the dashboards. TODO: which parts were yours',
    execution: ['KPI cards, slicers, and navigation buttons across multi-page reports, modeled in DAX and Power Query.'],
    results: [
      { value: '46 yrs', label: 'of employment data (1976–2022)' },
      { value: '18 yrs', label: 'of loan data (2007–2025)' },
    ],
    learned: 'TODO: what this project taught you',
    art: 'dash',
  },
]

export const otherWork = [
  { name: 'Sales & order database', detail: 'SQL Server, Python. 3NF design with ERDs, stored procedures, views, and Python sales visualizations.' },
  { name: 'Statistical analysis', detail: 'R. Shapiro-Wilk tests, paired t-tests, and effect sizes on training outcomes for 150 employees.' },
  { name: 'Enterprise architecture', detail: 'TOGAF ADM, ArchiMate. Redesigned an organization’s architecture with ROI-based business cases and risk assessments.' },
  { name: 'Full-stack coursework', detail: 'Node.js REST APIs and React labs, secure sessions, Jest unit tests, and a CI/CD pipeline design.' },
]

export const mind = [
  { n: '01', verb: 'I question.', body: "I don't accept the obvious answer automatically. I want to understand why something works.", eg: 'Wrongful parking citations looked like the problem. Asking why led to permit-status delays.' },
  { n: '02', verb: 'I investigate.', body: 'I explore the problem, gather information, analyze the situation, and look for connections.', eg: '1,600+ records across 6 tables, reduced to 5 KPIs that explained the failure.' },
  { n: '03', verb: 'I experiment.', body: "I test ideas, explore alternatives, and learn from what doesn't work.", eg: 'An evaluation harness so every change to the RAG assistant is measured, not guessed.' },
  { n: '04', verb: 'I execute.', body: 'I turn ideas into practical solutions and meaningful outcomes.', eg: '10+ KPIs standardized with metric owners. 25% fewer reporting queries.' },
  { n: '05', verb: 'I evolve.', body: "I take what I've learned into the next challenge.", eg: 'From BI dashboards to building AI systems.' },
]

export const toolkit = [
  { group: 'Data & BI', how: 'Finding the problem and showing it clearly', items: ['SQL (SQL Server, MySQL)', 'Power BI (DAX, Power Query)', 'Microsoft Fabric', 'Looker Studio', 'Advanced Excel', 'KPI reporting', 'Exploratory data analysis'] },
  { group: 'Programming', how: 'Building the pipelines and tools', items: ['Python (pandas, Matplotlib, Plotly)', 'R', 'JavaScript (Node.js, React)', 'REST APIs', 'Jest unit testing', 'Git / GitHub'] },
  { group: 'AI & LLM applications', how: 'Making models useful and accountable', items: ['Retrieval-augmented generation', 'Vector search (Chroma)', 'Prompt design', 'LLM output evaluation', 'FastAPI', 'Docker'] },
  { group: 'Data modeling', how: 'Structure before speed', items: ['Relational design (3NF)', 'ERDs', 'Stored procedures, views, triggers', 'Query optimization', 'ETL concepts'] },
  { group: 'Business analysis & delivery', how: 'Turning stakeholders’ needs into shipped work', items: ['Project management', 'Requirements gathering', 'UAT & QA', 'Gap analysis', 'BPMN', 'TOGAF', 'Agile / Scrum', 'Jira, Trello'] },
  { group: 'AI tools I work with', how: 'Moving faster, verifying everything', items: ['Claude', 'Cursor'] },
]

export const thinking = [
  { k: 'Root-cause analysis', v: 'Following a symptom back to its cause, like wrongful citations traced to permit status.' },
  { k: 'Shared definitions', v: 'Getting metric owners to agree on what a KPI means before reporting on it.' },
  { k: 'Measured decisions', v: 'Building the evaluation before trusting the output.' },
  { k: 'Leading a team', v: 'Charter, RACI, and 11 milestones, delivered with a team of five.' },
]

export const evolution = {
  now: [
    { k: 'How AI actually works', v: 'Going under the hood of models, not just calling APIs.' },
    { k: 'Large language models', v: 'Retrieval, grounding, evaluation, and refusal behavior.' },
    { k: 'Machine learning', v: 'The fundamentals behind the models I build on.' },
  ],
  statement:
    "I don't believe growth has a final destination. There is always another question to ask, another skill to develop, and another challenge worth pursuing.",
}

export const next = {
  roles: ['Business Intelligence Analyst', 'Data Analyst', 'AI Engineer'],
  terms: ['Full-time', 'Contract', 'Remote', 'Open to relocation'],
  closing: "New questions. New challenges. A sharper mind. Let's see what we can build.",
}
