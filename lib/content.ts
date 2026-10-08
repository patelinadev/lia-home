// Single source of the homepage's copy. Mirrors lia-resume/docs/base_resume.md —
// update here when the resume changes.

export const profile = {
  name: "Liana Cai",
  role: "Software Engineer",
  location: "New York, NY",
  tagline:
    "I build backend and AI systems — recommendation pipelines, RAG workflows, and inference APIs that hold up in production.",
  email: "lc255200@gmail.com",
  github: "https://github.com/patelinadev",
  linkedin: "https://www.linkedin.com/in/linlan-cai-046355250/",
  til: "https://lia-til.vercel.app",
};

export type Accent = "red" | "orange" | "blue";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  // Handwritten margin note next to the illustration.
  note: string;
  accent: Accent;
  // Path under /public once the illustration is generated; the sketch
  // placeholder renders until then.
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "feline-pain-detection",
    title: "Feline Pain Detection API",
    summary:
      "An inference API that reads a cat's face and returns a pain assessment to an iOS client in under 2 seconds.",
    highlights: [
      "Django REST Framework service that validates and preprocesses uploaded images, then runs a fine-tuned PyTorch ResNet-50.",
      "Fine-tuned on 200+ labeled grimace-scale images with transfer learning, dropout, L2 regularization, and augmentation — 78% F1.",
      "Predictions and labeled follow-ups land in PostgreSQL with source images in S3, building a versioned dataset for retraining.",
    ],
    stack: ["Django REST Framework", "PyTorch", "ResNet-50", "PostgreSQL", "AWS S3"],
    links: [
      { label: "Code", href: "https://github.com/patelinadev/feline-pain-detection" },
    ],
    note: "cats hide pain. models help.",
    accent: "red",
  },
  {
    slug: "today-i-learn",
    title: "Today I Learn",
    summary:
      "A public learning log that updates live from anywhere — including my phone — with no rebuild.",
    highlights: [
      "Next.js frontend on Vercel, FastAPI backend on Render, and Neon Postgres as the single source of truth.",
      "Pages fetch the API at request time, so every edit is live on the next page load.",
      "A custom MCP connector lets me write the daily log from a phone chat; scoped secrets and an append-only shadow backup limit the blast radius.",
    ],
    stack: ["Next.js", "FastAPI", "Postgres", "MCP", "GitHub OAuth"],
    links: [
      { label: "Live", href: "https://lia-til.vercel.app" },
      { label: "Code", href: "https://github.com/patelinadev/lia-til" },
    ],
    note: "one database, three ways in",
    accent: "blue",
  },
];

export type Role = {
  title: string;
  company: string;
  dates: string;
  location: string;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Software Engineer",
    company: "C&R Beauty Inc.",
    dates: "Jan 2026 – Aug 2026",
    location: "New York, NY",
    highlights: [
      "Built the customer-facing e-commerce platform — six core workflows from product discovery to checkout and accounts — on a PostgreSQL-backed service layer.",
      "Developed a product recommendation service that ranks candidates from browsing, search, cart, and purchase signals, served on the homepage and product pages.",
      "Designed a Kafka event pipeline for four commerce events and cached recommendation results in Redis, keeping real-time serving off the transactional database.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Kafka", "Redis", "Kubernetes"],
  },
  {
    title: "Software Engineer Intern",
    company: "Stealth Digital Health Startup",
    dates: "2025",
    location: "Remote",
    highlights: [
      "Designed the medication-safety data model covering 500+ drugs, dosage constraints, allergies, and interaction mappings across 200+ pilot patient profiles.",
      "Built prescription ingestion with AWS Textract and an OpenAI Vision fallback for handwritten labels, cutting manual onboarding input by an estimated 50%.",
      "Cached high-frequency lookups in Redis, bringing p95 conflict-check latency from ~800ms to under 200ms.",
    ],
    stack: ["PostgreSQL", "Redis", "AWS Textract", "OpenAI Vision", "AWS ECS"],
  },
  {
    title: "Software Engineer Intern",
    company: "Terra Byte X",
    dates: "May 2024 – Aug 2024",
    location: "New York, NY",
    highlights: [
      "Built a generative AI product with a FastAPI backend and Next.js frontend, serving 100+ active users through a model-routing layer across OpenAI and DeepSeek.",
      "Designed a RAG workflow on pgvector with a 20-scenario evaluation set, reducing off-topic responses by 35%.",
      "Added provider fallback, timeouts, and asynchronous Kafka processing so APIs stayed responsive through model latency and provider failures.",
    ],
    stack: ["FastAPI", "Next.js", "pgvector", "Kafka", "OAuth / JWT"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "JavaScript", "SQL"] },
  {
    group: "Backend & Web",
    items: ["FastAPI", "Django REST Framework", "Node.js", "Next.js", "React", "Pydantic"],
  },
  {
    group: "AI / ML",
    items: ["OpenAI API", "Claude API", "DeepSeek", "RAG", "pgvector", "PyTorch", "Transfer Learning"],
  },
  { group: "Data Systems", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka"] },
  {
    group: "Cloud & Infra",
    items: ["AWS (ECS, S3, Textract)", "Docker", "Kubernetes", "GitHub Actions"],
  },
];

export const education = [
  { school: "Pace University", degree: "M.S. Computer Science", date: "Aug 2024" },
  {
    school: "Pace University",
    degree: "B.S. Computer Science, Minor in Mathematics",
    date: "May 2023",
  },
];
