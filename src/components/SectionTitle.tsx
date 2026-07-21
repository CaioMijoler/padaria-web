"use client";

import React from "react";
import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark" | "yellow";
  id?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  theme = "light",
  id,
}: SectionTitleProps) {
  const isCenter = align === "center";

  const titleColors = {
    light: "text-slate-900",
    dark: "text-white",
    yellow: "text-slate-900",
  };

  const subtitleColors = {
    light: "text-slate-500",
    dark: "text-slate-400",
    yellow: "text-slate-800",
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <h2
        className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${titleColors[theme]}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl font-sans text-base md:text-lg leading-relaxed ${subtitleColors[theme]}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
