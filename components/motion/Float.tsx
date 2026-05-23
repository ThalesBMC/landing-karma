"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

export function Float({
  children,
  amplitude = 8,
  duration = 5,
  delay = 0,
  className,
}: FloatProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
