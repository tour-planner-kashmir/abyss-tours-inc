import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { faqs } from "@/lib/data";
import { HeroSection } from "@/components/home/HeroSection";
import {
  StatsSection,
  WhatsAppCTASection,
} from "@/components/home/CTASections";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { KashmirPackagesSection } from "@/components/home/KashmirPackagesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: {
    absolute: "Abyss Tours INC | Best Kashmir & India Tour Packages 2026",
  },
  description:
    "Book premium Kashmir tour packages — honeymoon, family, snow tours & houseboat stays. Expert India travel planning for over 30 years. 5,000+ happy travelers. Enquire today.",
  keywords: [
    "Kashmir tour packages 2026",
    "best Kashmir travel agency",
    "Dal Lake houseboat package",
    "Kashmir honeymoon tour India",
    "India tour packages from Delhi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Abyss Tours INC | Best Kashmir & India Tour Packages 2026",
    description:
      "Plan your Kashmir trip with experts — honeymoon, family, snow & houseboat packages. 5,000+ happy travelers for over 30 years.",
    url: "/",
  },
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og-image.jpg`,
  description: siteConfig.description,
  telephone: [siteConfig.tel, siteConfig.phone, siteConfig.mobile2],
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "15A/56.B-1 Lower Ground, WEA Saraswati Marg",
    addressLocality: "Karol Bagh",
    addressRegion: "Delhi",
    postalCode: "110005",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6519,
    longitude: 77.1909,
  },
  priceRange: "₹₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "5000",
  },
  areaServed: { "@type": "Country", name: "India" },
  foundingDate: "1994",
  sameAs: [siteConfig.instagram, siteConfig.facebook, siteConfig.tripadvisor],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <FeaturedDestinations />
      <KashmirPackagesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <WhatsAppCTASection />
    </>
  );
}
