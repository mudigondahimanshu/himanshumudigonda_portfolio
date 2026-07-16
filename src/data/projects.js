export const projectsData = [
  {
    id: 5,
    title: "CLOAKDOC - PRIVACY-PRESERVING DOCUMENT SANITIZER",
    description: "Full-stack MERN app that redacts PII from PDFs/DOCX locally (no external AI) with format-faithful output, visual before/after preview, and encrypted auto-expiring storage. Built to solve a real problem: sharing documents with AI assistants (ChatGPT, Claude) without leaking personal data — so all detection runs 100% locally using regex + pure-JS NLP. It detects 18+ PII categories (names, emails, phones, SSN, Aadhaar, PAN, credit cards, IBAN and more) with four configurable actions per category, including consistent [PERSON_1] aliases via HMAC fingerprinting so no plaintext PII is ever stored. Output stays format-faithful: DOCX is redacted in-place at the XML level and PDFs are rebuilt from the operator stream with exact position, font and color preserved — not a black box overlay that still leaks text underneath. A Claude-style chat UI renders true visual previews of the sanitized output with a per-document privacy risk score, backed by AES-256-GCM encrypted, auto-expiring storage and 22 automated tests, shipped as a one-command Docker deployment.",
    image: "/projects/cloakdoc1.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/cloakdoc1.png",
      "/projects/cloakdoc2.png",
      "/projects/cloakdoc3.png",
      "/projects/cloakdoc4.png",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    codeUrl: "https://github.com/mudigondahimanshu/CloakDoc",
    featured: true,
    tags: ["javascript", "React", "Node.js", "Express", "MongoDB", "Docker", "Security"],
    year: "2026"
  },
  {
    id: 6,
    title: "FINPILOT - AI PERSONAL FINANCE COPILOT",
    description: "FinPilot is a full-stack AI-powered personal finance copilot — originally started as a stock paper-trading platform, then pivoted into a pure personal-finance product: budgets with live utilization alerts, savings goals with pace-based projections, and zero-config subscription detection that flags recurring payments and price creep straight from transaction history. Its AI copilot answers questions grounded in the user's own spending, budgets and goals via RAG, and works completely keylessly out of the box with an optional provider fallback chain (Groq → Gemini → Anthropic → Ollama). Built with Next.js 14, FastAPI, PostgreSQL/TimescaleDB + pgvector and Redis, it ships real ML: XGBoost transaction auto-categorization, an ARIMA + LSTM ensemble for 30-day spend forecasting, and Isolation Forest + graph analysis for fraud detection. Security is engineered end-to-end — JWT refresh-token rotation with Redis-backed revocation, Postgres row-level security, TOTP MFA, Google OAuth2 — and the whole stack deploys on free-tier infrastructure via a one-click Render blueprint, gated by 87 CI tests and an OWASP ZAP baseline scan.",
    image: "/projects/finpilot1.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/finpilot1.png",
      "/projects/finpilot2.png",
      "/projects/finpilot3.png",
      "/projects/finpilot4.png",
    ],
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    codeUrl: "https://github.com/mudigondahimanshu/FINPILOT",
    featured: true,
    tags: ["typescript", "javascript", "python", "ml", "Next.js", "FastAPI", "PostgreSQL", "Redis"],
    year: "2026"
  },
  {
    id: 1,
    title: "API-DRIVEN FINANCIAL DATA AGGREGATOR",
    description: "This project delivers an API that aggregates and normalizes financial data from multiple sources, exposing a unified interface and a real-time React dashboard for analysis. Built with FastAPI and MongoDB, it offers 12+ documented endpoints (OpenAPI) with API-key authentication, supports bulk CSV ingestion and real-time updates, and powers a configurable UI featuring 8+ Recharts visualizations. The system indexes and aggregates over 500k records to enable sub-second queries.",
    image: "/projects/fastapi1.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/fastapi1.png",
      "/projects/fastapi2.png",
      "/projects/fastapi3.png",
      "/projects/fastapi4.png",
      "/projects/fastapi5.png",
      "/projects/fastapi6.png",
      "/projects/fastapi7.png",
      "/projects/fastapi8.png",
      "/projects/fastapi9.png",
    ],
    technologies: ["React", "FastAPI", "MongoDB"],
    codeUrl: "https://github.com/mudigondahimanshu/Fastapi-Finance-Dashboard.git",
    featured: true,
    tags: ["React", "FastAPI", "MongoDB", "python", "javascript"],
    year: "2025"
  },
  {
    id: 2,
    title: "FTP-FITNESS AND NUTRITION MANAGEMENT WEBSITE ",
    description: "FTP – Fitness Management Website: I designed and built a modern fitness-essentials platform that offers actionable pointers on nutrition, curated workout schedules, and workout song recommendations. It features a daily activity calendar for logging sessions, targeted workout plans by muscle group, and a built-in to-do list where users can add workout notes, mark tasks as complete, and delete items to keep progress tracking clean and focused.",
    image: "/projects/ftp1.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/ftp1.png",
      "/projects/ftp2.png",
      "/projects/ftp3.png",
      "/projects/ftp4.png",
    ],
    technologies: ["Flask", "CNN", "Machine Learning"],
    codeUrl: "https://github.com/mudigondahimanshu/FTP-fitnessWebsite.git",
    demoUrl: "https://ftp-fitness-website.vercel.app/",
    featured: true,
    tags: ["React", "flask", "MongoDB", "python", "javascript"],
    year: "2025"
  },
  // {
  //   id: 3,
  //   title: "Library Management System",
  //   description: "A Django-based web application aimed at managing library book records and user access. Currently under development with student access features yet to be integrated.",
  //   image: "/projects/library-management.png",
  //   images: [ // all images (for overlay modal or gallery)
  //     "/projects/lms-demo1.png",
  //     "/projects/lms-demo2.png",
  //     "/projects/lms-demo3.png",
  //     "/projects/lms-demo4.png",
  //     "/projects/lms-demo5.png",
  //     "/projects/lms-demo6.png",
  //     "/projects/lms-demo7.png",
  //     "/projects/lms-demo8.png",
  //   ],
  //   technologies: ["Django", "Web App"],
  //   codeUrl: "https://github.com/devashishmudigonda/Library-Management-System",
  //   featured: false,
  //   tags: ["python", "django", "webapp"],
  //   year: "2023"
  // },
  {
    id: 4,
    title: "React To-Do App",
    description: "A responsive React-based To-Do application with dark mode, task management, and smooth UI interactions",
    image: "/projects/todo.png",
    images: [ // all images (for overlay modal or gallery)
      "/projects/todo-demo1.png",
      "/projects/todo-demo2.png",
      "/projects/todo-demo3.png",
      "/projects/todo-demo4.png",
    ],
    technologies: ["JavaScript", "React"],
    codeUrl: "https://github.com/mudigondahimanshu/To-Do-List.git",
    demoUrl: "https://to-do-list-react-app-lyart.vercel.app/",
    featured: false,
    tags: ["javascript", "react"],
    year: "2023"
  },
];

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};
