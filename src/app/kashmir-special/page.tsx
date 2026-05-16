import type { Metadata } from "next";
import { KashmirSpecialClient } from "./KashmirSpecialClient";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages 2026 — Honeymoon, Family, Snow & Houseboat",
  description:
    "Exclusive Kashmir packages — Honeymoon (₹28,999/couple), Family (₹42,999/4), Snow Tour (₹22,999), Tulip Season, Houseboat Stay & Adventure. Best Kashmir tour operator since 1994.",
  keywords: [
    "Kashmir tour packages 2026",
    "Kashmir honeymoon packages",
    "Kashmir family tour",
    "Gulmarg snow tour",
    "Dal Lake houseboat package",
    "Kashmir tulip festival tour",
    "Kashmir adventure tour",
    "best Kashmir packages",
  ],
  alternates: { canonical: "/kashmir-special" },
  openGraph: {
    title: "Kashmir Special Packages 2026 | Abyss Tours INC",
    description:
      "Honeymoon, family, snow tours, houseboat stays & more. Exclusive Kashmir packages from ₹15,999.",
    url: "/kashmir-special",
  },
};

export default function KashmirSpecialPage() {
  return <KashmirSpecialClient />;
}
