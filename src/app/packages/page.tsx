import type { Metadata } from "next";
import { PackagesClient } from "./PackagesClient";

export const metadata: Metadata = {
  title: "Tour Packages — Budget, Premium, Luxury & Custom India Tours",
  description:
    "Choose your perfect India tour package with Abyss Tours INC — Budget (from ₹7,999), Premium (₹15,999), Luxury (₹35,999), or fully Custom. Transparent pricing and personalized itineraries.",
  keywords: [
    "India tour packages",
    "budget Kashmir tour",
    "luxury India tour package",
    "custom tour package India",
    "premium India tour",
  ],
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "India Tour Packages | Budget to Luxury | Abyss Tours INC",
    description:
      "Budget from ₹7,999 · Premium ₹15,999 · Luxury ₹35,999 · Custom. Choose your perfect India tour package.",
    url: "/packages",
  },
};

export default function PackagesPage() {
  return <PackagesClient />;
}
