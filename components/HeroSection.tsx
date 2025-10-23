'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaCode, FaRocket, FaHeart, FaStar, FaDownload, FaPlay } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Dynamic gradient background that follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Animated greeting badge */}
            <motion.div
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-3xl">👋</span>
              </motion.div>
              <span className="text-cyan-400 font-semibold">Welcome to my universe</span>
            </motion.div>

            {/* Main heading with split text animation */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
                <span className="text-white">Hi, I'm</span>
                <br />
                <motion.span
                  className="gradient-text inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  SIFAT
                </motion.span>
              </h1>
            </motion.div>

            {/* Typing effect subtitle */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FaCode className="text-white text-xl" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-cyan-400">
                  Full Stack Developer
                </h2>
                <p className="text-gray-400 text-sm md:text-base">Crafting Digital Experiences</p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about building innovative web solutions that blend creativity with cutting-edge technology. 
              Let's turn ideas into reality.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: FaRocket, value: '3+', label: 'Years Exp' },
                { icon: FaStar, value: '50+', label: 'Projects' },
                { icon: FaHeart, value: '100%', label: 'Dedication' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-strong rounded-2xl p-4 text-center relative overflow-hidden group"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <stat.icon className="text-2xl text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white relative z-10">{stat.value}</div>
                  <div className="text-xs text-gray-400 relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  <FaPlay /> View My Work
                </span>
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 rounded-2xl font-bold text-lg border-2 border-cyan-500 text-white overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-all duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaDownload /> Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - 3D Card Showcase */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
            >
              {/* Main card */}
              <motion.div
                className="glass-strong rounded-3xl p-8 relative z-10 universe-float"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 rounded-3xl holographic pointer-events-none" />

                {/* Profile area */}
                <div className="relative">
                  {/* Animated avatar placeholder */}
                  <motion.div
                    className="w-64 h-64 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 relative overflow-hidden"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    {/* Inner content */}
                    <div className="absolute inset-2 rounded-3xl bg-gray-900 flex items-center justify-center">
                      <motion.div
                        className="text-8xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💻
                      </motion.div>
                    </div>

                    {/* Orbiting dots */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-white rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                        }}
                        animate={{
                          rotate: [i * 90, i * 90 + 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <div
                          style={{
                            transform: `translate(-50%, -50%) translateX(140px)`,
                          }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Skill badges floating around */}
                  {[
                    { name: 'React', pos: 'top-4 -left-12', color: 'from-blue-500 to-cyan-500', delay: 0 },
                    { name: 'Node.js', pos: 'top-20 -right-16', color: 'from-green-500 to-teal-500', delay: 0.5 },
                    { name: 'TypeScript', pos: 'bottom-20 -left-16', color: 'from-blue-600 to-indigo-500', delay: 1 },
                    { name: 'Next.js', pos: 'bottom-4 -right-12', color: 'from-gray-700 to-gray-900', delay: 1.5 },
                  ].map((skill, i) => (
                    <motion.div
                      key={i}
                      className={`absolute ${skill.pos} glass px-4 py-2 rounded-full border border-white/20 hidden xl:block`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 + skill.delay }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Status indicator */}
                <motion.div
                  className="flex items-center justify-center gap-2 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-gray-300 text-sm">Available for freelance</span>
                </motion.div>
              </motion.div>

              {/* Background decorative elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced floating orbs with trails */}
      {[
        { size: 'w-32 h-32', color: 'bg-purple-500', pos: 'top-20 left-20', duration: 8, delay: 0 },
        { size: 'w-40 h-40', color: 'bg-pink-500', pos: 'top-40 right-20', duration: 10, delay: 1 },
        { size: 'w-24 h-24', color: 'bg-cyan-500', pos: 'bottom-40 left-40', duration: 7, delay: 0.5 },
        { size: 'w-36 h-36', color: 'bg-blue-500', pos: 'bottom-20 right-40', duration: 9, delay: 1.5 },
        { size: 'w-28 h-28', color: 'bg-indigo-500', pos: 'top-1/2 left-10', duration: 11, delay: 0.8 },
        { size: 'w-20 h-20', color: 'bg-teal-500', pos: 'top-1/3 right-10', duration: 6, delay: 1.2 },
      ].map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.pos} ${orb.size} ${orb.color} rounded-full blur-3xl opacity-20`}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Particle system */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-gray-400 text-sm font-semibold">Scroll to explore</span>
        <motion.div
          className="w-6 h-10 border-2 border-cyan-500 rounded-full p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-cyan-500 rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
