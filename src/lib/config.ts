// ============================================================
// SITE CONFIGURATION - edit these values to customize the site
// ============================================================

export const siteConfig = {
  name: "Abyss Tours INC",
  tagline: "Crafting unforgettable journeys across India.",
  description:
    "From Kashmir's serene valleys to India's vibrant coasts, we design journeys you'll remember forever. Expert travel planning rooted in Kashmir.",
  url: "https://www.abysstoursinc.com",

  // ---- OWNER --------------------------------------------------
  ownerName: "Sajad Ahmad",

  // ---- CONTACT ------------------------------------------------
  // Replace with your actual WhatsApp number (include country code, no +)
  whatsappNumber: "919810369361",
  phone: "+91-9810369361",
  mobile2: "+91-9149911366",
  tel: "+91-11-43305948",
  email: "Sajad@abysstoursinc.com",
  emailAlt: "abysstours.inc@gmail.com",
  address:
    "15A/56.B-1 Lower Ground, WEA Saraswati Marg, Karol Bagh, New Delhi 110005",

  // ---- OFFICES ------------------------------------------------
  offices: [
    {
      label: "Head Office - New Delhi",
      value:
        "15A/56.B-1 Lower Ground, WEA Saraswati Marg, Karol Bagh, New Delhi - 110005",
    },
    {
      label: "Kashmir Office",
      value:
        "Kar Complex, 3rd Floor, MA Link Road, Munawarabad, Srinagar, Kashmir - 190001",
    },
  ],

  // ---- SOCIAL -------------------------------------------------
  instagram: "https://instagram.com/abysstours",
  facebook: "https://facebook.com/AbyssToursIndia",
  tripadvisor:
    "https://www.tripadvisor.in/Attraction_Review-g304551-d12235539-Reviews-Abyss_Tours_INC-New_Delhi_National_Capital_Territory_of_Delhi.html",

  // ---- SEO & OG -----------------------------------------------
  ogImage: "/og-image.jpg",
  keywords: [
    // Brand
    "Abyss Tours INC",
    "Abyss Tours India",
    "tour operator New Delhi",
    // Core offerings
    "Kashmir tour packages",
    "India tour packages",
    "Kashmir travel agency",
    "custom India tours",
    "luxury Kashmir tours",
    "honeymoon packages Kashmir",
    // Kashmir-specific
    "Dal Lake houseboat",
    "Gulmarg ski tour",
    "Pahalgam tour packages",
    "Sonmarg tour",
    "Kashmir snow tour",
    "Kashmir tulip festival tour",
    "best Kashmir tour operator",
    "Kashmir holiday packages 2026",
    // Other destinations
    "Ladakh tour packages",
    "Rajasthan heritage tour",
    "Kerala backwaters tour",
    "Himachal Pradesh tour",
    "Northeast India tour",
    "Golden Triangle tour India",
    // Long-tail
    "Kashmir honeymoon packages 2026",
    "family tour packages India",
    "budget India tour packages",
    "India travel agency New Delhi",
    "best travel agency for Kashmir",
  ],
};

// WhatsApp link generator
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildEnquiryWhatsAppMessage(data: {
  name: string;
  phone: string;
  destination: string;
  sourceCity: string;
  travelDates: string;
  travelers: string;
  budget: string;
  tripType: string;
  specialRequests: string;
}): string {
  return `Hello Abyss Tours INC! 🙏

My name is ${data.name} (${data.phone}).

I want to travel to: *${data.destination}*
From: ${data.sourceCity}
Travel Dates: ${data.travelDates}
No. of Travelers: ${data.travelers}
Budget: ${data.budget}
Trip Type: ${data.tripType}
Special Requests: ${data.specialRequests || "None"}

Please help me plan this trip. Thank you!`;
}
