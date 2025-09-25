'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ExperienceCard({ company, logo, title, date, description, responsibilities = [], tech = [] }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 relative flex-shrink-0">
          <Image src={logo} alt={company} fill className="object-contain" sizes="56px" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{company} • {date}</p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300">{description}</p>

      {responsibilities.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
