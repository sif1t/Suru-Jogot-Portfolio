'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

interface NavigationPlanet {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  glowClass: string;
}

const navigationPlanets: NavigationPlanet[] = [
  { id: 'home', name: 'Home', icon: <FaHome />, color: 'bg-purple-500', glowClass: 'glow-purple' },
  { id: 'about', name: 'About', icon: <FaUser />, color: 'bg-pink-500', glowClass: 'glow-pink' },
  { id: 'services', name: 'Services', icon: <FaBriefcase />, color: 'bg-blue-500', glowClass: 'glow-blue' },
  { id: 'portfolio', name: 'Portfolio', icon: <FaProjectDiagram />, color: 'bg-cyan-500', glowClass: 'glow-cyan' },
  { id: 'contact', name: 'Contact', icon: <FaEnvelope />, color: 'bg-purple-500', glowClass: 'glow-purple' },
];

const FloatingNavigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed top-8 right-8 z-50 hidden lg:flex flex-col gap-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {navigationPlanets.map((planet, index) => (
        <motion.button
          key={planet.id}
          onClick={() => scrollToSection(planet.id)}
          className={`${planet.color} ${planet.glowClass} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer transition-smooth hover:scale-110 relative group`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          {planet.icon}
          <motion.span
            className="absolute right-20 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
          >
            {planet.name}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default FloatingNavigation;
