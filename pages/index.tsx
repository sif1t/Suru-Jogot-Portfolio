'use client';

import React from 'react';
import Head from 'next/head';
import StarsBackground from '@/components/StarsBackground';
import ParticleBackground from '@/components/ParticleBackground';
import EnhancedParticleBackground from '@/components/EnhancedParticleBackground';
import MobileNavigation from '@/components/MobileNavigation';
import UniverseNavigation from '@/components/UniverseNavigation';
import UniverseWrapper from '@/components/UniverseWrapper';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
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
          <ExperienceSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="relative z-10 py-8 px-4 text-center border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Sifat. All rights reserved. Built with ❤️ and ☕
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Crafted with React, Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>
          </footer>
        </UniverseWrapper>
      </main>
    </>
  );
}
