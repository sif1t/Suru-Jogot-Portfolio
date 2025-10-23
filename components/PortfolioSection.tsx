'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, checkout, and payment integration. Built with React, Node.js, and MongoDB.',
    image: '/portfolio/project1.jpg', // Replace with actual image
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: '#',
    githubLink: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard for social media management with beautiful data visualizations and reporting features.',
    image: '/portfolio/project2.jpg', // Replace with actual image
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
    demoLink: '#',
    githubLink: '#',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations, interactive elements, and responsive design for creative professionals.',
    image: '/portfolio/project3.jpg', // Replace with actual image
    tags: ['React', 'Framer Motion', 'Tailwind', 'TypeScript'],
    demoLink: '#',
    githubLink: '#',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
    image: '/portfolio/project4.jpg', // Replace with actual image
    tags: ['Vue.js', 'Firebase', 'Vuex', 'DND'],
    demoLink: '#',
    githubLink: '#',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'Beautiful weather forecast application with location-based predictions, interactive maps, and detailed weather insights.',
    image: '/portfolio/project5.jpg', // Replace with actual image
    tags: ['React', 'OpenWeather API', 'Maps', 'PWA'],
    demoLink: '#',
    githubLink: '#',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Full-stack blogging platform with markdown support, comment system, user authentication, and admin dashboard.',
    image: '/portfolio/project6.jpg', // Replace with actual image
    tags: ['Next.js', 'PostgreSQL', 'Auth', 'Markdown'],
    demoLink: '#',
    githubLink: '#',
    color: 'from-pink-500 to-purple-500',
  },
];

const PortfolioSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Explore my universe of projects - each one a unique planet in my development journey
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass rounded-2xl overflow-hidden cursor-pointer group relative universe-float"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              onClick={() => setSelectedProject(item)}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic pointer-events-none rounded-2xl z-10" />
              
              {/* Image placeholder with gradient */}
              <div className={`h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white text-xl font-bold">View Details</span>
                </motion.div>
                
                {/* Floating orb effect */}
                <motion.div
                  className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"
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
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400 border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass-strong rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors z-10"
                >
                  <FaTimes size={20} />
                </button>

                {/* Image */}
                <div className={`h-64 md:h-96 bg-gradient-to-br ${selectedProject.color} rounded-2xl mb-8 relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50"
                  />
                  <motion.div
                    className="absolute bottom-6 left-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-3">About This Project</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white/10 rounded-full text-sm text-white border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4 pt-4">
                    {selectedProject.demoLink && (
                      <motion.a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 rounded-full text-white font-semibold text-center hover:scale-105 transition-smooth flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 glass border-2 border-cyan-500 px-6 py-4 rounded-full text-white font-semibold text-center hover:scale-105 transition-smooth flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
