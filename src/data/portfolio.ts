// Single source of truth for portfolio content (resume, Oct 2026).

export const profile = {
  name: 'Atharva Gaikwad',
  role: 'GenAI Engineer',
  location: 'Pune, India',
  email: 'atharvaagaikwad04@gmail.com',
  github: 'https://github.com/Atharva1399',
  linkedin: 'https://www.linkedin.com/in/atharva-gaikwad-72ba25295/',
  // Set this to the Medium profile URL to show the Medium link.
  medium: '',
};

export type Project = {
  id: string;
  tab: string;
  title: string;
  kind: string;
  stack: string[];
  points: string[];
  /** Architecture sketch, drawn as labelled steps. */
  flow?: string[];
  link?: { href: string; label: string };
};

export const aiProjects: Project[] = [
  {
    id: 'support-desk',
    tab: 'Support Desk',
    title: 'AI Support Desk',
    kind: 'Multi-agent RAG system',
    stack: ['Python', 'React', 'Express', 'Firebase'],
    points: [
      'Multi-agent architecture that classifies customer support queries and routes each to the agent for its category.',
      'RAG pipelines generate context-aware responses, cutting the manual effort of resolving tickets.',
    ],
    flow: ['Query', 'Classifier agent', 'Retriever', 'Resolver agent', 'Reply'],
    link: { href: 'https://github.com/Atharva1399', label: 'On GitHub' },
  },
  {
    id: 'email-analyzer',
    tab: 'Email Analyzer',
    title: 'Email Analyzer & Report Generator',
    kind: 'LLM document automation',
    stack: ['Python', 'React', 'LLM APIs'],
    points: [
      'Turns raw email content into structured Word, Excel and PowerPoint reports.',
      'Prompt-engineering and content-parsing workflows that automate the report end to end.',
    ],
    flow: ['Inbox', 'Parser', 'LLM', '.docx · .xlsx · .pptx'],
    link: { href: 'https://github.com/Atharva1399', label: 'On GitHub' },
  },
  {
    id: 'brain-tumor',
    tab: 'Tumor Detection',
    title: 'Brain Tumor Detection',
    kind: 'Computer vision · YOLOv8',
    stack: ['Python', 'PyTorch', 'YOLOv8'],
    points: [
      'Trained YOLOv8 models on MRI datasets to detect tumors automatically.',
      'Preprocessing and augmentation to make detections more reliable.',
    ],
    flow: ['MRI scan', 'Preprocess', 'YOLOv8', 'Bounding boxes'],
    link: { href: 'https://github.com/Atharva1399/brain-tumor-detector', label: 'brain-tumor-detector' },
  },
  {
    id: 'daclean',
    tab: 'DaClean',
    title: 'DaClean',
    kind: 'Python package · data cleaning',
    stack: ['Python'],
    points: [
      'An extensible package that automates data-cleaning workflows.',
      'Prepares high-quality datasets with transparent, repeatable steps.',
    ],
    link: { href: 'https://github.com/Atharva1399/DaClean', label: 'DaClean' },
  },
  {
    id: 'autoviron',
    tab: 'AutoViron',
    title: 'AutoViron',
    kind: 'Python package · dev tooling',
    stack: ['Python'],
    points: [
      "Detects a project's dependencies and creates its virtual environment automatically.",
      'Streamlines setting up new Python projects.',
    ],
    link: { href: 'https://github.com/Atharva1399/autoviron', label: 'autoviron' },
  },
];

export type SideBuild = { title: string; kind: string; note: string; href?: string };

export const sideBuilds: SideBuild[] = [
  {
    title: 'EkMat',
    kind: 'ZK voting',
    note: 'Privacy-preserving e-voting on Ethereum with ZK-SNARKs; contracts stop double voting.',
  },
  {
    title: 'Fundora',
    kind: 'Invoice DeFi',
    note: 'Tokenises unpaid SME invoices as NFTs and links them to liquidity pools on Base.',
    href: 'https://github.com/FundoraInvoice/Fundora-Invoices',
  },
  { title: 'VestaFi', kind: 'DeFi staking', note: 'A DeFi staking platform.' },
  {
    title: 'Herb Trace­ability',
    kind: 'Polygon + IPFS',
    note: 'Traces Ayurvedic herbs from farm to shelf on Polygon, with records on IPFS.',
  },
  {
    title: 'Agent Learning Env',
    kind: 'AI agents',
    note: 'An AI agent-based learning environment.',
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

export type JourneyEntry = { when: string; title: string; org: string; points: string[] };

export const journey: JourneyEntry[] = [
  {
    when: 'Mar – Nov 2025',
    title: 'Co-founder & DevRel',
    org: 'WeConn',
    points: [
      'Co-founded a developer community for collaborating on emerging tech.',
      'Ran workshops and discussion sessions on GenAI and Web3.',
    ],
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
