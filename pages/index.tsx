'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import StarsBackground from '@/components/StarsBackground';
import ParticleBackground from '@/components/ParticleBackground';
import EnhancedParticleBackground from '@/components/EnhancedParticleBackground';
import MobileNavigation from '@/components/MobileNavigation';
import UniverseNavigation from '@/components/UniverseNavigation';
import UniverseWrapper from '@/components/UniverseWrapper';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HobbySection from '@/components/HobbySection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sifat - Web Developer Portfolio</title>
        <meta name="description" content="Sifat's futuristic portfolio showcasing web development projects and skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen">
        {/* Background Effects */}
        <StarsBackground />
        <ParticleBackground />
        <EnhancedParticleBackground />
        
        {/* Universe Wrapper for smooth effects */}
        <UniverseWrapper>
          {/* Navigation */}
          <MobileNavigation />
          <UniverseNavigation />
          
          {/* Sections */}
          <HeroSection />
          <AboutSection />
          <HobbySection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="relative z-10 py-8 px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <p className="text-gray-400 text-lg">
                © {new Date().getFullYear()} Sifat. All rights reserved. Built with{' '}
                <motion.span
                  className="inline-block text-red-500"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                >
                  ❤️
                </motion.span>{' '}
                and{' '}
                <motion.span
                  className="inline-block"
                  animate={{ 
                    rotate: [-15, 15, -15],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  ☕
                </motion.span>
              </p>
            </div>
          </footer>
        </UniverseWrapper>
      </main>
    </>
  );
}
