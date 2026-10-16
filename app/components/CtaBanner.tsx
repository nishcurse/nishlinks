"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { popIn } from "../lib/motion";
import { PROFILE } from "../constants";

export default function CtaBanner() {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      animate="visible"
      custom={10}
      className="pt-8 md:pt-12"
    >
      <a
        id="cta-email"
        href={PROFILE.cta.href}
        className="w-full flex items-center justify-center gap-3 text-lg md:text-xl font-extrabold py-5 rounded-full border-[3px] border-[var(--border-color)] hard-shadow bouncy-transition hard-shadow-hover hard-shadow-active"
        style={{
          fontFamily: "var(--font-outfit), Outfit, sans-serif",
          background: "linear-gradient(135deg, var(--cta-from) 0%, var(--cta-to) 100%)",
          color: "var(--cta-text)",
        }}
      >
        <span>{PROFILE.cta.label}</span>
        <LuArrowRight className="text-2xl" />
      </a>
    </motion.div>
  );
}
