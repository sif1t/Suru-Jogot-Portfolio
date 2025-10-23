'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendar, FaBuilding, FaRocket, FaStar } from 'react-icons/fa';

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
  { title: 'B.Sc', organization: 'B.Sc in Computer Science and Engineering (CSE) at Northern University Bangladesh', period: '2025 - Present', type: 'education' },
];

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <FaRocket className="text-6xl text-purple-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight">
            Journey & Education
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            A timeline of growth, learning, and professional evolution
          </p>
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-pink-500 rounded-full"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <FaStar className="text-pink-400 text-2xl" />
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-pink-500 via-cyan-500 to-transparent rounded-full"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Experience Section - Timeline Style */}
        <div className="mb-32">
          <motion.div
            className="flex items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="flex items-center gap-3 glass-strong px-8 py-4 rounded-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <FaBriefcase className="text-3xl text-cyan-400" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h3>
            </div>
            <div className="hidden md:block w-32 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transform -translate-x-1/2 hidden lg:block rounded-full">
              <motion.div
                className="absolute top-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-50"
                animate={{ y: ['0%', '400%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="space-y-16 lg:space-y-24">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
                >
                  {/* Experience Card */}
                  <div className="w-full lg:w-5/12">
                    <motion.div
                      className="glass-strong rounded-3xl p-8 relative overflow-hidden group universe-float"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Holographic overlay */}
                      <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
                      
                      {/* Animated gradient border */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-xl opacity-50"></div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        {/* Header with icon and period */}
                        <div className="flex items-start justify-between mb-6">
                          <motion.div 
                            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-2xl shadow-purple-500/50"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <FaBriefcase />
                          </motion.div>
                          <div className="flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
                            <FaCalendar className="text-cyan-400 text-sm" />
                            <span className="text-cyan-300 text-sm font-bold">{exp.period}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {exp.title}
                        </h4>
                        
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                          <FaBuilding className="text-pink-400" />
                          <p className="text-base md:text-lg">{exp.organization}</p>
                        </div>

                        {/* Decorative elements */}
                        <div className="flex gap-2 mt-6">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Floating orb decorations */}
                      <motion.div
                        className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-30"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                      <motion.div
                        className="absolute -left-4 -top-4 w-20 h-20 bg-pink-500 rounded-full blur-2xl opacity-20"
                        animate={{
                          scale: [1.2, 1, 1.2],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.7,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Center Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center relative">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.3 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full relative z-10 shadow-lg shadow-purple-500/50"
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 20px rgba(168, 85, 247, 0.5)',
                            '0 0 40px rgba(236, 72, 153, 0.8)',
                            '0 0 20px rgba(168, 85, 247, 0.5)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-50"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section - Card Grid with Enhanced Design */}
        <div className="mb-20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="hidden md:block w-32 h-0.5 bg-gradient-to-r from-transparent to-pink-500"></div>
            <div className="flex items-center gap-3 glass-strong px-8 py-4 rounded-full">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <FaGraduationCap className="text-3xl text-pink-400" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Academic Journey</h3>
            </div>
            <div className="hidden md:block w-32 h-0.5 bg-gradient-to-l from-transparent to-pink-500"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
              >
                <motion.div
                  className="glass-strong rounded-3xl p-8 relative overflow-hidden universe-float h-full"
                  whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
                  
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)`,
                    }}
                  />

                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon with orbiting ring */}
                    <div className="relative mb-6">
                      <motion.div
                        className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        style={{ width: '80px', height: '80px', margin: '-8px' }}
                      />
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-2xl shadow-cyan-500/50 relative z-10"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                      >
                        <FaGraduationCap />
                      </motion.div>
                      {/* Small orbiting dot */}
                      <motion.div
                        className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                        style={{ originX: 0.5, originY: 2 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      />
                    </div>

                    {/* Title */}
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                      {edu.title}
                    </h4>
                    
                    {/* Organization */}
                    <p className="text-gray-400 text-sm md:text-base mb-4 flex-grow">
                      {edu.organization}
                    </p>

                    {/* Period badge */}
                    <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
                      <FaCalendar className="text-cyan-400 text-xs" />
                      <span className="text-cyan-300 text-sm font-bold">{edu.period}</span>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex gap-2 mt-6">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i <= index ? 'bg-cyan-400' : 'bg-gray-600'
                          }`}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.2 + index * 0.15 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Floating orb decorations */}
                  <motion.div
                    className="absolute -left-4 -top-4 w-20 h-20 bg-cyan-500 rounded-full blur-2xl opacity-20"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  />
                  <motion.div
                    className="absolute -right-4 -bottom-4 w-16 h-16 bg-blue-500 rounded-full blur-xl opacity-20"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.6,
                    }}
                  />

                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* External glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Central Cosmic Visualization - Achievement Constellation */}
        <motion.div
          className="relative mt-32 mb-20 h-96 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* Central Hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-40 h-40 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: 360,
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            }}
          >
            <div className="relative w-full h-full">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-2 rounded-full border border-pink-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central orb */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl overflow-hidden"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 40px rgba(168, 85, 247, 0.6)',
                    '0 0 80px rgba(236, 72, 153, 0.8)',
                    '0 0 40px rgba(168, 85, 247, 0.6)',
                  ],
                }}
                transition={{
                  scale: { duration: 2, repeat: Infinity },
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
              >
                <span className="relative z-10 text-center px-4">
                  My<br/>Journey
                </span>
                
                {/* Inner animated gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Orbiting Achievement Nodes */}
          {[...experiences, ...education].map((item, index) => {
            const totalItems = experiences.length + education.length;
            const angle = (index * 360) / totalItems;
            const radius = 200;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const isExperience = index < experiences.length;

            return (
              <React.Fragment key={index}>
                {/* Connection line */}
                <motion.div
                  className="absolute top-1/2 left-1/2 origin-center"
                  style={{
                    width: `${radius}px`,
                    height: '1px',
                    transform: `rotate(${angle}deg)`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-purple-500/20 via-pink-500/40 to-cyan-500/20"></div>
                </motion.div>

                {/* Node */}
                <motion.div
                  className="absolute top-1/2 left-1/2"
                  style={{ x: x, y: y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                >
                  <motion.div
                    className={`relative w-6 h-6 rounded-full ${
                      isExperience
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                        : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                    } shadow-lg cursor-pointer group`}
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: isExperience
                        ? [
                            '0 0 10px rgba(168, 85, 247, 0.5)',
                            '0 0 20px rgba(236, 72, 153, 0.8)',
                            '0 0 10px rgba(168, 85, 247, 0.5)',
                          ]
                        : [
                            '0 0 10px rgba(6, 182, 212, 0.5)',
                            '0 0 20px rgba(59, 130, 246, 0.8)',
                            '0 0 10px rgba(6, 182, 212, 0.5)',
                          ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    whileHover={{ scale: 1.5 }}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-xs shadow-xl border border-gray-700">
                        <div className="font-bold">{item.title}</div>
                        <div className="text-gray-400 text-xs">{item.period}</div>
                      </div>
                    </div>

                    {/* Pulsing ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${
                        isExperience ? 'bg-purple-500' : 'bg-cyan-500'
                      } opacity-50`}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </React.Fragment>
            );
          })}

          {/* Floating decorative particles */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const radius = 140 + Math.random() * 60;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
                style={{ x: x, y: y }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            );
          })}

          {/* Legend */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
              <span className="text-gray-400 text-sm">Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
              <span className="text-gray-400 text-sm">Education</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
