import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { LandingPageClient } from "./LandingPageClient";

export const metadata: Metadata = {
  title:
    "India Tour Packages 2026 | Kashmir, Ladakh, Rajasthan & More — Abyss Tours INC",
  description:
    "Book premium India tour packages — Kashmir, Ladakh, Rajasthan, Kerala, Goa & more. Expert travel planning for over 30 years. 5,000+ happy travelers, 4.9★ rated. Get a free quote today.",
  keywords: [
    "India tour packages 2026",
    "Kashmir tour packages",
    "Ladakh tour packages",
    "Rajasthan tour packages",
    "Kerala tour packages",
    "best India travel agency",
    "India holiday packages from Delhi",
    "custom India tours",
  ],
  alternates: { canonical: "/lp/tours" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "India Tour Packages 2026 | Abyss Tours INC",
    description:
      "From Kashmir to Kerala — tailor-made India tours crafted by experts. 30+ years, 4.9★ rated. Get your free itinerary today.",
    url: `${siteConfig.url}/lp/tours`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ToursLandingPage() {
  return <LandingPageClient />;
}
