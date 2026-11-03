// Single source of truth for portfolio content (resume, Oct 2026).

export const profile = {
  name: 'Atharva Gaikwad',
  role: 'GenAI Engineer',
  location: 'Pune, India',
  email: 'atharvaagaikwad04@gmail.com',
  github: 'https://github.com/Atharva1399',
  linkedin: 'https://www.linkedin.com/in/atharva-gaikwad-72ba25295/',
  // Set this to the Medium profile URL to show the Medium link.
  medium: 'https://medium.com/@athguy.dev',
  // Source repo, used for the docs' "Edit on GitHub" links.
  repo: 'https://github.com/Atharva1399/portfolios-code',
};

export type Metric = { value: string; label: string };
export type CaseLink = { label: string; href: string };

/** Case studies: narrative fields are Atharva's to write; metrics are real. */
export type CaseStudy = {
  id: string;
  tab: string;
  title: string;
  kind: string;
  stack: string[];
  problem: string;
  built: string;
  role: string;
  learned: string;
  metrics: Metric[];
  /** Pipeline sketch, drawn as labelled steps. */
  flow?: string[];
  /** An empty href renders as an [ADD] slot until the link exists. */
  links: CaseLink[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'auralis',
    tab: 'Auralis',
    title: 'Auralis',
    kind: 'Multilingual voice AI · voice-consent safeguard',
    stack: ['CUDA', '[ADD: stack]'],
    problem: '[WRITE: the problem Auralis solves, and for whom]',
    built: '[WRITE: what you built]',
    role: '[WRITE: your role and what you owned]',
    learned: '[WRITE: what you learned]',
    metrics: [
      { value: '22', label: 'Indian languages' },
      { value: '2.06 s', label: 'median time to first audio, RTX 3050 Ti (4 GB)' },
      { value: '0.08%', label: 'EER across 2,080 speaker-verification trials' },
      { value: '4', label: 'merged commits' },
    ],
    links: [
      { label: 'GitHub', href: '' },
      { label: 'Docs: run on Windows with an NVIDIA GPU', href: '/docs/run-auralis-windows-nvidia' },
      { label: 'Release notes', href: '/docs/auralis-release-notes' },
      { label: 'Research paper', href: '/writing#research' },
    ],
  },
  {
    id: 'hybrid-search',
    tab: 'Hybrid Search',
    title: 'LLM-Assisted Hybrid Search',
    kind: 'Retrieval · semantic + keyword search',
    stack: ['[ADD: stack]'],
    problem: '[WRITE: the problem]',
    built: '[WRITE: what you built]',
    role: '[WRITE: your role]',
    learned: '[WRITE: what you learned]',
    metrics: [
      { value: '46%', label: 'lower median latency (5.4 s → 2.9 s)' },
      { value: '22%', label: 'fewer irrelevant top-10 results' },
    ],
    links: [
      { label: 'GitHub', href: '' },
      { label: 'Docs: how hybrid search ranks results', href: '/docs/how-hybrid-search-ranks-results' },
    ],
  },
  {
    id: 'email-to-report',
    tab: 'Email-to-Report',
    title: 'Email-to-Report Generator',
    kind: 'LLM document automation',
    stack: ['Python', 'React', 'LLM APIs'],
    problem: '[WRITE: the problem]',
    built: '[WRITE: what you built]',
    role: '[WRITE: your role]',
    learned: '[WRITE: what you learned]',
    metrics: [{ value: '[ADD: metric]', label: '[ADD: what it measures]' }],
    flow: ['Inbox', 'Parser', 'LLM', '.docx · .xlsx · .pptx'],
    links: [
      { label: 'GitHub', href: '' },
      { label: 'Demo', href: '' },
    ],
  },
  {
    id: 'support-desk',
    tab: 'Support Desk',
    title: 'AI Support Desk',
    kind: 'Multi-agent RAG system',
    stack: ['Python', 'React', 'Express', 'Firebase'],
    problem: '[WRITE: the problem]',
    built: '[WRITE: what you built]',
    role: '[WRITE: your role]',
    learned: '[WRITE: what you learned]',
    metrics: [{ value: '[ADD: metric]', label: '[ADD: what it measures]' }],
    flow: ['Query', 'Classifier agent', 'Retriever', 'Resolver agent', 'Reply'],
    links: [
      { label: 'GitHub', href: '' },
      { label: 'Demo', href: '' },
    ],
  },
];

export type MoreProject = { title: string; kind: string; note: string; href?: string };

/** Earlier builds, listed compactly under the case studies. */
export const moreProjects: MoreProject[] = [
  {
    title: 'Brain Tumor Detection',
    kind: 'Computer vision · YOLOv8',
    note: 'YOLOv8 models trained on MRI datasets to detect tumors.',
    href: 'https://github.com/Atharva1399/brain-tumor-detector',
  },
  {
    title: 'DaClean',
    kind: 'Python package',
    note: 'Automates data-cleaning workflows with repeatable steps.',
    href: 'https://github.com/Atharva1399/DaClean',
  },
  {
    title: 'AutoViron',
    kind: 'Python package',
    note: "Detects a project's dependencies and creates its virtual environment.",
    href: 'https://github.com/Atharva1399/autoviron',
  },
  {
    title: 'EkMat',
    kind: 'Web3 · ZK voting',
    note: 'Privacy-preserving e-voting on Ethereum with ZK-SNARKs.',
  },
  {
    title: 'Fundora',
    kind: 'Web3 · invoice DeFi',
    note: 'Tokenises unpaid SME invoices as NFTs for liquidity on Base.',
    href: 'https://github.com/FundoraInvoice/Fundora-Invoices',
  },
  { title: 'VestaFi', kind: 'Web3 · DeFi staking', note: 'A DeFi staking platform.' },
  {
    title: 'Herb Traceability',
    kind: 'Web3 · Polygon + IPFS',
    note: 'Traces Ayurvedic herbs from farm to shelf on Polygon.',
  },
];

export type SkillGroup = { name: string; spine: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    name: 'AI / ML',
    spine: 'AI · ML',
    items: [
      'Generative AI',
      'LLMs',
      'RAG pipelines',
      'Prompt engineering',
      'Multi-agent systems',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'YOLOv8',
    ],
  },
  {
    name: 'Languages',
    spine: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C#', 'Solidity'],
  },
  {
    name: 'Full-stack',
    spine: 'Full-stack',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'REST APIs', 'Tailwind CSS'],
  },
  {
    name: 'Data & tools',
    spine: 'Data · Tools',
    items: ['ChromaDB', 'MongoDB', 'Firebase', 'Docker', 'Git', 'Postman', 'Power BI'],
  },
  {
    name: 'Web3',
    spine: 'Web3',
    items: ['Solidity', 'Hardhat', 'Ethers.js', 'IPFS', 'Polygon', 'ZK-SNARKs (Circom, SnarkJS)'],
  },
];

export type JourneyEntry = {
  when: string;
  title: string;
  org: string;
  points: string[];
  /** DevRel roles: the writing this role produced. */
  writing?: string;
};

export const journey: JourneyEntry[] = [
  {
    when: 'Mar – Nov 2025',
    title: 'Co-founder & DevRel',
    org: 'WeConn',
    points: [
      'Co-founded a developer community for collaborating on emerging tech.',
      'Ran workshops and discussion sessions on GenAI and Web3.',
    ],
    writing: '[WRITE: writing you did: event announcements, session material, posts]',
  },
  {
    when: 'May – Jun 2025',
    title: 'GenAI Intern',
    org: 'Tata Communications',
    points: [
      'Implemented GenAI use cases for intent classification.',
      'Automated workflows that triage large-scale text data.',
    ],
  },
  {
    when: '[ADD: dates]',
    title: 'DevRel',
    org: 'ActualOne · Web3 events company',
    points: ['[WRITE: what you did in this role]'],
    writing: '[WRITE: writing you did: event announcements, session material, posts]',
  },
  {
    when: '2023 – 2027',
    title: 'B.Tech, Computer Science',
    org: 'MIT ADT University · CGPA 8.13',
    points: ['DSA, DBMS, OS, networks, ML and network security.'],
  },
];

export const wins = [
  { event: 'VOIS 2026 Innovation Hackathon', result: 'Top 50 grand finalist' },
  { event: 'Smart India Hackathon', result: 'Led teams to Round 2, twice' },
];

export const certifications = [
  'Programming in Python · Meta',
  'Python for Data Science · Reliance',
  'Data Modeling in Power BI · Microsoft',
  'Networking, OS & Cybersecurity basics · Cisco',
];

export const clubs = ['Mirage AR/VR Club, technical team', 'AWS Cloud Club, member'];
