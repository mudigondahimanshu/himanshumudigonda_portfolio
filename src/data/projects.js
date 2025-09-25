export const projectsData = [
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
    tags: ["React", "FastAPI", "MongoDB"],
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
    tags: ["React", "flask", "MongoDB"],
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
