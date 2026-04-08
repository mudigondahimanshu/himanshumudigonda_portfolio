'use client';

import { motion } from 'framer-motion';

export default function SkillCard({ name, icon, level }) {
  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700/50 h-full flex flex-col items-center overflow-hidden"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Icon with glow */}
        <motion.div
          className="mb-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 group-hover:shadow-lg transition-shadow duration-300"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-lg font-semibold mb-3 dark:text-white">{name}</h3>

        {/* Animated progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          />
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {level}%
        </p>
      </div>
    </motion.div>
  );
}
