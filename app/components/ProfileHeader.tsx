"use client";

import { motion } from "framer-motion";
import { popIn, staggerContainer } from "../lib/motion";
import AvatarUpload from "./AvatarUpload";
import ActionButton from "./ActionButton";
import { LuDownload, LuEye, LuMail } from "react-icons/lu";
import { PROFILE } from "../constants/profile";

export default function ProfileHeader() {
  const getActionIcon = (id: string, label: string) => {
    const l = (label || "").toLowerCase();
    if (id.includes("download") || l.includes("download")) {
      return <LuDownload className="text-base" />;
    }
    if (id.includes("mail") || l.includes("mail")) {
      return <LuMail className="text-base" />;
    }
    return <LuEye className="text-base" />;
  };

  return (
    <motion.header
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="shrink-0 pt-10 md:pt-16 px-6 z-10 flex flex-col items-center text-center"
    >
      <motion.div variants={popIn} custom={0}>
        <AvatarUpload />
      </motion.div>

      <motion.h1
        variants={popIn}
        custom={1}
        className="text-3xl md:text-5xl font-extrabold text-[var(--text-color)] mb-1"
        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p
        variants={popIn}
        custom={2}
        className="text-[var(--text-muted)] text-base md:text-lg font-medium max-w-sm"
      >
        {PROFILE.role}
      </motion.p>

      <motion.div
        variants={popIn}
        custom={3}
        className="flex flex-col sm:flex-row gap-3 mt-6 items-center justify-center flex-wrap"
      >
        {PROFILE.actions.map((action) => (
          <ActionButton
            key={action.id}
            id={action.id}
            href={action.href}
            icon={getActionIcon(action.id, action.label)}
            label={action.label || (action.id.includes("mail") ? "Mail Me" : action.id.includes("download") ? "Download Resume" : "View Resume")}
            color={action.color}
          />
        ))}
      </motion.div>
    </motion.header>
  );
}
