'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; delay: number }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
