"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../lib/motion";
import { links, fullWidthLink } from "../constants";
import LinkCard from "./LinkCard";

export default function LinkGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* 2-column grid for standard links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <LinkCard key={link.id} {...link} index={i + 2} />
        ))}
      </div>

      {/* Full-width card for AtCoder */}
      <LinkCard {...fullWidthLink} index={links.length + 2} />
    </motion.div>
  );
}
