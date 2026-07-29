export const PROFILE = {
  name: 'MOHAMMED ALI',
  roles: [
    'AI Developer',
    'Full Stack Engineer',
    'React Developer',
    'Machine Learning Engineer',
    'Problem Solver',
  ],
  titles: ['Computer Science Engineer', 'AI Engineer', 'Full Stack Developer', 'Machine Learning Enthusiast'],
  tagline:
    'Building intelligent, beautiful, and performant software at the intersection of AI and modern web.',
  email: 'aliahya17@gmail.com',
  phone: '+91 9686732800',
  location: 'India',
  github: 'https://github.com/mohdalii',
  linkedin: 'https://www.linkedin.com/in/mohammed-ali-051b22279',
  resumeUrl: '#',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/mohdalii', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-ali-051b22279', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:aliahya17@gmail.com', icon: 'mail' },
  { label: 'Phone', href: 'tel:+919686732800', icon: 'phone' },
];

export const STATS = [
  { label: 'CGPA', value: 7.2, suffix: '', decimals: 1 },
  { label: 'Projects Built', value: 3, suffix: '+' },
  { label: 'Technologies', value: 5, suffix: '+' },
  { label: 'Years Learning', value: 4, suffix: '+' },
  { label: 'Certifications', value: 6, suffix: '' },
];

export const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'C', level: 82 },
      { name: 'C++', level: 80 },
      { name: 'PHP', level: 70 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 94 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind', level: 92 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'FastAPI', level: 86 },
      { name: 'Node', level: 82 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 88 },
      { name: 'SQL', level: 86 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Three.js', level: 78 },
      { name: 'AutoCAD', level: 80 },
      { name: 'DXF', level: 75 },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'Machine Learning', level: 88 },
      { name: 'Generative AI', level: 84 },
      { name: 'Computer Vision', level: 82 },
      { name: 'Deep Learning', level: 80 },
      { name: 'Data Mining', level: 78 },
      { name: 'Quantum Computing', level: 60 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'ai-floor-plan-generator',
    title: 'Automated AI Floor Plan Generator',
    subtitle: 'Featured Project',
    description:
      'An AI-powered system that generates 2D architectural floor plans from natural-language briefs, converts them into 3D visualizations, and exports production-ready DXF files for AutoCAD. Combines generative ML with a real-time web viewer.',
    longDescription:
      'The Automated AI Floor Plan Generator takes a textual design brief (room count, area, style) and produces a valid 2D layout using a constrained generative model. A custom AutoCAD plugin (C#) ingests the generated geometry, renders it in 3D, and exports DXF. XGBoost and Linear Regression models optimize room placement for area efficiency and adjacency rules. A React + Three.js dashboard visualizes the plan in 3D with real-time editing, while a FastAPI backend orchestrates inference, DXF processing, and persistence.',
    tags: ['React', 'FastAPI', 'Three.js', 'AutoCAD Plugin', 'C#', 'Machine Learning', 'XGBoost', 'Linear Regression', '2D Layout Generation', '3D Visualization', 'DXF Processing'],
    github: 'https://github.com/',
    demo: '#',
    featured: true,
  },
  {
    id: 'vision-analytics',
    title: 'Computer Vision Analytics Suite',
    subtitle: 'Real-time vision pipeline',
    description:
      'A modular computer-vision platform for object detection, segmentation, and activity recognition with a streaming dashboard and edge deployment support.',
    tags: ['Python', 'OpenCV', 'PyTorch', 'FastAPI', 'React'],
    github: 'https://github.com/',
    demo: '#',
    featured: false,
  },
  {
    id: 'genai-copilot',
    title: 'GenAI Developer Copilot',
    subtitle: 'LLM-powered assistant',
    description:
      'A Retrieval-Augmented-Generation copilot for codebases — semantic search, summarization, and code generation grounded in your repository.',
    tags: ['Generative AI', 'LangChain', 'Node', 'React', 'Vector DB'],
    github: 'https://github.com/',
    demo: '#',
    featured: false,
  },
  {
    id: 'quantum-ml-lab',
    title: 'Quantum ML Playground',
    subtitle: 'Research prototype',
    description:
      'An experimental notebook environment exploring quantum kernels and hybrid classical-quantum classifiers on small datasets.',
    tags: ['Quantum Computing', 'Python', 'Qiskit', 'scikit-learn'],
    github: 'https://github.com/',
    demo: '#',
    featured: false,
  },
];

export const TIMELINE = [
  {
    year: '2021',
    title: 'Started Computer Science Engineering',
    type: 'education',
    description: 'Began undergraduate studies in Computer Science & Engineering. Fell in love with algorithms and systems.',
  },
  {
    year: '2022',
    title: 'First Full Stack Projects',
    type: 'projects',
    description: 'Shipped React + Node applications and started exploring machine learning on the side.',
  },
  {
    year: '2023',
    title: 'Infosys Springboard & NPTEL Certifications',
    type: 'certifications',
    description: 'Completed industry certifications in full stack development and AI foundations.',
  },
  {
    year: '2024',
    title: 'AI Floor Plan Generator — Featured Build',
    type: 'projects',
    description: 'Designed and built the Automated AI Floor Plan Generator integrating ML, AutoCAD, and 3D visualization.',
  },
  {
    year: '2025',
    title: 'AI Engineer & Open Source Contributor',
    type: 'journey',
    description: 'Continuing to build at the intersection of AI, web, and design systems.',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Infosys Springboard',
    issuer: 'Infosys',
    description: 'Full Stack Development & industry-ready software engineering foundations.',
    icon: 'code',
  },
  {
    title: 'NPTEL — IIT Kharagpur',
    issuer: 'NPTEL',
    description: 'Machine Learning & Data Mining certification with elite grade.',
    icon: 'brain',
  },
  {
    title: 'Spring Boot Workshop',
    issuer: 'Workshop',
    description: 'Backend microservices with Spring Boot, REST APIs, and JPA.',
    icon: 'server',
  },
];

export const EXPERIENCE = [
  {
    role: 'AI Engineer (Project Lead)',
    org: 'Automated AI Floor Plan Generator',
    period: '2024 — 2025',
    description: 'Led end-to-end architecture: generative ML, AutoCAD plugin (C#), DXF processing, and 3D web viewer.',
  },
  {
    role: 'Full Stack Developer',
    org: 'Independent Projects',
    period: '2022 — Present',
    description: 'Built and shipped React, FastAPI, and Node applications with a focus on UX and performance.',
  },
  {
    role: 'Machine Learning Researcher',
    org: 'Self-directed',
    period: '2023 — Present',
    description: 'Explored computer vision, deep learning, and generative models applied to real-world problems.',
  },
];

export const SOFT_SKILLS = [
  'Problem Solving',
  'Collaboration',
  'Communication',
  'Adaptability',
  'Critical Thinking',
  'Ownership',
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];
