'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGamepad, FaMusic, FaCamera, FaBook, FaPlane, FaFilm, FaPalette, FaChess } from 'react-icons/fa';

interface Hobby {
  title: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  emoji: string;
}

const hobbies: Hobby[] = [
  {
    title: 'Gaming',
    description: 'Exploring virtual worlds and solving complex challenges in strategy and adventure games.',
    icon: FaGamepad,
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-500',
    emoji: '🎮',
  },
  {
    title: 'Music',
    description: 'Creating melodies and enjoying diverse genres from classical to electronic music.',
    icon: FaMusic,
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-500',
    emoji: '🎵',
  },
  {
    title: 'Photography',
    description: 'Capturing moments and creating visual stories through the lens.',
    icon: FaCamera,
    color: '#10B981',
    gradient: 'from-green-500 to-teal-500',
    emoji: '📷',
  },
  {
    title: 'Reading',
    description: 'Diving into books about technology, science fiction, and personal development.',
    icon: FaBook,
    color: '#F59E0B',
    gradient: 'from-orange-500 to-red-500',
    emoji: '📚',
  },
  {
    title: 'Travel',
    description: 'Exploring new places, cultures, and experiencing different perspectives.',
    icon: FaPlane,
    color: '#EC4899',
    gradient: 'from-pink-500 to-purple-500',
    emoji: '✈️',
  },
  {
    title: 'Movies',
    description: 'Analyzing cinematography and storytelling in films from various genres.',
    icon: FaFilm,
    color: '#3B82F6',
    gradient: 'from-blue-500 to-indigo-500',
    emoji: '🎬',
  },
];

const HobbySection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="hobbies" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            🎨
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight">
            Hobbies & Interests
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            When I'm not coding, I love exploring creative pursuits and new experiences
          </p>
        </motion.div>

        {/* Hexagonal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
            >
              <motion.div
                className="glass-strong rounded-3xl p-8 h-full relative overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing border effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                {/* Top accent line with animation */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hobby.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Large emoji with bounce */}
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    {hobby.emoji}
                  </motion.div>

                  {/* Icon in circle */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${hobby.gradient} rounded-2xl flex items-center justify-center text-white text-2xl shadow-2xl mb-6 relative`}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <hobby.icon />
                    
                    {/* Pulsing glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${hobby.gradient} blur-lg opacity-0 group-hover:opacity-60`}
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {hobby.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                {/* Floating particles on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${hobby.gradient} rounded-full`}
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -30, -60],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/10 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/10 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Orbiting dots */}
                <motion.div
                  className="absolute top-1/2 right-8 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    transformOrigin: '-30px 0px',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-20 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-pink-500 rounded-full"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="text-4xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            ⭐
          </motion.div>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-pink-500 via-cyan-500 to-transparent rounded-full"
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HobbySection;
