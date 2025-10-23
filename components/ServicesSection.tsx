'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobile, FaRocket, FaDatabase, FaCloud, FaCog, FaLightbulb } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Building robust, scalable web applications with modern technologies and best practices.',
    icon: FaCode,
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-pink-500',
    features: ['React & Next.js', 'Node.js Backend', 'API Integration', 'Database Design'],
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful, user-friendly interfaces that captivate and engage your audience.',
    icon: FaPaintBrush,
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['UI/UX Design', 'Responsive Layouts', 'Prototyping', 'Brand Identity'],
  },
  {
    title: 'Mobile Apps',
    description: 'Developing cross-platform mobile applications with seamless user experiences.',
    icon: FaMobile,
    color: '#10B981',
    gradient: 'from-green-500 to-teal-500',
    features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deploy'],
  },
  {
    title: 'Performance',
    description: 'Optimizing applications for lightning-fast performance and scalability.',
    icon: FaRocket,
    color: '#F59E0B',
    gradient: 'from-orange-500 to-red-500',
    features: ['Code Optimization', 'SEO Best Practices', 'Fast Loading', 'CDN Integration'],
  },
];

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden" ref={ref}>
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
            className="inline-block mb-4"
            animate={{
              rotate: [0, 360],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            }}
          >
            <FaCog className="text-6xl text-purple-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6 tracking-tight">
            What I Do
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Crafting digital experiences that blend innovation with functionality
          </p>
        </motion.div>

        {/* Unique Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="glass-strong rounded-3xl p-8 h-full relative overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                {/* Glowing border effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Top accent line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Floating icon with 3D effect */}
                  <motion.div
                    className="mb-6"
                    animate={{
                      y: hoveredIndex === index ? [0, -10, 0] : 0,
                      rotateZ: hoveredIndex === index ? [0, 360] : 0,
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: hoveredIndex === index ? Infinity : 0,
                    }}
                  >
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white text-3xl shadow-2xl relative`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon />
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-lg opacity-0 group-hover:opacity-60`}
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features with animated bullets */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.15 + idx * 0.1 }}
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}
                          animate={{
                            scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                          }}
                          transition={{ duration: 1, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        <span className="text-gray-500 text-xs">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating particles */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
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
                  </>
                )}

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/10 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/10 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration - Connection lines */}
        <motion.div
          className="mt-20 relative h-32 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1000 100">
            <motion.path
              d="M 0,50 Q 250,10 500,50 T 1000,50"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Pulsing dots on the line */}
          {[0, 33, 66, 100].map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              style={{ left: `${position}%`, top: '50%' }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
