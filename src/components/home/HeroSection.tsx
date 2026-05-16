"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[620px] flex items-center overflow-hidden">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=90"
          alt="Kashmir Dal Lake"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D3B66]/40 via-[#0D3B66]/55 to-[#0a1628]/80" />
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-28 right-6 md:right-12 glass rounded-2xl px-4 py-3 hidden sm:flex items-center gap-3">
        <div className="flex -space-x-2">
          {[
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=40&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Traveler"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <div>
          <div className="text-white text-xs font-semibold">
            5000+ travelers
          </div>
          <div className="flex gap-0.5 mt-0.5">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className="fill-[#FBBF24] text-[#FBBF24]"
                />
              ))}
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-[#38BDF8]" />
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
              Premium Travel Experience
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
            Crafting{" "}
            <span className="italic text-[#38BDF8]">unforgettable</span>
            <br />
            journeys across
            <br />
            <span className="relative">
              India.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 300 6"
                fill="none">
                <path
                  d="M0 4 Q75 0 150 3 Q225 6 300 2"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            From Kashmir's serene valleys to India's vibrant coasts - expert
            local guides, bespoke itineraries, memories that last a lifetime.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#38BDF8] text-white font-semibold rounded-xl text-base hover:bg-[#0EA5E9] transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#38BDF8]/30">
              Plan My Trip
            </Link>
            <a
              href={buildWhatsAppLink(
                "Hello Abyss Tours INC! I'd like to plan a trip.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] text-white font-semibold rounded-xl text-base hover:bg-[#1da851] transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30">
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
