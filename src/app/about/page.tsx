import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Kashmir Travel Experts Since 1994",
  description:
    "Founded in 1994 by Sajad Ahmad, a Kashmir native, Abyss Tours INC has guided 5,000+ travelers across India. Headquartered in Karol Bagh, New Delhi with a field office in Srinagar, Kashmir.",
  keywords: [
    "about Abyss Tours INC",
    "Kashmir travel agency story",
    "Sajad Ahmad tour operator",
    "New Delhi India travel company",
    "trusted Kashmir tour operator",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Abyss Tours INC | Kashmir Travel Experts Since 1994",
    description:
      "Meet the team behind India's trusted Kashmir travel specialists. 5,000+ travelers guided since 1994.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
