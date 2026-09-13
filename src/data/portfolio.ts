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
  resumeUrl: '/ali.pdf',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/mohdalii', icon: 'github' },
  { label: 'Email', href: 'mailto:aliahya17@gmail.com', icon: 'mail' },
  { label: 'Phone', href: 'tel:+919686732800', icon: 'phone' },
];

export const STATS = [
  { label: 'CGPA', value: 8.7, suffix: '', decimals: 1 },
  { label: 'Projects Built', value: 24, suffix: '+' },
  { label: 'Technologies', value: 30, suffix: '+' },
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
      'An AI-powered system that generates 2D residential floor plans and exports production-ready DXF files for AutoCAD, trained on a 17,000-sample residential floor plan dataset.',
    longDescription:
      'The Automated AI Floor Plan Generator takes a design brief (room count, area, style) and produces a valid 2D room layout. scikit-learn regression models handle room placement and sizing, trained on aggregate statistics (room frequency, adjacency, size ratios) mined from a 17,000-plan residential dataset. A FastAPI backend orchestrates inference and persistence, exports the generated geometry to production-ready DXF files via ezdxf for direct use in AutoCAD, and serves a React client for building and reviewing plans.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'React', 'ezdxf', 'DXF Export', 'Pandas', 'NumPy'],
    github: 'https://github.com/mohdalii/AI_Floor_Planner',
    demo: '',
    featured: true,
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    subtitle: 'Full-stack admin & student portal',
    description:
      'A role-based student management system with separate admin and student dashboards — attendance tracking, fee management, course enrollment, results, timetables, and CSV/PDF report exports.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    github: 'https://github.com/mohdalii/student_management',
    demo: '',
    featured: false,
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    subtitle: 'This site',
    description:
      'This portfolio itself — a React + TypeScript site with Framer Motion animations, a command palette, custom cursor and scroll effects, and a fully themeable design system, deployed on Vercel.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/mohdalii/aliportfolio',
    demo: 'https://mohdali.vercel.app/',
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
    description: 'Designed and built the Automated AI Floor Plan Generator, integrating ML-based room layout with DXF export for AutoCAD.',
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
    description: 'Led end-to-end architecture: scikit-learn room-layout models, a FastAPI backend, and DXF export for AutoCAD.',
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
