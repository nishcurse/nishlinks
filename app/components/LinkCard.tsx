"use client";

import { motion } from "framer-motion";
import { LuChevronRight } from "react-icons/lu";
import { popIn } from "../lib/motion";
import type { LinkItem } from "../constants";

interface LinkCardProps extends LinkItem {
  index: number;
}

export default function LinkCard({
  id,
  href,
  Icon,
  iconBg,
  darkIconBg,
  darkIconColor,
  title,
  description,
  index,
}: LinkCardProps) {
  const isInverted = Boolean(darkIconBg);

  return (
    <motion.a
      href={href}
      id={`link-${id}`}
      variants={popIn}
      custom={index}
      className="block"
    >
      <div className="bg-[var(--card-bg)] border-[2px] border-[var(--border-color)] rounded-[20px] p-4 flex items-center hard-shadow bouncy-transition hard-shadow-hover hard-shadow-active">
        {/* Icon circle */}
        <div
          className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center border-2 border-[var(--border-color)] ${
            isInverted ? "link-icon-invert" : ""
          }`}
          style={
            !isInverted
              ? {
                  backgroundColor: iconBg,
                  color: darkIconColor || "#FFFFFF",
                }
              : undefined
          }
        >
          <Icon className="text-2xl" />
        </div>

        {/* Text */}
        <div className="ml-4">
          <h3
            className="text-lg font-bold text-[var(--text-color)]"
            style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-sm text-[var(--text-muted)]">{description}</p>
        </div>

        {/* Chevron */}
        <LuChevronRight className="ml-auto text-[var(--text-muted)] text-xl shrink-0" />
      </div>
    </motion.a>
  );
}
