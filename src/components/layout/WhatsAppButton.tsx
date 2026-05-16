"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/config";

export function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-3 max-w-[220px]">
            <button
              onClick={() => setTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors"
              aria-label="Close">
              <X size={10} />
            </button>
            <p className="text-xs text-gray-800 font-medium leading-relaxed">
              👋 Plan your dream trip! Chat with us on WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <div className="relative">
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <motion.a
          href={buildWhatsAppLink(
            "Hello Abyss Tours INC! I'd like to plan a trip.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1da851] transition-colors"
          aria-label="Chat on WhatsApp">
          <MessageCircle size={26} fill="white" strokeWidth={0} />
        </motion.a>
      </div>
    </div>
  );
}
