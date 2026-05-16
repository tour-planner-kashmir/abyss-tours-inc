"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0D3B66] to-[#0a2240] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          label="Testimonials"
          title="What Our Travelers Say"
          subtitle="Real stories from real travelers who trusted us with their most cherished journeys."
          centered
          light
          className="mb-14"
        />

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar */}
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-2xl object-cover ring-4 ring-[#38BDF8]/30"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#38BDF8] rounded-lg flex items-center justify-center">
                      <Quote size={14} className="text-white fill-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-white/50 text-xs">{t.location}</div>
                    <div className="mt-1 px-2 py-0.5 bg-[#38BDF8]/20 rounded-full text-[#38BDF8] text-xs">
                      {t.trip}
                    </div>
                  </div>
                </div>

                {/* Review */}
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                  <p className="text-white/85 text-base md:text-lg leading-relaxed italic">
                    "{t.review}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all rounded-full ${
                    i === current
                      ? "w-6 h-2 bg-[#38BDF8]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed line-clamp-4 italic">
                "{item.review}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="text-white text-xs font-semibold">{item.name}</div>
                  <div className="text-white/40 text-xs">{item.location} · {item.trip}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
