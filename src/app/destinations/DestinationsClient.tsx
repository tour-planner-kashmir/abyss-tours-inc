"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight, MessageCircle, Search } from "lucide-react";
import Link from "next/link";
import { destinations } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";

const regions = [
  { id: "all", label: "All India" },
  { id: "north", label: "North India" },
  { id: "south", label: "South India" },
  { id: "west", label: "West India" },
  { id: "east", label: "Northeast" },
];

export function DestinationsClient() {
  const [activeRegion, setActiveRegion] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = destinations.filter((d) => {
    const matchRegion = activeRegion === "all" || d.region === activeRegion;
    const matchSearch =
      !search ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.tagline.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5a9e] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
            alt="India destinations"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
            <MapPin size={14} className="text-[#38BDF8]" />
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
              Explore India
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-5">
            Every corner of India,
            <br />
            <span className="text-[#38BDF8] italic">expertly explored.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            From the Himalayas to the backwaters, discover India's most
            breathtaking destinations with expert local guidance.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {regions.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRegion(r.id)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeRegion === r.id
                    ? "bg-[#0D3B66] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <MapPin size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">
                No destinations found. Try a different search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((dest, i) => (
                <motion.div
                  key={dest.id}
                  id={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {dest.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-[#38BDF8] text-white text-xs font-bold rounded-full">
                        {dest.badge}
                      </span>
                    )}
                    <div className="absolute top-3 right-3 bg-black/30 backdrop-blur text-white text-xs font-semibold rounded-lg px-2.5 py-1">
                      From {dest.startingFrom}
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <h3 className="font-display font-bold text-white text-2xl leading-tight">
                        {dest.name}
                      </h3>
                      <p className="text-white/70 text-sm">{dest.tagline}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {dest.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {dest.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 bg-[#0D3B66]/6 text-[#0D3B66] text-xs rounded-full font-medium">
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={12}
                            className="fill-[#FBBF24] text-[#FBBF24]"
                          />
                        ))}
                      </div>
                      <a
                        href={buildWhatsAppLink(
                          `Hello! I'm interested in a trip to ${dest.name}. Please share package details.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#1da851] transition-colors">
                        <MessageCircle size={14} />
                        Enquire
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
