'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  { title: 'Web Design', organization: 'Bd Task Limited (Industrial Attachment)', period: '2022', type: 'work' },
  { title: 'Web Developer', organization: 'DBC News', period: '2023 - Present', type: 'work' },
];

const education: ExperienceItem[] = [
  { title: 'PSC', organization: 'Primary School Certificate', period: '2012', type: 'education' },
  { title: 'JSC', organization: 'Junior School Certificate', period: '2015', type: 'education' },
  { title: 'SSC', organization: 'Secondary School Certificate', period: '2018', type: 'education' },
  { title: 'Diploma', organization: 'Diploma in Engineering', period: '2023', type: 'education' },
];

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Journey & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaBriefcase className="inline mr-3 mb-2" />
            Experience
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="glass-strong rounded-2xl p-8 hover:scale-105 transition-smooth relative overflow-hidden group universe-float"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic pointer-events-none rounded-2xl" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <FaBriefcase />
                    </motion.div>
                    <span className="text-cyan-400 text-sm font-semibold">{exp.period}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                  <p className="text-gray-400">{exp.organization}</p>
                </div>

                {/* Floating orb decoration */}
                <motion.div
                  className="absolute -right-4 -bottom-4 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-pink-400 mb-12 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaGraduationCap className="inline mr-3 mb-2" />
            Education
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 hover:scale-105 transition-smooth relative overflow-hidden group universe-float"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, rotate: 2, scale: 1.08 }}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic pointer-events-none rounded-2xl" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  >
                    <FaGraduationCap />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2 text-center">{edu.title}</h4>
                  <p className="text-gray-400 text-sm text-center mb-2">{edu.organization}</p>
                  <p className="text-cyan-400 text-sm font-semibold text-center">{edu.period}</p>
                </div>

                {/* Floating orb decoration */}
                <motion.div
                  className="absolute -left-2 -top-2 w-16 h-16 bg-cyan-500 rounded-full blur-xl opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Central orbiting visualization */}
        <div className="relative mt-20 h-64 hidden lg:block">
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl"
            style={{ x: -64, y: -64 }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity },
            }}
          >
            Timeline
          </motion.div>

          {[...experiences, ...education].slice(0, 6).map((item, index) => {
            const angle = (index * 360) / 6;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg"
                style={{ x: x, y: y }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
