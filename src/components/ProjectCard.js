"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getImagePath from '../utils/imageLoader';
import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaImages, FaStar } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ImageModal from './ImageModal';

const ProjectCard = ({ project, featured = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { ref: cardRef, isInView } = useScrollAnimation({
    once: true,
    margin: '0px 0px 0px 0px',
    amount: 0.05
  });

  const MAX_CHARS = 180;
  const isLongDescription = project.description.length > MAX_CHARS;

  const displayDescription = isLongDescription && !expanded
    ? `${project.description.substring(0, MAX_CHARS).trimEnd()}…`
    : project.description;

  useEffect(() => {
    setExpanded(false);
  }, [project.id]);

  return (
    <>
      <motion.div
        ref={cardRef}
        className={`group/card flex flex-col h-full bg-white dark:bg-slate-900/80 rounded-2xl overflow-hidden border transition-all duration-300
          ${featured
            ? 'border-sky-200 dark:border-sky-500/25 shadow-lg shadow-sky-500/5 hover:shadow-xl hover:shadow-sky-500/15'
            : 'border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-lg hover:shadow-sky-500/10'}`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          duration: 0.5
        }}
        whileHover={{ y: -5 }}
        layout="position"
      >
        {/* Cover image — click to open the gallery */}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="relative h-48 w-full block text-left cursor-zoom-in focus:outline-none"
          aria-label={`View screenshots of ${project.title}`}
        >
          <Image
            src={getImagePath(project.image)}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover/card:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={featured}
          />
          {/* Hover hint */}
          <span className="absolute inset-0 bg-slate-950/0 group-hover/card:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-medium">
              <FaImages size={14} /> View screenshots
            </span>
          </span>
          {project.year && (
            <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/70 backdrop-blur-sm rounded-full text-white text-xs z-10" style={{ fontFamily: 'var(--font-mono-ui)' }}>
              {project.year}
            </span>
          )}
          {featured && (
            <span className="absolute top-3 left-3 z-10 chip-gold">
              <FaStar size={10} /> Featured
            </span>
          )}
        </button>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-2 leading-snug text-slate-900 dark:text-white">{project.title}</h3>

          <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            <p>{displayDescription}</p>
            {isLongDescription && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sky-600 dark:text-sky-400 font-medium hover:underline focus:outline-none transition-colors mt-2"
              >
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-5 mt-auto">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="tag-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.05 * index + 0.3 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Code/demo links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.codeUrl && (
              <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-sky-600 dark:hover:bg-sky-300 transition-colors">
                <FaCode size={14} /> View code
              </Link>
            )}
            {project.demoUrl && (
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:border-sky-500 hover:text-sky-600 dark:hover:border-sky-400 dark:hover:text-sky-400 transition-colors">
                <FaExternalLinkAlt size={12} /> Live demo
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* Fullscreen gallery rendered outside the card */}
      {showModal && (
        <ImageModal
          show={showModal}
          images={project.images || [project.image]}
          title={project.title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
