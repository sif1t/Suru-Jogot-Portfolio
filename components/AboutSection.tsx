'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUser, FaCode, FaLightbulb, FaStar, FaRocket, FaHeart } from 'react-icons/fa';

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
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <FaUser className="text-6xl text-cyan-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Passionate developer crafting digital experiences in the universe of code
          </p>
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-purple-500 rounded-full"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <FaHeart className="text-pink-400 text-2xl" />
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent rounded-full"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-20">
          {/* Bio Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="hidden md:block w-20 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <div className="flex items-center gap-3 glass-strong px-6 py-3 rounded-full">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaLightbulb className="text-2xl text-cyan-400" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">My Story</h3>
              </div>
            </div>

            <motion.div
              className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden universe-float"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
              
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-30"></div>
              </div>

              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <div className="relative z-10">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed min-h-[200px]">
                  {displayedText}
                  <span className="typewriter-cursor"></span>
                </p>

                {/* Stats badges */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <motion.div
                    className="text-center p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <FaRocket className="text-2xl text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-xs text-gray-400">Years Exp</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center p-4 bg-purple-500/10 rounded-2xl border border-purple-500/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <FaCode className="text-2xl text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">8+</div>
                    <div className="text-xs text-gray-400">Skills</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center p-4 bg-pink-500/10 rounded-2xl border border-pink-500/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <FaStar className="text-2xl text-pink-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating particles in bio */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    top: `${10 + i * 20}%`,
                    right: `${5 + i * 15}%`,
                  }}
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-cyan-500/40 rounded-tr-xl"></div>
              <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-purple-500/40 rounded-bl-xl"></div>
            </motion.div>
          </motion.div>

          {/* Skills Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8 justify-end">
              <div className="flex items-center gap-3 glass-strong px-6 py-3 rounded-full">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Skills Universe</h3>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <FaCode className="text-2xl text-pink-400" />
                </motion.div>
              </div>
              <div className="hidden md:block w-20 h-0.5 bg-gradient-to-l from-transparent to-pink-500"></div>
            </div>

            <motion.div
              className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden universe-float"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />
              
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)`,
                }}
              />

              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <div className="space-y-6 relative z-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group/skill"
                  >
                    <div className="flex justify-between mb-3">
                      <span className="text-white font-bold text-lg group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-purple-400 group-hover/skill:to-pink-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="text-cyan-400 font-bold text-lg"
                        whileHover={{ scale: 1.2, color: '#fff' }}
                      >
                        {skill.percentage}%
                      </motion.span>
                    </div>
                    
                    {/* Enhanced progress bar */}
                    <div className="relative">
                      <div className="w-full h-4 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.percentage}%` } : {}}
                          transition={{ duration: 1.5, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                        >
                          {/* Animated shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                          
                          {/* Glowing dot */}
                          <motion.div
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                            animate={{
                              boxShadow: [
                                '0 0 10px rgba(255,255,255,0.5)',
                                '0 0 20px rgba(255,255,255,1)',
                                '0 0 10px rgba(255,255,255,0.5)'
                              ],
                              scale: [1, 1.3, 1],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </motion.div>
                      </div>
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-md opacity-0 group-hover/skill:opacity-30 transition-opacity duration-300 rounded-full`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full"
                  style={{
                    top: `${15 + i * 25}%`,
                    left: `${10 + i * 10}%`,
                  }}
                  animate={{
                    x: [0, -20, 0],
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-pink-500/40 rounded-tl-xl"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-purple-500/40 rounded-br-xl"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Constellation Visualization - Enhanced */}
        <motion.div
          className="relative mt-32 mb-20 h-96 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
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
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-2 rounded-full border border-pink-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central orb */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl overflow-hidden"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 40px rgba(6, 182, 212, 0.6)',
                    '0 0 80px rgba(236, 72, 153, 0.8)',
                    '0 0 40px rgba(6, 182, 212, 0.6)',
                  ],
                }}
                transition={{
                  scale: { duration: 2, repeat: Infinity },
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
              >
                <div className="text-center relative z-10">
                  <FaCode className="text-2xl mx-auto mb-1" />
                  <span className="text-sm">Skills</span>
                </div>
                
                {/* Inner animated gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Orbiting Skill Nodes */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const radius = 200;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <React.Fragment key={skill.name}>
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
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                >
                  <div className={`w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/40 to-pink-500/20`}></div>
                </motion.div>

                {/* Skill Node */}
                <motion.div
                  className="absolute top-1/2 left-1/2"
                  style={{ x: x, y: y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  <motion.div
                    className={`relative w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg cursor-pointer group border-2 border-white/20`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.5,
                    }}
                    whileHover={{ scale: 1.3, rotate: 0 }}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                      <div className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm shadow-2xl border border-gray-700">
                        <div className="font-bold">{skill.name}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-2xl font-bold">{skill.percentage}</div>
                    <div className="text-xs opacity-90">%</div>

                    {/* Pulsing ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-50`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />

                    {/* Inner glow */}
                    <motion.div
                      className="absolute inset-1 rounded-xl bg-white/10"
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </React.Fragment>
            );
          })}

          {/* Floating decorative particles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const radius = 130 + Math.random() * 80;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
                style={{ x: x, y: y }}
                animate={{
                  scale: [0, 2, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            );
          })}

          {/* Legend */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <motion.div 
              className="flex items-center gap-2 glass px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <FaStar className="text-yellow-400 text-sm" />
              <span className="text-gray-300 text-sm font-semibold">Hover over nodes to see skill names</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
