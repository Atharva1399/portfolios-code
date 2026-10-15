import { useRef } from 'react';
import { useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion';

/**
 * Scroll parallax for one element: returns a ref for the element's section
 * and a springy offset that runs from +distance to -distance as it passes.
 */
export function useParallax<T extends HTMLElement>(distance: number): [React.RefObject<T>, MotionValue<number>] {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Phones get a gentler drift so wide headings never slide off-screen
  const scaled = typeof window === 'undefined' ? distance : distance * Math.min(1, window.innerWidth / 1024);
  const raw = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [scaled, -scaled]);
  const value = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  return [ref, value];
}
