import frostedGlassImg from '../assets/images/frosted_glass_panel.webp';
import tintedGlassImg from '../assets/images/tinted_float_glass.jpg';
import chakraNailsImg from '../assets/images/chakra_wire_nails.jpg';
import doorHingesImg from '../assets/images/door_hinges.jpg';
import clearFloatGlassImg from '../assets/images/clear_float_glass.jpg';
import ultraClearGlassImg from '../assets/images/ultra_clear_float_glass.jpg';
import glassRackImg from '../assets/images/architectural_glass_rack.jpg';
import towerBoltImg from '../assets/images/tower_bolt.jpg';
import ssScrewsImg from '../assets/images/stainless_steel_screws.jpeg';
import windowGlassStockImg from '../assets/images/window_glass_stock.jpg';

import { ProductCategory, WhyChoosePoint, TargetAudience, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Amrit Glass',
  tagline: 'Quality Products. Better Prices. Trusted Service.',
  established: '1996',
  location: {
    address: 'Sonitpur, Biswanath Chariali',
    state: 'Assam',
    country: 'India',
    pin: '784176',
    fullDisplay: 'Sonitpur, Biswanath Chariali, Assam, India – 784176',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Amrit+Glass+Biswanath+Chariali+Assam+784176',
    embedUrl: 'https://maps.google.com/maps?q=Biswanath+Chariali,+Assam+784176&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  phones: [
    { number: '8638143412', display: '+91 86381 43412' },
    { number: '9435279299', display: '+91 94352 79299' },
  ],
  whatsapp: {
    number: '8638143412',
    display: '+91 86381 43412',
    link: (customText?: string) => {
      const text = customText || 'Hello Amrit Glass, I would like to enquire about a product.';
      return `https://wa.me/918638143412?text=${encodeURIComponent(text)}`;
    },
  },
  email: 'aarjya6@gmail.com',
  openingHours: '9:00 AM to 8:30 PM',
  businessDescription:
    "Established in 1996, Amrit Glass is a trusted retail hardware and home-fittings business based in Biswanath Chariali, Assam. With decades of experience, we have built our business around providing quality products, competitive prices, and dependable service to our customers.\n\nWe offer a wide range of products including glass, door and window glass locks, handles, bathroom fittings, plywood, and laminates.\n\nOur products cater to a wide range of customers, including homeowners, carpenters, interior designers, contractors, and builders. Whether you're working on a new home, renovating an existing space, or handling a construction or interior project, we aim to make it easier for you to find the products you need.",
  commitment: {
    heading: 'Our Commitment',
    lead: 'At Amrit Glass, our goal is simple: to provide quality products at better prices while maintaining the trust of our customers.',
    sub: 'From everyday home requirements to professional construction and interior projects, we strive to be a reliable destination for hardware and home-fittings in Biswanath Chariali.',
  },
};

export const HERO_IMAGE = glassRackImg;

export const PRODUCTS: ProductCategory[] = [
  {
    id: 'glass',
    name: 'Glass',
    description: 'Quality glass for homes, offices, doors, windows, and various interior requirements.',
    image: clearFloatGlassImg,
    altText: 'Quality architectural clear float glass sheets and panels at Amrit Glass showroom',
  },
  {
    id: 'doors',
    name: 'Doors',
    description: 'A range of doors suitable for different home and project requirements, combining functionality and style.',
    image: doorHingesImg,
    altText: 'Durable stainless steel door hinges, door fittings and hardware accessories at Amrit Glass',
  },
  {
    id: 'window-glass',
    name: 'Window Glass',
    description: 'Glass options for windows and other residential and commercial applications.',
    image: frostedGlassImg,
    altText: 'Decorative sandblasted and frosted window glass panels for homes and offices',
  },
  {
    id: 'locks-handles',
    name: 'Locks & Handles',
    description: 'Practical and reliable hardware for doors and windows.',
    image: towerBoltImg,
    altText: 'Heavy-duty sleek tower bolts, locks, latches, and architectural fittings',
  },
  {
    id: 'bathroom-fittings',
    name: 'Bathroom Fittings',
    description: 'Essential fittings for comfortable and functional bathrooms.',
    image: tintedGlassImg,
    altText: 'Tinted and toughened glass panels and fittings for bathroom partitions and interiors',
  },
  {
    id: 'plywood-laminates',
    name: 'Plywood & Laminates',
    description: 'A range of plywood and laminates for furniture, interiors, and other applications.',
    image: chakraNailsImg,
    altText: 'Carpentry and furniture essentials including Chakra MS wire nails and fasteners',
  },
];

export const WHY_CHOOSE_US: WhyChoosePoint[] = [
  {
    title: 'Since 1996',
    description: 'Decades of experience and a long-standing presence in Biswanath Chariali.',
    iconName: 'Award',
  },
  {
    title: 'Quality Products',
    description: 'A focus on offering dependable products that provide good value.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Better Prices',
    description: 'Competitive pricing to help customers get the best value for their requirements.',
    iconName: 'Tag',
  },
  {
    title: 'Trusted Service',
    description: 'We believe in serving our customers honestly and building relationships that last.',
    iconName: 'Handshake',
  },
];

export const TARGET_CUSTOMERS: TargetAudience[] = [
  {
    title: 'Homeowners',
    description: 'Hardware, glass, and fittings for home renovations and new home construction.',
    iconName: 'Home',
  },
  {
    title: 'Carpenters',
    description: 'Dependable plywood, laminates, locks, handles, hinges, and essential fasteners.',
    iconName: 'Hammer',
  },
  {
    title: 'Interior Designers',
    description: 'Aesthetic glass panels, modern laminates, and refined hardware accessories.',
    iconName: 'Compass',
  },
  {
    title: 'Contractors',
    description: 'Reliable supply of architectural hardware, window glass, and fittings on schedule.',
    iconName: 'HardHat',
  },
  {
    title: 'Builders',
    description: 'Consistent quality materials for commercial and residential construction projects.',
    iconName: 'Building2',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-frosted',
    title: 'Sandblasted & Frosted Glass Panels',
    category: 'Window & Decorative Glass',
    image: frostedGlassImg,
    altText: '4mm and 5mm sandblasted frosted glass panel with uniform privacy texture',
  },
  {
    id: 'g-rack',
    title: 'Glass Inventory & Storage Racks',
    category: 'Glass Warehouse',
    image: glassRackImg,
    altText: 'Architectural glass inventory stacked on storage racks at Amrit Glass',
  },
  {
    id: 'g-tower-bolt',
    title: 'Sleek 2-in-1 Tower Bolt (12mm Rod)',
    category: 'Locks & Handles',
    image: towerBoltImg,
    altText: 'Sleek 2-in-1 stainless steel door tower bolt with 12mm solid rod',
  },
  {
    id: 'g-clear',
    title: 'Clear Float Glass Sheets',
    category: 'Float Glass',
    image: clearFloatGlassImg,
    altText: 'High clarity clear float glass sheets',
  },
  {
    id: 'g-hinges',
    title: 'Stainless Steel Door Hinges',
    category: 'Hardware & Fittings',
    image: doorHingesImg,
    altText: 'Heavy-duty stainless steel butt hinges for doors and windows',
  },
  {
    id: 'g-tinted',
    title: 'Tinted & Architectural Float Glass',
    category: 'Float Glass',
    image: tintedGlassImg,
    altText: 'Dark tinted architectural float glass panels',
  },
  {
    id: 'g-screws',
    title: 'Stainless Steel Screws & Fasteners',
    category: 'Hardware & Fasteners',
    image: ssScrewsImg,
    altText: 'Stainless steel self-tapping screws and hardware fasteners',
  },
  {
    id: 'g-ultra-clear',
    title: 'Polished-Edge Float Glass',
    category: 'Glass Processing',
    image: ultraClearGlassImg,
    altText: 'Polished and beveled edge glass sheets stacked',
  },
  {
    id: 'g-nails',
    title: 'Chakra MS Wire Nails (Polished Finish)',
    category: 'Carpentry & Hardware',
    image: chakraNailsImg,
    altText: 'Chakra brand mild steel wire nails with bright polished finish',
  },
];
