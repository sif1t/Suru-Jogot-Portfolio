'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface UniverseWrapperProps {
  children: React.ReactNode;
}

const UniverseWrapper: React.FC<UniverseWrapperProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Floating cosmic elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top left floating orb */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Top right floating orb */}
        <motion.div
          className="absolute top-40 right-32 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Bottom left floating orb */}
        <motion.div
          className="absolute bottom-32 left-40 w-36 h-36 bg-cyan-500 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Bottom right floating orb */}
        <motion.div
          className="absolute bottom-20 right-20 w-44 h-44 bg-blue-500 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Center floating orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Floating QR code / branding node (optional) */}
      <motion.div
        className="hidden xl:block fixed bottom-8 left-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="glass-strong rounded-2xl p-4 w-32 h-32 flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-2 flex items-center justify-center text-white font-bold text-xs">
              QR
            </div>
            <p className="text-xs text-gray-400">Scan Me</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-xs text-gray-400">Scroll</span>
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default UniverseWrapper;
