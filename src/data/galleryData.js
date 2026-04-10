/**
 * Gallery Data - Comprehensive collection of India's attractions
 * Used by the Gallery page for displaying images with filtering options
 */

export const galleryData = [
  // Heritage Sites
  {
    id: 1,
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    category: "Heritage",
    image: "https://cdn.pixabay.com/photo/2019/03/12/20/19/india-4051753_1280.jpg",
    description: "Symbol of love and one of the Seven Wonders of the World",
    region: "North India"
  },
  {
    id: 2,
    name: "Hawa Mahal",
    state: "Rajasthan",
    category: "Heritage",
    image: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg",
    description: "The iconic Pink City's most recognizable structure",
    region: "North India"
  },
  {
    id: 3,
    name: "Qutub Minar",
    state: "Delhi",
    category: "Heritage",
    image: "https://cdn.pixabay.com/photo/2017/03/19/08/01/qutub-minar-2155776_1280.jpg",
    description: "Ancient minaret standing tall in New Delhi",
    region: "North India"
  },
  {
    id: 4,
    name: "Meenakshi Temple",
    state: "Tamil Nadu",
    category: "Heritage",
    image: "https://wallpapercave.com/wp/wp6874238.jpg",
    description: "Magnificent ancient temple with intricate architecture",
    region: "South India"
  },
  {
    id: 5,
    name: "Lepakshi Temple",
    state: "Andhra Pradesh",
    category: "Heritage",
    image: "https://cdn.pixabay.com/photo/2015/05/20/07/57/lepakshi-774935_1280.jpg",
    description: "Historic temple famous for hanging pillar architecture",
    region: "South India"
  },
  {
    id: 6,
    name: "Khajuraho Temples",
    state: "Madhya Pradesh",
    category: "Heritage",
    image: "https://cdn.pixabay.com/photo/2018/12/17/14/57/mahadev-3880539_1280.jpg",
    description: "UNESCO World Heritage site with medieval architecture",
    region: "Central India"
  },

  // Beaches
  {
    id: 7,
    name: "Goa Beaches",
    state: "Goa",
    category: "Beach",
    image: "https://cdn.pixabay.com/photo/2020/04/13/08/32/zzz-5037255_1280.jpg",
    description: "Golden sands and azure waters of Western coast",
    region: "West India"
  },
  {
    id: 8,
    name: "Kerala Backwaters",
    state: "Kerala",
    category: "Beach",
    image: "https://cdn.pixabay.com/photo/2017/10/04/17/51/alleppey-2817032_1280.jpg",
    description: "Serene backwaters with lush greenery",
    region: "South India"
  },
  {
    id: 9,
    name: "Visakhapatnam Beach",
    state: "Andhra Pradesh",
    category: "Beach",
    image: "https://wallpaperaccess.com/full/9095531.jpg",
    description: "Beautiful coastal city with scenic views",
    region: "South India"
  },
  {
    id: 10,
    name: "Mararikulam Beach",
    state: "Kerala",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    description: "Pristine beach with traditional fishing villages",
    region: "South India"
  },
  {
    id: 11,
    name: "Puri Beach",
    state: "Odisha",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    description: "Famous beach pilgrimage destination",
    region: "East India"
  },
  {
    id: 12,
    name: "Andaman Beach",
    state: "Andaman and Nicobar",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    description: "Tropical paradise with turquoise waters",
    region: "Islands"
  },

  // Mountains
  {
    id: 13,
    name: "Himalayas",
    state: "Himachal Pradesh",
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "The majestic mountain range of North India",
    region: "North India"
  },
  {
    id: 14,
    name: "Manali Valley",
    state: "Himachal Pradesh",
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1532286682325-8f98bd7ec935?w=600&h=400&fit=crop",
    description: "Adventure paradise surrounded by snow-capped peaks",
    region: "North India"
  },
  {
    id: 15,
    name: "Darjeeling Hills",
    state: "West Bengal",
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "Tea gardens and misty mountain vistas",
    region: "East India"
  },
  {
    id: 16,
    name: "Araku Valley",
    state: "Andhra Pradesh",
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop",
    description: "Coffee plantations and scenic hill station",
    region: "South India"
  },
  {
    id: 17,
    name: "Munnar",
    state: "Kerala",
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "Hill station with tea plantations and misty landscape",
    region: "South India"
  },
  {
    id: 18,
    name: "Ooty",
    state: "Tamil Nadu",
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1532286682325-8f98bd7ec935?w=600&h=400&fit=crop",
    description: "Queen of Hill Stations with lush green valleys",
    region: "South India"
  },

  // Temples
  {
    id: 19,
    name: "Tirupati Balaji",
    state: "Andhra Pradesh",
    category: "Temples",
    image: "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=600&h=400&fit=crop",
    description: "One of the most visited temples in the world",
    region: "South India"
  },
  {
    id: 20,
    name: "Varanasi Ghats",
    state: "Uttar Pradesh",
    category: "Temples",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "Sacred pilgrimage site by the Ganges river",
    region: "North India"
  },
  {
    id: 21,
    name: "Jagannath Temple",
    state: "Odisha",
    category: "Temples",
    image: "https://images.unsplash.com/photo-1627033021637-6a71c89eacdd?w=600&h=400&fit=crop",
    description: "Ancient temple with spiritual significance",
    region: "East India"
  },
  {
    id: 22,
    name: "Kashi Vishwanath",
    state: "Uttar Pradesh",
    category: "Temples",
    image: "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=600&h=400&fit=crop",
    description: "One of the most important temples in Varanasi",
    region: "North India"
  },
  {
    id: 23,
    name: "Rameshwaram Temple",
    state: "Tamil Nadu",
    category: "Temples",
    image: "https://images.unsplash.com/photo-1627033021637-6a71c89eacdd?w=600&h=400&fit=crop",
    description: "Sacred shrine with stunning temples architecture",
    region: "South India"
  },
  {
    id: 24,
    name: "Dwarka Temple",
    state: "Gujarat",
    category: "Temples",
    image: "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=600&h=400&fit=crop",
    description: "Ancient temple dedicated to Lord Krishna",
    region: "West India"
  },

  // Nature & Wildlife
  {
    id: 25,
    name: "Jim Corbett National Park",
    state: "Uttarakhand",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1511301211335-2bee24b4f0f4?w=600&h=400&fit=crop",
    description: "India's first national park with tiger reserves",
    region: "North India"
  },
  {
    id: 26,
    name: "Western Ghats",
    state: "Karnataka",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "Biodiversity hotspot with lush forests",
    region: "South India"
  },
  {
    id: 27,
    name: "Sundarbans",
    state: "West Bengal",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1511301211335-2bee24b4f0f4?w=600&h=400&fit=crop",
    description: "Mangrove forests and Bengal tigers",
    region: "East India"
  },
  {
    id: 28,
    name: "Rann of Kutch",
    state: "Gujarat",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "White salt desert with unique landscape",
    region: "West India"
  },
  {
    id: 29,
    name: "Khazuraho Wildlife",
    state: "Madhya Pradesh",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1511301211335-2bee24b4f0f4?w=600&h=400&fit=crop",
    description: "Diverse wildlife and natural beauty",
    region: "Central India"
  },
  {
    id: 30,
    name: "Nandi Hills",
    state: "Karnataka",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "Scenic hill station with panoramic views",
    region: "South India"
  },

  // Cities
  {
    id: 31,
    name: "Mumbai City",
    state: "Maharashtra",
    category: "Cities",
    image: "https://images.unsplash.com/photo-1517488881594-2787fef5ebf7?w=600&h=400&fit=crop",
    description: "The financial capital with vibrant street life",
    region: "West India"
  },
  {
    id: 32,
    name: "Delhi Old City",
    state: "Delhi",
    category: "Cities",
    image: "https://images.unsplash.com/photo-1517488881594-2787fef5ebf7?w=600&h=400&fit=crop",
    description: "Historic lanes and bustling bazaars",
    region: "North India"
  },
  {
    id: 33,
    name: "Bangalore City",
    state: "Karnataka",
    category: "Cities",
    image: "https://images.unsplash.com/photo-1517488881594-2787fef5ebf7?w=600&h=400&fit=crop",
    description: "IT hub with modern infrastructure",
    region: "South India"
  },
  {
    id: 34,
    name: "Kolkata Streets",
    state: "West Bengal",
    category: "Cities",
    image: "https://images.unsplash.com/photo-1517488881594-2787fef5ebf7?w=600&h=400&fit=crop",
    description: "Cultural capital with literary heritage",
    region: "East India"
  },
  {
    id: 35,
    name: "Jaipur City",
    state: "Rajasthan",
    category: "Cities",
    image: "https://images.unsplash.com/photo-1517488881594-2787fef5ebf7?w=600&h=400&fit=crop",
    description: "The Pink City with grand architecture",
    region: "North India"
  },
  {
    id: 36,
    name: "Cochin Backwaters",
    state: "Kerala",
    category: "Cities",
    image: "https://images.unsplash.com/photo-1517488881594-2787fef5ebf7?w=600&h=400&fit=crop",
    description: "Port city with historic spice markets",
    region: "South India"
  },
];

/**
 * Extract unique states from gallery data
 */
export const getUniqueStates = () => {
  const states = new Set(galleryData.map(item => item.state));
  return Array.from(states).sort();
};

/**
 * Extract unique categories from gallery data
 */
export const getUniqueCategories = () => {
  const categories = new Set(galleryData.map(item => item.category));
  return Array.from(categories).sort();
};
