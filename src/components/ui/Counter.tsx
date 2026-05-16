"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CounterProps {
  value: string;
  label: string;
  light?: boolean;
}

export function Counter({ value, label, light = false }: CounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    // Extract the numeric part and suffix
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1]);
    const suffix = match[2];
    const duration = 1800;
    const step = 30;
    const steps = duration / step;
    let current = 0;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        setDisplay(`${target}${suffix}`);
      } else {
        setDisplay(`${Math.floor(current)}${suffix}`);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center">
      <div
        className={`font-display font-bold text-4xl md:text-5xl ${
          light ? "text-white" : "text-[#0D3B66]"
        }`}>
        {display}
      </div>
      <div
        className={`text-sm font-medium mt-1 ${
          light ? "text-white/70" : "text-gray-500"
        }`}>
        {label}
      </div>
    </motion.div>
  );
}
