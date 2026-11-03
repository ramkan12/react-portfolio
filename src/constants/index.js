export const HERO_TAGLINE = `I build production AI agents: autonomous systems that read, reason, take action, and verify their own work.`;

export const HERO_SUBTEXT = `I build LLM-powered agentic systems across tool use, RAG, multi-model orchestration, and evaluation, plus the reliability layer that makes them safe in production.`;

export const HERO_LOCATION = `Tampa, FL · open to relocation`;

export const ABOUT_TEXT = `I'm a software engineer who moved into agentic AI. I got hooked on the gap between "clever in a demo" and "reliable in production," and now spend most of my time in that gap: tool-use design, RAG, multi-model routing, and the evaluation layer that tells you whether an agent is actually safe to ship. I care about the boring-sounding parts most people skip, like benchmarking, audit trails, and human-review queues, because that's what turns an agentic pipeline from a party trick into real infrastructure.`;

export const ABOUT_FOOTNOTE = `B.S. Computer Science, University of South Florida, May 2026. When I'm not shipping agents: exploring new cities and defending Crisp Apple as the correct Olipop flavor.`;

export const SKILLS = [
  {
    label: "agentic_ai",
    title: "Agentic AI & LLMs",
    items: [
      "LLM Orchestration",
      "Agentic Pipelines",
      "Tool Use / Function Calling",
      "RAG",
      "Prompt Engineering",
      "Structured Outputs",
      "Multi-Model Routing",
      "LLM Evaluation & Benchmarking",
      "Claude API",
      "OpenAI API",
      "Gemini",
    ],
  },
  {
    label: "backend",
    title: "Backend & Systems",
    items: [
      "Python",
      "TypeScript",
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "RBAC",
      "Async",
      "Git",
    ],
  },
  {
    label: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
  },
  {
    label: "infra",
    title: "Infra & Tooling",
    items: [
      "Docker",
      "Modal",
      "Serverless",
      "CI/CD",
      "Integration Testing",
      "Google OAuth",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "September 2025 - Present",
    role: "Python Backend Developer",
    company: "Magic Notes Startup, Remote",
    description: `Built a production REST API to automate patient follow-up form generation for a healthcare platform serving frontline workers nationwide. Integrated a Flask backend with Claude AI for document generation and Supabase PostgreSQL for storage, processing 100+ patient appointments while maintaining HIPAA compliance standards.`,
    technologies: ["Python", "Flask", "REST APIs", "Claude AI", "Supabase", "PostgreSQL", "Heroku", "Render"],
  },
  {
    year: "May 2024 - August 2024",
    role: "Technical Assistant",
    company: "Global Vision, Ft. Lauderdale, FL",
    description: `Supported SQL database operations and reporting for ERP systems serving enterprise clients in the retail and luxury goods sectors.`,
    technologies: ["SQL", "ERP Systems"],
  },
  {
    year: "August 2024 - May 2025",
    role: "Freelance Front-End Developer",
    company: "Independent Contractor",
    description: `Developed custom portfolio websites for clients. Delivered responsive, modern designs that helped clients showcase their work professionally to potential employers.`,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Vite"],
  },
];

export const PROJECTS = [
  {
    flagship: true,
    title: "Accmatica",
    subtitle: "Full-Stack AI-Powered Accounting Platform",
    file: "~/projects/accmatica",
    teaser: `A QuickBooks Online style double-entry accounting platform built from scratch for a real accounting firm, now being tested on live clients. Includes an autonomous AI pipeline that classifies and extracts financial documents from email into a human-reviewed queue before posting to an audited ledger, plus a guardrailed natural-language assistant (text-to-SQL) that answers questions about a client's numbers.`,
    fullDescription: [
      `A production-grade, multi-tenant accounting platform (modeled on QuickBooks Online) with an autonomous AI document pipeline at its core. Client emails are polled via the Gmail API, a single Claude call classifies each PDF (invoice vs. bank statement, AP vs. AR) and extracts structured data, and results route to a human-review queue before being written to a real double-entry ledger through a fully audited service layer.`,
      `Built on Node.js/TypeScript, PostgreSQL, and React with role-based access control, tenant isolation, and 164 test files run against a real Postgres database. Also includes a guardrailed text-to-SQL assistant: an LLM generates read-only SQL against the live schema behind several safety layers (allow-listed tables, an enforced READ ONLY transaction, parameterized business-id binding, a query timeout, and a row cap), letting an accountant ask questions about a client's numbers in natural language. A separate custom benchmarking harness compares Claude and Gemini on real invoices across accuracy, latency, and cost: one finding was a cheaper model matching frontier accuracy at about 80x lower cost, while another silently misclassified AP vs AR.`,
    ],
    metrics: [
      { label: "commits", value: "954" },
      { label: "migrations", value: "122" },
      { label: "test files (real Postgres, no mocks)", value: "164" },
      { label: "financial reports", value: "60+" },
      { label: "tenant isolation", value: "yes" },
      { label: "audit trail", value: "full" },
    ],
    highlights: [
      `Double-entry ledger as the single source of truth: every module posts through one journal-entry service, so 60+ reports tie out automatically.`,
      `Layered AI transaction coding: client rules, deterministic accounting rules, and prior history before the LLM, which can only choose from the client's existing chart of accounts and routes anything low-confidence to a Suspense account instead of guessing.`,
      `Role-based access control (5 roles) enforced server-side, with a dedicated test suite that calls every route as every role.`,
    ],
    technologies: [
      "Agentic Pipeline",
      "LLM Orchestration",
      "Claude API",
      "Gmail API",
      "Text-to-SQL",
      "Model Evaluation",
      "TypeScript",
      "PostgreSQL",
      "React",
      "Production",
    ],
  },
  {
    title: "Newsletter Automation Pipeline",
    subtitle: "Multi-Tool Autonomous Agent",
    file: "~/projects/newsletter-agent",
    description: `An end-to-end autonomous agent chaining Perplexity (research), Claude (content + styling), Kie.ai (image generation), and Gmail (delivery) into a single command, deployed serverlessly on Modal with a weekly schedule.`,
    technologies: ["Multi-Tool Agent", "Modal", "Claude API", "Perplexity", "Gmail API", "Serverless"],
  },
  {
    title: "LLM Routing & Evaluation Study",
    subtitle: "Model Benchmark & Cost/Quality Routing",
    file: "~/projects/llm-routing-study",
    description: `A rigorous benchmark of six frontier and budget LLMs on messy real-world business data, scored against a ground-truth answer key across data-quality handling, accuracy, and cost, surfacing a hidden pricing trap most models missed and a model that returned nothing at all. Demonstrates evaluation rigor and cost/quality routing judgment.`,
    technologies: ["LLM Evaluation", "Model Routing", "Cost Optimization", "Benchmarking"],
  },
  {
    title: "ReAct Agent API",
    subtitle: "Deployed Agent (live endpoint)",
    file: "~/projects/react-agent-api",
    description: `A from-scratch ReAct agent (Claude + tool use, no framework) wrapped in a FastAPI service, containerized with Docker, and deployed live on Render. Hand-written reason-act-observe loop with a safety cap, input validation, and clean error handling. An interviewer can hit the live endpoint directly.`,
    technologies: ["ReAct", "FastAPI", "Docker", "Render", "Tool Use", "Python"],
    link: "https://react-agent-api.onrender.com/docs",
    github: "https://github.com/ramkan12/react-agent-api",
  },
  {
    title: "J.E.F.F.",
    subtitle: "AI Voice Assistant",
    file: "~/projects/jeff-voice-assistant",
    description: `Web-based voice assistant with AI-powered responses via the Groq API. Speech recognition and text-to-speech, weather lookups, calculations, and natural conversation, built on a Flask backend with the Web Speech API for real-time voice interaction.`,
    technologies: ["Python", "Flask", "Groq AI", "Web Speech API", "OpenWeatherMap API"],
    link: "https://j-e-f-f-ai-voice-assistant.onrender.com/",
    github: "https://github.com/ramkan12/J.E.F.F-Voice-Assistant",
  },
];

export const CONTACT = {
  location: "Tampa, FL · open to relocation",
  email: "khanriham38@gmail.com",
  github: "https://github.com/ramkan12",
  githubLabel: "github.com/ramkan12",
  linkedin: "https://www.linkedin.com/in/riham-k-037969249/",
  linkedinLabel: "linkedin.com/in/riham-k-037969249",
  resume: "/resume.pdf",
};
