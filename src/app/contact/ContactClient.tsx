"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  siteConfig,
  buildWhatsAppLink,
  buildEnquiryWhatsAppMessage,
} from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/lib/data";

const tripTypes = [
  "Honeymoon",
  "Family Trip",
  "Solo Adventure",
  "Group Tour",
  "Corporate Outing",
  "Friends Getaway",
  "Pilgrimage",
];

const budgetRanges = [
  "Under ₹10,000 per person",
  "₹10,000 – ₹20,000",
  "₹20,000 – ₹40,000",
  "₹40,000 – ₹75,000",
  "₹75,000+",
  "Luxury – No Budget",
];

interface FormData {
  name: string;
  phone: string;
  destination: string;
  sourceCity: string;
  travelDates: string;
  travelers: string;
  budget: string;
  tripType: string;
  specialRequests: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  destination: "",
  sourceCity: "",
  travelDates: "",
  travelers: "",
  budget: "",
  tripType: "",
  specialRequests: "",
};

export function ContactClient() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildEnquiryWhatsAppMessage(form);
    const url = buildWhatsAppLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 5000);
  };

  const isValid =
    form.name.trim() &&
    form.phone.trim() &&
    form.destination.trim() &&
    form.travelDates.trim() &&
    form.travelers.trim();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0D3B66] to-[#0a2240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
              <MessageCircle size={14} className="text-[#25D366]" />
              <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                Plan Your Trip
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-5">
              Let's plan your{" "}
              <span className="text-[#38BDF8] italic">dream journey</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Fill in your details below and we'll open WhatsApp with a
              pre-filled message - the fastest way to get a personalised quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main grid */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <SectionHeading
                label="Contact"
                title="We're here for you"
                subtitle="Reach us any way you prefer. We respond within minutes on WhatsApp."
                className="mb-8"
              />

              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: siteConfig.phone,
                  href: buildWhatsAppLink(
                    "Hello Abyss Tours INC! I'd like to plan a trip.",
                  ),
                  color: "bg-[#25D366]/10 text-[#25D366]",
                  external: true,
                },
                {
                  icon: Phone,
                  label: "Telephone",
                  value: siteConfig.tel,
                  href: `tel:${siteConfig.tel}`,
                  color: "bg-[#0D3B66]/10 text-[#0D3B66]",
                  external: false,
                },
                {
                  icon: Phone,
                  label: "Mobile",
                  value: `${siteConfig.phone}  ·  ${siteConfig.mobile2}`,
                  href: `tel:${siteConfig.phone}`,
                  color: "bg-[#0D3B66]/10 text-[#0D3B66]",
                  external: false,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                  color: "bg-[#38BDF8]/10 text-[#38BDF8]",
                  external: false,
                },
                {
                  icon: Mail,
                  label: "Alt Email",
                  value: siteConfig.emailAlt,
                  href: `mailto:${siteConfig.emailAlt}`,
                  color: "bg-[#38BDF8]/10 text-[#38BDF8]",
                  external: false,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.icon size={19} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-gray-800 font-medium text-sm mt-0.5">
                      {item.value}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="ml-auto mt-3 text-gray-300 group-hover:text-[#0D3B66] transition-colors"
                  />
                </a>
              ))}

              {/* Office locations */}
              <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#2A9D8F]/10 text-[#2A9D8F]">
                    <MapPin size={19} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-2">
                      Our Offices
                    </div>
                    <div className="space-y-2">
                      {siteConfig.offices.map((office) => (
                        <div key={office.label}>
                          <div className="text-xs font-semibold text-[#0D3B66] uppercase tracking-wide">
                            {office.label}
                          </div>
                          <div className="text-gray-600 text-sm leading-relaxed">
                            {office.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <a
                href={buildWhatsAppLink(
                  "Hello Abyss Tours INC! I'd like to plan a trip. Can you help me?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-semibold rounded-2xl hover:bg-[#1da851] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/20 mt-2">
                <MessageCircle size={20} />
                Quick Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="font-display font-bold text-2xl text-[#0D3B66] mb-1">
                  Trip Enquiry Form
                </h2>
                <p className="text-gray-400 text-sm mb-7">
                  Fill in your details and we'll open WhatsApp with a pre-filled
                  message.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#25D366]/15 flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-[#25D366]" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">
                      WhatsApp Opened!
                    </h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Your enquiry details are pre-filled. Just hit send and
                      we'll respond within minutes!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Imad Sajad"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          Destination *
                        </label>
                        <select
                          name="destination"
                          required
                          value={form.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm bg-white">
                          <option value="">Select destination</option>
                          {destinations.map((d) => (
                            <option key={d.id} value={d.name}>
                              {d.name}
                            </option>
                          ))}
                          <option value="Multiple Destinations">
                            Multiple Destinations
                          </option>
                          <option value="Suggest me">Help me decide</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          Source City
                        </label>
                        <input
                          type="text"
                          name="sourceCity"
                          value={form.sourceCity}
                          onChange={handleChange}
                          placeholder="e.g. Mumbai, Delhi"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          Travel Dates *
                        </label>
                        <input
                          type="text"
                          name="travelDates"
                          required
                          value={form.travelDates}
                          onChange={handleChange}
                          placeholder="e.g. June 15–22, 2026"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          No. of Travelers *
                        </label>
                        <input
                          type="text"
                          name="travelers"
                          required
                          value={form.travelers}
                          onChange={handleChange}
                          placeholder="e.g. 2 adults, 1 child"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm bg-white">
                          <option value="">Select budget</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          Trip Type
                        </label>
                        <select
                          name="tripType"
                          value={form.tripType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm bg-white">
                          <option value="">Select type</option>
                          {tripTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special requests */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                        Special Requests / Notes
                      </label>
                      <textarea
                        name="specialRequests"
                        rows={3}
                        value={form.specialRequests}
                        onChange={handleChange}
                        placeholder="Any specific requests, dietary needs, mobility considerations, or things you'd love to experience..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 focus:border-[#0D3B66] transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white font-semibold rounded-2xl text-base hover:bg-[#1da851] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                      <MessageCircle size={20} />
                      Send via WhatsApp
                      <Send size={16} />
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      This will open WhatsApp with your details pre-filled. No
                      data is stored on our servers.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
