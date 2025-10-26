'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiVisualstudiocode, SiGit, SiGithub, SiNpm, SiFigma, SiFilezilla } from 'react-icons/si';

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'core' | 'tools'>('core');

  const coreSkills = [
    { name: 'HTML', percent: 90, icon: <FaHtml5 />, gradient: 'linear-gradient(90deg, #ff6b35, #ff004d)' },
    { name: 'CSS', percent: 85, icon: <FaCss3Alt />, gradient: 'linear-gradient(90deg, #0096c7, #48cae4)' },
    { name: 'Tailwind CSS', percent: 80, icon: <SiTailwindcss />, gradient: 'linear-gradient(90deg, #06d6a0, #1b9aaa)' },
    { name: 'Bootstrap', percent: 60, icon: <FaBootstrap />, gradient: 'linear-gradient(90deg, #7209b7, #f72585)' },
    { name: 'JavaScript', percent: 80, icon: <FaJs />, gradient: 'linear-gradient(90deg, #ffd60a, #ff9500)' },
    { name: 'Node.js', percent: 60, icon: <FaNodeJs />, gradient: 'linear-gradient(90deg, #38b000, #70e000)' },
    { name: 'React.js', percent: 70, icon: <FaReact />, gradient: 'linear-gradient(90deg, #0096c7, #48cae4)' },
  ];

  const toolsGrid = [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-500" /> },
    { name: 'Git', icon: <SiGit className="text-orange-500" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'FileZilla', icon: <SiFilezilla className="text-red-500" /> },
    { name: 'NPM', icon: <SiNpm className="text-red-600" /> },
    { name: 'Figma', icon: <SiFigma className="text-purple-500" /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-strong rounded-full px-8 py-3 flex items-center gap-3 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Skills Universe</h2>
            <span className="text-2xl">✨</span>
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="glass-strong rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Tab Buttons */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab('core')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'core'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              Core Skills
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'tools'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              Tools & Technologies
            </button>
          </div>

          {/* Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* Core Skills Tab */}
              {activeTab === 'core' && (
                <motion.div
                  key="core"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {coreSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{skill.icon}</div>
                          <span className="text-white font-semibold text-lg">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400 font-bold text-xl">{skill.percent}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute left-0 top-0 h-full rounded-full"
                          style={{ background: skill.gradient }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percent}%` }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                        />
                        {/* End Cap */}
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
                          initial={{ left: 0 }}
                          animate={{ left: `calc(${skill.percent}% - 8px)` }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Tools & Technologies Grid Tab */}
              {activeTab === 'tools' && (
                <motion.div
                  key="tools"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {toolsGrid.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -10 }}
                      className="flex flex-col items-center justify-center gap-4 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group min-h-[140px]"
                    >
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                      <span className="text-white font-semibold text-base text-center">{tool.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
