'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const letters = 'Himanshu Mudigonda'.split('');

const gradientColors = [
  ['#3b82f6', '#8b5cf6', '#ec4899'],
  ['#ec4899', '#f59e0b', '#10b981'],
  ['#10b981', '#3b82f6', '#8b5cf6'],
  ['#f59e0b', '#ef4444', '#3b82f6'],
];

function FloatingParticle({ delay, x, y }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-blue-400/40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1.5, 0],
        x: [0, x],
        y: [0, y],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: 'easeOut',
      }}
    />
  );
}

export default function HeroNameAnimation() {
  const [colorIndex, setColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % gradientColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setHasAnimated(true), 1800);
    return () => clearTimeout(timeout);
  }, []);

  const currentGradient = gradientColors[colorIndex];

  const particles = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 0.4,
    x: (Math.random() - 0.5) * 120,
    y: (Math.random() - 0.5) * 80,
  }));

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow backdrop */}
      <motion.div
        className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
        animate={{
          background: `linear-gradient(135deg, ${currentGradient[0]}, ${currentGradient[1]}, ${currentGradient[2]})`,
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* Animated letters */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold relative z-10 flex flex-wrap"
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block relative"
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
                rotateX: -90,
                scale: 0.5,
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.06,
              type: 'spring',
              stiffness: 120,
              damping: 12,
            }}
            whileHover={{
              scale: 1.3,
              y: -8,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}
            style={{ display: 'inline-block' }}
          >
            <motion.span
              className="inline-block"
              animate={{
                background: `linear-gradient(135deg, ${currentGradient[0]}, ${currentGradient[1]}, ${currentGradient[2]})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>

            {/* Underline shimmer on each letter */}
            {hasAnimated && letter !== ' ' && (
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: isHovered ? '100%' : '0%',
                  background: `linear-gradient(90deg, ${currentGradient[0]}, ${currentGradient[2]})`,
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.02,
                }}
              />
            )}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle with typewriter cursor */}
      <motion.div
        className="mt-3 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="h-6 w-1 rounded-full bg-primary dark:bg-blue-400"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light tracking-wide">
          Software Developer
        </span>
      </motion.div>
    </div>
  );
}
