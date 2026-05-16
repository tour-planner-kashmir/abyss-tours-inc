"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { kashmirPackages } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function KashmirPackagesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const featured = kashmirPackages.slice(0, 3);

  return (
    <section className="py-24 bg-[#f8f9fc]" id="kashmir-packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            label="Kashmir Special"
            title="Handcrafted Kashmir Experiences"
            subtitle="Every package is curated by locals who call this paradise home."
          />
          <Link
            href="/kashmir-special"
            className="flex items-center gap-2 text-[#0D3B66] font-semibold text-sm hover:text-[#38BDF8] transition-colors whitespace-nowrap group">
            See all Kashmir packages
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {featured.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md flex flex-col cursor-pointer"
              whileHover="hover"
              variants={{
                hover: {
                  y: -10,
                  boxShadow: "0 30px 60px -15px rgba(13,59,102,0.22)",
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  },
                },
              }}>
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {/* Zoom-out reveal + hover scale */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  variants={{
                    hover: {
                      scale: 1.07,
                      transition: {
                        duration: 0.55,
                        ease: [0.25, 0.46, 0.45, 0.94] as [
                          number,
                          number,
                          number,
                          number,
                        ],
                      },
                    },
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  }}>
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Shimmer sweep on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-10"
                  initial={{ x: "-110%" }}
                  variants={{
                    hover: {
                      x: "160%",
                      transition: { duration: 0.65, ease: "easeInOut" },
                    },
                  }}
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%)",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {pkg.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#38BDF8] text-white text-xs font-bold rounded-full shadow">
                    {pkg.badge}
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <h3 className="font-display font-bold text-white text-xl leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-white/80 text-sm">{pkg.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Meta */}
                <div className="flex gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {pkg.places.join(", ")}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {pkg.highlights.slice(0, 4).map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      Starting from
                    </div>
                    <div className="text-lg font-bold text-[#0D3B66]">
                      {pkg.price}
                    </div>
                  </div>
                  <a
                    href={buildWhatsAppLink(
                      `Hello! I'm interested in the ${pkg.name} package. Please share details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#1da851] transition-colors">
                    <MessageCircle size={15} />
                    Enquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
