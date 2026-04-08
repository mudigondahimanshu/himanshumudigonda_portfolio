'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ExperienceCard({ company, logo, title, date, description, responsibilities = [], tech = [] }) {
  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 border border-gray-100 dark:border-gray-700/50 overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Gradient accent on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 relative flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700/50 p-2">
          <Image src={logo} alt={company} fill className="object-contain" sizes="56px" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{company} &bull; {date}</p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300">{description}</p>

      {responsibilities.length > 0 && (
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
