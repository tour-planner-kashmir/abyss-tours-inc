"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Globe,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config";

const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "Kashmir Special", href: "/kashmir-special" },
    { label: "Packages", href: "/packages" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  destinations: [
    { label: "Kashmir", href: "/destinations#kashmir" },
    { label: "Ladakh", href: "/destinations#ladakh" },
    { label: "Himachal Pradesh", href: "/destinations#himachal" },
    { label: "Rajasthan", href: "/destinations#rajasthan" },
    { label: "Kerala", href: "/destinations#kerala" },
    { label: "Northeast India", href: "/destinations#northeast" },
  ],
};

export function Footer() {
  const vCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Abyss Tours INC",
    "ORG:Abyss Tours INC",
    `TEL;TYPE=CELL:${siteConfig.phone}`,
    `TEL;TYPE=WORK:${siteConfig.tel}`,
    `EMAIL:${siteConfig.email}`,
    `URL:${siteConfig.url}`,
    "ADR:;;15A/56 B-1 WEA Saraswati Marg Karol Bagh;New Delhi;;110005;India",
    "END:VCARD",
  ].join("\n");

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(vCard)}&color=0D3B66&bgcolor=FFFFFF&margin=4`;

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Business card / QR strip */}
      <div className="bg-gradient-to-r from-[#0D3B66] to-[#1a5a9e] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Business card */}
            <div className="flex-1 w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              {/* Card header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-[#38BDF8] rounded-xl flex items-center justify-center font-display font-bold text-2xl text-white shrink-0">
                  A
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-white leading-tight">
                    Abyss Tours INC
                  </div>
                  <div className="text-[#38BDF8] text-sm font-medium tracking-wide">
                    Official Travel Partner · India
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-5" />

              {/* Contact details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {/* Phones */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/30 transition-colors">
                    <Phone size={13} className="text-[#38BDF8]" />
                  </span>
                  <span>{siteConfig.phone}</span>
                </a>
                <a
                  href={`tel:${siteConfig.mobile2}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/30 transition-colors">
                    <Phone size={13} className="text-[#38BDF8]" />
                  </span>
                  <span>{siteConfig.mobile2}</span>
                </a>
                <a
                  href={`tel:${siteConfig.tel}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/30 transition-colors">
                    <Phone size={13} className="text-[#38BDF8]" />
                  </span>
                  <span>
                    {siteConfig.tel}{" "}
                    <span className="text-white/40 text-xs">(Landline)</span>
                  </span>
                </a>
                {/* Website */}
                <a
                  href={siteConfig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/30 transition-colors">
                    <Globe size={13} className="text-[#38BDF8]" />
                  </span>
                  <span>www.abysstoursinc.com</span>
                </a>
                {/* Emails */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/30 transition-colors">
                    <Mail size={13} className="text-[#38BDF8]" />
                  </span>
                  <span className="truncate">{siteConfig.email}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.emailAlt}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/30 transition-colors">
                    <Mail size={13} className="text-[#38BDF8]" />
                  </span>
                  <span className="truncate">{siteConfig.emailAlt}</span>
                </a>
                {/* Offices */}
                {siteConfig.offices.map((office) => (
                  <div
                    key={office.label}
                    className="flex items-start gap-3 text-white/70 sm:col-span-2">
                    <span className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={13} className="text-[#38BDF8]" />
                    </span>
                    <div>
                      <span className="text-white/40 text-xs block mb-0.5">
                        {office.label}
                      </span>
                      <span>{office.value}</span>
                    </div>
                  </div>
                ))}
                {/* WhatsApp CTA */}
                <div className="sm:col-span-2 pt-2">
                  <a
                    href={buildWhatsAppLink(
                      "Hello Abyss Tours INC! I'd like to plan a trip.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#1da851] transition-colors">
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* QR code */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl bg-[#38BDF8]/20 blur-xl scale-110 pointer-events-none" />
                <div className="relative bg-white p-3 rounded-2xl shadow-2xl border-2 border-white/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrCodeUrl}
                    alt="Scan to save Abyss Tours INC contact"
                    width={180}
                    height={180}
                    className="rounded-lg block"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">
                  Scan to Save Contact
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  Opens on any smartphone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#38BDF8] rounded-xl flex items-center justify-center font-display font-bold text-xl text-white">
                A
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white leading-tight">
                  Abyss Tours
                </div>
                <div className="text-xs font-medium tracking-widest uppercase text-[#38BDF8]">
                  INC
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              From Kashmir's serene valleys to India's vibrant coasts, we design
              journeys you'll remember forever. Local expertise, nationwide
              reach.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#38BDF8] text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-widest uppercase">
              Destinations
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#38BDF8] text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-widest uppercase">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/30 transition-all text-sm"
                aria-label="Instagram">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/30 transition-all text-sm"
                aria-label="Facebook">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
              <a
                href={siteConfig.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-[#34E0A1]/20 hover:border-[#34E0A1]/30 transition-all text-sm"
                aria-label="TripAdvisor">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.79 0 3.45.498 4.865 1.355L15.5 6.5A5.5 5.5 0 0 0 12 5.5a5.5 5.5 0 0 0-3.5 1L7.135 5.355A7.96 7.96 0 0 1 12 4zM6.5 12a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0zm5.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                TripAdvisor
              </a>
              <a
                href={buildWhatsAppLink(
                  "Hello Abyss Tours INC! I'd like to know more.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/30 transition-all text-sm"
                aria-label="WhatsApp">
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Follow us for travel inspiration, destination highlights, and
              exclusive offers.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
