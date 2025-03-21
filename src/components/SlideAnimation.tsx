"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView, type Variant } from "framer-motion";
import React from "react";

type AnimationVariants = {
  hidden: Variant;
  visible: Variant;
};

type ScrollAnimationProps = {
  children: ReactNode;
  className?: string;
  variants?: AnimationVariants;
  threshold?: number;
  once?: boolean;
  delay?: number;
  duration?: number;
  from?:number;
  to?:number;
  yfrom?:number,
  yto?:number
};

export function ScrollAnimation({
  children,
  className = "",
  variants,
  threshold = 0.1,
  once = false,
  delay = 0,
  duration = 0.6,
  from = 0,
  to = 0,
  yfrom = 0,
  yto = 0,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const defaultVariants: AnimationVariants = {
    hidden: { opacity: 0, x: from, y:yfrom },
    visible: {
      opacity: 1,
      x: to,
      y:yto,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  const animationVariants = variants || defaultVariants;

  return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        className={className}
      >
        {children}
      </motion.div>
  );
}
