"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  {
    label: "Kashmir Special",
    href: "/kashmir-special",
  },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100",
        )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <div
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-all",
                    isTransparent
                      ? "bg-white text-[#0D3B66]"
                      : "bg-[#0D3B66] text-white",
                  )}>
                  A
                </div>
              </div>
              <div>
                <div
                  className={cn(
                    "font-display font-bold text-lg leading-tight transition-colors",
                    isTransparent ? "text-white" : "text-[#0D3B66]",
                  )}>
                  Abyss Tours
                </div>
                <div
                  className={cn(
                    "text-xs font-medium tracking-widest uppercase transition-colors",
                    isTransparent ? "text-white/80" : "text-[#38BDF8]",
                  )}>
                  INC
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? isTransparent
                        ? "text-white bg-white/15"
                        : "text-[#0D3B66] bg-[#0D3B66]/8"
                      : isTransparent
                        ? "text-white/85 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-[#0D3B66] hover:bg-gray-50",
                  )}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-gray-600 hover:text-[#0D3B66]",
                )}>
                <Phone size={15} />
                {siteConfig.phone}
              </a>
              <a
                href={buildWhatsAppLink(
                  "Hello Abyss Tours INC! I'd like to plan a trip.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#38BDF8] text-white text-sm font-semibold rounded-xl hover:bg-[#0EA5E9] transition-all hover:-translate-y-0.5 hover:shadow-lg">
                Plan My Trip
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100",
              )}
              aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 flex flex-col shadow-2xl md:hidden">
              {/* Mobile header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
                <div className="font-display font-bold text-xl text-[#0D3B66]">
                  Abyss Tours <span className="text-[#38BDF8]">INC</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors",
                          pathname === link.href
                            ? "bg-[#0D3B66] text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#0D3B66]",
                        )}>
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA */}
              <div className="px-4 py-5 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-[#0D3B66] text-[#0D3B66] rounded-xl font-semibold hover:bg-[#0D3B66] hover:text-white transition-colors">
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href={buildWhatsAppLink(
                    "Hello Abyss Tours INC! I'd like to plan a trip.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1da851] transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
