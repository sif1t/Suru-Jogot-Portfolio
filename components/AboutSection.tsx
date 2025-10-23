'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'HTML', percentage: 90, color: 'from-orange-500 to-red-500' },
  { name: 'CSS', percentage: 85, color: 'from-blue-500 to-cyan-500' },
  { name: 'Tailwind CSS', percentage: 80, color: 'from-teal-500 to-green-500' },
  { name: 'Bootstrap', percentage: 60, color: 'from-purple-500 to-pink-500' },
  { name: 'JavaScript', percentage: 80, color: 'from-yellow-500 to-orange-500' },
  { name: 'Node.js', percentage: 60, color: 'from-green-500 to-emerald-500' },
  { name: 'Vue.js', percentage: 50, color: 'from-green-400 to-teal-500' },
  { name: 'React.js', percentage: 70, color: 'from-cyan-500 to-blue-500' },
];

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "I'm a passionate web developer with expertise in creating beautiful, functional, and responsive websites. I love transforming ideas into digital reality and exploring new technologies in the ever-evolving universe of web development. My journey started with a curiosity for code and has grown into a professional pursuit of crafting exceptional user experiences.";

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden universe-float"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Holographic overlay */}
            <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
            
            <h3 className="text-3xl font-bold text-cyan-400 mb-6 relative">My Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed min-h-[200px] relative">
              {displayedText}
              <span className="typewriter-cursor"></span>
            </p>
            
            {/* Floating particles in bio */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  top: `${20 + i * 30}%`,
                  right: '10%',
                }}
                animate={{
                  x: [0, 20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden universe-float"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Holographic overlay */}
            <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
            
            <h3 className="text-3xl font-bold text-pink-400 mb-8 relative">Skills Universe</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                    >
                      <motion.div
                        className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-lg"
                        animate={{
                          boxShadow: ['0 0 10px rgba(255,255,255,0.5)', '0 0 20px rgba(255,255,255,0.8)', '0 0 10px rgba(255,255,255,0.5)'],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating skill planets decoration */}
        <div className="relative mt-12 h-64 hidden xl:block">
          {skills.slice(0, 5).map((skill, index) => {
            const angle = (index * 360) / 5;
            const radius = 150;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={skill.name}
                className={`absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg`}
                style={{
                  x: x,
                  y: y,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.5,
                }}
                whileHover={{ scale: 1.3 }}
              >
                {skill.percentage}%
              </motion.div>
            );
          })}
          
          {/* Central node */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-2xl"
            style={{ x: -48, y: -48 }}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: ['0 0 20px rgba(168,85,247,0.5)', '0 0 40px rgba(168,85,247,0.8)', '0 0 20px rgba(168,85,247,0.5)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Skills
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
