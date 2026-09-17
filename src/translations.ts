import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    whyChooseUs: string;
    gallery: string;
    contact: string;
    subtitle: string;
    open: string;
    call: string;
    whatsAppUs: string;
    location: string;
    langToggleAria: string;
    switchPrompt: string;
  };
  hero: {
    estBadge: string;
    name: string;
    tagline: string;
    description: string;
    exploreProducts: string;
    whatsAppUs: string;
    location: string;
    dependable: string;
    cardEstablished: string;
    cardServing: string;
    cardQuality: string;
    cardProducts: string;
    cardRetail: string;
  };
  trustStrip: {
    estTitle: string;
    estSub: string;
    qualityTitle: string;
    qualitySub: string;
    priceTitle: string;
    priceSub: string;
    serviceTitle: string;
    serviceSub: string;
  };
  about: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    cardBadge: string;
    cardTown: string;
    pin: string;
    floatingBadge: string;
  };
  products: {
    badge: string;
    heading: string;
    sub: string;
    enquireBtn: string;
    items: {
      glass: { name: string; description: string };
      doors: { name: string; description: string };
      windowGlass: { name: string; description: string };
      locksHandles: { name: string; description: string };
      bathroomFittings: { name: string; description: string };
      plywoodLaminates: { name: string; description: string };
    };
  };
  enquiry: {
    badge: string;
    heading: string;
    sub: string;
    enquireWhatsApp: string;
    callStore: string;
    directAssistance: string;
  };
  targetCustomers: {
    badge: string;
    heading: string;
    sub: string;
    sub2: string;
    items: {
      homeowners: { title: string; description: string };
      carpenters: { title: string; description: string };
      designers: { title: string; description: string };
      contractors: { title: string; description: string };
      builders: { title: string; description: string };
    };
  };
  whyChooseUs: {
    badge: string;
    heading: string;
    sub: string;
    items: {
      since1996: { title: string; description: string };
      quality: { title: string; description: string };
      price: { title: string; description: string };
      service: { title: string; description: string };
    };
  };
  commitment: {
    badge: string;
    heading: string;
    lead: string;
    sub: string;
  };
  gallery: {
    badge: string;
    heading: string;
    sub: string;
    close: string;
    enquireOnWhatsApp: string;
    items: {
      frosted: { title: string; category: string };
      rack: { title: string; category: string };
      towerBolt: { title: string; category: string };
      clear: { title: string; category: string };
      hinges: { title: string; category: string };
      tinted: { title: string; category: string };
      screws: { title: string; category: string };
      ultraClear: { title: string; category: string };
      nails: { title: string; category: string };
    };
  };
  contact: {
    badge: string;
    heading: string;
    sub: string;
    addressLabel: string;
    hoursLabel: string;
    phoneLabel: string;
    emailLabel: string;
    whatsAppLabel: string;
    getDirections: string;
    quickEnquiryTitle: string;
    quickEnquirySub: string;
    sendWhatsApp: string;
    callDirect: string;
    locationTag: string;
    actionHeading: string;
    callBtn: string;
    whatsAppBtn: string;
    emailBtn: string;
    directionsBtn: string;
    openMaps: string;
    mapNote: string;
    showroomHeading: string;
    showroomP1: string;
    showroomP2: string;
  };
  footer: {
    tagline: string;
    desc: string;
    quickLinks: string;
    categories: string;
    contactInfo: string;
    rights: string;
    servingSince: string;
    backToTop: string;
    hours: string;
  };
  floating: {
    call: string;
    whatsApp: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      whyChooseUs: 'Why Choose Us',
      gallery: 'Gallery',
      contact: 'Contact',
      subtitle: 'Hardware & Home Fittings • Est. 1996',
      open: 'Open',
      call: 'Call',
      whatsAppUs: 'WhatsApp Us',
      location: 'Biswanath Chariali, Assam (PIN: 784176)',
      langToggleAria: 'Select language: English or Assamese',
      switchPrompt: 'Language',
    },
    hero: {
      estBadge: 'Established 1996 • Biswanath Chariali, Assam',
      name: 'Amrit Glass',
      tagline: 'Quality Products. Better Prices. Trusted Service.',
      description: 'Trusted retail hardware and home-fittings solutions in Biswanath Chariali, Assam since 1996.',
      exploreProducts: 'Explore Products',
      whatsAppUs: 'WhatsApp Us',
      location: 'Sonitpur, Biswanath Chariali, Assam – 784176',
      dependable: 'Decades of Dependable Service',
      cardEstablished: 'Established',
      cardServing: 'Serving Assam Since 1996',
      cardQuality: 'Quality Products • Better Prices • Trusted Service',
      cardProducts: 'Glass • Doors • Locks • Fittings • Plywood',
      cardRetail: 'Retail Hardware Destination',
    },
    trustStrip: {
      estTitle: 'Established 1996',
      estSub: 'Decades of trusted local presence',
      qualityTitle: 'Quality Products',
      qualitySub: 'Dependable hardware & glass',
      priceTitle: 'Better Prices',
      priceSub: 'Competitive value for every project',
      serviceTitle: 'Trusted Service',
      serviceSub: 'Honest advice & lasting relations',
    },
    about: {
      badge: 'About Amrit Glass',
      heading: 'Serving Biswanath Chariali Since 1996',
      p1: 'Established in 1996, Amrit Glass is a trusted retail hardware and home-fittings business based in Biswanath Chariali, Assam. With decades of experience, we have built our business around providing quality products, competitive prices, and dependable service to our customers.',
      p2: 'We offer a wide range of products including glass, door and window glass locks, handles, bathroom fittings, plywood, and laminates.',
      p3: "Our products cater to a wide range of customers, including homeowners, carpenters, interior designers, contractors, and builders. Whether you're working on a new home, renovating an existing space, or handling a construction or interior project, we aim to make it easier for you to find the products you need.",
      cardBadge: 'Established 1996',
      cardTown: 'Biswanath Chariali',
      pin: 'PIN: 784176',
      floatingBadge: 'Reliable Retail Destination',
    },
    products: {
      badge: 'Hardware & Home Fittings Catalog',
      heading: 'Our Products',
      sub: 'We offer a comprehensive selection of quality glass, door and window hardware, bathroom accessories, plywood, and interior laminates for residential and commercial requirements.',
      enquireBtn: 'Enquire on WhatsApp',
      items: {
        glass: {
          name: 'Glass',
          description: 'Quality glass for homes, offices, doors, windows, and various interior requirements.',
        },
        doors: {
          name: 'Doors',
          description: 'A range of doors suitable for different home and project requirements, combining functionality and style.',
        },
        windowGlass: {
          name: 'Window Glass',
          description: 'Glass options for windows and other residential and commercial applications.',
        },
        locksHandles: {
          name: 'Locks & Handles',
          description: 'Practical and reliable hardware for doors and windows.',
        },
        bathroomFittings: {
          name: 'Bathroom Fittings',
          description: 'Essential fittings for comfortable and functional bathrooms.',
        },
        plywoodLaminates: {
          name: 'Plywood & Laminates',
          description: 'A range of plywood and laminates for furniture, interiors, and other applications.',
        },
      },
    },
    enquiry: {
      badge: 'Direct Enquiry & Support',
      heading: 'Looking for a specific product?',
      sub: 'Tell us what you need and get in touch with Amrit Glass.',
      enquireWhatsApp: 'Enquire on WhatsApp',
      callStore: 'Call Store',
      directAssistance: 'Direct assistance from our Biswanath Chariali store team',
    },
    targetCustomers: {
      badge: 'Who We Cater To',
      heading: 'Products for Every Project',
      sub: "Whether you're working on a new home, renovating an existing space, or handling a construction or interior project, we aim to make it easier to find the products you need.",
      sub2: 'From everyday home requirements to professional construction and interior projects, Amrit Glass aims to make it easier to find the products you need.',
      items: {
        homeowners: {
          title: 'Homeowners',
          description: 'Hardware, glass, and fittings for home renovations and new home construction.',
        },
        carpenters: {
          title: 'Carpenters',
          description: 'Dependable plywood, laminates, locks, handles, hinges, and essential fasteners.',
        },
        designers: {
          title: 'Interior Designers',
          description: 'Aesthetic glass panels, modern laminates, and refined hardware accessories.',
        },
        contractors: {
          title: 'Contractors',
          description: 'Reliable supply of architectural hardware, window glass, and fittings on schedule.',
        },
        builders: {
          title: 'Builders',
          description: 'Consistent quality materials for commercial and residential construction projects.',
        },
      },
    },
    whyChooseUs: {
      badge: 'Why Choose Amrit Glass',
      heading: 'Decades of Dependable Service',
      sub: 'Since 1996, Amrit Glass has been dedicated to providing quality products and honest service to the people of Biswanath Chariali and surrounding regions.',
      items: {
        since1996: {
          title: 'Since 1996',
          description: 'Decades of experience and a long-standing presence in Biswanath Chariali.',
        },
        quality: {
          title: 'Quality Products',
          description: 'A focus on offering dependable products that provide good value.',
        },
        price: {
          title: 'Better Prices',
          description: 'Competitive pricing to help customers get the best value for their requirements.',
        },
        service: {
          title: 'Trusted Service',
          description: 'We believe in serving our customers honestly and building relationships that last.',
        },
      },
    },
    commitment: {
      badge: 'Established Value',
      heading: 'Our Commitment',
      lead: 'At Amrit Glass, our goal is simple: to provide quality products at better prices while maintaining the trust of our customers.',
      sub: 'From everyday home requirements to professional construction and interior projects, we strive to be a reliable destination for hardware and home-fittings in Biswanath Chariali.',
    },
    gallery: {
      badge: 'Visual Catalog',
      heading: 'Product & Materials Gallery',
      sub: 'A look into the materials, glass varieties, fittings, and hardware solutions available at Amrit Glass in Biswanath Chariali.',
      close: 'Close',
      enquireOnWhatsApp: 'Enquire about this on WhatsApp',
      items: {
        frosted: {
          title: 'Sandblasted & Frosted Glass Panels',
          category: 'Window & Decorative Glass',
        },
        rack: {
          title: 'Glass Inventory & Storage Racks',
          category: 'Glass Warehouse',
        },
        towerBolt: {
          title: 'Sleek 2-in-1 Tower Bolt (12mm Rod)',
          category: 'Locks & Handles',
        },
        clear: {
          title: 'Clear Float Glass Sheets',
          category: 'Float Glass',
        },
        hinges: {
          title: 'Stainless Steel Door Hinges',
          category: 'Hardware & Fittings',
        },
        tinted: {
          title: 'Tinted & Architectural Float Glass',
          category: 'Float Glass',
        },
        screws: {
          title: 'Stainless Steel Screws & Fasteners',
          category: 'Hardware & Fasteners',
        },
        ultraClear: {
          title: 'Polished-Edge Float Glass',
          category: 'Glass Processing',
        },
        nails: {
          title: 'Chakra MS Wire Nails (Polished Finish)',
          category: 'Carpentry & Hardware',
        },
      },
    },
    contact: {
      badge: 'Location & Contact Details',
      heading: 'Visit Amrit Glass',
      sub: 'Reach out by phone, WhatsApp, email, or visit our retail store in Biswanath Chariali, Assam for all your hardware, glass, and home-fittings needs.',
      addressLabel: 'Address',
      hoursLabel: 'Opening Hours',
      phoneLabel: 'Phone Numbers',
      emailLabel: 'Email Address',
      whatsAppLabel: 'WhatsApp',
      getDirections: 'Get Directions on Google Maps',
      quickEnquiryTitle: 'Direct Store Enquiry',
      quickEnquirySub: 'Need a price quote or product availability check? Message us directly.',
      sendWhatsApp: 'Message on WhatsApp',
      callDirect: 'Call Directly',
      locationTag: 'Retail Store in Biswanath Chariali, Assam',
      actionHeading: 'Direct Contact Actions',
      callBtn: 'Call',
      whatsAppBtn: 'WhatsApp Us',
      emailBtn: 'Email Us',
      directionsBtn: 'Get Directions on Google Maps',
      openMaps: 'Open in Maps →',
      mapNote: 'Amrit Glass has served the local Biswanath Chariali community and surrounding projects since 1996.',
      showroomHeading: 'Showroom Visiting Hours',
      showroomP1: 'Our retail store is open daily from 9:00 AM – 7:30 PM (Sunday open half-day). Homeowners, carpenters, interior designers, contractors, and builders are welcome to visit to inspect hardware, fittings, glass, and materials in person.',
      showroomP2: 'For prompt product enquiries or checks, message us on WhatsApp or call ahead.',
    },
    footer: {
      tagline: 'Quality Products. Better Prices. Trusted Service.',
      desc: 'Trusted retail hardware and home-fittings business based in Biswanath Chariali, Assam since 1996.',
      quickLinks: 'Quick Links',
      categories: 'Product Categories',
      contactInfo: 'Contact Info',
      rights: 'All rights reserved.',
      servingSince: 'Serving Biswanath Chariali, Assam since 1996',
      backToTop: 'Back to top',
      hours: 'Hours: 9:00 AM – 7:30 PM (Open 7 Days)',
    },
    floating: {
      call: 'Call',
      whatsApp: 'WhatsApp',
    },
  },
  as: {
    nav: {
      home: 'প্ৰচ্ছদ',
      about: 'আমাৰ বিষয়ে',
      products: 'সামগ্ৰীসমূহ',
      whyChooseUs: 'কিয় বাচি ল’ব',
      gallery: 'গেলেৰী',
      contact: 'যোগাযোগ',
      subtitle: 'হাৰ্ডৱেৰ আৰু হোম ফিটিংস • প্ৰতিষ্ঠিত ১৯৯৬',
      open: 'খোলা থাকে',
      call: 'কল কৰক',
      whatsAppUs: 'হোৱাটছএপ কৰক',
      location: 'বিশ্বনাথ চাৰিআলি, অসম (পিন: ৭৮৪১৭৬)',
      langToggleAria: 'ভাষা নিৰ্বাচন কৰক: ইংৰাজী বা অসমীয়া',
      switchPrompt: 'ভাষা',
    },
    hero: {
      estBadge: '১৯৯৬ চনৰ পৰা প্ৰতিষ্ঠিত • বিশ্বনাথ চাৰিআলি, অসম',
      name: 'অমৃত গ্লাছ',
      tagline: 'উন্নত মানৰ সামগ্ৰী • উচিত মূল্য • বিশ্বাসযোগ্য সেৱা',
      description: '১৯৯৬ চনৰ পৰা অসমৰ বিশ্বনাথ চাৰিআলিত বিশ্বস্ত হাৰ্ডৱেৰ আৰু ঘৰুৱা ফিটিংসৰ নিৰ্ভৰযোগ্য সমাধান।',
      exploreProducts: 'সামগ্ৰীসমূহ চাওক',
      whatsAppUs: 'হোৱাটছএপ কৰক',
      location: 'শোণিতপুৰ, বিশ্বনাথ চাৰিআলি, অসম – ৭৮৪১৭৬',
      dependable: 'বহু দশকৰ নিৰ্ভৰযোগ্য সেৱা',
      cardEstablished: 'প্ৰতিষ্ঠিত',
      cardServing: '১৯৯৬ চনৰ পৰা অসমত সেৱা',
      cardQuality: 'উন্নত মানৰ সামগ্ৰী • উচিত মূল্য • বিশ্বাসযোগ্য সেৱা',
      cardProducts: 'গ্লাছ • দুৱাৰ • লক • ফিটিংস • প্লাইউড',
      cardRetail: 'খুচুৰা হাৰ্ডৱেৰ প্ৰতিষ্ঠান',
    },
    trustStrip: {
      estTitle: '১৯৯৬ চনত প্ৰতিষ্ঠিত',
      estSub: 'বহু দশকৰ বিশ্বস্ত স্থানীয় উপস্থিতি',
      qualityTitle: 'উন্নত মানৰ সামগ্ৰী',
      qualitySub: 'নিৰ্ভৰযোগ্য হাৰ্ডৱেৰ আৰু গ্লাছ',
      priceTitle: 'উচিত মূল্য',
      priceSub: 'প্ৰতিটো কামৰ বাবে উচিত মূল্য',
      serviceTitle: 'বিশ্বস্ত সেৱা',
      serviceSub: 'সৎ পৰামৰ্শ আৰু স্থায়ী সম্পৰ্ক',
    },
    about: {
      badge: 'অমৃত গ্লাছৰ বিষয়ে',
      heading: '১৯৯৬ চনৰ পৰা বিশ্বনাথ চাৰিআলিত সেৱা',
      p1: '১৯৯৬ চনত প্ৰতিষ্ঠিত, অমৃত গ্লাছ হৈছে অসমৰ বিশ্বনাথ চাৰিআলিত অৱস্থিত এটা বিশ্বস্ত খুচুৰা হাৰ্ডৱেৰ আৰু হোম-ফিটিংস ব্যৱসায়িক প্ৰতিষ্ঠান। বহু দশকৰ অভিজ্ঞতাৰে, আমি আমাৰ গ্ৰাহকসকলক গুণগত মানৰ সামগ্ৰী, উচিত মূল্য আৰু নিৰ্ভৰযোগ্য সেৱা প্ৰদান কৰি আহিছোঁ।',
      p2: 'আমি গ্লাছ, দুৱাৰ আৰু খিৰিকীৰ লক, হেণ্ডেল, বাথৰুমৰ ফিটিংস, প্লাইউড আৰু লেমিনেটকে ধৰি বিস্তৃত পৰিসৰৰ সামগ্ৰী আগবঢ়াওঁ।',
      p3: 'আমাৰ সামগ্ৰীসমূহে গৃহস্থ, কাঠমিস্ত্ৰী, ইণ্টেৰিয়ৰ ডিজাইনাৰ, ঠিকাদাৰ আৰু বিল্ডাৰকে ধৰি সকলো শ্ৰেণীৰ গ্ৰাহকৰ প্ৰয়োজনীয়তা পূৰণ কৰে। আপুনি নতুন ঘৰ সাজিছে, পুৰণি ঠাই সজাইছে বা কোনো নিৰ্মাণ প্ৰকল্প চলাই আছে, আপোনাৰ প্ৰয়োজনীয় সামগ্ৰী সহজে উপলব্ধ কৰাই আমাৰ লক্ষ্য।',
      cardBadge: 'প্ৰতিষ্ঠিত ১৯৯৬',
      cardTown: 'বিশ্বনাথ চাৰিআলি',
      pin: 'পিন: ৭৮৪১৭৬',
      floatingBadge: 'নিৰ্ভৰযোগ্য খুচুৰা প্ৰতিষ্ঠান',
    },
    products: {
      badge: 'হাৰ্ডৱেৰ আৰু হোম ফিটিংস তালিকা',
      heading: 'আমাৰ সামগ্ৰীসমূহ',
      sub: 'আমি আৱাসিক আৰু ব্যৱসায়িক প্ৰয়োজনৰ বাবে উন্নত মানৰ গ্লাছ, দুৱাৰ আৰু খিৰিকীৰ হাৰ্ডৱেৰ, বাথৰুমৰ ফিটিংস, প্লাইউড আৰু ইণ্টেৰিয়ৰ লেমিনেটৰ এক বিশাল সম্ভাৰ আগবঢ়াওঁ।',
      enquireBtn: 'হোৱাটছএপত সোধক',
      items: {
        glass: {
          name: 'গ্লাছ',
          description: 'ঘৰ, কাৰ্যালয়, দুৱাৰ, খিৰিকী আৰু বিভিন্ন ইণ্টেৰিয়ৰ প্ৰয়োজনৰ বাবে উন্নত মানৰ গ্লাছ।',
        },
        doors: {
          name: 'দুৱাৰ আৰু ফিটিংস',
          description: 'ঘৰ আৰু প্ৰকল্পৰ বাবে কাৰ্যকৰী আৰু আকৰ্ষণীয় বিভিন্ন দুৱাৰ আৰু ফিটিংস।',
        },
        windowGlass: {
          name: 'খিৰিকীৰ গ্লাছ',
          description: 'খিৰিকী আৰু অন্যান্য আৱাসিক তথা ব্যৱসায়িক কামৰ বাবে বিভিন্ন গ্লাছৰ বিকল্প।',
        },
        locksHandles: {
          name: 'লক আৰু হেণ্ডেল',
          description: 'দুৱাৰ আৰু খিৰিকীৰ বাবে কাৰ্যকৰী আৰু নিৰ্ভৰযোগ্য হাৰ্ডৱেৰ সামগ্ৰী।',
        },
        bathroomFittings: {
          name: 'বাথৰুম ফিটিংস',
          description: 'আৰামদায়ক আৰু কাৰ্যকৰী বাথৰুমৰ বাবে অত্যাৱশ্যকীয় ফিটিংস আৰু সামগ্ৰী।',
        },
        plywoodLaminates: {
          name: 'প্লাইউড আৰু লেমিনেট',
          description: 'আচবাব, ইণ্টেৰিয়ৰ আৰু অন্যান্য কামৰ বাবে বিভিন্ন প্লাইউড আৰু লেমিনেট।',
        },
      },
    },
    enquiry: {
      badge: 'পোনপটীয়া সোধা-পোছা আৰু সহায়',
      heading: 'নিৰ্দিষ্ট কোনো সামগ্ৰী বিচাৰিছে নেকি?',
      sub: 'আপোনাক কি প্ৰয়োজন জনাওক আৰু অমৃত গ্লাছৰ সৈতে যোগাযোগ কৰক।',
      enquireWhatsApp: 'হোৱাটছএপত সোধক',
      callStore: 'দোকানলৈ কল কৰক',
      directAssistance: 'বিশ্বনাথ চাৰিআলিৰ আমাৰ দলৰ পৰা পোনপটীয়া সহায়',
    },
    targetCustomers: {
      badge: 'আমি কাক সেৱা আগবঢ়াওঁ',
      heading: 'প্ৰতিটো কামৰ বাবে উপযুক্ত সামগ্ৰী',
      sub: 'আপুনি নতুন ঘৰ নিৰ্মাণ কৰিছে, পুৰণি ঘৰ মেৰামতি কৰিছে, বা কোনো নিৰ্মাণ প্ৰকল্প চলাই আছে, প্ৰয়োজনীয় সামগ্ৰী বিচাৰি পোৱাটো সহজ কৰাই আমাৰ লক্ষ্য।',
      sub2: 'দৈনন্দিন ঘৰুৱা প্ৰয়োজনৰ পৰা আৰম্ভ কৰি পেছাদাৰী নিৰ্মাণ আৰু ইণ্টেৰিয়ৰ প্ৰকল্পলৈকে, অমৃত গ্লাছে আপোনাৰ প্ৰয়োজনীয় সামগ্ৰী সহজলভ্য কৰে।',
      items: {
        homeowners: {
          title: 'গৃহস্থ / ঘৰৰ গৰাকী',
          description: 'ঘৰ মেৰামতি আৰু নতুন ঘৰ নিৰ্মাণৰ বাবে হাৰ্ডৱেৰ, গ্লাছ আৰু ফিটিংস।',
        },
        carpenters: {
          title: 'বাঢ়ৈ / কাঠমিস্ত্ৰী',
          description: 'নিৰ্ভৰযোগ্য প্লাইউড, লেমিনেট, লক, হেণ্ডেল, হিংগ আৰু যাৱতীয় সামগ্ৰী।',
        },
        designers: {
          title: 'ইণ্টেৰিয়ৰ ডিজাইনাৰ',
          description: 'আকৰ্ষণীয় গ্লাছ পেনেল, আধুনিক লেমিনেট আৰু মাৰ্জিত হাৰ্ডৱেৰ সামগ্ৰী।',
        },
        contractors: {
          title: 'ঠিকাদাৰ',
          description: 'সময়মতে নিৰ্মাণ হাৰ্ডৱেৰ, খিৰিকীৰ গ্লাছ আৰু ফিটিংসৰ নিৰ্ভৰযোগ্য যোগান।',
        },
        builders: {
          title: 'নিৰ্মাণকৰ্তা / বিল্ডাৰ',
          description: 'ব্যৱসায়িক আৰু আৱাসিক নিৰ্মাণ প্ৰকল্পৰ বাবে নিৰন্তৰ মানসম্পন্ন সামগ্ৰী।',
        },
      },
    },
    whyChooseUs: {
      badge: 'অমৃত গ্লাছ কিয় বাচি ল’ব',
      heading: 'বহু দশকৰ নিৰ্ভৰযোগ্য সেৱা',
      sub: '১৯৯৬ চনৰ পৰা, অমৃত গ্লাছে বিশ্বনাথ চাৰিআলি আৰু ওচৰ-পাজৰৰ অঞ্চলৰ ৰাইজক উন্নত মানৰ সামগ্ৰী আৰু সৎ সেৱা আগবঢ়াই আহিছে।',
      items: {
        since1996: {
          title: '১৯৯৬ চনৰ পৰা',
          description: 'বহু দশকৰ অভিজ্ঞতা আৰু বিশ্বনাথ চাৰিআলিত দীৰ্ঘদিনীয়া উপস্থিতি।',
        },
        quality: {
          title: 'উন্নত মানৰ সামগ্ৰী',
          description: 'উচিত মূল্যৰ লগতে নিৰ্ভৰযোগ্য সামগ্ৰী প্ৰদান কৰাত সদায় গুৰুত্ব।',
        },
        price: {
          title: 'উচিত মূল্য',
          description: 'গ্ৰাহকসকলে যাতে তেওঁলোকৰ প্ৰয়োজন অনুসৰি সঠিক মূল্য পায় তাৰ প্ৰতিশ্ৰুতি।',
        },
        service: {
          title: 'বিশ্বস্ত সেৱা',
          description: 'আমি গ্ৰাহকক নিষ্ঠাৰে সেৱা আগবঢ়োৱা আৰু স্থায়ী সম্পৰ্ক গঢ়ি তোলাত বিশ্বাসী।',
        },
      },
    },
    commitment: {
      badge: 'বিশ্বস্ত প্ৰতিশ্ৰুতি',
      heading: 'আমাৰ প্ৰতিশ্ৰুতি',
      lead: 'অমৃত গ্লাছত, আমাৰ লক্ষ্য সহজ: উন্নত মানৰ সামগ্ৰী উচিত মূল্যত যোগান ধৰা আৰু গ্ৰাহকৰ বিশ্বাস অটুট ৰখা।',
      sub: 'দৈনন্দিন ঘৰৰ প্ৰয়োজনীয়তাৰ পৰা আৰম্ভ কৰি পেছাদাৰী নিৰ্মাণ আৰু ইণ্টেৰিয়ৰ প্ৰকল্পলৈকে, আমি বিশ্বনাথ চাৰিআলিত হাৰ্ডৱেৰ আৰু হোম-ফিটিংসৰ এক নিৰ্ভৰযোগ্য ঠিকনা হ’বলৈ যত্নপৰ।',
    },
    gallery: {
      badge: 'সামগ্ৰীৰ প্ৰদৰ্শনী',
      heading: 'সামগ্ৰী আৰু উপকৰণৰ গেলেৰী',
      sub: 'বিশ্বনাথ চাৰিআলিৰ অমৃত গ্লাছত উপলব্ধ বিভিন্ন গ্লাছ, ফিটিংস আৰু হাৰ্ডৱেৰ সামগ্ৰীৰ এক আভাস।',
      close: 'বন্ধ কৰক',
      enquireOnWhatsApp: 'এই বিষয়ে হোৱাটছএপত সোধক',
      items: {
        frosted: {
          title: 'ছেণ্ডব্লাষ্টেড আৰু ফ্ৰষ্টেড গ্লাছ পেনেল',
          category: 'খিৰিকী আৰু ডেকোৰেটিভ গ্লাছ',
        },
        rack: {
          title: 'গ্লাছ মজুত আৰু সংৰক্ষণ ৰেক',
          category: 'গ্লাছ গুদাম',
        },
        towerBolt: {
          title: 'স্লিক ২-ইন-১ টাৱাৰ বল্ট (১২ মিমি ৰড)',
          category: 'লক আৰু হেণ্ডেল',
        },
        clear: {
          title: 'স্বচ্ছ ফ্লট গ্লাছ শ্বীট',
          category: 'ফ্লট গ্লাছ',
        },
        hinges: {
          title: 'ষ্টেইনলেছ ষ্টীলৰ দুৱাৰৰ হিংগ',
          category: 'হাৰ্ডৱেৰ আৰু ফিটিংস',
        },
        tinted: {
          title: 'টিন্টেড আৰু আৰ্কিটেকচাৰেল গ্লাছ',
          category: 'ফ্লট গ্লাছ',
        },
        screws: {
          title: 'ষ্টেইনলেছ ষ্টীলৰ স্ক্রু আৰু নাট-বল্টু',
          category: 'হাৰ্ডৱেৰ আৰু নাট-বল্টু',
        },
        ultraClear: {
          title: 'পলিছ কৰা ফ্লট গ্লাছ',
          category: 'গ্লাছ প্ৰচেছিং',
        },
        nails: {
          title: 'চক্র এমএছ ৱায়াৰ নেইল (পলিছ ফিনিশ)',
          category: 'কাঠৰ কাম আৰু হাৰ্ডৱেৰ',
        },
      },
    },
    contact: {
      badge: 'ঠিকনা আৰু যোগাযোগৰ বিৱৰণ',
      heading: 'অমৃত গ্লাছলৈ আহক',
      sub: 'আপোনাৰ সকলো হাৰ্ডৱেৰ, গ্লাছ আৰু হোম-ফিটিংসৰ প্ৰয়োজনৰ বাবে ফোন, হোৱাটছএপ, ইমেইলৰ জৰিয়তে যোগাযোগ কৰক বা অসমৰ বিশ্বনাথ চাৰিআলিস্থিত আমাৰ দোকানলৈ আহক।',
      addressLabel: 'ঠিকনা',
      hoursLabel: 'খোলাৰ সময়',
      phoneLabel: 'ফোন নম্বৰ',
      emailLabel: 'ইমেইল ঠিকনা',
      whatsAppLabel: 'হোৱাটছএপ',
      getDirections: 'গুগল মেপ্সত পথ চাওক',
      quickEnquiryTitle: 'দোকানলৈ পোনপটীয়া সোধা-পোছা',
      quickEnquirySub: 'মূল্য বা সামগ্ৰীৰ উপলব্ধতা জানিব বিচাৰে নেকি? আমাক পোনপটীয়াকৈ বাৰ্তা পঠিয়াওক।',
      sendWhatsApp: 'হোৱাটছএপত বাৰ্তা পঠিয়াওক',
      callDirect: 'পোনপটীয়াকৈ কল কৰক',
      locationTag: 'বিশ্বনাথ চাৰিআলি, অসমস্থিত খুচুৰা দোকান',
      actionHeading: 'পোনপটীয়া যোগাযোগৰ ব্যৱস্থা',
      callBtn: 'কল কৰক',
      whatsAppBtn: 'হোৱাটছএপ কৰক',
      emailBtn: 'ইমেইল কৰক',
      directionsBtn: 'গুগল মেপ্সত পথ চাওক',
      openMaps: 'মেপ্সত খোলক →',
      mapNote: '১৯৯৬ চনৰ পৰা অমৃত গ্লাছে বিশ্বনাথ চাৰিআলি আৰু ওচৰ-পাজৰৰ অঞ্চলত বিশ্বস্ত সেৱা আগবঢ়াই আহিছে।',
      showroomHeading: 'দোকান খোলাৰ সময়',
      showroomP1: 'আমাৰ দোকান প্ৰতিদিনে পুৱা ৯:০০ বজাৰ পৰা সন্ধিয়া ৭:৩০ বজালৈ খোলা থাকে (দেওবাৰে আধা দিন)। ঘৰৰ মালিক, বাঢ়ৈ, ইণ্টেৰিয়ৰ ডিজাইনাৰ, ঠিকাদাৰ আৰু বিল্ডাৰসকলে ব্যক্তিগতভাৱে সামগ্ৰী চাবলৈ আহিব পাৰে।',
      showroomP2: 'শীঘ্ৰে তথ্য বা সামগ্ৰীৰ উপলব্ধতা জানিবলৈ হোৱাটছএপত বাৰ্তা দিয়ক বা ফোন কৰক।',
    },
    footer: {
      tagline: 'উন্নত মানৰ সামগ্ৰী • উচিত মূল্য • বিশ্বাসযোগ্য সেৱা',
      desc: '১৯৯৬ চনৰ পৰা অসমৰ বিশ্বনাথ চাৰিআলিত বিশ্বস্ত হাৰ্ডৱেৰ আৰু হোম-ফিটিংসৰ ব্যৱসায়িক প্ৰতিষ্ঠান।',
      quickLinks: 'প্ৰয়োজনীয় লিংক',
      categories: 'সামগ্ৰীৰ শ্ৰেণীসমূহ',
      contactInfo: 'যোগাযোগ',
      rights: 'সকলো অধিকাৰ সংৰক্ষিত।',
      servingSince: '১৯৯৬ চনৰ পৰা বিশ্বনাথ চাৰিআলি, অসমত সেৱাৰত',
      backToTop: 'ওপৰলৈ যাওক',
      hours: 'সময়: পুৱা ৯:০০ - সন্ধিয়া ৭:৩০ (সপ্তাহৰ ৭ দিন খোলা)',
    },
    floating: {
      call: 'কল',
      whatsApp: 'হোৱাটছএপ',
    },
  },
};
