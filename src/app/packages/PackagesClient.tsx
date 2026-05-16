"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, MessageCircle, Sparkles, MapPin, ChevronDown } from "lucide-react";
import { packages, stats } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";

export function PackagesClient() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0D3B66] to-[#0a2240] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
              <Sparkles size={14} className="text-[#38BDF8]" />
              <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                Our Packages
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-5">
              Every budget.{" "}
              <span className="text-[#38BDF8] italic">Every dream.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
              From wallet-friendly explorations to ultra-luxury experiences -
              choose the package that fits your travel style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center">
                <Counter value={s.number} label={s.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Choose Your Package"
            title="Find the Perfect Plan"
            subtitle="All packages include our signature local expertise, 24/7 support, and zero hidden charges."
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-[#38BDF8] shadow-xl shadow-[#38BDF8]/15 bg-[#0D3B66]"
                    : "border-gray-200 bg-white shadow-md"
                }`}>
                {/* Popular banner */}
                {pkg.popular && (
                  <div className="bg-[#38BDF8] text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="p-7 flex-1 flex flex-col">
                  {/* Badge */}
                  <span
                    className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold mb-4 ${pkg.badgeColor} text-white`}>
                    {pkg.badge}
                  </span>

                  <h3
                    className={`font-display font-bold text-2xl mb-1 ${
                      pkg.popular ? "text-white" : "text-[#0D3B66]"
                    }`}>
                    {pkg.name}
                  </h3>

                  {/* Places */}
                  {"places" in pkg && Array.isArray(pkg.places) && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {(pkg.places as string[]).map((place) => (
                        <span
                          key={place}
                          className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                            pkg.popular
                              ? "bg-white/15 text-white/80"
                              : "bg-blue-50 text-[#0D3B66]/80"
                          }`}>
                          <MapPin size={9} />
                          {place}
                        </span>
                      ))}
                    </div>
                  )}

                  <p
                    className={`text-sm mb-5 ${
                      pkg.popular ? "text-white/60" : "text-gray-400"
                    }`}>
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div
                      className={`text-xl font-bold ${
                        pkg.popular ? "text-[#38BDF8]" : "text-[#0D3B66]"
                      }`}>
                      {pkg.priceRange}
                    </div>
                    <div
                      className={`text-xs mt-0.5 ${
                        pkg.popular ? "text-white/50" : "text-gray-400"
                      }`}>
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 flex-1 mb-5">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          className={`mt-0.5 shrink-0 ${
                            pkg.popular ? "text-[#38BDF8]" : "text-[#2A9D8F]"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            pkg.popular ? "text-white/80" : "text-gray-600"
                          }`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Itinerary toggle */}
                  {"itinerary" in pkg && Array.isArray(pkg.itinerary) && (
                    <>
                      <button
                        onClick={() =>
                          setExpandedId(expandedId === pkg.id ? null : pkg.id)
                        }
                        className={`flex items-center gap-1.5 text-xs font-semibold mb-3 transition-colors ${
                          pkg.popular
                            ? "text-white/60 hover:text-white"
                            : "text-[#0D3B66]/60 hover:text-[#0D3B66]"
                        }`}>
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            expandedId === pkg.id ? "rotate-180" : ""
                          }`}
                        />
                        {expandedId === pkg.id ? "Hide" : "View"} Day-wise
                        Itinerary
                      </button>

                      {expandedId === pkg.id && (
                        <div
                          className={`mb-5 rounded-2xl p-3.5 space-y-2.5 text-xs ${
                            pkg.popular ? "bg-white/10" : "bg-gray-50"
                          }`}>
                          {(
                            pkg.itinerary as {
                              day: number;
                              title: string;
                              summary: string;
                            }[]
                          ).map((d) => (
                            <div key={d.day} className="flex gap-2.5">
                              <span
                                className={`font-bold shrink-0 w-5 ${
                                  pkg.popular
                                    ? "text-[#38BDF8]"
                                    : "text-[#0D3B66]"
                                }`}>
                                D{d.day}
                              </span>
                              <div>
                                <span
                                  className={`font-semibold ${
                                    pkg.popular
                                      ? "text-white"
                                      : "text-gray-800"
                                  }`}>
                                  {d.title}:{" "}
                                </span>
                                <span
                                  className={
                                    pkg.popular
                                      ? "text-white/65"
                                      : "text-gray-500"
                                  }>
                                  {d.summary}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {/* CTA */}
                  <a
                    href={buildWhatsAppLink(
                      `Hello! I'm interested in the ${pkg.name} package (${pkg.duration}). Please share more details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                      pkg.popular
                        ? "bg-[#38BDF8] text-white hover:bg-[#0EA5E9] hover:shadow-lg hover:shadow-[#38BDF8]/30"
                        : "bg-[#0D3B66] text-white hover:bg-[#092d52] hover:shadow-lg"
                    }`}>
                    <MessageCircle size={16} />
                    Book This Package
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#0D3B66] to-[#1a5a9e] rounded-3xl p-8 md:p-10 text-center">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
              Not sure which package? Let us design one for you.
            </h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Tell us your budget, dates, and wishlist - we'll craft the perfect
              personalized itinerary.
            </p>
            <a
              href={buildWhatsAppLink(
                "Hello! I need help choosing a tour package. Can you help me plan a custom trip?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-2xl hover:bg-[#1da851] transition-colors">
              <MessageCircle size={18} />
              Chat & Get a Custom Quote
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
