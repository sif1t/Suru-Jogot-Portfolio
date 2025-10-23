'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGamepad, FaMusic, FaCamera, FaBook, FaPlane, FaFilm } from 'react-icons/fa';

interface Hobby {
  title: string;
  icon: any;
  color: string;
  gradient: string;
  emoji: string;
  orbitRadius: number;
  orbitDuration: number;
}

const hobbies: Hobby[] = [
  {
    title: 'Gaming',
    icon: FaGamepad,
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-500',
    emoji: '🎮',
    orbitRadius: 180,
    orbitDuration: 20,
  },
  {
    title: 'Music',
    icon: FaMusic,
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-500',
    emoji: '🎵',
    orbitRadius: 180,
    orbitDuration: 25,
  },
  {
    title: 'Photography',
    icon: FaCamera,
    color: '#10B981',
    gradient: 'from-green-500 to-teal-500',
    emoji: '📷',
    orbitRadius: 180,
    orbitDuration: 22,
  },
  {
    title: 'Reading',
    icon: FaBook,
    color: '#F59E0B',
    gradient: 'from-orange-500 to-red-500',
    emoji: '📚',
    orbitRadius: 180,
    orbitDuration: 24,
  },
  {
    title: 'Travel',
    icon: FaPlane,
    color: '#EC4899',
    gradient: 'from-pink-500 to-purple-500',
    emoji: '✈️',
    orbitRadius: 180,
    orbitDuration: 23,
  },
  {
    title: 'Movies',
    icon: FaFilm,
    color: '#3B82F6',
    gradient: 'from-blue-500 to-indigo-500',
    emoji: '🎬',
    orbitRadius: 180,
    orbitDuration: 21,
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
          className="text-center mb-16"
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

        {/* Solar System Style - Orbiting Hobbies */}
        <div className="flex items-center justify-center min-h-[600px] relative">
          {/* Central Hub */}
          <motion.div
            className="absolute z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 shadow-2xl shadow-purple-500/50 flex items-center justify-center relative"
              animate={{
                boxShadow: [
                  '0 0 40px rgba(168, 85, 247, 0.5)',
                  '0 0 80px rgba(236, 72, 153, 0.7)',
                  '0 0 40px rgba(168, 85, 247, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-5xl z-10">✨</span>
              
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Orbiting Hobbies */}
          {hobbies.map((hobby, index) => {
            const angle = (index / hobbies.length) * 360;
            
            return (
              <motion.div
                key={hobby.title}
                className="absolute"
                style={{
                  width: `${hobby.orbitRadius * 2}px`,
                  height: `${hobby.orbitRadius * 2}px`,
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { 
                  opacity: 1,
                  rotate: 360,
                } : {}}
                transition={{
                  opacity: { duration: 0.5, delay: 0.5 + index * 0.1 },
                  rotate: { 
                    duration: hobby.orbitDuration, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  },
                }}
              >
                {/* Orbit path */}
                <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />

                {/* Hobby Icon Bubble */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    rotate: -angle,
                  }}
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: hobby.orbitDuration,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className={`group cursor-pointer`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Icon container */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center shadow-xl relative`}
                      animate={{
                        boxShadow: [
                          `0 0 20px ${hobby.color}40`,
                          `0 0 40px ${hobby.color}80`,
                          `0 0 20px ${hobby.color}40`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <hobby.icon className="text-white text-2xl z-10" />
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}
                      />
                    </motion.div>

                    {/* Label on hover */}
                    <motion.div
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="glass-strong px-4 py-2 rounded-lg">
                        <p className="text-white font-semibold text-sm">{hobby.title}</p>
                      </div>
                    </motion.div>

                    {/* Small emoji */}
                    <motion.div
                      className="absolute -top-2 -right-2 text-2xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {hobby.emoji}
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Trailing particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute top-0 left-1/2 w-1 h-1 bg-gradient-to-r ${hobby.gradient} rounded-full`}
                    style={{
                      marginLeft: -2,
                      marginTop: -2,
                    }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: (i * 0.3) + (index * 0.15),
                    }}
                  />
                ))}
              </motion.div>
            );
          })}

          {/* Floating background particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
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
