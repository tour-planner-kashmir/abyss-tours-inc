// ============================================================
// SITE DATA - all destinations, packages, testimonials, FAQs
// ============================================================

export const destinations = [
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "Paradise on Earth",
    description:
      "Snow-capped peaks, shimmering Dal Lake, and fragrant saffron fields - Kashmir is a world apart.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Sonmarg"],
    startingFrom: "₹15,999",
    badge: "Most Popular",
    region: "north",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    tagline: "Land of High Passes",
    description:
      "Rugged landscapes, ancient monasteries, and the highest motorable roads in the world.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    highlights: ["Pangong Lake", "Nubra Valley", "Leh Palace", "Khardung La"],
    startingFrom: "₹19,999",
    badge: "Adventure",
    region: "north",
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    tagline: "The Apple of Mountains",
    description:
      "Charming hill towns, pine forests, and colonial-era architecture await in the Queen of Hills.",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    highlights: ["Shimla", "Manali", "Dharamshala", "Spiti Valley"],
    startingFrom: "₹12,999",
    badge: "Family Favourite",
    region: "north",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Land of Kings",
    description:
      "Forts, palaces, camel dunes, and vivid culture - Rajasthan is India at its most spectacular.",
    image:
      "https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?w=800&q=80",
    highlights: ["Jaipur", "Jaisalmer", "Udaipur", "Jodhpur"],
    startingFrom: "₹24,999",
    badge: "Heritage",
    region: "west",
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    description:
      "Backwaters, spice plantations, pristine beaches, and Ayurvedic wellness in lush green paradise.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    highlights: ["Alleppey", "Munnar", "Wayanad", "Kovalam"],
    startingFrom: "₹16,999",
    badge: "Honeymoon",
    region: "south",
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Sun, Sand & Spirit",
    description:
      "Golden beaches, Portuguese heritage, vibrant nightlife, and fresh seafood on the Arabian Sea.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    highlights: ["North Goa", "South Goa", "Old Goa", "Dudhsagar"],
    startingFrom: "₹10,999",
    badge: "Beach Holiday",
    region: "west",
  },
  {
    id: "northeast",
    name: "Northeast India",
    tagline: "India's Hidden Gem",
    description:
      "Untouched valleys, living root bridges, tea gardens, and vibrant tribal cultures.",
    image:
      "https://images.unsplash.com/photo-1552978534-9d01e1f91517?w=800&q=80",
    highlights: ["Meghalaya", "Sikkim", "Assam", "Arunachal"],
    startingFrom: "₹47,999",
    badge: "Off-Beat",
    region: "east",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    tagline: "Devbhoomi - Land of Gods",
    description:
      "Sacred ghats, Himalayan treks, yoga ashrams, and the source of India's holiest rivers.",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
    highlights: ["Rishikesh", "Haridwar", "Valley of Flowers", "Nainital"],
    startingFrom: "₹23,999",
    badge: "Spiritual",
    region: "north",
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle",
    tagline: "India's Classic Route",
    description:
      "Delhi, Agra & Jaipur - three iconic cities that capture the grandeur of Mughal and Rajput India.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    highlights: ["Taj Mahal", "Red Fort", "Amber Fort", "Qutub Minar"],
    startingFrom: "₹44,999",
    badge: "Iconic",
    region: "north",
  },
];

export const kashmirPackages = [
  {
    id: "honeymoon-kashmir",
    name: "Kashmir Honeymoon",
    subtitle: "Romance above the clouds",
    duration: "6 Nights / 7 Days",
    image:
      "https://images.unsplash.com/photo-1490723186985-6d7672633c86?w=800&q=80",
    places: ["Srinagar", "Gulmarg", "Pahalgam"],
    highlights: [
      "Deluxe Houseboat stay on Dal Lake",
      "Shikara ride at sunrise",
      "Snow activities at Gulmarg",
      "Betaab Valley & Chandanwari",
      "Mughal Gardens visit",
      "Candlelit dinner by the lake",
    ],
    price: "₹28,999 per couple",
    badge: "Most Booked",
    color: "from-rose-900 to-rose-700",
  },
  {
    id: "family-kashmir",
    name: "Kashmir Family Tour",
    subtitle: "Memories for everyone",
    duration: "7 Nights / 8 Days",
    image:
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    highlights: [
      "Comfortable hotel stays",
      "Gondola ride at Gulmarg",
      "Thajiwas Glacier at Sonmarg",
      "Dal Lake shikara",
      "Horse riding for kids",
      "Local Kashmiri cuisine experience",
    ],
    price: "₹42,999 for 4",
    badge: "Family Favourite",
    color: "from-blue-900 to-blue-700",
  },
  {
    id: "snow-kashmir",
    name: "Kashmir Snow Tour",
    subtitle: "Winter wonderland awaits",
    duration: "5 Nights / 6 Days",
    image:
      "https://images.unsplash.com/photo-1609952048180-7b35ea6b083b?w=800&q=80",
    places: ["Srinagar", "Gulmarg"],
    highlights: [
      "Skiing lessons at Gulmarg",
      "Snowmobile rides",
      "Gondola Phase 1 & 2",
      "Snow trekking",
      "Bonfire evenings",
      "Hot Kahwa sessions",
    ],
    price: "₹22,999 per person",
    badge: "Winter Special",
    color: "from-sky-900 to-sky-700",
  },
  {
    id: "tulip-kashmir",
    name: "Tulip Season",
    subtitle: "Asia's largest tulip garden",
    duration: "4 Nights / 5 Days",
    image:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80",
    places: ["Srinagar"],
    highlights: [
      "Indira Gandhi Tulip Garden",
      "Million tulips in bloom",
      "Dal Lake evening cruise",
      "Mughal Garden tour",
      "Local market shopping",
      "Spring photography walk",
    ],
    price: "₹15,999 per person",
    badge: "March–April",
    color: "from-purple-900 to-purple-700",
  },
  {
    id: "houseboat-kashmir",
    name: "Houseboat Experience",
    subtitle: "Live on Dal Lake",
    duration: "3 Nights / 4 Days",
    image:
      "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80",
    places: ["Srinagar"],
    highlights: [
      "Heritage cedar wood houseboat",
      "Butler & personalised service",
      "Sunrise shikara ride",
      "Floating market tour",
      "Sunset cocktail cruise",
      "Mughal Garden visits",
    ],
    price: "₹18,999 per couple",
    badge: "Luxury Stay",
    color: "from-teal-900 to-teal-700",
  },
  {
    id: "adventure-kashmir",
    name: "Kashmir Adventure",
    subtitle: "Thrill in the Himalayas",
    duration: "6 Nights / 7 Days",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    places: ["Srinagar", "Sonmarg", "Pahalgam", "Gulmarg"],
    highlights: [
      "Kolahoi Glacier trek",
      "White water rafting",
      "Mountain biking",
      "Zip lining",
      "Rock climbing",
      "Camping under stars",
    ],
    price: "₹24,999 per person",
    badge: "Adventure",
    color: "from-green-900 to-green-700",
  },
];

export const packages = [
  {
    id: "kashmir-5n6d",
    name: "Kashmir",
    tagline: "Srinagar · Sonmarg · Gulmarg · Pahalgam",
    priceRange: "₹15,999 per person",
    duration: "5 Nights / 6 Days",
    badge: "Most Popular",
    badgeColor: "bg-saffron",
    popular: true,
    places: ["Srinagar", "Sonmarg", "Gulmarg", "Pahalgam"],
    features: [
      "Shankaracharya Temple & Mughal Gardens",
      "Zero Point Sonmarg excursion (included)",
      "Gondola Ride at Gulmarg (optional)",
      "Pahalgam – Aru, Betaab & Chandanwari",
      "Complimentary Shikara Ride on Dal Lake",
      "Deluxe Houseboat overnight stay",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        summary:
          "Shankaracharya Temple, Mughal Gardens, Dal Lake viewpoint, Boulevard Road",
      },
      {
        day: 2,
        title: "Srinagar – Sonmarg – Srinagar",
        summary:
          "Excursion to Zero Point (included); optional Thajiwas Glacier pony ride",
      },
      {
        day: 3,
        title: "Srinagar – Gulmarg – Srinagar",
        summary:
          "Gondola Phase I & II (optional), snow activities, golf course visit",
      },
      {
        day: 4,
        title: "Srinagar – Pahalgam",
        summary:
          "Saffron fields, Awantipora ruins, Lidder River & pine forests",
      },
      {
        day: 5,
        title: "Pahalgam – Houseboat Srinagar",
        summary:
          "Aru, Betaab & Chandanwari (optional); deluxe houseboat check-in; Shikara Ride",
      },
      {
        day: 6,
        title: "Departure from Srinagar",
        summary: "Breakfast & airport transfer",
      },
    ],
  },
  {
    id: "ladakh-5n6d",
    name: "Ladakh",
    tagline: "Leh · Nubra Valley · Pangong Lake",
    priceRange: "₹19,999 per person",
    duration: "5 Nights / 6 Days",
    badge: "Adventure",
    badgeColor: "bg-amber-600",
    popular: false,
    places: ["Leh", "Nubra Valley", "Pangong Lake"],
    features: [
      "Khardung La – world's highest motorable road (18,380 ft)",
      "Double-hump camel safari at Nubra sand dunes",
      "Sunrise & sunset at Pangong Lake (14,500 ft)",
      "Hall of Fame, Gurudwara Pathar Sahib & Magnetic Hill",
      "Sangam – confluence of Indus & Zanskar rivers",
      "Leh local market shopping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Leh",
        summary: "Rest & acclimatization; optional Leh market visit",
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        summary:
          "Hall of Fame, Gurudwara Pathar Sahib, Magnetic Hill, Kali Temple, Sangam",
      },
      {
        day: 3,
        title: "Leh to Nubra Valley",
        summary:
          "Via Khardung La pass; camel safari at Deskit–Hundur sand dunes",
      },
      {
        day: 4,
        title: "Nubra Valley to Pangong Lake",
        summary:
          "Drive to Pangong (14,500 ft); enjoy changing lake colors & sunset",
      },
      {
        day: 5,
        title: "Pangong Lake to Leh",
        summary:
          "Sunrise at Pangong; Thiksey Monastery & Shey Palace (optional); Leh market",
      },
      {
        day: 6,
        title: "Departure from Leh",
        summary: "Early morning airport transfer; tour ends",
      },
    ],
  },
  {
    id: "shimla-manali-5n6d",
    name: "Shimla – Manali",
    tagline: "Delhi · Shimla · Manali · Chandigarh",
    priceRange: "₹12,999 per person",
    duration: "5 Nights / 6 Days",
    badge: "Family Favourite",
    badgeColor: "bg-emerald-500",
    popular: false,
    places: ["Delhi", "Shimla", "Manali", "Chandigarh"],
    features: [
      "Mall Road & Ridge, Shimla",
      "Kufri – Mahasu Peak & Indira Tourist Park",
      "Vice Regal Lodge (British heritage architecture)",
      "Hadimba Temple, Vashisht & Manu Temple",
      "Atal Tunnel – world's longest high-altitude highway tunnel",
      "Return via Chandigarh",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi – Shimla",
        summary: "Arrival; hotel check-in; Mall Road & local market evening",
      },
      {
        day: 2,
        title: "Shimla Sightseeing",
        summary: "Kufri – Mahasu Peak, Chini Bungalow; Vice Regal Lodge",
      },
      {
        day: 3,
        title: "Shimla – Manali",
        summary: "Scenic drive; check-in; Mall Road Manali evening",
      },
      {
        day: 4,
        title: "Manali Sightseeing",
        summary:
          "Tibetan Monastery, Hadimba Temple, Vashisht, Manu Temple; Atal Tunnel visit",
      },
      {
        day: 5,
        title: "Manali – Chandigarh",
        summary: "Drive to Chandigarh; overnight stay",
      },
      {
        day: 6,
        title: "Chandigarh – Delhi Departure",
        summary: "Drive back to Delhi; airport / railway station transfer",
      },
    ],
  },
  {
    id: "rajasthan-10n11d",
    name: "Rajasthan",
    tagline: "Agra · Jaipur · Jaisalmer · Jodhpur · Udaipur",
    priceRange: "₹24,999 per person",
    duration: "10 Nights / 11 Days",
    badge: "Heritage",
    badgeColor: "bg-orange-600",
    popular: false,
    places: ["Delhi", "Agra", "Jaipur", "Jaisalmer", "Jodhpur", "Udaipur"],
    features: [
      "Taj Mahal & Fatehpur Sikri (UNESCO World Heritage)",
      "Amber Fort with elephant ride, Jaipur",
      "Jaisalmer Fort, havelis & desert camel ride",
      "Mehrangarh Fort & Umaid Bhawan Palace, Jodhpur",
      "Bishnoi tribal village jeep safari",
      "City Palace, Saheliyon ki Bari & Fateh Sagar Lake, Udaipur",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi – Agra",
        summary: "Airport arrival; drive to Agra; hotel check-in",
      },
      {
        day: 2,
        title: "Agra – Jaipur",
        summary:
          "Fatehpur Sikri en route; City Palace, Jantar Mantar & Nawab Sahab Ki Haveli",
      },
      {
        day: 3,
        title: "Jaipur",
        summary:
          "Amber Fort with elephant ride; Rajasthani handicraft shopping",
      },
      {
        day: 4,
        title: "Jaipur – Jaisalmer",
        summary: "Drive to the Golden City; leisure evening",
      },
      {
        day: 5,
        title: "Jaisalmer",
        summary:
          "Jaisalmer Fort, Patwa Haveli, Salim Singh Haveli; evening camel ride in Thar Desert",
      },
      {
        day: 6,
        title: "Jaisalmer – Jodhpur",
        summary: "Mehrangarh Fort; Umaid Bhawan Palace Museum",
      },
      {
        day: 7,
        title: "Jodhpur",
        summary: "Bishnoi tribal village jeep safari",
      },
      {
        day: 8,
        title: "Jodhpur – Udaipur",
        summary: "Drive; leisure; local bazaar for souvenirs",
      },
      {
        day: 9,
        title: "Udaipur – City Palace",
        summary: "City Palace – mirrored rooms, ivory doors, Peacock Courtyard",
      },
      {
        day: 10,
        title: "Udaipur Sightseeing",
        summary: "Vintage Car Museum, Saheliyon ki Bari, Fateh Sagar Lake",
      },
      {
        day: 11,
        title: "Udaipur – Delhi (Flight)",
        summary: "Morning departure flight to Delhi",
      },
    ],
  },
  {
    id: "kerala-5n6d",
    name: "Kerala",
    tagline: "Cochin · Munnar · Thekkady · Alleppey",
    priceRange: "₹16,999 per person",
    duration: "5 Nights / 6 Days",
    badge: "Honeymoon",
    badgeColor: "bg-teal-600",
    popular: false,
    places: ["Cochin", "Munnar", "Thekkady", "Alleppey"],
    features: [
      "Cheyyara, Valara & Attukadu waterfalls en route",
      "Eravikulam National Park & tea estates, Munnar",
      "Periyar Wildlife Sanctuary boat cruise, Thekkady",
      "Kathakali performance, bamboo rafting & spice plantation",
      "Alleppey backwaters & sunset beach",
      "Fort Cochin – Chinese fishing nets & St. Francis Church",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Cochin",
        summary: "Airport reception; leisure evening at the port city",
      },
      {
        day: 2,
        title: "Cochin – Munnar",
        summary:
          "Kodanadu elephant care; Cheyyara, Valara & Attukadu waterfalls; spice plantations",
      },
      {
        day: 3,
        title: "Munnar Sightseeing",
        summary:
          "Eravikulam NP (Raja Malai), Mattupetty Dam, tea museum, eco point, Top Station; optional boating & trekking",
      },
      {
        day: 4,
        title: "Munnar – Thekkady",
        summary:
          "Periyar Wildlife Sanctuary, Mullaperiyar Dam, spice tour; Kathakali, elephant ride & bamboo rafting (optional)",
      },
      {
        day: 5,
        title: "Thekkady – Alleppey",
        summary:
          "Kumarakom bird sanctuary & paddy fields; Alleppey beach & backwater sunset",
      },
      {
        day: 6,
        title: "Alleppey – Cochin Departure",
        summary:
          "Fort Cochin – Chinese fishing nets, Jewish synagogue, Marian Drive; airport transfer",
      },
    ],
  },
  {
    id: "goa-3n4d",
    name: "Goa",
    tagline: "North Goa · South Goa",
    priceRange: "₹10,999 per person",
    duration: "3 Nights / 4 Days",
    badge: "Beach Holiday",
    badgeColor: "bg-cyan-600",
    popular: false,
    places: ["Candolim", "North Goa", "South Goa"],
    features: [
      "Stay at The Lohias Resort, Candolim",
      "North Goa – Aguada Fort, Calangute, Baga & Anjuna beaches",
      "South Goa – Basilica of Bom Jesus & Mangueshi Temple",
      "Fontainhas Latin Quarters, Miramar Beach & Dona Paula",
      "Daily buffet breakfast included",
      "Private airport transfers (arrival & departure)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Goa",
        summary:
          "Airport pickup; check-in at The Lohias Resort, Candolim; leisure",
      },
      {
        day: 2,
        title: "North Goa Sightseeing",
        summary:
          "Aguada Fort, Calangute Beach, Candolim Beach, Baga Beach, Anjuna Beach",
      },
      {
        day: 3,
        title: "South Goa Sightseeing",
        summary:
          "Mangueshi Temple, Shree Balaji Temple, Basilica of Bom Jesus, Fontainhas, Miramar Beach, Dona Paula",
      },
      {
        day: 4,
        title: "Departure – Goa",
        summary: "Breakfast; hotel check-out; transfer to Goa Airport",
      },
    ],
  },
  {
    id: "mumbai-city-tour-1d",
    name: "Mumbai City Tour",
    tagline: "Gateway of India · Marine Drive · Juhu Beach",
    priceRange: "₹4,499 per person",
    duration: "1 Day",
    badge: "Day Tour",
    badgeColor: "bg-yellow-600",
    popular: false,
    places: ["Mumbai"],
    features: [
      "Gateway of India & Tarapore Wala Fish Aquarium",
      "Prince of Wales Museum & Jahangir Art Gallery",
      "Iconic Marine Drive & Nariman Point",
      "Haji Ali Dargah & Race Course",
      "Kamala Nehru Park & Hanging Garden",
      "Girgaon Chowpati Beach & Juhu Beach",
    ],
    itinerary: [
      {
        day: 1,
        title: "Mumbai City Full-Day Tour",
        summary:
          "Gateway of India, Tarapore Wala Fish Aquarium, Assembly Hall, Prince of Wales Museum, Nariman Point, World Trade Centre, Marine Drive, Jahangir Art Gallery, Girgaon Chowpati Beach, Haji Ali, Race Course, Kamala Nehru Park, Nehru Science Centre, Hanging Garden, Hare Rama Hare Krishna Temple, Juhu Beach",
      },
    ],
  },
  {
    id: "dharavi-slum-tour-1d",
    name: "Dharavi Slum Tour",
    tagline: "Asia's Largest Slum · Heart of Mumbai",
    priceRange: "₹3,499 per person",
    duration: "1 Day",
    badge: "Cultural",
    badgeColor: "bg-red-700",
    popular: false,
    places: ["Mumbai", "Dharavi"],
    features: [
      "Visit Asia's largest slum – filming location of Slumdog Millionaire",
      "Leather industries, pottery & bakery units",
      "Soap making, color dye & plastic recycling workshops",
      "Schools, hospitals & community spaces inside the slum",
      "Muslim craftsmen building a shrine for Hindus – a symbol of harmony",
      "Guided by a local who lives in Dharavi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dharavi Slum Guided Tour",
        summary:
          "Leather Industries, Pottery, Bakery, Soap Making, Color Dye, Small Alleys, Schools & Hospitals, Houses in Slum, Plastic Recycling, Recycling of veg oil cans, Muslim shrine for Hindus, Slum Market – all guided by a Dharavi resident",
      },
    ],
  },
  {
    id: "golden-triangle-varanasi-10d",
    name: "Golden Triangle + Varanasi",
    tagline: "Delhi · Jaipur · Agra · Varanasi",
    priceRange: "₹44,999 per person",
    duration: "9 Nights / 10 Days",
    badge: "Private Tour",
    badgeColor: "bg-amber-700",
    popular: false,
    places: ["Delhi", "Jaipur", "Agra", "Varanasi"],
    features: [
      "Old Delhi – Jama Masjid & Red Fort; New Delhi – India Gate & Humayun Tomb",
      "Amber Fort with elephant ride, Nahargarh & Jaigarh forts, Hawa Mahal",
      "Fatehpur Sikri abandoned Mughal town en route to Agra",
      "Taj Mahal at sunrise & Agra Fort full-day sightseeing",
      "Varanasi Ganga Aarti at Dashashwamedh Ghat & Alamgir Mosque",
      "Early morning boat ride on the sacred Ganga & Sarnath excursion",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Delhi",
        summary:
          "Meet & greet on arrival; transfer to hotel; optional leisure sightseeing",
      },
      {
        day: 2,
        title: "Delhi City Tour",
        summary:
          "Old Delhi – Jama Masjid, Red Fort; New Delhi – India Gate, Humayun Tomb, Lotus Temple, Qutub Minar",
      },
      {
        day: 3,
        title: "Delhi – Jaipur (4–5 hrs)",
        summary:
          "Drive to Jaipur; hotel check-in; optional evening sightseeing",
      },
      {
        day: 4,
        title: "Jaipur City Tour",
        summary:
          "Amber Fort (elephant ride), Nahargarh Fort, Jaigarh Fort, Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar, Albert Hall Museum; Local Market shopping",
      },
      {
        day: 5,
        title: "Jaipur – Agra (4–5 hrs)",
        summary:
          "En route visit Fatehpur Sikri; Jamia Mosque & Jodha Bai Palace; check-in Agra hotel",
      },
      {
        day: 6,
        title: "Agra – Varanasi (Overnight Train)",
        summary:
          "Early morning Taj Mahal visit; Agra Fort full-day tour; evening departure by train to Varanasi",
      },
      {
        day: 7,
        title: "Arrive Varanasi",
        summary:
          "Transfer to hotel; Alamgir Mosque, Dashashwamedh Ghat, Bharat Mata Temple; evening Ganga Aarti",
      },
      {
        day: 8,
        title: "Varanasi – Sarnath Excursion",
        summary:
          "Early morning boat ride on Ganga; Sarnath – Dhamek Stupa, Sarnath Museum, Chaukhandi Stupa; evening local market",
      },
      {
        day: 9,
        title: "Varanasi – Delhi (Flight)",
        summary:
          "Transfer to airport; fly to Delhi; transfer to hotel; overnight Delhi",
      },
      {
        day: 10,
        title: "Delhi Departure",
        summary: "Transfer to airport for onward journey",
      },
    ],
  },
  {
    id: "uttarakhand-7d",
    name: "Uttarakhand",
    tagline: "Haridwar · Rishikesh · Mussoorie · Dehradun",
    priceRange: "₹23,999 per person",
    duration: "6 Nights / 7 Days",
    badge: "Hill Station",
    badgeColor: "bg-green-700",
    popular: false,
    places: ["Haridwar", "Rishikesh", "Mussoorie", "Dehradun"],
    features: [
      "Ganga Aarti at Har Ki Pauri, Haridwar",
      "White-water rafting & bungee jumping in Rishikesh",
      "Laxman Jhula, Ram Jhula & the Beatles Ashram",
      "Kempty Falls & Gun Hill ropeway, Mussoorie",
      "Mall Road stroll & optional Landour side trip",
      "Robber's Cave (Guchhupani) & Sahastradhara, Dehradun",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Haridwar",
        summary:
          "Arrive Dehradun or Haridwar; evening Ganga Aarti at Har Ki Pauri",
      },
      {
        day: 2,
        title: "Rishikesh – Day 1",
        summary:
          "White-water rafting, bungee jumping; Laxman Jhula, Ram Jhula, Beatles Ashram; cafe hopping",
      },
      {
        day: 3,
        title: "Rishikesh – Day 2",
        summary:
          "Yoga session, riverside walk; explore local ashrams and markets",
      },
      {
        day: 4,
        title: "Rishikesh – Mussoorie (2.5 hrs)",
        summary: "Drive to Mussoorie; check-in; evening stroll on Mall Road",
      },
      {
        day: 5,
        title: "Mussoorie Sightseeing",
        summary:
          "Kempty Falls, Gun Hill ropeway; optional side trip to quieter Landour; Mall Road shopping",
      },
      {
        day: 6,
        title: "Mussoorie – Dehradun",
        summary:
          "Robber's Cave (Guchhupani) & Sahastradhara; Dehradun local market",
      },
      {
        day: 7,
        title: "Departure from Dehradun",
        summary: "Transfer to Jolly Grant Airport for onward journey",
      },
    ],
  },
  {
    id: "corbett-national-park-3d",
    name: "Corbett National Park",
    tagline: "Ramnagar · Dhikala · Bijrani · Kosi River",
    priceRange: "₹12,999 per person",
    duration: "2 Nights / 3 Days",
    badge: "Wildlife",
    badgeColor: "bg-lime-700",
    popular: false,
    places: ["Ramnagar", "Jim Corbett"],
    features: [
      "Jeep safari in Dhikala (grasslands) & Bijrani (dense forest)",
      "Garjiya Devi Temple on a rock in the Kosi River",
      "Dhangarhi Museum & Corbett Museum (Jim Corbett's former home)",
      "Optional evening safari in Jhirna or Dhela zones",
      "Guided nature walk along Kosi River for birds & butterflies",
      "Riverside bonfire evening at resort",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Local Sightseeing",
        summary:
          "Arrive Ramnagar (train or 5–6 hrs from Delhi); resort check-in; lunch; Garjiya Devi Temple & Dhangarhi Museum; evening riverside bonfire",
      },
      {
        day: 2,
        title: "The Safari Experience",
        summary:
          "Pre-sunrise jeep safari in Dhikala or Bijrani zone (3–4 hrs); breakfast; Corbett Museum; optional evening safari in Jhirna or Dhela zone",
      },
      {
        day: 3,
        title: "Nature Walk & Departure",
        summary:
          "Guided nature walk along Kosi River; local market for wooden crafts & mountain honey; check-out by noon & return journey",
      },
    ],
  },
  {
    id: "northeast-sikkim-darjeeling-7d",
    name: "North East India",
    tagline: "Gangtok · Pelling · Darjeeling",
    priceRange: "₹47,999 per person",
    duration: "6 Nights / 7 Days",
    badge: "Off-Beat",
    badgeColor: "bg-violet-700",
    popular: false,
    places: ["Gangtok", "North Sikkim", "Pelling", "Darjeeling"],
    features: [
      "Tsomgo Lake (12,400 ft) & Baba Harbhajan Singh Temple",
      "Rumtek Monastery & Do Drul Chorten Stupa, Gangtok",
      "Pelling Skywalk, Khangchendzonga Waterfalls & Khecheopalri Lake",
      "Darjeeling Toy Train – UNESCO World Heritage site",
      "Sunrise over Mt. Kanchenjunga from Tiger Hill",
      "Happy Valley Tea Estate & local market visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Gangtok",
        summary:
          "Fly to Bagdogra Airport; drive to Gangtok; check-in; local market evening",
      },
      {
        day: 2,
        title: "Gangtok & North Sikkim – Day 1",
        summary:
          "Tsomgo Lake (12,400 ft), Baba Harbhajan Singh Temple; permits required for high-altitude areas",
      },
      {
        day: 3,
        title: "Gangtok Local Sightseeing",
        summary:
          "Rumtek Monastery, Do Drul Chorten Stupa, MG Road; evening leisure",
      },
      {
        day: 4,
        title: "Gangtok – Pelling (via Namchi)",
        summary: "Drive via Namchi – Char Dham shrine; check-in Pelling",
      },
      {
        day: 5,
        title: "Pelling Sightseeing",
        summary:
          "Pelling Skywalk, Khangchendzonga Waterfalls, sacred Khecheopalri Lake",
      },
      {
        day: 6,
        title: "Pelling – Darjeeling",
        summary: "Drive to Darjeeling; check-in; evening Mall Road stroll",
      },
      {
        day: 7,
        title: "Darjeeling & Departure",
        summary:
          "Pre-dawn sunrise from Tiger Hill over Mt. Kanchenjunga; Darjeeling Toy Train (UNESCO); Happy Valley Tea Estate; departure to Bagdogra",
      },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Taslim Jiwa",
    location: "Canada",
    trip: "Nepal, India & Sri Lanka",
    rating: 5,
    review:
      "My wife and I toured Nepal, India and Sri Lanka from January to March 2025. What an amazing and exciting holiday! Sajad Ahmad planned everything for us — domestic flights, transfers, hotels and drivers for sightseeing. He was constantly in touch to make sure we were okay. If we requested any changes he would take care of those right away. We felt very safe and had a lot of fun. We would definitely recommend Abyss Tours Inc if you are planning to visit Nepal, India or Sri Lanka for the first time.",
    image:
      "https://ui-avatars.com/api/?name=Taslim+Jiwa&background=0D3B66&color=fff&size=200",
  },
  {
    id: 2,
    name: "ArB",
    location: "Canada",
    trip: "Personalised India Tour",
    rating: 5,
    review:
      "I contacted the company on short notice to arrange for my personalized trip which involved visiting several places throughout India and the planning was perfectly performed by the company, which I used before as well. I was provided with a very warm welcome upon arrival from Canada. The owner ensured that I reached everywhere safely, checked on me daily and arranged for a local SIM card to help with communication. I had a wonderful experience and highly recommend using this company.",
    image:
      "https://ui-avatars.com/api/?name=ArB&background=2A9D8F&color=fff&size=200",
  },
  {
    id: 3,
    name: "Khushi Noori",
    location: "Loyal Customer · 14 Years",
    trip: "North India Explorer",
    rating: 5,
    review:
      "I have used Abyss Tours for the past 14 years and they always provided the best service hence I keep going back. I toured Delhi, Agra, Jaipur, Fatehpur Sikri, Chandigarh, Amritsar and the border, and have always been fully satisfied. Drivers and vehicles provided were great — the management and the whole team are brilliant from start to finish.",
    image:
      "https://ui-avatars.com/api/?name=Khushi+Noori&background=F4A261&color=fff&size=200",
  },
  {
    id: 4,
    name: "Al Jiwani",
    location: "Canada",
    trip: "Golden Triangle + Rishikesh",
    rating: 5,
    review:
      "We are from Canada and Sajad helped us to arrange a 12 days trip around the golden triangle. Driver was Firoz Ali who was patient and friendly. We extended our trip to see Rishikesh to experience the Holy river Ganges Aarti light performance. Would highly recommend this company.",
    image:
      "https://ui-avatars.com/api/?name=Al+Jiwani&background=0D3B66&color=fff&size=200",
  },
  {
    id: 5,
    name: "Alberto Cordero",
    location: "International Traveller",
    trip: "Varanasi Heritage Tour",
    rating: 5,
    review:
      "Highly recommend, very knowledgeable guides and a true Hindu experience.",
    image:
      "https://ui-avatars.com/api/?name=Alberto+Cordero&background=2A9D8F&color=fff&size=200",
  },
  {
    id: 6,
    name: "Moksh Bajaj",
    location: "India",
    trip: "Repeat Traveller",
    rating: 5,
    review:
      "I have been this place many times, everytime I got satisfaction from their prompt service. Will recommend this place.",
    image:
      "https://ui-avatars.com/api/?name=Moksh+Bajaj&background=F4A261&color=fff&size=200",
  },
];

export const stats = [
  { number: "5000+", label: "Happy Travelers" },
  { number: "30+", label: "Years Experience" },
  { number: "50+", label: "Destinations" },
  { number: "4.9★", label: "Average Rating" },
];

export const faqs = [
  {
    question: "How do I book a tour with Abyss Tours INC?",
    answer:
      "It's simple! Click any 'Chat on WhatsApp' button on our website or fill the enquiry form. We'll connect within minutes, understand your requirements, and send you a customized itinerary with pricing. No advance payment until you're happy with the plan.",
  },
  {
    question: "Do you arrange travel insurance?",
    answer:
      "Yes, travel insurance is included in our Premium and Luxury packages. For Budget packages, we strongly recommend it and can arrange it at an additional cost. We partner with reputed insurers for comprehensive coverage.",
  },
  {
    question: "What is the best time to visit Kashmir?",
    answer:
      "Kashmir is beautiful year-round. April–June is ideal for gardens and pleasant weather. December–February offers stunning snowfall and skiing at Gulmarg. August–October is perfect for trekking. We'll recommend the best time based on your interests.",
  },
  {
    question: "Do you offer customized itineraries?",
    answer:
      "Absolutely - customization is our specialty. Tell us your budget, travel dates, group size, and preferences, and we'll craft a personalized itinerary just for you. No two tours are ever the same.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer flexible cancellation. Cancellations 30+ days before travel get a full refund. 15–30 days: 75% refund. 7–15 days: 50% refund. Less than 7 days: no refund on non-refundable components. We always work with you to reschedule.",
  },
  {
    question: "Do you arrange permits for Ladakh and Northeast?",
    answer:
      "Yes! We handle all Inner Line Permits, Protected Area Permits, and other regulatory requirements for restricted destinations like Ladakh, Arunachal Pradesh, and Sikkim. Just provide your documents; we take care of the rest.",
  },
  {
    question: "Can you arrange group tours for corporates?",
    answer:
      "Yes! We specialize in corporate team outings, incentive trips, and large group tours across India. We offer special group pricing, dedicated coordinators, and customized experiences. Contact us to discuss your requirements.",
  },
];

export const trustBadges = [
  { icon: "Shield", label: "Trusted Since 1994" },
  { icon: "Award", label: "Award-Winning Agency" },
  { icon: "Users", label: "5000+ Happy Customers" },
  { icon: "MapPin", label: "50+ Destinations" },
  { icon: "Star", label: "4.9★ Google Rating" },
  { icon: "Phone", label: "24/7 Support" },
];
