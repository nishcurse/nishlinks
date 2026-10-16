"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme =
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") ||
      (localStorage.getItem("theme") as "light" | "dark") ||
      "light";
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleTheme = (nextTheme?: "light" | "dark") => {
    document.documentElement.classList.add("theme-transition");
    const next = nextTheme || (theme === "light" ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 400);
  };

  const isDark = mounted && theme === "dark";

  return (
    <div className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50">
      <div
        id="theme-toggle-btn"
        role="button"
        tabIndex={0}
        onClick={() => toggleTheme()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTheme();
          }
        }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="relative flex items-center gap-1 p-1 rounded-full border-2 border-[var(--border-color)] bg-[var(--card-bg)] hard-shadow bouncy-transition hard-shadow-hover hard-shadow-active cursor-pointer select-none"
      >
        {/* Sliding active pill indicator */}
        <motion.div
          className="absolute top-1 bottom-1 left-1 rounded-full border border-[var(--border-color)]"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "var(--toggle-pill)",
          }}
          animate={{
            x: isDark ? 36 : 0,
          }}
          transition={{ type: "spring", stiffness: 450, damping: 28 }}
        />

        {/* Sun Icon */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleTheme("light");
          }}
          className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
            !isDark ? "text-[var(--text-color)]" : "text-[var(--text-muted)] hover:text-[var(--text-color)]"
          }`}
          title="Light mode"
        >
          <LuSun className="text-lg" />
        </div>

        {/* Moon Icon */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleTheme("dark");
          }}
          className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
            isDark ? "text-[var(--text-color)]" : "text-[var(--text-muted)] hover:text-[var(--text-color)]"
          }`}
          title="Dark mode"
        >
          <LuMoon className="text-lg" />
        </div>
      </div>
    </div>
  );
}
