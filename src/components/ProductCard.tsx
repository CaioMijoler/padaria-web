"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  badge: string;
  image: string;
  index: number;
  onSelect: () => void;
  key?: React.Key;
}

export default function ProductCard({
  name,
  description,
  badge,
  image,
  index,
  onSelect,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] transition-all duration-300 flex flex-col h-full"
    >
      {/* Product Image Container */}
      <div className="relative bg-white flex items-center justify-center overflow-hidden aspect-[4/3]">
        {/* Dynamic Badge */}
        <div className="absolute top-4 left-4 z-10 bg-secondary-container text-on-secondary-container font-display font-bold text-[11px] tracking-wider uppercase px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
          <Sparkles size={11} className="animate-pulse" />
          {badge}
        </div>

        {/* Product Package Photo */}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Product Name */}
          <h3 className="font-display font-extrabold text-[18px] text-gray-900 group-hover:text-primary transition-colors duration-200 leading-snug mb-2">
            {name}
          </h3>
          {/* Product Description */}
          <p className="font-sans text-gray-500 text-[14px] leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="pt-2">
          <button
            onClick={onSelect}
            className="w-full bg-white hover:bg-primary hover:text-white border border-slate-200 hover:border-primary text-slate-800 font-display font-semibold text-[13px] py-2.5 rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer"
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </motion.div>
  );
}
