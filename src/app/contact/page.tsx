import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Enquiry — Book Your India Tour",
  description:
    "Reach Abyss Tours INC: call +91-11-43305948, WhatsApp +91-9810369361, or email Sajad@abysstoursinc.com. Located at Karol Bagh, New Delhi. Start planning your Kashmir or India tour today.",
  keywords: [
    "contact Abyss Tours INC",
    "book Kashmir tour",
    "India tour enquiry",
    "travel agency New Delhi contact",
    "WhatsApp Kashmir tour booking",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Abyss Tours INC | Plan Your Kashmir Tour",
    description:
      "Get in touch to plan your perfect India trip. WhatsApp, call, email, or visit our Karol Bagh office.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
