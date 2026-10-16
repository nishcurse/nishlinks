"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { floatAnimations } from "../lib/motion";

type Shape = "circle" | "square" | "pill";
type AnimationKey = "floatY" | "floatX" | "drift" | "scale";

interface ConfettiShapeProps {
  shape: Shape;
  color: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  variant?: "fill" | "outline";
  borderWidth?: number;
  animation: AnimationKey;
  duration?: number;
  opacity?: number;
  hideBelow?: "md" | "lg";
  rotate?: number;
}

export default function ConfettiShape({
  shape,
  color,
  size,
  position,
  variant = "fill",
  borderWidth = 4,
  animation,
  duration,
  opacity = 0.2,
  hideBelow,
  rotate,
}: ConfettiShapeProps) {
  const shapeStyles: React.CSSProperties = {
    width: size,
    height: shape === "pill" ? size / 6 : size,
    ...(variant === "fill"
      ? { backgroundColor: color }
      : { border: `${borderWidth}px solid ${color}`, backgroundColor: "transparent" }),
    ...(rotate !== undefined && { transform: `rotate(${rotate}deg)` }),
    opacity,
    ...position,
  };

  const borderRadius =
    shape === "circle" || shape === "pill"
      ? "9999px"
      : "0.5rem";

  /* Override duration on the preset if provided */
  const preset = floatAnimations[animation] || {};
  const animateProps: TargetAndTransition = { ...preset };
  if (duration && typeof animateProps.transition === "object") {
    animateProps.transition = {
      ...animateProps.transition,
      duration,
    };
  }

  const responsiveClass = hideBelow
    ? hideBelow === "lg"
      ? "hidden lg:block"
      : "hidden md:block"
    : "";

  return (
    <motion.div
      className={`absolute z-0 pointer-events-none ${responsiveClass}`}
      style={{ ...shapeStyles, borderRadius }}
      animate={animateProps}
    />
  );
}
