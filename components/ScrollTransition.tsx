'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollTransitionProps {
  children: React.ReactNode;
  transitionType?: 'fade' | 'slide' | 'zoom' | 'rotate' | 'flip' | 'spiral' | 'wave' | 'portal';
  delay?: number;
}

const ScrollTransition: React.FC<ScrollTransitionProps> = ({ 
  children, 
  transitionType = 'fade',
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const getTransitionVariants = () => {
    switch (transitionType) {
      case 'fade':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay, ease: 'easeOut' }
          }
        };

      case 'slide':
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, delay, type: 'spring', stiffness: 100 }
          }
        };

      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8, delay, type: 'spring', stiffness: 100 }
          }
        };

      case 'rotate':
        return {
          hidden: { opacity: 0, rotateY: 90 },
          visible: { 
            opacity: 1, 
            rotateY: 0,
            transition: { duration: 1, delay, ease: 'easeOut' }
          }
        };

      case 'flip':
        return {
          hidden: { opacity: 0, rotateX: -90, scale: 0.8 },
          visible: { 
            opacity: 1, 
            rotateX: 0,
            scale: 1,
            transition: { duration: 1, delay, ease: 'easeOut' }
          }
        };

      case 'spiral':
        return {
          hidden: { opacity: 0, scale: 0, rotate: -180 },
          visible: { 
            opacity: 1, 
            scale: 1,
            rotate: 0,
            transition: { duration: 1.2, delay, ease: 'easeOut' }
          }
        };

      case 'wave':
        return {
          hidden: { opacity: 0, y: 50, rotateZ: -10 },
          visible: { 
            opacity: 1, 
            y: 0,
            rotateZ: 0,
            transition: { 
              duration: 1, 
              delay,
              type: 'spring',
              stiffness: 80,
              damping: 10
            }
          }
        };

      case 'portal':
        return {
          hidden: { 
            opacity: 0, 
            scale: 0,
            rotateZ: 360,
            filter: 'blur(20px)'
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            rotateZ: 0,
            filter: 'blur(0px)',
            transition: { duration: 1.5, delay, ease: 'easeOut' }
          }
        };

      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8, delay } }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={getTransitionVariants()}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollTransition;
