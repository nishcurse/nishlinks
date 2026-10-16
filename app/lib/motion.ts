import type { Variants, TargetAndTransition } from "framer-motion";

export const bouncyEasing = [0.34, 1.56, 0.64, 1] as const;

export const popIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.35,
      ease: bouncyEasing,
    },
  }),
};

export const cardHover: TargetAndTransition = {
  scale: 1.05,
  y: -2,
  x: -2,
  boxShadow: "6px 6px 0px 0px var(--shadow-color)",
  transition: { duration: 0.2, ease: bouncyEasing },
};

export const cardTap: TargetAndTransition = {
  scale: 0.98,
  y: 2,
  x: 2,
  boxShadow: "2px 2px 0px 0px var(--shadow-color)",
  transition: { duration: 0.1 },
};


export const floatAnimations: Record<string, TargetAndTransition> = {
  floatY: {
    y: [0, -30, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  floatX: {
    x: [0, 30, 0],
    rotate: [0, -10, 0],
    transition: {
      duration: 7.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  drift: {
    x: [0, -20, 0],
    y: [0, 20, 0],
    rotate: [45, 55, 45],
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  scale: {
    scale: [1, 1.1, 1],
    rotate: [12, 15, 12],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};


export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};