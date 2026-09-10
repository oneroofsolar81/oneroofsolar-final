import { motion, useReducedMotion } from "motion/react";
import React from "react";

/**
 * FadeIn — smooth scroll-reveal wrapper.
 *
 * - Heroes (isHero) animate on mount so above-the-fold content appears immediately.
 * - Everything else reveals once as it scrolls into view (soft fade + rise).
 * - Respects prefers-reduced-motion: renders content statically with no transform.
 *
 * This is a drop-in replacement — same props, same rendered <div>, no layout/API change.
 */
export function FadeIn({
  children,
  delay = 0,
  className,
  isHero = false,
}: React.PropsWithChildren<{ delay?: number; className?: string; isHero?: boolean }>) {
  const prefersReduced = useReducedMotion();

  // Accessibility: honour reduced-motion by skipping the animation entirely.
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const ease = [0.22, 1, 0.36, 1] as const; // smooth "easeOutExpo"-style curve

  if (isHero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Positive bottom margin pre-triggers the reveal ~220px before the block
      // scrolls into view, so content is already visible (no perceived blank gap).
      viewport={{ once: true, margin: "0px 0px 220px 0px" }}
      transition={{ duration: 0.5, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
