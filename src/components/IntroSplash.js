'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FULL_TEXT = "Himanshu Mudigonda's Portfolio";
const TYPING_SPEED = 70; // ms per letter
const PAUSE_AFTER_TYPED = 800; // ms to hold before fading out
const CURSOR_BLINK_SPEED = 530; // ms

export default function IntroSplash() {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'done' | 'exit'
  const [visible, setVisible] = useState(true);

  // Check sessionStorage so splash only plays once per session
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('intro_seen')) {
      setVisible(false);
      setPhase('exit');
    }
  }, []);

  // Typing effect
  useEffect(() => {
    if (phase !== 'typing' || !visible) return;

    if (displayed.length < FULL_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed(FULL_TEXT.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else {
      // Typing complete
      const timeout = setTimeout(() => {
        setPhase('done');
      }, PAUSE_AFTER_TYPED);
      return () => clearTimeout(timeout);
    }
  }, [displayed, phase, visible]);

  // Cursor blink
  useEffect(() => {
    if (phase === 'exit') return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, CURSOR_BLINK_SPEED);
    return () => clearInterval(interval);
  }, [phase]);

  // Fade out after done
  useEffect(() => {
    if (phase === 'done') {
      const timeout = setTimeout(() => {
        setPhase('exit');
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('intro_seen', '1');
        }
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  // After exit animation completes
  const handleExitComplete = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible && phase === 'exit') return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Subtle animated gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
              style={{ background: 'radial-gradient(circle, #0ea5e9, #4f46e5)' }}
              animate={{
                x: [-100, 100, -100],
                y: [-50, 50, -50],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
              style={{ background: 'radial-gradient(circle, #f59e0b, #0ea5e9)' }}
              animate={{
                x: [50, -50, 50],
                y: [30, -30, 30],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            {/* Small greeting */}
            <motion.p
              className="text-sm md:text-base text-gray-500 tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome
            </motion.p>

            {/* Typewriter text */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              {displayed.split('').map((char, i) => {
                // Color "Himanshu Mudigonda" part with gradient, "'s Portfolio" in lighter color
                const nameEnd = "Himanshu Mudigonda".length;
                const isName = i < nameEnd;

                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={
                      isName
                        ? 'bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent'
                        : 'text-gray-400'
                    }
                  >
                    {char}
                  </motion.span>
                );
              })}
              {/* Cursor */}
              <span
                className={`inline-block w-[3px] h-[0.85em] bg-blue-400 ml-1 align-middle rounded-full transition-opacity duration-100 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </h1>

            {/* Subtle tagline that appears after typing */}
            <AnimatePresence>
              {displayed.length === FULL_TEXT.length && (
                <motion.p
                  className="mt-6 text-gray-500 text-sm md:text-base tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Software Developer &bull; Full-Stack &bull; ML Enthusiast
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
