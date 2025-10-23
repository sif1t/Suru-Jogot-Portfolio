'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: particle.left,
            bottom: '-10px',
            background: `rgba(${99 + Math.random() * 50}, ${102 + Math.random() * 50}, 241, 0.6)`,
          }}
          animate={{
            y: [0, -1000],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
