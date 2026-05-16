import type { Metadata } from "next";
import { DestinationsClient } from "./DestinationsClient";

export const metadata: Metadata = {
  title: "India Tour Destinations — Kashmir, Ladakh, Kerala & More",
  description:
    "Explore 12+ iconic India destinations with Abyss Tours INC — Kashmir, Ladakh, Himachal, Rajasthan, Kerala, Goa, Northeast & Golden Triangle. Premium packages from ₹10,999.",
  keywords: [
    "India tour destinations",
    "Kashmir tour",
    "Ladakh tour",
    "Rajasthan heritage tour",
    "Kerala backwaters tour",
    "Northeast India travel",
    "Golden Triangle tour",
  ],
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "India Tour Destinations | Abyss Tours INC",
    description:
      "Discover Kashmir, Ladakh, Rajasthan, Kerala & 12+ iconic Indian destinations. Premium tours from ₹10,999.",
    url: "/destinations",
  },
};

export default function DestinationsPage() {
  return <DestinationsClient />;
}
