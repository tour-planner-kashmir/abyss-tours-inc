"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/config";
import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";

export function StatsSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100">
              <Counter value={s.number} label={s.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsAppCTASection() {
  return (
    <section className="py-24 bg-[#f8f9fc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0D3B66] to-[#1a5a9e] rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#38BDF8]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/30 rounded-full px-4 py-2 mb-6">
              <MessageCircle size={16} className="text-[#25D366]" />
              <span className="text-[#25D366] text-sm font-semibold">
                Available 24/7 on WhatsApp
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
              Ready to start your
              <br />
              <span className="text-[#38BDF8] italic">dream journey?</span>
            </h2>

            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Share your travel wishlist and we'll craft the perfect itinerary.
              No booking fees. No commitment until you're happy with the plan.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={buildWhatsAppLink(
                  "Hello Abyss Tours INC! I'd like to plan my dream trip. Can you help?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-2xl text-lg hover:bg-[#1da851] transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30">
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl text-lg hover:bg-white/20 transition-all hover:-translate-y-1 group">
                Send Enquiry
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
