"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  Shield,
  Award,
  Headphones,
  HeartHandshake,
  MapPin,
  Users,
  ChevronDown,
  ArrowRight,
  Clock,
  Sparkles,
  BadgeCheck,
  CalendarDays,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config";
import { testimonials, destinations, packages } from "@/lib/data";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildQuickWhatsApp(
  name: string,
  phone: string,
  destination: string,
  dates: string,
) {
  const msg = `Hello Abyss Tours INC! 🙏

My name is ${name} (${phone}).

I'm interested in: *${destination || "India Tour"}*
Preferred Dates: ${dates || "Flexible"}

I found you via your ad. Please send me a customised quote. Thank you!`;
  return buildWhatsAppLink(msg);
}

// ─── Static data ─────────────────────────────────────────────────────────────

const trustStats = [
  { icon: Users, value: "5,000+", label: "Happy Travelers" },
  { icon: Award, value: "30+ Yrs", label: "of Excellence" },
  { icon: Star, value: "4.9 / 5", label: "Google Rating" },
  { icon: MapPin, value: "50+", label: "Destinations" },
];

const whyUs = [
  {
    icon: MapPin,
    title: "Local Expertise",
    desc: "Deep roots in Kashmir and across India — we know every hidden gem, best season, and insider route.",
  },
  {
    icon: Shield,
    title: "Safe & Verified",
    desc: "Verified hotels, experienced drivers, 24/7 emergency support. Travel with complete peace of mind.",
  },
  {
    icon: HeartHandshake,
    title: "Tailor-Made Trips",
    desc: "No cookie-cutter packages. Every itinerary is crafted around your pace, interests, and budget.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Reach us any time via WhatsApp, call, or email — before, during, and after your trip.",
  },
];

// Show 6 featured destinations
const featuredDestinations = destinations.slice(0, 6);

// Show top 4 packages across the catalogue
const featuredPackages = packages.slice(0, 4);

const destinationOptions = destinations.map((d) => d.name);

// ─── Top Bar ─────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0D3B66] flex items-center justify-center font-bold text-white text-sm font-display">
            A
          </div>
          <div>
            <div className="font-display font-bold text-[#0D3B66] text-base leading-tight">
              Abyss Tours
            </div>
            <div className="text-[10px] font-semibold tracking-widest uppercase text-[#38BDF8]">
              INC
            </div>
          </div>
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-2 bg-[#0D3B66] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#1a5a9e] transition-colors">
          <Phone size={14} />
          <span className="hidden sm:inline">{siteConfig.phone}</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=90"
          alt="India travel — Kashmir to Kerala"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D3B66]/50 via-[#0D3B66]/55 to-[#0a1628]/88" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-5 py-2 mb-7">
          <Sparkles size={13} className="text-[#38BDF8]" />
          <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
            Expert India Travel · Est. 1994
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-5">
          Unforgettable Journeys
          <br className="hidden sm:block" />
          <span className="text-[#38BDF8] italic"> Across India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From Kashmir's snow-capped peaks to Kerala's backwaters and
          Rajasthan's royal forts — we design journeys you'll remember forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCtaClick}
            className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center">
            <MessageCircle size={22} />
            Get Free Quote on WhatsApp
          </button>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-3 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all w-full sm:w-auto justify-center">
            <Phone size={20} />
            Call Us Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=40&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80",
              "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=40&q=80",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className="fill-[#FBBF24] text-[#FBBF24]"
                />
              ))}
            </div>
            <p className="text-white/80 text-xs font-medium">
              Trusted by 5,000+ travelers
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}>
        <ChevronDown size={28} className="text-white/50" />
      </motion.div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <section className="bg-[#0D3B66] py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <stat.icon size={18} className="text-[#38BDF8]" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Destinations Grid ────────────────────────────────────────────────────────

function DestinationsSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-full px-4 py-1.5 mb-4">
            <MapPin size={12} className="text-[#38BDF8]" />
            <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase">
              Where Do You Want to Go?
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0D3B66] mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From Himalayan snow to tropical coasts — we've curated the best of
            India for every kind of traveler.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {featuredDestinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={onCtaClick}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  style={{
                    transform: "scale(1)",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {dest.badge && (
                <div className="absolute top-3 left-3">
                  <span className="bg-[#38BDF8] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {dest.badge}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-display font-bold text-lg leading-tight">
                  {dest.name}
                </div>
                <div className="text-white/70 text-xs mb-2">{dest.tagline}</div>
                <div className="text-[#38BDF8] text-xs font-semibold">
                  From {dest.startingFrom}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 text-[#0D3B66] font-semibold hover:text-[#38BDF8] transition-colors">
            Don't see your destination? Chat with us <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Packages Section ─────────────────────────────────────────────────────────

function PackagesSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0D3B66]/8 border border-[#0D3B66]/15 rounded-full px-4 py-1.5 mb-4">
            <Sparkles size={12} className="text-[#0D3B66]" />
            <span className="text-[#0D3B66] text-xs font-bold tracking-widest uppercase">
              Top Packages 2026
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0D3B66] mb-4">
            Bestselling Tour Packages
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            All-inclusive, transparently priced — with no hidden fees. Loved by
            thousands every year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className={`inline-block text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-2 ${pkg.badgeColor}`}>
                      {pkg.badge}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#0D3B66] leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 text-xs">{pkg.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                  <Clock size={12} />
                  <span>{pkg.duration}</span>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {pkg.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                      <CheckCircle2
                        size={12}
                        className="text-[#2A9D8F] shrink-0 mt-0.5"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="text-[#38BDF8] text-xs font-semibold mb-0.5">
                    Starting from
                  </div>
                  <div className="text-[#0D3B66] font-bold text-base mb-3">
                    {pkg.priceRange}
                  </div>
                  <button
                    onClick={onCtaClick}
                    className="w-full flex items-center justify-center gap-2 bg-[#0D3B66] hover:bg-[#1a5a9e] text-white py-2.5 rounded-xl font-semibold text-sm transition-colors">
                    <MessageCircle size={14} />
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Us ───────────────────────────────────────────────────────────────────

function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1473442240418-452f03b7ae40?w=800&q=80"
                alt="Kashmir Dal Lake houseboat"
                className="w-full h-[460px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/40 to-transparent rounded-3xl" />
            </div>
            <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/15 flex items-center justify-center shrink-0">
                <BadgeCheck size={22} className="text-[#38BDF8]" />
              </div>
              <div>
                <div className="font-bold text-[#0D3B66] text-base">
                  4.9 / 5 Stars
                </div>
                <div className="text-gray-500 text-xs">800+ Google reviews</div>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="inline-flex items-center gap-2 bg-[#0D3B66]/8 border border-[#0D3B66]/15 rounded-full px-4 py-1.5 mb-5">
              <Shield size={12} className="text-[#0D3B66]" />
              <span className="text-[#0D3B66] text-xs font-bold tracking-widest uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0D3B66] mb-4 leading-snug">
              India's Most Trusted{" "}
              <span className="text-[#38BDF8] italic">Travel Partner</span>
            </h2>
            <p className="text-gray-500 mb-9 leading-relaxed">
              For over 30 years, we've been turning travel dreams into
              unforgettable memories across India. Here's why thousands choose
              us every year.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {whyUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0D3B66]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={18} className="text-[#0D3B66]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0D3B66] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);
  return (
    <section className="py-20 bg-gradient-to-br from-[#0D3B66] to-[#092d52]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <Star size={12} className="text-[#FBBF24] fill-[#FBBF24]" />
            <span className="text-white/80 text-xs font-bold tracking-widest uppercase">
              Traveler Reviews
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Loved by Thousands of Travelers
          </h2>
          <p className="text-white/60 max-w-md mx-auto">
            Real stories from real customers — across Kashmir, Rajasthan,
            Kerala, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-3xl p-7">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-[#FBBF24] text-[#FBBF24]"
                  />
                ))}
              </div>
              <p className="text-white/85 text-sm leading-relaxed mb-6 italic">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-white/50 text-xs">
                    {t.location} · {t.trip}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-6 py-4">
            <div className="text-3xl">⭐</div>
            <div>
              <div className="font-bold text-[#0D3B66] text-lg">
                4.9 / 5 on Google
              </div>
              <div className="text-gray-500 text-sm">800+ verified reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Lead Form ────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  phone: string;
  destination: string;
  dates: string;
}

function LeadFormSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    destination: "",
    dates: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildQuickWhatsApp(
      form.name,
      form.phone,
      form.destination,
      form.dates,
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", destination: "", dates: "" });
    }, 6000);
  };

  const isValid = form.name.trim() && form.phone.trim();

  return (
    <section id="get-quote" className="py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full px-4 py-1.5 mb-5">
              <MessageCircle size={12} className="text-[#25D366]" />
              <span className="text-[#25D366] text-xs font-bold tracking-widest uppercase">
                Free Quote · No Commitment
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0D3B66] mb-4 leading-snug">
              Start Planning Your{" "}
              <span className="text-[#38BDF8] italic">Dream Trip</span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Tell us where you want to go. We'll open WhatsApp with a
              pre-filled message so our experts can send you a personalised
              itinerary in minutes.
            </p>
            <div className="space-y-4">
              {[
                "Response within 5 minutes on WhatsApp",
                "Free personalised itinerary & quote",
                "No booking fees, no hidden charges",
                "Pay only after you're fully satisfied",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 size={16} className="text-[#2A9D8F] shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-[#25D366]" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#0D3B66] mb-2">
                    WhatsApp Opened!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Your message is ready. Our team will respond within minutes.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Izan"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Where Do You Want to Go?
                    </label>
                    <div className="relative">
                      <select
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors bg-white">
                        <option value="">Select a destination…</option>
                        {destinationOptions.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                        <option value="Not sure — need suggestions">
                          Not sure — need suggestions
                        </option>
                      </select>
                      <ChevronDown
                        size={15}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      <CalendarDays
                        size={13}
                        className="inline mr-1.5 mb-0.5"
                      />
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      name="dates"
                      value={form.dates}
                      onChange={handleChange}
                      placeholder="e.g. June 15–22, 2026 or Flexible"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30">
                    <MessageCircle size={18} />
                    Send My Details on WhatsApp
                  </button>
                  <p className="text-center text-gray-400 text-xs">
                    By submitting, you agree to be contacted via WhatsApp. No
                    spam — ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Sticky CTA Bar ───────────────────────────────────────────────────────────

function StickyWhatsAppBar({ onCtaClick }: { onCtaClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-2xl p-3 sm:p-4">
          <div className="max-w-lg mx-auto flex items-center gap-3">
            <div className="hidden sm:block flex-1">
              <div className="text-[#0D3B66] font-bold text-sm">
                Ready to plan your India trip?
              </div>
              <div className="text-gray-400 text-xs">
                Get a free personalised quote in minutes
              </div>
            </div>
            <button
              onClick={onCtaClick}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-[#25D366]/30">
              <MessageCircle size={17} />
              Get Free Quote on WhatsApp
            </button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0D3B66] text-white hover:bg-[#1a5a9e] transition-colors shrink-0">
              <Phone size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Minimal Footer ───────────────────────────────────────────────────────────

function MinimalFooter() {
  return (
    <footer className="bg-[#0a1628] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="font-display font-bold text-[#38BDF8] text-lg mb-1">
          Abyss Tours INC
        </div>
        <p className="text-white/40 text-xs mb-4">
          15A/56.B-1 Lower Ground, WEA Saraswati Marg, Karol Bagh, New Delhi
          110005
        </p>
        <div className="flex items-center justify-center gap-6 mb-4 flex-wrap">
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-white/60 hover:text-white text-sm flex items-center gap-1.5 transition-colors">
            <Phone size={13} /> {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white/60 hover:text-white text-sm transition-colors">
            {siteConfig.email}
          </a>
        </div>
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Abyss Tours INC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page Root ────────────────────────────────────────────────────────────────

export function LandingPageClient() {
  const scrollToForm = () => {
    const el = document.getElementById("get-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <HeroSection onCtaClick={scrollToForm} />
      <TrustBar />
      <DestinationsSection onCtaClick={scrollToForm} />
      <PackagesSection onCtaClick={scrollToForm} />
      <WhyUsSection />
      <TestimonialsSection />
      <LeadFormSection />
      <MinimalFooter />
      <StickyWhatsAppBar onCtaClick={scrollToForm} />
    </div>
  );
}
