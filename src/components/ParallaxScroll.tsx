"use client";

import React, { useRef, forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type AnimationType = "y" | "scale";

interface ParallaxScrollProps {
  children: React.ReactNode;
  yRange: [number, number];
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  type?: AnimationType;
}

/**
 * ParallaxScroll component for creating parallax scrolling effects
 * @param {React.ReactNode} children - Content to display with parallax effect
 * @param {[number, number]} yRange - Range of Y-axis movement during scroll [start, end]
 * @param {string} className - Additional CSS classes
 * @param {React.RefObject<HTMLElement>} containerRef - Optional ref to the container element for scroll tracking
 * @param {AnimationType} type - Type of animation: "y" for vertical movement, "scale" for size scaling
 */
const ParallaxScroll = ({ 
  children, 
  yRange, 
  className = "",
  containerRef,
  type = "y"
}: ParallaxScrollProps) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const targetRef = containerRef || internalRef;
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Transform scrollYProgress based on animation type
  const y = type === "y" ? useTransform(scrollYProgress, [0, 1], yRange) : 0;
  const scale = type === "scale" ? useTransform(scrollYProgress, [0, 1], yRange) : 1;

  return (
    <div ref={!containerRef ? internalRef : undefined} className={`relative ${className}`}>
      <motion.div 
        style={{ 
          y,
          scale: type === "scale" ? scale : undefined 
        }} 
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxScroll; 