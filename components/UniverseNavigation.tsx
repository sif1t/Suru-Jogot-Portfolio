'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

interface NavigationPlanet {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  glowClass: string;
  orbitRadius: number;
  orbitSpeed: number;
}

const navigationPlanets: NavigationPlanet[] = [
  { id: 'home', name: 'Home', icon: <FaHome />, color: 'bg-purple-500', glowClass: 'glow-purple', orbitRadius: 180, orbitSpeed: 20 },
  { id: 'about', name: 'About', icon: <FaUser />, color: 'bg-pink-500', glowClass: 'glow-pink', orbitRadius: 200, orbitSpeed: 25 },
  { id: 'services', name: 'Services', icon: <FaBriefcase />, color: 'bg-blue-500', glowClass: 'glow-blue', orbitRadius: 220, orbitSpeed: 30 },
  { id: 'portfolio', name: 'Portfolio', icon: <FaProjectDiagram />, color: 'bg-cyan-500', glowClass: 'glow-cyan', orbitRadius: 240, orbitSpeed: 35 },
  { id: 'contact', name: 'Contact', icon: <FaEnvelope />, color: 'bg-purple-500', glowClass: 'glow-purple', orbitRadius: 260, orbitSpeed: 40 },
];

const UniverseNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Orbiting Universe Navigation */}
      <div className="hidden lg:block fixed top-1/2 right-8 -translate-y-1/2 z-50 pointer-events-none">
        <div className="relative w-64 h-64">
          {/* Central Hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-2xl pointer-events-auto cursor-pointer"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
              NAV
            </div>
          </motion.div>

          {/* Orbiting Planets */}
          {navigationPlanets.map((planet, index) => {
            const angle = (index * 360) / navigationPlanets.length ;
            const radius = 100;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={planet.id}
                className="absolute top-1/2 left-1/2 pointer-events-auto"
                style={{
                  x: -24,
                  y: -24,
                }}
                animate={{
                  x: [x - 24, x + 10, x - 24],
                  y: [y - 24, y - 10, y - 24],
                }}
                transition={{
                  duration: planet.orbitSpeed,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.button
                  onClick={() => scrollToSection(planet.id)}
                  className={`${planet.color} ${planet.glowClass} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl cursor-pointer relative group`}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    boxShadow: activeSection === planet.id 
                      ? ['0 0 20px rgba(99,102,241,0.8)', '0 0 40px rgba(99,102,241,1)', '0 0 20px rgba(99,102,241,0.8)']
                      : '0 0 10px rgba(99,102,241,0.3)',
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity },
                  }}
                >
                  {planet.icon}
                  
                  {/* Tooltip */}
                  <motion.span
                    className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    {planet.name}
                  </motion.span>

                  {/* Active indicator */}
                  {activeSection === planet.id && (
                    <motion.div
                      className="absolute -inset-1 border-2 border-white rounded-full"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              </motion.div>
            );
          })}

          {/* Orbit path rings */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-purple-500/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-pink-500/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Floating connection lines */}
      <svg className="hidden lg:block fixed top-0 right-0 w-full h-full pointer-events-none z-40 opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default UniverseNavigation;
