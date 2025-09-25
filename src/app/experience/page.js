'use client';

import AnimatedSection from '@/components/animations/AnimatedSection';
import ExperienceCard from '@/components/ExperienceCard';

const experiences = [
  {
    company: "Volteo Maritime",
    logo: "/logos/volteo_maritime.png",
    title: "full-stack development Intern",
    date: "May 2025 – July 2025",
    description: "Built an an automated smartport web application for seemless transportation process for shipment cargo.",
    responsibilities: [
      "Designed frontend interfaces using express.js.",
      "Integrated backend services using MongoDB for secure data flow.",
      "Handled automation for fetching and displaying vessel movements."
    ],
    tech: ["MongoDb", "express.js", "React"]
  },
  // {
  //   company: "Providence India",
  //   logo: "/logos/providence.png",
  //   title: "Software Development Intern",
  //   date: "Jun 2024 – Aug 2024",
  //   description: "Optimized network device management via backend automation.",
  //   responsibilities: [
  //     "Wrote Python scripts for pre/post-check automation of routers and firewalls.",
  //     "Built a Django dashboard to manage and review automated outputs.",
  //     "Reduced manual network operations workload by over 40%."
  //   ],
  //   tech: ["Python", "Django", "Networking"]
  // },
  // {
  //   company: "ACIC Rural Internship",
  //   logo: "/logos/acic.png",
  //   title: "Software + Field Intern",
  //   date: "Nov 2023 – Dec 2023",
  //   description: "Built a community skilling platform targeting rural construction workers.",
  //   responsibilities: [
  //     "Conducted ground surveys to identify digital skilling gaps.",
  //     "Built a React-based frontend to display tutorials dynamically.",
  //     "Integrated WhatsApp API to auto-enroll users into topic groups."
  //   ],
  //   tech: ["React", "WhatsApp API", "Community UX"]
  // },
  // {
  //   company: "SmartKnower",
  //   logo: "/logos/smartknower.png",
  //   title: "ML Research Intern",
  //   date: "May 2022 – Jul 2022",
  //   description: "Explored voice recognition-based income prediction models.",
  //   responsibilities: [
  //     "Compared various ML classifiers on a voice dataset.",
  //     "Achieved a best-case accuracy of 98.47% using tuned SVMs.",
  //     "Published internal findings and presented at team demo."
  //   ],
  //   tech: ["Python", "Sklearn", "SVM", "Data Science"]
  // }
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-10">
      <AnimatedSection animation="fadeInUp">
        <h1 className="text-4xl font-bold mb-4 text-center">My Professional Experience</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here's a detailed timeline of my internships and professional growth.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="slideUp" delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
