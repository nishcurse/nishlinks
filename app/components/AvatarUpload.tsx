"use client";

import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import { PROFILE } from "../constants";

export default function AvatarUpload() {
  const isVideo = PROFILE.avatar.src.match(/\.(mp4|webm|mov)$/i);

  return (
    <div className="relative inline-block mb-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-[var(--border-color)] overflow-hidden hard-shadow relative flex items-center justify-center"
        style={{ backgroundColor: "var(--accent-peach)" }}
      >
        {isVideo ? (
          <video
            src={PROFILE.avatar.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
        ) : (
          <img
            id="avatar-img"
            src={PROFILE.avatar.src}
            alt={PROFILE.avatar.alt}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>

      {/* Check badge */}
      <div
        className="absolute bottom-0 right-0 md:bottom-1 md:right-1 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[var(--border-color)] flex items-center justify-center hard-shadow z-10"
        style={{ backgroundColor: "var(--accent-ice)" }}
      >
        <LuCheck className="text-[var(--text-color)] text-lg md:text-xl" />
      </div>
    </div>
  );
}