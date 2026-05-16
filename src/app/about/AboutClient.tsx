"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Heart,
  Globe,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { stats, trustBadges } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/config";

const teamValues = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description:
      "We don't just plan trips - we live them. Every itinerary comes from genuine love for the destinations we recommend.",
  },
  {
    icon: Globe,
    title: "Local Knowledge",
    description:
      "Born in Kashmir, we know India like no outsider can. From mountain shortcuts to hidden restaurants - we know it all.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Your satisfaction is our obsession. We've earned over 5000 five-star reviews by genuinely putting travelers first.",
  },
  {
    icon: Shield,
    title: "Integrity Always",
    description:
      "Transparent pricing, honest advice, no upselling. We build lifelong relationships, not one-time transactions.",
  },
];

export function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0D3B66] to-[#0a2240] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1920&q=80"
            alt="Kashmir"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
              <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                Our Story
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-5">
              Local expertise from Kashmir.{" "}
              <span className="text-[#38BDF8] italic">
                Nationwide travel planning.
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              What started as a small family travel desk in Srinagar has grown
              into one of India's most trusted boutique travel companies - built
              on local knowledge, genuine hospitality, and 12 years of
              unforgettable journeys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Image zoom-out reveal */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.4,
                    ease: [0.25, 0.46, 0.45, 0.94] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  }}>
                  <img
                    src="/sajad-ahmad.jpg"
                    alt="Sajad Ahmad"
                    className="w-full h-[500px] object-cover"
                  />
                </motion.div>
                {/* Clip-path reveal overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#0D3B66] origin-bottom pointer-events-none"
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                    delay: 0.1,
                  }}
                  style={{ transformOrigin: "top" }}
                />
                {/* Image placeholder height */}
                <div className="h-[500px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/40 to-transparent" />
              </div>
              {/* Quote bubble */}
              <motion.div
                className="absolute -bottom-5 -right-4 bg-white shadow-2xl rounded-2xl p-5 max-w-[240px]"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: "backOut" }}>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  "My mission is simple - show every traveler the Kashmir I grew
                  up loving."
                </p>
                <div className="mt-3 font-semibold text-[#0D3B66] text-sm">
                  - Sajad Ahmad, Founder
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <SectionHeading
                label="Our Story"
                title="A Journey That Started at Home"
                className="mb-6"
              />
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  It was 1994 when Sajad Ahmad, a young Kashmiri with a deep
                  love for his homeland, started helping friends and family from
                  across India plan their Kashmir trips. Word spread fast - his
                  insider knowledge, honest pricing, and warm hospitality were
                  unlike anything travelers had experienced with other agencies.
                </p>
                <p>
                  What began with a handful of Kashmir packages quickly grew. As
                  travelers who experienced Kashmir through Abyss Tours INC
                  asked for help planning their next adventure - Rajasthan, Goa,
                  Kerala, Northeast - the scope expanded naturally, always
                  maintaining the same commitment to quality that made Kashmir
                  trips special.
                </p>
                <p>
                  Today, Abyss Tours INC serves thousands of travelers every
                  year across 50+ destinations in India. But the soul remains
                  the same: a Kashmir family that genuinely loves travel and
                  genuinely cares about every guest.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <Counter value={s.number} label={s.label} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            subtitle="Every decision we make comes back to these core beliefs."
            centered
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-[#0D3B66]/8 flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-[#0D3B66]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 bg-[#0D3B66]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <CheckCircle2 size={22} className="text-[#38BDF8]" />
                <span className="text-white/80 text-xs font-medium leading-tight">
                  {b.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading
            label="Get In Touch"
            title="Let's plan your next adventure"
            subtitle="Whether you have a clear plan or just a destination in mind - we'd love to help."
            centered
            className="mb-8"
          />
          <a
            href={buildWhatsAppLink(
              "Hello Abyss Tours INC! I'd like to plan a trip.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-2xl text-lg hover:bg-[#1da851] transition-all hover:-translate-y-1 hover:shadow-2xl">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
