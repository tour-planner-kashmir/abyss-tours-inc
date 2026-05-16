"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, CheckCircle2, Star } from "lucide-react";
import { kashmirPackages } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";

const kashmirHighlights = [
  {
    name: "Dal Lake",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    desc: "Iconic shimmering lake with floating gardens and houseboats",
  },
  {
    name: "Gulmarg",
    image:
      "https://images.unsplash.com/photo-1609952048180-7b35ea6b083b?w=600&q=80",
    desc: "Asia's highest gondola - paradise for skiing & snow activities",
  },
  {
    name: "Pahalgam",
    image:
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&q=80",
    desc: "Valley of shepherds - rivers, meadows and the Himalayan charm",
  },
  {
    name: "Sonmarg",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80",
    desc: "Meadow of gold - pristine glaciers and breathtaking alpine terrain",
  },
];

export function KashmirSpecialClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=90"
            alt="Kashmir"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0D3B66]/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5 backdrop-blur">
              <Star size={14} className="text-[#FBBF24] fill-[#FBBF24]" />
              <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                Kashmir Special
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-5">
              Paradise on Earth.{" "}
              <span className="text-[#38BDF8] italic">Experienced right.</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-xl">
              Our local roots in Kashmir give us access to the hidden, the
              authentic, and the extraordinary. Every experience handpicked for
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="py-16 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kashmirHighlights.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-base font-display">
                    {h.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-0.5 line-clamp-2">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Packages"
            title="Crafted Kashmir Experiences"
            subtitle="Whether it's a romantic honeymoon, family adventure, or solo exploration - we have the perfect Kashmir package for you."
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {kashmirPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#38BDF8] text-white text-xs font-bold rounded-full shadow">
                    {pkg.badge}
                  </div>
                  <div className="absolute bottom-0 p-4">
                    <h3 className="font-display font-bold text-white text-xl">
                      {pkg.name}
                    </h3>
                    <p className="text-white/75 text-sm">{pkg.subtitle}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta */}
                  <div className="flex gap-4 text-xs text-gray-400 mb-5">
                    <span className="flex items-center gap-1.5 font-medium text-gray-600">
                      <Clock size={13} className="text-[#38BDF8]" />{" "}
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-gray-600">
                      <MapPin size={13} className="text-[#38BDF8]" />{" "}
                      {pkg.places.length} places
                    </span>
                  </div>

                  {/* Places */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pkg.places.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-2.5 py-1 bg-[#0D3B66]/8 text-[#0D3B66] rounded-full font-medium">
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2
                          size={14}
                          className="text-[#2A9D8F] mt-0.5 shrink-0"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                          Starting from
                        </div>
                        <div className="text-xl font-bold text-[#0D3B66]">
                          {pkg.price}
                        </div>
                      </div>
                    </div>
                    <a
                      href={buildWhatsAppLink(
                        `Hello! I'm interested in the "${pkg.name}" package (${pkg.duration}). Please share the full itinerary and pricing.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-semibold rounded-2xl hover:bg-[#1da851] transition-colors">
                      <MessageCircle size={17} />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kashmir strip */}
      <section className="py-20 bg-gradient-to-br from-[#0D3B66] to-[#0a2240]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Why Kashmir"
            title="There's no place like Kashmir"
            subtitle="Dal Lake at dawn, Gulmarg under snow, saffron fields in bloom - Kashmir offers experiences that no other destination can replicate."
            centered
            light
            className="mb-10"
          />
          <a
            href={buildWhatsAppLink(
              "Hello Abyss Tours INC! I want to plan a Kashmir trip. Please help me.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#38BDF8] text-white font-semibold rounded-2xl text-lg hover:bg-[#0EA5E9] transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#38BDF8]/30">
            <MessageCircle size={20} />
            Plan My Kashmir Trip
          </a>
        </div>
      </section>
    </>
  );
}
