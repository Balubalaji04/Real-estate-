export const brand = {
  name: 'Skyline Properties',
  tagline: 'Homes that rise above the ordinary.',
  description:
    'Curated residences and investment properties across the city’s most sought-after skyline addresses.',
  phone: '+1 (212) 555-0148',
  email: 'hello@skylineproperties.com',
  address: '1200 Horizon Avenue, Suite 400, New York, NY 10001',
}

export const navLinks = [
  { label: 'Homes', href: '#properties' },
  { label: 'Agents', href: '#agents' },
  { label: 'Enquire', href: '#enquiry' },
  { label: 'Visit', href: '#map' },
]

export const hero = {
  headline: 'Find your place in the skyline.',
  subheadline:
    'Browse exclusive listings with concierge-level guidance from our specialist agents.',
  ctaPrimary: 'Explore listings',
  ctaSecondary: 'Speak to an agent',
  search: {
    locations: ['Any location', 'Manhattan', 'Brooklyn', 'Queens', 'Jersey City'],
    propertyTypes: ['Any type', 'Apartment', 'Penthouse', 'Townhouse', 'Condo'],
    priceRanges: [
      'Any price',
      'Under $750k',
      '$750k – $1.5M',
      '$1.5M – $3M',
      '$3M+',
    ],
  },
}

export const propertyTypes = ['All', 'Apartment', 'Penthouse', 'Townhouse', 'Condo']

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'beds-desc', label: 'Most Bedrooms' },
]

export const properties = [
  {
    id: 'sp-01',
    title: 'Aether Residences, Floor 42',
    location: 'Manhattan',
    type: 'Penthouse',
    price: 4850000,
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A luminous penthouse with wraparound terraces, floor-to-ceiling glass, and uninterrupted Hudson views. Private elevator lobby and chef’s kitchen with Calacatta marble.',
    amenities: ['Terrace', 'Private elevator', 'Wine cellar', 'Smart home'],
  },
  {
    id: 'sp-02',
    title: 'Harbor Line Condo 12B',
    location: 'Brooklyn',
    type: 'Condo',
    price: 1295000,
    beds: 2,
    baths: 2,
    sqft: 1180,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Waterfront living with a sunlit open plan, white oak floors, and a balcony overlooking the marina. Building amenities include a rooftop lounge and fitness studio.',
    amenities: ['Waterfront', 'Rooftop', 'Gym', 'Doorman'],
  },
  {
    id: 'sp-03',
    title: 'Cobble Court Townhouse',
    location: 'Brooklyn',
    type: 'Townhouse',
    price: 2750000,
    beds: 5,
    baths: 4,
    sqft: 4100,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A restored brownstone with original moldings, a landscaped garden, and a modern garden-level suite ideal for guests or a home office.',
    amenities: ['Garden', 'Fireplace', 'Parking', 'Renovated kitchen'],
  },
  {
    id: 'sp-04',
    title: 'Vista Tower Apartment 1804',
    location: 'Jersey City',
    type: 'Apartment',
    price: 895000,
    beds: 2,
    baths: 2,
    sqft: 1020,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Corner unit with dual exposures, quartz counters, and a deeded parking space. Minutes to PATH and waterfront parks.',
    amenities: ['Corner unit', 'Parking', 'Concierge', 'Pool'],
  },
  {
    id: 'sp-05',
    title: 'Goldcrest Loft 7A',
    location: 'Manhattan',
    type: 'Apartment',
    price: 1625000,
    beds: 3,
    baths: 2,
    sqft: 1680,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Industrial loft character meets refined finishes — soaring ceilings, polished concrete, and a flexible third bedroom or studio.',
    amenities: ['High ceilings', 'In-unit laundry', 'Storage', 'Pet friendly'],
  },
  {
    id: 'sp-06',
    title: 'Queensbridge Sky Condo',
    location: 'Queens',
    type: 'Condo',
    price: 745000,
    beds: 1,
    baths: 1,
    sqft: 780,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Efficient luxury for the urban professional — floor-to-ceiling windows, custom closets, and access to a shared rooftop terrace.',
    amenities: ['Rooftop', 'Custom closets', 'Bike room', 'Near subway'],
  },
]

export const agents = [
  {
    id: 'ag-01',
    name: 'Amelia Crowe',
    role: 'Senior Broker',
    focus: 'Manhattan penthouses',
    phone: '+1 (212) 555-0191',
    email: 'amelia@skylineproperties.com',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Fifteen years guiding buyers through trophy residences and off-market opportunities.',
  },
  {
    id: 'ag-02',
    name: 'Marcus Hale',
    role: 'Investment Specialist',
    focus: 'Multi-family & condos',
    phone: '+1 (212) 555-0174',
    email: 'marcus@skylineproperties.com',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'Data-led strategy for clients building long-term portfolios across the metro.',
  },
  {
    id: 'ag-03',
    name: 'Sofia Nguyen',
    role: 'Residential Advisor',
    focus: 'Family townhouses',
    phone: '+1 (212) 555-0162',
    email: 'sofia@skylineproperties.com',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'Known for warm counsel and meticulous neighborhood matches for growing families.',
  },
]

export const enquiry = {
  title: 'Start a conversation',
  subtitle:
    'Tell us what you’re looking for and a Skyline advisor will respond within one business day.',
  interests: ['Buying', 'Selling', 'Renting', 'Investment'],
  successMessage: 'Thank you — your enquiry has been received. We’ll be in touch shortly.',
}

export const mapSection = {
  title: 'Visit our gallery',
  subtitle: 'Drop by our Horizon Avenue showroom or schedule a private viewing.',
  coords: '40.7580° N, 73.9855° W',
  lat: 40.758,
  lng: -73.9855,
  hours: [
    { day: 'Mon – Fri', time: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'By appointment' },
  ],
  // Google Maps embed — Midtown Manhattan (Horizon Avenue showroom)
  embedUrl:
    'https://maps.google.com/maps?q=1200+Broadway%2C+New+York%2C+NY+10001&z=15&output=embed',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=40.758,-73.9855',
}

export const footer = {
  blurb:
    'Skyline Properties connects discerning buyers with landmark residences across New York’s most elevated addresses.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Listings', href: '#properties' },
        { label: 'Agents', href: '#agents' },
        { label: 'Enquire', href: '#enquiry' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#hero' },
        { label: 'Visit', href: '#map' },
        { label: 'Contact', href: '#enquiry' },
      ],
    },
  ],
  legal: '© 2026 Skyline Properties. All rights reserved.',
}

export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function matchesPriceRange(price, range) {
  switch (range) {
    case 'Under $750k':
      return price < 750000
    case '$750k – $1.5M':
      return price >= 750000 && price <= 1500000
    case '$1.5M – $3M':
      return price > 1500000 && price <= 3000000
    case '$3M+':
      return price > 3000000
    default:
      return true
  }
}
