"use client";

import React, { useState, useEffect } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const UpToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Get current position
    const startPosition = window.pageYOffset;
    
    // Define animation parameters
    const duration = 800;
    const startTime = performance.now();
    
    // Scroll animation function
    function scrollAnimation(currentTime: number) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - easeProgress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }
    
    // Easing function for smoother scrolling
    function easeInOutCubic(t: number) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    // Start the animation
    requestAnimationFrame(scrollAnimation);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <BsArrowUpCircleFill size={24} />
        </button>
      )}
    </>
  );
};

export default UpToTop; 