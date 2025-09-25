'use client'

import Image from 'next/image';
import Link from 'next/link';
import { SiLeetcode } from "react-icons/si";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import GitHubContributions from '../components/GitHubContributions';
import LeetCodeContributions from '../components/LeetCodeContributions';
import ExperienceCard from '../components/ExperienceCard';
import TestimonialsSection from '../components/TestimonialsSection';
import getImagePath from '../utils/imageLoader';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedCard from '../components/animations/AnimatedCard';
import SequentialTypewriter from '../components/SequentialTypewriter';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { getFeaturedProjects } from '../data/projects';


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
  //   company: "HSBC",
  //   logo: "/logos/hsbc.png",
  //   title: "Software Development Intern",
  //   date: "Jan 2025 – Mar 2025",
  //   description: "Built an internal PowerApps + SpringBoot solution to streamline company credit data (e.g. Moody’s)."
  // },
  // {
  //   company: "Providence India",
  //   logo: "/logos/providence.png",
  //   title: "Software Development Intern",
  //   date: "Jun 2024 – Aug 2024",
  //   description: "Automated device output generation and post-checks using Python scripts within a Django web app. Improved network operations efficiency by 40%."
  // },
  // {
  //   company: "ACIC Rural Internship",
  //   logo: "/logos/acic.png",
  //   title: "Intern",
  //   date: "Nov 2023 – Dec 2023",
  //   description: "Conducted field survey and built a React app to help workers skill up via tutorials and WhatsApp integration."
  // },
  // {
  //   company: "SmartKnower",
  //   logo: "/logos/smartknower.png",
  //   title: "ML Intern",
  //   date: "May 2022 – Jul 2022",
  //   description: "Studied various classifiers for income prediction using voice data. Achieved 98.47% accuracy with the best model."
  // }
];


export default function Home() {
  const featuredProjects = getFeaturedProjects();

  const aboutMeText = [
    "I’m Himanshu Mudigonda, a Computer Science and Engineering student at Amrita Vishwa Vidyapeetham, Coimbatore with a 7.42 CGPA. I’m passionate about Web Development, Machine Learning, and Automation, and enjoy building scalable, impactful solutions.",
    
    "Through internship at Volteo Maritime, I developed tools using PowerApps, SpringBoot, Django, and Python—automating processes and enhancing network operations.",
    
    "My projects I Engineered a responsive Smartport web application with seamless backend integration using Express.js and MongoDB, and Made changes in the existing APMB (Andra Pradesh port management system) website by enhancing the UI. I love integrating AI into practical applications.",
    
    "I’ve served as  an NCC Cadet. I’m also a state-level Gold Medalist in Powerlifting, which reflects my discipline and drive.",
    
    "In my free time, I pursue fitness and powerlifting, while staying current with the latest in tech through personal projects and continuous learning."
  ];
  

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn" className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I&apos;m <span className="text-primary">Himanshu Mudigonda</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
            Software Developer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Passionate about technology, powerlifitng, and building impactful solutions.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/projects" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition flex items-center gap-2">
              View Projects <FaArrowRight />
            </Link>
            <Link href="/experience" className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition flex items-center gap-2">
              View Experience <FaArrowRight />
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-gray-100 transition">
              Contact Me
            </Link>
            <Link
              href="/Himanshu_Mudigonda_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-6 py-3 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Download Resume
            </Link>

          </div>

        </div>
        <AnimatedSection animation="scaleUp" delay={0.3} className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image 
              src={getImagePath("/projects/himanshu_mudigonda.jpg")}
              alt="Himanshu Mudigonda"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover"
              priority
            />
          </div>
        </AnimatedSection>
      </AnimatedSection>

      {/* About Me Section */}
      <AnimatedSection animation="slideInRight" delay={0.5} className="section bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="page-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {aboutMeText.map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
          <AnimatedSection animation="slideInRight" delay={0.2} className="md:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center py-8">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Projects</div>
              </div>
              <div className="card text-center py-8">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Skills</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>


      {/* Experience Section */}
      <AnimatedSection animation="slideUp" className="section">
        <h2 className="page-title">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </AnimatedSection>


      {/* Featured Skills */}
      <AnimatedSection animation="slideUp" className="section">
        <h2 className="page-title">Featured Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard index={0} className="card">
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <p className="text-gray-600 dark:text-gray-300">Python, Java, JavaScript, C++, C, Flask, Django, MySQL, SQLite, MongoDB, ReactJS, ExpressJS, NodeJS, HTML, CSS, Bash</p>
          </AnimatedCard>
          <AnimatedCard index={1} className="card">
            <h3 className="text-xl font-semibold mb-2">Operating Systems</h3>
            <p className="text-gray-600 dark:text-gray-300">macOS, Windows</p>
          </AnimatedCard>
        </div>
        <div className="mt-6 text-center">
          <Link href="/skills" className="inline-flex items-center text-primary font-medium hover:underline">
            See all skills <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection animation="slideUp" className="section">
        <h2 className="page-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedCard key={project.id} index={index} className="h-full">
              <ProjectCard project={project} featured={true} />
            </AnimatedCard>
          ))}
        </div>
        <AnimatedSection animation="fadeIn" delay={0.5} className="mt-8 text-center">
          <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition">
            View All Projects <FaArrowRight className="ml-2" />
          </Link>
        </AnimatedSection>
      </AnimatedSection>
        

      {/* LeetCode Contributions */}

      <AnimatedSection animation="slideUp" className="section">
        <h2 className="page-title">
          <span className="flex items-center">
          <SiLeetcode className="text-orange-400 mr-2" size={28} />
            LeetCode Activity
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Here’s a snapshot of my LeetCode submissions and contest activity.
        </p>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <LeetCodeContributions />
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection animation="slideUp" className="section">
        <TestimonialsSection />
      </AnimatedSection>

      {/* Social Links */}
      <AnimatedCard index={3} className="section text-center">
        <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-blue-400">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <SocialButton 
            href="https://github.com/mudigondahimanshu" 
            icon={<FaGithub size={24} />}
            label="GitHub"
            bgColor="bg-gray-800 dark:bg-gray-700"
            textColor="text-white" 
          />
          <SocialButton 
            href="https://www.linkedin.com/in/himanshu-mudigonda-09a9ba29b/" 
            icon={<FaLinkedin size={24} />}
            label="LinkedIn"
            bgColor="bg-blue-600"
            textColor="text-white" 
          />
          <SocialButton 
            href="mailto:himanshumudigonda@gmail.com" 
            icon={<FaEnvelope size={24} />}
            label="Email"
            bgColor="bg-red-500"
            textColor="text-white" 
          />
        </div>
      </AnimatedCard>
    </div>
  )
}

// New component for animated social buttons
function SocialButton({ href, icon, label, bgColor, textColor }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const boxShadow = useMotionTemplate`0px 5px 15px rgba(0, 0, 0, ${useMotionValue(0)})`;

  // Check if this is the GitHub button to apply special styling in dark mode
  const isGitHub = href.includes('github.com');
  const finalBgColor = isGitHub ? `${bgColor} dark:bg-gray-700` : bgColor;

  return (
    <motion.a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className={`relative p-4 rounded-full shadow-md ${finalBgColor} ${textColor} overflow-hidden flex items-center justify-center`}
      style={{ boxShadow }}
      whileHover={{ 
        scale: 1.15,
        y: -5,
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onMouseMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        x.set((e.clientX - centerX) / 5);
        y.set((e.clientY - centerY) / 5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      aria-label={label}
    >
      {icon}
      <motion.span 
        className="absolute inset-0 bg-white dark:bg-gray-800 opacity-0"
        whileHover={{ opacity: 0.15 }}
        style={{ 
          filter: "blur(15px)",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
          width: "100%",
          height: "100%"
        }}
      />
    </motion.a>
  );
}
