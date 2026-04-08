'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaAward, FaGraduationCap, FaDumbbell } from 'react-icons/fa';
import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedCard from '../../components/animations/AnimatedCard';

const achievements = [
  {
    icon: <FaDumbbell className="text-yellow-500" size={32} />,
    title: 'State-Level Gold Medalist',
    category: 'Powerlifting',
    description: 'Won Gold Medal at state-level Powerlifting competition, demonstrating discipline, dedication and competitive spirit.',
    year: '2024',
    highlight: true,
  },
  {
    icon: <FaGraduationCap className="text-blue-500" size={32} />,
    title: 'B.Tech CSE - 7.5 CGPA',
    category: 'Education',
    description: 'Pursuing Computer Science & Engineering at Amrita Vishwa Vidyapeetham, Coimbatore with strong academic performance.',
    year: '2021 - Present',
    highlight: false,
  },
  {
    icon: <FaMedal className="text-green-500" size={32} />,
    title: 'NCC Cadet',
    category: 'Leadership',
    description: 'Served as an NCC Cadet, developing leadership skills, discipline, and a spirit of national service.',
    year: '2022',
    highlight: false,
  },
  {
    icon: <FaTrophy className="text-orange-500" size={32} />,
    title: 'Hackathon Participant',
    category: 'Competition',
    description: 'Actively participated in multiple hackathons including Smart India Hackathon, building innovative solutions under tight deadlines.',
    year: '2023 - 2024',
    highlight: false,
  },
  {
    icon: <FaCertificate className="text-purple-500" size={32} />,
    title: 'Full-Stack Development Intern',
    category: 'Professional',
    description: 'Completed internship at Volteo Maritime, building automated SmartPort web applications with real-world impact.',
    year: '2025',
    highlight: true,
  },
  {
    icon: <FaAward className="text-red-500" size={32} />,
    title: 'Open Source Contributor',
    category: 'Development',
    description: 'Actively contributing to open-source projects on GitHub, building a portfolio of impactful applications.',
    year: 'Ongoing',
    highlight: false,
  },
];

const stats = [
  { label: 'Projects Built', value: '5+', color: 'from-blue-500 to-cyan-500' },
  { label: 'Technologies Used', value: '18+', color: 'from-purple-500 to-pink-500' },
  { label: 'Hackathons', value: '3+', color: 'from-orange-500 to-red-500' },
  { label: 'Internships', value: '1+', color: 'from-green-500 to-emerald-500' },
];

export default function AchievementsPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection animation="fadeIn">
        <h1 className="page-title text-center">Achievements & Milestones</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
          A timeline of accomplishments, certifications, and milestones that define my journey.
        </p>
      </AnimatedSection>

      {/* Stats Grid */}
      <AnimatedSection animation="slideUp" delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCard key={index} index={index}>
              <motion.div
                className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700/50 text-center overflow-hidden group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <motion.div
                  className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>

      {/* Achievements Timeline */}
      <AnimatedSection animation="slideUp" delay={0.3}>
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
          Journey Highlights
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 mt-6 z-10 ring-4 ring-white dark:ring-gray-900" />

                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className={`p-6 rounded-xl shadow-lg border transition-all duration-300 ${
                      achievement.highlight
                        ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700/50'
                        : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700/50'
                    }`}
                    whileHover={{ y: -3, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            {achievement.title}
                          </h3>
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-blue-400/10 dark:text-blue-400">
                            {achievement.year}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                          {achievement.category}
                        </span>
                        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fadeIn" delay={0.4}>
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-pink-400/5 border border-blue-100 dark:border-blue-800/30">
          <h3 className="text-2xl font-bold gradient-text mb-3">
            Let&apos;s Build Something Great Together
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            I&apos;m always looking for new challenges and opportunities to grow.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium"
          >
            Get In Touch
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
