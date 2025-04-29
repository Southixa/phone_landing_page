"use client";

import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

/**
 * A custom hook for smooth scrolling using Lenis
 * @param lerp - Linear interpolation amount (0-1)
 */
export function useSmoothScroll(lerp: number = 0.07) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [lerp]);
} 