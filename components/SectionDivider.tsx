'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  type?: 'wave' | 'pulse' | 'particles' | 'orbit' | 'lightning';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ type = 'wave' }) => {
  if (type === 'wave') {
    return (
      <div className="relative h-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className="relative h-32 flex items-center justify-center overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full border-2 border-cyan-500/30"
            animate={{
              scale: [1, 3, 3],
              opacity: [0.8, 0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut",
            }}
          />
        ))}
        <motion.div
          className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/50"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    );
  }

  if (type === 'particles') {
    return (
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, (Math.cos((i / 15) * Math.PI * 2) * 150)],
                y: [0, (Math.sin((i / 15) * Math.PI * 2) * 80)],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'orbit') {
    return (
      <div className="relative h-32 flex items-center justify-center overflow-hidden">
        <div className="relative w-64 h-64">
          {[...Array(3)].map((_, i) => {
            const size = 80 + i * 40;
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  marginLeft: `${-size/2}px`,
                  marginTop: `${-size/2}px`,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 4 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  className={`absolute top-0 left-1/2 w-3 h-3 rounded-full -ml-1.5 -mt-1.5 ${
                    i === 0 ? 'bg-purple-500' : i === 1 ? 'bg-cyan-500' : 'bg-pink-500'
                  }`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            );
          })}
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500"
            animate={{
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.5)',
                '0 0 40px rgba(34, 211, 238, 0.8)',
                '0 0 20px rgba(168, 85, 247, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    );
  }

  if (type === 'lightning') {
    return (
      <div className="relative h-32 flex items-center justify-center overflow-hidden">
        <svg
          width="200"
          height="100"
          viewBox="0 0 200 100"
          className="absolute"
        >
          <motion.path
            d="M 0 50 L 40 30 L 80 60 L 120 20 L 160 70 L 200 50"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{ top: '50%', left: '0%' }}
            animate={{
              x: [0, 200],
              y: [0, -20, 10, -30, 20, 0],
              opacity: [0, 1, 1, 1, 1, 0],
              scale: [0, 1.5, 1, 1.5, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default SectionDivider;
