"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(centered && "text-center", className)}>
      {label && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3",
            light ? "text-[#38BDF8]" : "text-[#38BDF8]",
            centered && "justify-center w-full",
          )}>
          <span className="w-6 h-px bg-current" />
          {label}
          <span className="w-6 h-px bg-current" />
        </div>
      )}
      <h2
        className={cn(
          "font-display font-bold leading-tight",
          "text-3xl sm:text-4xl md:text-5xl",
          light ? "text-white" : "text-[#0D3B66]",
        )}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            light ? "text-white/70" : "text-gray-500",
            centered && "mx-auto",
          )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
