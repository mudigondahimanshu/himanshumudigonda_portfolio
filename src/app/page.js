'use client'

import Image from 'next/image';
import Link from 'next/link';
import { SiLeetcode } from "react-icons/si";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import LeetCodeContributions from '../components/LeetCodeContributions';
import ExperienceCard from '../components/ExperienceCard';
import TestimonialsSection from '../components/TestimonialsSection';
import getImagePath from '../utils/imageLoader';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedCard from '../components/animations/AnimatedCard';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { getFeaturedProjects } from '../data/projects';
import IntroSplash from '../components/IntroSplash';
import ParticleBackground from '../components/ParticleBackground';


const experiences = [
  {
    company: "Volteo Maritime",
    logo: "/logos/volteo_maritime.png",
    title: "Full-Stack Development Intern",
    date: "May 2025 – July 2025",
    description: "Built an automated SmartPort web application for a seamless transportation process for shipment cargo.",
    responsibilities: [
      "Engineered a responsive SmartPort web app with Express.js + MongoDB backend integration.",
      "Debugged and resolved issues on the live APMB (Andhra Pradesh Port Management System) application.",
      "Handled automation for fetching and displaying vessel movements."
    ],
    tech: ["MongoDB", "Express.js", "React"]
  },
  {
    company: "Corizo",
    logo: null,
    title: "AI/ML Trainee",
    date: "May 2024 – June 2024",
    description: "Completed an intensive AI/ML training program with hands-on implementation of real-world applications.",
    responsibilities: [
      "Implemented machine learning models against real-world datasets.",
      "Strengthened applied problem-solving and analytical fundamentals."
    ],
    tech: ["Python", "Machine Learning"]
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
    "I’m Himanshu Mudigonda, a Computer Science and Engineering student at Amrita Vishwa Vidyapeetham, Coimbatore (Class of 2027, 7.46 CGPA). I build software that actually ships — full-stack products, machine learning, and automation.",

    "At Volteo Maritime, I engineered a SmartPort web application with Express.js and MongoDB, and improved the live APMB (Andhra Pradesh Port Management System) — debugging production issues for real users.",

    "My recent projects carry that same end-to-end ownership: CloakDoc, a privacy tool that redacts PII from documents entirely locally, and FinPilot, an AI personal-finance copilot that runs keylessly on free-tier infrastructure — both designed, secured, tested, and deployed by me.",

    "Outside the editor, I’m a state-level Gold Medalist in Powerlifting and a former NCC Cadet. The discipline transfers: show up, add weight, repeat.",

    "In my free time I train, tinker with personal projects, and stay current with the latest in tech."
  ];
  

  return (
    <>
    <IntroSplash />
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
          <AnimatedSection animation="fadeIn" className="md:w-1/2 space-y-6">
            <motion.p
              className="terminal-cursor text-sm text-sky-600 dark:text-sky-400"
              style={{ fontFamily: 'var(--font-mono-ui)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ~/himanshu <span className="text-slate-400 dark:text-slate-500">— builds things that lift</span>
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Himanshu<br />
              <span className="gradient-text">Mudigonda</span>
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Software Developer · Full-Stack &amp; ML
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I ship end-to-end products — privacy tooling, AI finance copilots, real client work —
              with the same discipline that won me state gold in powerlifting.
            </motion.p>
            <motion.div
              className="pt-4 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link href="/projects" className="btn-primary group">
                View projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/Himanshu_Mudigonda_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-ghost"
              >
                Download resume
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact me
              </Link>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection animation="scaleUp" delay={0.3} className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 opacity-25 blur-lg animate-pulse" />
              {/* Gradient border (static, no spin) */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-r from-sky-500 to-indigo-600">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={getImagePath("/projects/himanshu_mudigonda.jpg")}
                    alt="Himanshu Mudigonda"
                    fill
                    sizes="(max-width: 768px) 100vw, 288px"
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              {/* Gold medal nod — quiet, single accent */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 chip-gold whitespace-nowrap shadow-md">
                🥇 State gold · powerlifting
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Me Section */}
      <AnimatedSection animation="slideInRight" delay={0.2} className="section">
        <div className="relative p-8 md:p-12 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          {/* Decorative gradient blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-sky-400/20 to-indigo-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-indigo-400/15 to-sky-400/15 rounded-full blur-3xl" />

          <p className="eyebrow relative z-10">// about</p>
          <h2 className="page-title relative z-10">The person behind the <span className="title-accent">commits</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="md:col-span-2 space-y-4">
              {aboutMeText.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <AnimatedSection animation="slideInRight" delay={0.2} className="md:col-span-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '7+', label: 'Projects', color: 'from-sky-500 to-cyan-400' },
                  { value: '18+', label: 'Skills', color: 'from-indigo-500 to-violet-400' },
                  { value: '1+', label: 'Internships', color: 'from-amber-500 to-orange-400' },
                  { value: '3+', label: 'Hackathons', color: 'from-emerald-500 to-teal-400' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700/50 text-center py-8 px-4"
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>


      {/* Experience Section */}
      <AnimatedSection animation="slideUp" className="section">
        <p className="eyebrow">// experience</p>
        <h2 className="page-title">Where I&apos;ve <span className="title-accent">shipped</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </AnimatedSection>


      {/* Featured Skills */}
      <AnimatedSection animation="slideUp" className="section">
        <p className="eyebrow">// skills</p>
        <h2 className="page-title">Tools of the <span className="title-accent">trade</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Programming', skills: ['Python', 'Java', 'JavaScript', 'C++', 'C'], icon: '💻', gradient: 'from-blue-500/10 to-cyan-500/10' },
            { title: 'Web Development', skills: ['React', 'Node.js', 'Django', 'Flask', 'MongoDB'], icon: '🌐', gradient: 'from-purple-500/10 to-pink-500/10' },
            { title: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Postman', 'Linux', 'macOS'], icon: '🛠️', gradient: 'from-orange-500/10 to-red-500/10' },
          ].map((category, index) => (
            <AnimatedCard key={index} index={index} className="group">
              <div className={`card relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/skills" className="btn-ghost">
            See all skills <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection animation="slideUp" className="section">
        <p className="eyebrow">// projects</p>
        <h2 className="page-title">Selected <span className="title-accent">work</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedCard key={project.id} index={index} className="h-full">
              <ProjectCard project={project} featured={true} />
            </AnimatedCard>
          ))}
        </div>
        <AnimatedSection animation="fadeIn" delay={0.5} className="mt-8 text-center">
          <Link href="/projects" className="btn-primary">
            View all projects <FaArrowRight className="ml-1" />
          </Link>
        </AnimatedSection>
      </AnimatedSection>
        

      {/* LeetCode Contributions */}

      <AnimatedSection animation="slideUp" className="section">
        <p className="eyebrow">// leetcode</p>
        <h2 className="page-title">
          <span className="flex items-center">
          <SiLeetcode className="text-orange-400 mr-2" size={28} />
            Practice under <span className="title-accent ml-2">load</span>
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
        <h2 className="text-2xl font-bold mb-4 gradient-text">Connect With Me</h2>
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
    </>
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
