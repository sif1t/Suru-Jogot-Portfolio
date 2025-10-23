'use client';

import React, { useState, useEffect, Fragment } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaCode, FaRocket, FaHeart, FaStar, FaDownload, FaPlay, FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const controls = useAnimation();

  const roles = [
    { 
      title: 'Frontend Developer',
      subtitle: 'Building Beautiful Interfaces',
      theme: 'frontend' // Cyan/Green theme
    },
    { 
      title: 'Web Developer',
      subtitle: 'Creating Web Solutions',
      theme: 'web' // Pink/Orange theme
    },
  ];

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

  // Auto-rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

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

            {/* Typing effect subtitle with solar system animation */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                {/* Icon changes based on role */}
                <motion.div
                  key={currentRole}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    roles[currentRole].theme === 'full-stack' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                    roles[currentRole].theme === 'frontend' ? 'bg-gradient-to-br from-cyan-500 to-green-500' :
                    'bg-gradient-to-br from-pink-500 to-orange-500'
                  }`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                >
                  <FaCode className="text-white text-xl" />
                </motion.div>
                
                <div className="flex-grow">
                  <motion.h2
                    key={`role-${currentRole}`}
                    className={`text-2xl md:text-4xl font-bold ${
                      roles[currentRole].theme === 'full-stack' ? 'text-cyan-400' :
                      roles[currentRole].theme === 'frontend' ? 'text-green-400' :
                      'text-orange-400'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[currentRole].title}
                  </motion.h2>
                  <motion.p
                    key={`subtitle-${currentRole}`}
                    className="text-gray-400 text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {roles[currentRole].subtitle}
                  </motion.p>
                </div>
              </div>

              {/* Unique Solar System Animation for each role */}
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 hidden lg:block">
                {/* Full Stack - Classic Solar System */}
                {roles[currentRole].theme === 'full-stack' && (
                  <motion.div
                    key="solar-fullstack"
                    className="relative w-full h-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    {/* Sun in center */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-yellow-500/50"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(251, 191, 36, 0.5)',
                          '0 0 40px rgba(251, 191, 36, 0.8)',
                          '0 0 20px rgba(251, 191, 36, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Orbiting planets */}
                    {[
                      { size: 4, distance: 20, color: 'bg-blue-400', duration: 3 },
                      { size: 5, distance: 35, color: 'bg-purple-500', duration: 5 },
                      { size: 3, distance: 50, color: 'bg-pink-400', duration: 7 },
                    ].map((planet, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          width: planet.distance * 2,
                          height: planet.distance * 2,
                          marginLeft: -planet.distance,
                          marginTop: -planet.distance,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: planet.duration,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <div
                          className={`absolute top-0 left-1/2 ${planet.color} rounded-full shadow-lg`}
                          style={{
                            width: planet.size,
                            height: planet.size,
                            marginLeft: -planet.size / 2,
                          }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Frontend - Atom/Nucleus Style */}
                {roles[currentRole].theme === 'frontend' && (
                  <motion.div
                    key="solar-frontend"
                    className="relative w-full h-full"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                  >
                    {/* Central nucleus */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-10 h-10 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-500/50"
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 20px rgba(6, 182, 212, 0.5)',
                          '0 0 40px rgba(6, 182, 212, 0.8)',
                          '0 0 20px rgba(6, 182, 212, 0.5)',
                        ],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    
                    {/* Electron orbits - 3 rings at different angles */}
                    {[0, 60, 120].map((angle, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12 border-2 border-green-400/30 rounded-full"
                        style={{
                          transform: `rotateX(${angle}deg) rotateY(${angle}deg)`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <motion.div
                          className="absolute top-0 left-1/2 w-3 h-3 bg-green-400 rounded-full -ml-1.5 shadow-lg shadow-green-400/50"
                          animate={{
                            boxShadow: [
                              '0 0 10px rgba(74, 222, 128, 0.5)',
                              '0 0 20px rgba(74, 222, 128, 1)',
                              '0 0 10px rgba(74, 222, 128, 0.5)',
                            ],
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Web Developer - Galaxy Spiral */}
                {roles[currentRole].theme === 'web' && (
                  <motion.div
                    key="solar-web"
                    className="relative w-full h-full"
                    initial={{ opacity: 0, scale: 0, rotate: 180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: -180 }}
                  >
                    {/* Central black hole */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-6 h-6 bg-gradient-to-br from-pink-500 to-orange-600 rounded-full -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 20px rgba(236, 72, 153, 0.6)',
                          '0 0 40px rgba(236, 72, 153, 1)',
                          '0 0 20px rgba(236, 72, 153, 0.6)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Spiral arms with stars */}
                    {[0, 72, 144, 216, 288].map((startAngle, armIndex) => (
                      <React.Fragment key={armIndex}>
                        {[10, 20, 30, 40, 50].map((distance, i) => {
                          const angle = startAngle + (i * 15);
                          const x = Math.cos((angle * Math.PI) / 180) * distance;
                          const y = Math.sin((angle * Math.PI) / 180) * distance;
                          
                          return (
                            <motion.div
                              key={`${armIndex}-${i}`}
                              className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400 rounded-full"
                              style={{
                                x: x - 4,
                                y: y - 4,
                              }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.4, 1, 0.4],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: armIndex * 0.2 + i * 0.1,
                              }}
                            />
                          );
                        })}
                      </React.Fragment>
                    ))}

                    {/* Rotating spiral effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute top-1/2 left-1/2 border border-pink-500/20 rounded-full"
                          style={{
                            width: 20 + i * 20,
                            height: 20 + i * 20,
                            marginLeft: -(10 + i * 10),
                            marginTop: -(10 + i * 10),
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Description with Beautiful Smooth Animations */}
            <motion.div
              className="mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
              >
                {/* Animated words with stagger effect */}
                {[
                  'Passionate', ' ', 'about', ' ', 'building', ' ', 'innovative', ' ', 'web', ' ', 'solutions', ' ',
                  'that', ' ', 'blend', ' ', 'creativity', ' ', 'with', ' ', 'cutting-edge', ' ', 'technology.', ' ',
                  "Let's", ' ', 'turn', ' ', 'ideas', ' ', 'into', ' ', 'reality.'
                ].map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.5,
                      delay: 1 + index * 0.05,
                      ease: [0.25, 0.4, 0.25, 1]
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                
                {/* Glowing underline animation */}
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 0.6 }}
                  transition={{
                    duration: 1.5,
                    delay: 2.5,
                    ease: 'easeInOut'
                  }}
                />
                
                {/* Floating particles around text */}
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: 2 + i * 0.4,
                    }}
                  />
                ))}
              </motion.p>
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

                  {/* Orbiting Skills Solar System - Absolutely Unique */}
                  <div className="absolute -inset-16 hidden xl:block pointer-events-none">
                    <motion.div
                      className="relative w-full h-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      {/* Skill planets with icons */}
                      {[
                        { 
                          name: 'React', 
                          icon: <FaReact className="text-2xl" />, 
                          color: 'from-blue-400 to-cyan-500',
                          orbitRadius: 180,
                          planetSize: 'w-16 h-16',
                          orbitSpeed: 8,
                          glowColor: 'shadow-cyan-500/50'
                        },
                        { 
                          name: 'Node.js', 
                          icon: <FaNodeJs className="text-2xl" />, 
                          color: 'from-green-500 to-teal-500',
                          orbitRadius: 200,
                          planetSize: 'w-14 h-14',
                          orbitSpeed: 10,
                          glowColor: 'shadow-green-500/50'
                        },
                        { 
                          name: 'TypeScript', 
                          icon: <SiTypescript className="text-xl" />, 
                          color: 'from-blue-600 to-indigo-500',
                          orbitRadius: 220,
                          planetSize: 'w-12 h-12',
                          orbitSpeed: 12,
                          glowColor: 'shadow-blue-500/50'
                        },
                        { 
                          name: 'Next.js', 
                          icon: <SiNextdotjs className="text-xl" />, 
                          color: 'from-gray-200 to-gray-400',
                          orbitRadius: 240,
                          planetSize: 'w-14 h-14',
                          orbitSpeed: 14,
                          glowColor: 'shadow-gray-400/50'
                        },
                      ].map((skill, index) => (
                        <motion.div
                          key={index}
                          className="absolute top-1/2 left-1/2 pointer-events-auto"
                          style={{
                            width: skill.orbitRadius * 2,
                            height: skill.orbitRadius * 2,
                            marginLeft: -skill.orbitRadius,
                            marginTop: -skill.orbitRadius,
                          }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: skill.orbitSpeed,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        >
                          {/* Orbit path ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full border border-dashed border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                          />

                          {/* Skill planet */}
                          <motion.div
                            className={`absolute top-0 left-1/2 ${skill.planetSize} -ml-8 cursor-pointer group`}
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {/* Planet card */}
                            <motion.div
                              className={`w-full h-full bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-white shadow-xl ${skill.glowColor} relative overflow-hidden border-2 border-white/20`}
                              animate={{
                                boxShadow: [
                                  `0 0 20px rgba(255, 255, 255, 0.2)`,
                                  `0 0 40px rgba(255, 255, 255, 0.4)`,
                                  `0 0 20px rgba(255, 255, 255, 0.2)`,
                                ],
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            >
                              {/* Icon */}
                              <div className="relative z-10">
                                {skill.icon}
                              </div>

                              {/* Rotating shine effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                              />

                              {/* Pulsing glow */}
                              <motion.div
                                className="absolute inset-0 bg-white/20 rounded-2xl"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0, 0.3, 0],
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                              />
                            </motion.div>

                            {/* Tooltip on hover */}
                            <motion.div
                              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                            >
                              <div className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-2xl border border-white/20">
                                {skill.name}
                              </div>
                            </motion.div>

                            {/* Trailing particles */}
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`absolute top-1/2 left-1/2 w-1 h-1 bg-gradient-to-br ${skill.color} rounded-full`}
                                style={{
                                  marginLeft: -2 - i * 8,
                                  marginTop: -2,
                                }}
                                animate={{
                                  scale: [1, 0, 1],
                                  opacity: [0.8, 0, 0.8],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </motion.div>
                        </motion.div>
                      ))}

                      {/* Connection lines from center */}
                      {[180, 200, 220, 240].map((radius, index) => (
                        <motion.div
                          key={index}
                          className="absolute top-1/2 left-1/2"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 0.1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 1.7 + index * 0.1 }}
                        >
                          <div
                            className="border-l border-cyan-400/20"
                            style={{
                              height: radius,
                              transformOrigin: 'top',
                              transform: `rotate(${index * 90}deg)`,
                            }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
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
