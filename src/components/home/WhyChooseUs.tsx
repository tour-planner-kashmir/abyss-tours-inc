"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Award,
  Users,
  MapPin,
  Star,
  Headphones,
  CreditCard,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: MapPin,
    title: "Local Kashmir Expertise",
    description:
      "Born and raised in Kashmir, our team knows every hidden gem, shortcut, and seasonal secret in the valley.",
    color: "bg-blue-50 text-[#0D3B66]",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description:
      "Recognized as one of India's top boutique travel agencies with consistently 5-star reviews from thousands of travelers.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Itineraries",
    description:
      "No cookie-cutter tours. Every trip is crafted specifically for you - your pace, your interests, your budget.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    description:
      "Verified accommodations, experienced drivers, 24/7 emergency support. Travel with complete peace of mind.",
    color: "bg-green-50 text-[#2A9D8F]",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description:
      "What you see is what you pay. No hidden charges, no surprises. Full transparency from quote to journey.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our team is available round-the-clock via WhatsApp, call, or email - before, during, and after your trip.",
    color: "bg-teal-50 text-teal-600",
  },
];

export function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80"
                alt="Kashmir houseboat"
                className="w-full h-[520px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/40 to-transparent rounded-3xl" />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-4 lg:right-auto lg:-left-6 bg-white rounded-2xl shadow-2xl p-5 min-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 flex items-center justify-center">
                  <Users size={18} className="text-[#38BDF8]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0D3B66]">5000+</div>
                  <div className="text-xs text-gray-500">Happy Travelers</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#FBBF24] text-[#FBBF24]"
                  />
                ))}
                <span className="ml-2 text-xs text-gray-500 font-medium">
                  4.9/5 on Google
                </span>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-5 -right-4 bg-[#0D3B66] text-white rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-bold">30+</div>
              <div className="text-xs text-white/70 mt-0.5">
                Years of
                <br />
                Excellence
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              label="Why Choose Us"
              title="Travel Better with Local Experts"
              subtitle="Over 30 years of crafting perfect Kashmir journeys - our guests keep coming back, and their friends book next."
            />

            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-4 rounded-2xl border border-gray-100 hover:border-[#0D3B66]/20 hover:shadow-md transition-all group">
                  <div
                    className={`w-10 h-10 rounded-xl ${r.color} flex items-center justify-center mb-3`}>
                    <r.icon size={18} />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {r.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {r.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
