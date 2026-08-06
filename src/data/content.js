/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE ONLY.
 *  Every piece of text, link and list on the site comes from here.
 *  Components read from it — you should never need to touch JSX to change copy.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Yurii S.',
  title: 'Full-Stack Web Developer',
  location: 'Ukraine',
  available: true,
  availableText: 'Available for work',
  // Drop your photo at /public/profile.JPG (or change this path).
  photo: '/profile.JPG',
  resume: '/resume.pdf', // set to null to hide the "Download CV" button
};

export const social = {
  email: 'yurii.stepaniuk.dev@gmail.com',
  github: 'https://github.com/yuriiforge',
  linkedin: 'https://www.linkedin.com/in/yurii-stepaniuk-316786253/',
  telegram: null,
};

export const nav = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
];

export const about = {
  headline: 'Full-Stack Web Developer',
  subhead: 'React · Next.js · Node.js · NestJS',
  paragraphs: [
    'Full-Stack JavaScript/TypeScript developer with 5 years of commercial experience building scalable SaaS products, AI-powered applications, enterprise dashboards and real-time web platforms.',
    'I design responsive frontend architectures and the systems behind them — REST and GraphQL APIs, database schemas, authentication and authorization, and third-party integrations. Day to day that means React, Next.js, Node.js, NestJS and Express on top of PostgreSQL, MongoDB and Supabase, shipped through Docker and CI/CD.',
    'I have delivered end-to-end features including Stripe subscription workflows, OAuth 2.0 / JWT / RBAC authentication, Socket.IO real-time communication, data-intensive dashboards, and LLM integrations with OpenAI, Gemini, DeepSeek and Grok. Comfortable across the whole lifecycle: architecture discussions, implementation, code review, testing, deployment and Agile collaboration.',
  ],
  stats: [
    { value: '5+', label: 'Years of experience' },
    { value: 'Remote', label: 'Availability' },
    { value: 'SaaS', label: 'Products' },
    { value: 'B2', label: 'English' },
  ],
};

/**
 * Project cards expand on click.
 *  - `summary`  → always visible, keep it to one line
 *  - `details`  → array of bullet points, revealed on expand
 *  - `nda: true` → renders the confidential badge and hides links
 *  - `period`   → optional, set to null to hide
 */
export const projects = [
  {
    title: 'Yooki Labs',
    subtitle: 'AI-Powered EdTech SaaS',
    period: null,
    summary:
      'AI-powered learning platform with AI tutors, role-based dashboards, subscription billing and real-time collaboration.',
    details: [
      'Built role-based dashboards for students and parents covering progress tracking, learning analytics, recommendations, lesson management and activity monitoring.',
      'Implemented secure auth workflows with OAuth 2.0, JWT and RBAC, plus custom email verification and secure token management.',
      'Integrated the full Stripe payment infrastructure — Checkout, Billing Portal, subscription lifecycle, upgrades, downgrades, cancellations and webhook processing.',
      'Developed real-time chat and notification systems using Socket.IO and an event-driven architecture.',
      'Integrated multiple LLM providers (OpenAI, Gemini, DeepSeek, Grok) with prompt engineering, contextual conversation memory, AI personas and rich Markdown/LaTeX rendering.',
      'Designed scalable REST APIs and backend services in Node.js and NestJS, and tuned performance through query optimization and caching strategies.',
    ],
    stack: [
      'Next.js',
      'Redux Toolkit',
      'TanStack Query',
      'Tailwind CSS',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Stripe',
      'Socket.IO',
      'OpenAI',
      'Docker',
    ],
    links: { live: 'https://yookilabs.com', github: null },
    nda: false,
    featured: true,
  },
  {
    title: 'Status Luxury',
    subtitle: 'Real Estate Platform & Admin Panel',
    period: null,
    summary:
      'SEO-optimized multilingual property platform for an international real estate agency, rebuilt from a legacy system.',
    details: [
      'Re-engineered the legacy platform into a modern Next.js + NestJS full-stack architecture with server-side rendering and a scalable application structure.',
      'Developed SEO-optimized listing pages with dynamic routing, metadata optimization, multilingual support and RTL localization.',
      'Built a secure Admin Panel with CRUD operations, property management, inquiry tracking and role-based authentication.',
      'Configured Supabase Auth, PostgreSQL, database migrations and optimized storage for high-resolution property images.',
      'Integrated Twilio, Gmail SMTP and WhatsApp Click-to-Chat to automate customer communication and lead management.',
      'Optimized performance through code splitting, image optimization, caching and database query tuning.',
    ],
    stack: [
      'Next.js (SSR)',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'React Hook Form',
      'Tailwind CSS',
      'shadcn/ui',
      'NestJS',
      'TypeORM',
      'Supabase',
      'Twilio',
      'Docker',
    ],
    links: { live: 'https://statusluxury.me', github: null },
    nda: false,
    featured: true,
  },
  {
    title: 'SDX Web — YDE Insurance',
    subtitle: 'High-Load Enterprise Insurance Platform',
    period: null,
    summary:
      'Enterprise platform for dealerships and insurers managing claims, vehicle inspections, repair estimates and policy workflows.',
    details: [
      'Developed scalable full-stack features for insurance claim processing, agreement management, vehicle inspections and repair estimation workflows.',
      'Built reusable frontend components and shared business modules, improving maintainability and cutting duplication across multiple products.',
      'Implemented complex data-driven interfaces: paginated data tables, advanced filtering, vehicle damage assessment tools and multi-step business workflows.',
      'Managed server-state synchronization with TanStack Query — caching, optimistic updates, pagination and efficient API communication.',
      'Integrated real-time status tracking and workflow notifications over WebSockets.',
      'Optimized performance via lazy loading, query optimization, debounced search, memoization and efficient rendering.',
      'Leveraged AI-assisted development tools (Claude Code, GitHub Copilot) to accelerate implementation, refactoring, debugging and documentation.',
    ],
    stack: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS v4',
      'Material UI',
      'Radix UI',
      'TanStack Query',
      'Zustand',
      'Zod',
      'NestJS',
      'PostgreSQL',
      'WebSockets',
      'AWS S3',
      'Docker',
    ],
    links: { live: null, github: null },
    nda: true,
    featured: false,
  },
  {
    title: 'B2B AI-Powered Enterprise Platform',
    subtitle: 'Workflow Automation SaaS',
    period: null,
    summary:
      'Enterprise SaaS for digital transformation — AI-assisted analytics, workflow automation and operational dashboards.',
    details: [
      'Developed full-stack features for enterprise workflow automation and business process management.',
      'Built responsive dashboards, KPI monitoring, analytics and reporting modules alongside AI-assisted operational workspaces.',
      'Developed scalable REST APIs in NestJS supporting workflow orchestration, task management and enterprise data processing.',
      'Implemented RBAC, secure authentication and multi-role user workflows for enterprise environments.',
      'Integrated OpenAI API to generate business assets, operational insights and workflow recommendations.',
      'Implemented real-time collaboration, activity tracking, notification systems, approval workflows and automated process pipelines.',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'TanStack Query',
      'Tailwind CSS',
      'Material UI',
      'NestJS',
      'OpenAI API',
      'Stripe',
      'Chart.js',
      'PostgreSQL',
      'Docker',
    ],
    links: { live: null, github: null },
    nda: true,
    featured: false,
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'Redux',
      'Redux Toolkit',
      'Zustand',
      'TanStack Query',
      'React Hook Form',
      'Vite',
    ],
  },
  {
    category: 'UI & Styling',
    items: [
      'Tailwind CSS',
      'Material UI',
      'Ant Design',
      'shadcn/ui',
      'Radix UI',
      'styled-components',
      'SCSS / Sass',
      'Less',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Express.js',
      'REST API',
      'GraphQL',
      'JWT Auth',
      'WebSockets',
      'Socket.IO',
    ],
  },
  {
    category: 'Databases & Storage',
    items: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Prisma',
      'TypeORM',
      'Firebase',
      'Supabase',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS (EC2, S3, RDS, Lambda)',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Vercel',
      'Railway',
    ],
  },
  {
    category: 'Data Visualization',
    items: ['Chart.js', 'ApexCharts', 'Highcharts', 'Recharts'],
  },
  {
    category: 'Testing & Monitoring',
    items: ['Jest', 'Mocha', 'Sentry', 'Prometheus', 'Grafana'],
  },
  {
    category: 'AI-Assisted Development',
    items: [
      'Claude Code',
      'GitHub Copilot',
      'Prompt Engineering',
      'LLM Integration',
      'AI-Augmented Workflows',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'Jira',
      'Trello',
      'Webpack',
      'npm',
    ],
  },
];

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Incode Group',
    period: '2023 — Present · 3 yrs',
    location: 'Remote',
    current: true,
    points: [
      'Deliver end-to-end features across EdTech SaaS, real estate, enterprise insurance and AI-powered B2B platforms.',
      'Design and ship REST APIs and backend services in Node.js and NestJS backed by PostgreSQL, MongoDB and Supabase.',
      'Build data-intensive React and Next.js interfaces: dashboards, paginated tables, advanced filtering and multi-step workflows.',
      'Implement authentication and authorization systems using OAuth 2.0, JWT and RBAC.',
      'Integrate Stripe subscription billing, Socket.IO real-time communication and LLM providers (OpenAI, Gemini, DeepSeek, Grok).',
      'Contribute to CI/CD pipelines, code reviews, testing, debugging and production deployments.',
      'Collaborate with QA engineers, designers and product owners in Agile/Scrum teams.',
    ],
  },
  {
    // ← Your CV states 5 years total but doesn't name the pre-Incode employer.
    //    Replace the company/location below, or delete this whole entry.
    role: 'Full-Stack Developer',
    company: 'Freelance & Contract',
    period: '2021 — 2023 · 2 yrs',
    location: 'Remote',
    current: false,
    points: [
      'Built responsive React applications and marketing sites for international clients.',
      'Developed Node.js and Express backends with REST APIs, JWT authentication and third-party integrations.',
      'Delivered projects end to end — from requirements and architecture through deployment and handover.',
    ],
  },
];

export const education = [
  {
    degree: "Master's Degree — Computer Science (MSCS)",
    school: 'National University of Water Environment and Engineering',
    period: null,
  },
  {
    degree: "Bachelor's Degree — Computer Engineering (BEng)",
    school: 'National University of Water Environment and Engineering',
    period: null,
  },
];

export const languages = [
  { name: 'Ukrainian', level: 'Native' },
  { name: 'English', level: 'Upper-Intermediate (B2)' },
];

export const contact = {
  headline: "Let's work together",
  text: "I'm open to full-time roles, contract work and interesting collaborations. The fastest way to reach me is email — I usually reply within a day.",
};
