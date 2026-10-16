"use client";

import type { ReactNode } from "react";

interface ActionButtonProps {
  id?: string;
  href: string;
  icon: ReactNode;
  label: string;
  color: string;
}

export default function ActionButton({
  id,
  href,
  icon,
  label,
  color,
}: ActionButtonProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      id={id}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-full border-2 border-[var(--border-color)] hard-shadow bouncy-transition hard-shadow-hover hard-shadow-active cursor-pointer select-none"
      style={{ backgroundColor: color }}
    >
      <span className="shrink-0 flex items-center justify-center text-base">
        {icon}
      </span>
      <span className="font-bold tracking-wide whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}
