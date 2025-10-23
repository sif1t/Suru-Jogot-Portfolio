'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaRocket, FaStar, FaEye, FaCode } from 'react-icons/fa';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  color: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Sifat Ecommearch',
    description: 'Product Management: Easy-to-use admin panel for managing inventory, categories, and product details.User Accounts: Personalized user accounts with order tracking and wish lists.Secure Payment: Integrated payment gateways with SSL encryption for secure transactions.',
    image: '/images/sifat ecommearch.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://sifatecommearch.netlify.app/',
    githubLink: 'https://github.com/sif1t',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'JoonBook',
    description: 'User Profiles: Create and customize detailed profiles to showcase your interests and Responsive Design: Access Jonbook from any device with a responsive, mobile-friendly layout.Notifications: Get notified of important events, messages, and interactions.',
    image: '/images/joonbook.png',
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
    demoLink: 'https://joonbook.netlify.app/',
    githubLink: 'https://github.com/sif1t',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Linkdin-clone',
    description: 'Secure user login and registration using JWT (JSON Web Token).Editable user profiles with profile picture, bio, work experience, education, and skills.Advanced search for users, posts, and companies.Insights on profile views and post engagements.Liking, commenting, and sharing posts.',
    image: '/images/linkdin.png',
    tags: ['React', 'Framer Motion', 'Tailwind', 'TypeScript'],
    demoLink: 'https://libkdin.netlify.app/',
    githubLink: 'https://github.com/sif1t',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    title: 'SifTube',
    description: 'User Authentication: Secure login and registration system.Video Streaming: High-quality video playback with adaptive bitrate streaming.Search Functionality: Powerful search engine to find videos easily.',
    image: '/images/siftube.png',
    tags: ['Vue.js', 'Firebase', 'Vuex', 'DND'],
    demoLink: 'https://siftube.netlify.app/',
    githubLink: 'https://github.com/sif1t',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'School Management',
    description: 'Comprehensive school management system with student enrollment, attendance tracking, grade management, and parent-teacher communication features.',
    image: '/images/school.png',
    tags: ['React', 'OpenWeather API', 'Maps', 'PWA'],
    demoLink: 'https://pae1.netlify.app/',
    githubLink: 'https://github.com/sif1t',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 6,
    title: 'LUXEMART',
    description: 'Full-stack blogging platform with markdown support, comment system, user authentication, and admin dashboard.',
    image: '/images/luxemart.png', // Replace with actual image
    tags: ['Next.js', 'PostgreSQL', 'Auth', 'Markdown'],
    demoLink: 'https://luxemart01.netlify.app/',
    githubLink: 'https://github.com/sif1t',
    color: 'from-pink-500 to-purple-500',
  },
];

const PortfolioSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 13, repeat: Infinity }}
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
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity }
            }}
          >
            <FaRocket className="text-6xl text-purple-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight">
            My Portfolio
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Explore my universe of projects - each one a unique planet in my development journey
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

        {/* Portfolio Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                className="glass-strong rounded-3xl overflow-hidden cursor-pointer relative universe-float h-full flex flex-col"
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(item)}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic pointer-events-none rounded-3xl z-10" />
                
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} blur-xl opacity-60`}></div>
                </div>

                {/* Top accent line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                />
                
                {/* Image with enhanced gradient overlay */}
                <div className={`h-52 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  {/* Actual Project Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Animated mesh gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                       radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />

                  {/* View Details Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3"
                    >
                      <FaEye className="text-white text-2xl" />
                    </motion.div>
                    <span className="text-white text-xl font-bold">View Details</span>
                    <span className="text-cyan-400 text-sm mt-1">Click to explore</span>
                  </motion.div>
                  
                  {/* Floating orb effects - multiple */}
                  <motion.div
                    className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-16 h-16 bg-white/30 rounded-full blur-lg"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />

                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <motion.div
                      className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Content - Enhanced */}
                <div className="p-6 flex-grow flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 flex-grow">
                      {item.title}
                    </h3>
                    <motion.div
                      className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaCode className="text-white text-lg" />
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {item.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={item.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                    <motion.a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <FaGithub className="text-sm" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-1/2 right-8 w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal - Enhanced */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass-strong rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative border border-white/10"
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ duration: 0.4, type: 'spring' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic pointer-events-none rounded-3xl" />

                {/* Top accent line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${selectedProject.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />

                {/* Close button - Enhanced */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/50 z-20 border-2 border-white/20"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes size={24} />
                </motion.button>

                {/* Image - Enhanced */}
                <div className={`h-72 md:h-[450px] bg-gradient-to-br ${selectedProject.color} rounded-2xl mb-8 relative overflow-hidden`}>
                  {/* Actual Project Image */}
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Animated mesh gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                       radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/50"
                  />

                  {/* Floating orbs in modal */}
                  <motion.div
                    className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${selectedProject.color} rounded-2xl flex items-center justify-center border-2 border-white/30`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaRocket className="text-white text-2xl" />
                      </motion.div>
                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">{selectedProject.title}</h2>
                        <div className="flex items-center gap-2 mt-2">
                          <FaStar className="text-yellow-400" />
                          <span className="text-white/80 text-sm">Featured Project</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content - Enhanced */}
                <div className="space-y-8 relative z-10">
                  {/* About Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <FaEye className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-cyan-400">About This Project</h3>
                    </div>
                    <div className="glass rounded-2xl p-6 border border-cyan-500/20">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Action buttons - Enhanced */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {selectedProject.demoLink && (
                      <motion.a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-2xl text-white font-bold text-center text-lg flex items-center justify-center gap-3 shadow-lg shadow-purple-500/50 border-2 border-white/20"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-xl" /> 
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-2xl text-white font-bold text-center text-lg flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/50 border-2 border-white/20"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-xl" /> 
                        <span>Source Code</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-20 left-8 w-12 h-12 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-xl"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-pink-500/40 rounded-br-xl"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
