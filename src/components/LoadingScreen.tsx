"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import '../styles/LoadingScreen.css';

interface LoadingScreenProps {
  duration?: number; // Duration in milliseconds, default 1000ms (1 second)
  className?: string; // Additional CSS classes
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  duration = 1000,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={cn("loading-container bg-black", className)}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }}
        >
          <div className="loading-text">
            <span className="letter">L</span>
            <span className="letter">o</span>
            <span className="letter">a</span>
            <span className="letter">d</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
            <span className="letter">.</span>
            <span className="letter">.</span>
            <span className="letter">.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 