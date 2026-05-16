"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { destinations } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedDestinations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const featured = destinations.slice(0, 6);

  return (
    <section className="py-24 bg-white" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            label="Explore India"
            title="Discover Breathtaking Destinations"
            subtitle="From Himalayan peaks to tropical coasts - every journey crafted with local expertise."
          />
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-[#0D3B66] font-semibold text-sm hover:text-[#38BDF8] transition-colors whitespace-nowrap group">
            View all destinations
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href={`/destinations#${dest.id}`}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-md"
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
                  <div className="relative h-64 overflow-hidden">
                    {/* Zoom-out reveal on enter + scale on hover */}
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
                        src={dest.image}
                        alt={dest.name}
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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Badge */}
                    {dest.badge && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-[#38BDF8] text-white text-xs font-bold rounded-full">
                        {dest.badge}
                      </div>
                    )}

                    {/* Price */}
                    <div className="absolute top-3 right-3 glass rounded-lg px-3 py-1">
                      <span className="text-white text-xs font-semibold">
                        From {dest.startingFrom}
                      </span>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-1 text-white/70 text-xs mb-1">
                        <MapPin size={11} />
                        {dest.highlights.slice(0, 2).join(" · ")}
                      </div>
                      <h3 className="font-display font-bold text-white text-xl leading-tight">
                        {dest.name}
                      </h3>
                      <p className="text-white/70 text-sm">{dest.tagline}</p>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="p-4 bg-white">
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={12}
                            className="fill-[#FBBF24] text-[#FBBF24]"
                          />
                        ))}
                      </div>
                      <span className="text-[#0D3B66] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
