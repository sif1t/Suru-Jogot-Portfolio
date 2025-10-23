'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobile, FaRocket } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Building robust, scalable web applications with modern technologies and best practices.',
    icon: <FaCode />,
    color: 'from-purple-500 to-pink-500',
    features: ['React & Next.js', 'Node.js Backend', 'API Integration', 'Database Design'],
  },
  {
    title: 'Web Design',
    description: 'Creating beautiful, user-friendly interfaces that captivate and engage your audience.',
    icon: <FaPaintBrush />,
    color: 'from-cyan-500 to-blue-500',
    features: ['UI/UX Design', 'Responsive Layouts', 'Prototyping', 'Brand Identity'],
  },
];

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technology and creative design
          </p>
        </motion.div>

        {/* Main service cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-4xl mb-6 shadow-2xl`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.3 + idx * 0.1 }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-gray-400">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating orb decorations */}
              <motion.div
                className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-30`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className={`absolute -left-8 -bottom-8 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-20`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Orbiting planets visualization */}
        <div className="relative h-96 hidden lg:block">
          {/* Central node */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl z-10"
            style={{ x: -80, y: -80 }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Services
            </motion.div>
          </motion.div>

          {/* Orbiting service planets */}
          {services.map((service, index) => {
            const angle = (index * 360) / services.length;
            const radius = 200;

            return (
              <motion.div
                key={service.title}
                className="absolute top-1/2 left-1/2"
                style={{ x: -40, y: -40 }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 2,
                }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white text-2xl shadow-xl`}
                  style={{
                    x: Math.cos((angle * Math.PI) / 180) * radius,
                    y: Math.sin((angle * Math.PI) / 180) * radius,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  whileHover={{ scale: 1.5 }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Orbit path rings */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-purple-500/30 rounded-full" style={{ x: -192, y: -192 }}></div>
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-pink-500/20 rounded-full" style={{ x: -250, y: -250 }}></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
