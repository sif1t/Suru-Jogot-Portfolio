'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Central glassmorphism card with universe float */}
      <motion.div
        className="glass-strong rounded-3xl p-12 max-w-4xl text-center relative z-10 universe-float"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Holographic overlay */}
        <div className="absolute inset-0 rounded-3xl holographic pointer-events-none" />
        
        <motion.div
          className="text-6xl md:text-8xl font-bold mb-6 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="gradient-text text-glow">HI, I&apos;M SIFAT!</span>
          
          {/* Floating particles around text */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-2xl md:text-4xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-cyan-400">Web Developer</span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Welcome to my digital universe. Explore my journey through the cosmos of web development.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-smooth glow-purple"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass border-2 border-cyan-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-smooth glow-cyan"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced orbiting planets decoration with multiple layers */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-50"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500 rounded-full blur-xl opacity-40"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-500 rounded-full blur-xl opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-30"
        animate={{
          y: [0, 30, 0],
          x: [0, 25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-25"
        animate={{
          y: [0, -35, 0],
          x: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
};

export default HeroSection;
