const places = [
  {
    name: "Tirupati Balaji Temple",
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    region: "South India",
    category: "Spiritual",
    description: "One of the most visited and sacred temples in India",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Sep to Mar",
    entryFee: "Free (Special darshan tickets available)",
    nearbyAttractions: ["Chandragiri Fort", "Sri Kapileswara Swamy Temple"],
    locationLink: "https://www.google.com/maps/place/Tirupati+Balaji+Temple"
  },
  {
    name: "Visakhapatnam Beach",
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    region: "South India",
    category: "Beach",
    description: "Beautiful coastal city with scenic beaches",
    images: [
      "https://images.unsplash.com/photo-1587614382346-acf1c2c7f27d?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["RK Beach", "Kailasagiri"],
    locationLink: "https://www.google.com/maps/place/Visakhapatnam+Beach"
  },
  {
    name: "Araku Valley",
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    region: "South India",
    category: "Nature",
    description: "Hill station known for coffee plantations and waterfalls",
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Borra Caves", "Katiki Waterfalls"],
    locationLink: "https://www.google.com/maps/place/Araku+Valley"
  },
  {
    name: "Lepakshi Temple",
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    region: "South India",
    category: "Heritage",
    description: "Historic temple famous for hanging pillar architecture",
    images: [
      "https://images.unsplash.com/photo-1627033021637-6a71c89eacdd?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Nandi Statue", "Veerabhadra Temple"],
    locationLink: "https://www.google.com/maps/place/Lepakshi+Temple"
  },
  {
    name: "Tawang Monastery",
    state: "Arunachal Pradesh",
    stateSlug: "arunachal-pradesh",
    region: "North-East India",
    category: "Spiritual",
    description: "Largest monastery in India with stunning mountain views",
    images: [
      "https://images.unsplash.com/photo-1615966650071-855b15f29ad1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Sela Pass", "Madhuri Lake"],
    locationLink: "https://www.google.com/maps/place/Tawang+Monastery"
  },
  {
    name: "Ziro Valley",
    state: "Arunachal Pradesh",
    stateSlug: "arunachal-pradesh",
    region: "North-East India",
    category: "Nature",
    description: "Famous for rice fields and Apatani tribe culture",
    images: [
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Talley Valley Wildlife Sanctuary", "Ziro Festival Grounds"],
    locationLink: "https://www.google.com/maps/place/Ziro+Valley"
  },
  {
    name: "Sela Pass",
    state: "Arunachal Pradesh",
    stateSlug: "arunachal-pradesh",
    region: "North-East India",
    category: "Adventure",
    description: "High-altitude mountain pass with breathtaking views",
    images: [
      "https://images.unsplash.com/photo-1621595800632-7c2b9c6f53a0?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Sela Lake", "Tawang"],
    locationLink: "https://www.google.com/maps/place/Sela+Pass"
  },
  {
    name: "Namdapha National Park",
    state: "Arunachal Pradesh",
    stateSlug: "arunachal-pradesh",
    region: "North-East India",
    category: "Wildlife",
    description: "Rich biodiversity and wildlife sanctuary",
    images: [
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Miao Town", "Deban Camp"],
    locationLink: "https://www.google.com/maps/place/Namdapha+National+Park"
  },
  {
    name: "Kaziranga National Park",
    state: "Assam",
    stateSlug: "assam",
    region: "North-East India",
    category: "Wildlife",
    description: "Home to the one-horned rhinoceros",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Orang National Park", "Tea Gardens of Assam"],
    locationLink: "https://www.google.com/maps/place/Kaziranga+National+Park"
  },
  {
    name: "Majuli Island",
    state: "Assam",
    stateSlug: "assam",
    region: "North-East India",
    category: "Nature",
    description: "World’s largest river island",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Satras (Monasteries)", "Brahmaputra River"],
    locationLink: "https://www.google.com/maps/place/Majuli+Island"
  },
  {
    name: "Kamakhya Temple",
    state: "Assam",
    stateSlug: "assam",
    region: "North-East India",
    category: "Spiritual",
    description: "Sacred Hindu pilgrimage site",
    images: [
      "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free (special darshan tickets available)",
    nearbyAttractions: ["Umananda Temple", "Brahmaputra River"],
    locationLink: "https://www.google.com/maps/place/Kamakhya+Temple"
  },
  {
    name: "Chitrakote Falls",
    state: "Chhattisgarh",
    stateSlug: "chhattisgarh",
    region: "Central India",
    category: "Nature",
    description: "India’s widest waterfall",
    images: [
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Jul to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Tirathgarh Falls", "Jagdalpur"],
    locationLink: "https://www.google.com/maps/place/Chitrakote+Falls"
  },
  {
    name: "Kanger Valley National Park",
    state: "Chhattisgarh",
    stateSlug: "chhattisgarh",
    region: "Central India",
    category: "Wildlife",
    description: "Famous for caves and biodiversity",
    images: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Jun",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Kutumsar Caves", "Tirathgarh Falls"],
    locationLink: "https://www.google.com/maps/place/Kanger+Valley+National+Park"
  },
  {
    name: "Bodh Gaya",
    state: "Bihar",
    stateSlug: "bihar",
    region: "East India",
    category: "Spiritual",
    description: "Place where Buddha attained enlightenment",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Mahabodhi Temple", "Great Buddha Statue"],
    locationLink: "https://www.google.com/maps/place/Bodh+Gaya"
  },
  {
    name: "Nalanda University",
    state: "Bihar",
    stateSlug: "bihar",
    region: "East India",
    category: "Heritage",
    description: "Ancient center of learning",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Nalanda Archaeological Museum", "Rajgir"],
    locationLink: "https://www.google.com/maps/place/Nalanda+University"
  },
  {
    name: "Baga Beach",
    state: "Goa",
    stateSlug: "goa",
    region: "West India",
    category: "Beach",
    description: "Popular beach known for nightlife and water sports",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Calangute Beach", "Anjuna Beach"],
    locationLink: "https://www.google.com/maps/place/Baga+Beach"
  },
  {
    name: "Dudhsagar Falls",
    state: "Goa",
    stateSlug: "goa",
    region: "West India",
    category: "Nature",
    description: "Spectacular four-tiered waterfall",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Jul to Oct",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Mollem National Park", "Bhagwan Mahavir Sanctuary"],
    locationLink: "https://www.google.com/maps/place/Dudhsagar+Falls"
  },
  {
    name: "Basilica of Bom Jesus",
    state: "Goa",
    stateSlug: "goa",
    region: "West India",
    category: "Heritage",
    description: "UNESCO World Heritage church",
    images: [
      "https://images.unsplash.com/photo-1581852017103-68bda5a3c4e0?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Se Cathedral", "Old Goa"],
    locationLink: "https://www.google.com/maps/place/Basilica+of+Bom+Jesus"
  },
  {
    name: "Anjuna Flea Market",
    state: "Goa",
    stateSlug: "goa",
    region: "West India",
    category: "Shopping",
    description: "Famous market for shopping and local culture",
    images: [
      "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Anjuna Beach", "Vagator Beach"],
    locationLink: "https://www.google.com/maps/place/Anjuna+Flea+Market"
  },
  {
    name: "Rann of Kutch",
    state: "Gujarat",
    stateSlug: "gujarat",
    region: "West India",
    category: "Nature",
    description: "White salt desert famous for Rann Utsav",
    images: [
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Entry fee (Rann Utsav passes)",
    nearbyAttractions: ["Kalo Dungar", "Kutch Villages"],
    locationLink: "https://www.google.com/maps/place/Rann+of+Kutch"
  },
  {
    name: "Gir National Park",
    state: "Gujarat",
    stateSlug: "gujarat",
    region: "West India",
    category: "Wildlife",
    description: "Home to Asiatic lions",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Dec to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Devalia Safari Park", "Somnath"],
    locationLink: "https://www.google.com/maps/place/Gir+National+Park"
  },
  {
    name: "Somnath Temple",
    state: "Gujarat",
    stateSlug: "gujarat",
    region: "West India",
    category: "Spiritual",
    description: "One of the 12 Jyotirlingas",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Triveni Sangam", "Somnath Beach"],
    locationLink: "https://www.google.com/maps/place/Somnath+Temple"
  },
  {
    name: "Kurukshetra",
    state: "Haryana",
    stateSlug: "haryana",
    region: "North India",
    category: "Heritage",
    description: "Historic battlefield of Mahabharata",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Brahma Sarovar", "Jyotisar"],
    locationLink: "https://www.google.com/maps/place/Kurukshetra"
  },
  {
    name: "Sultanpur National Park",
    state: "Haryana",
    stateSlug: "haryana",
    region: "North India",
    category: "Wildlife",
    description: "Bird sanctuary near Gurgaon",
    images: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Damdama Lake", "Gurgaon"],
    locationLink: "https://www.google.com/maps/place/Sultanpur+National+Park"
  },
  {
    name: "Manali",
    state: "Himachal Pradesh",
    stateSlug: "himachal-pradesh",
    region: "North India",
    category: "Nature",
    description: "Popular hill station for snow and adventure sports",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb (snow), Mar to Jun (pleasant)",
    entryFee: "No entry fee",
    nearbyAttractions: ["Solang Valley", "Rohtang Pass"],
    locationLink: "https://www.google.com/maps/place/Manali"
  },
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    stateSlug: "himachal-pradesh",
    region: "North India",
    category: "Heritage",
    description: "Colonial hill station and capital city",
    images: [
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to Jun, Dec to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Mall Road", "Kufri"],
    locationLink: "https://www.google.com/maps/place/Shimla"
  },
  {
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    stateSlug: "himachal-pradesh",
    region: "North India",
    category: "Adventure",
    description: "Cold desert mountain valley",
    images: [
      "https://images.unsplash.com/photo-1549887534-3db0b0c7b1e0?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Key Monastery", "Chandratal Lake"],
    locationLink: "https://www.google.com/maps/place/Spiti+Valley"
  },
  {
    name: "Hundru Falls",
    state: "Jharkhand",
    stateSlug: "jharkhand",
    region: "East India",
    category: "Nature",
    description: "One of the highest waterfalls in India",
    images: [
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Jul to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Dassam Falls", "Jonha Falls"],
    locationLink: "https://www.google.com/maps/place/Hundru+Falls"
  },
  {
    name: "Betla National Park",
    state: "Jharkhand",
    stateSlug: "jharkhand",
    region: "East India",
    category: "Wildlife",
    description: "Wildlife sanctuary with forests and forts",
    images: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Palamu Fort", "Netarhat"],
    locationLink: "https://www.google.com/maps/place/Betla+National+Park"
  },
  {
    name: "Hampi",
    state: "Karnataka",
    stateSlug: "karnataka",
    region: "South India",
    category: "Heritage",
    description: "Ancient ruins of Vijayanagara Empire",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee for monuments",
    nearbyAttractions: ["Virupaksha Temple", "Vittala Temple"],
    locationLink: "https://www.google.com/maps/place/Hampi"
  },
  {
    name: "Mysore Palace",
    state: "Karnataka",
    stateSlug: "karnataka",
    region: "South India",
    category: "Heritage",
    description: "Royal palace with stunning architecture",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Chamundi Hills", "Brindavan Gardens"],
    locationLink: "https://www.google.com/maps/place/Mysore+Palace"
  },
  {
    name: "Coorg",
    state: "Karnataka",
    stateSlug: "karnataka",
    region: "South India",
    category: "Nature",
    description: "Hill station known for coffee plantations",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Abbey Falls", "Dubare Elephant Camp"],
    locationLink: "https://www.google.com/maps/place/Coorg"
  },
  {
    name: "Gokarna Beach",
    state: "Karnataka",
    stateSlug: "karnataka",
    region: "South India",
    category: "Beach",
    description: "Peaceful alternative to Goa beaches",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Om Beach", "Kudle Beach"],
    locationLink: "https://www.google.com/maps/place/Gokarna+Beach"
  },
  {
    name: "Bandipur National Park",
    state: "Karnataka",
    stateSlug: "karnataka",
    region: "South India",
    category: "Wildlife",
    description: "Famous wildlife sanctuary",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to May",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Mudumalai National Park", "Ooty"],
    locationLink: "https://www.google.com/maps/place/Bandipur+National+Park"
  },
  {
    name: "Jog Falls",
    state: "Karnataka",
    stateSlug: "karnataka",
    region: "South India",
    category: "Nature",
    description: "One of India’s highest waterfalls",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Jul to Sep",
    entryFee: "No entry fee",
    nearbyAttractions: ["Sharavathi Valley", "Linganamakki Dam"],
    locationLink: "https://www.google.com/maps/place/Jog+Falls"
  },
  {
    name: "Alleppey Backwaters",
    state: "Kerala",
    stateSlug: "kerala",
    region: "South India",
    category: "Nature",
    description: "Houseboat cruises through scenic canals",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Boat charges applicable",
    nearbyAttractions: ["Vembanad Lake", "Kumarakom"],
    locationLink: "https://www.google.com/maps/place/Alleppey+Backwaters"
  },
  {
    name: "Munnar",
    state: "Kerala",
    stateSlug: "kerala",
    region: "South India",
    category: "Nature",
    description: "Tea plantations and hills",
    images: [
      "https://images.unsplash.com/photo-1606584281852-f74c0e9ad200?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Sep to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Eravikulam National Park", "Mattupetty Dam"],
    locationLink: "https://www.google.com/maps/place/Munnar"
  },
  {
    name: "Wayanad",
    state: "Kerala",
    stateSlug: "kerala",
    region: "South India",
    category: "Nature",
    description: "Waterfalls and wildlife",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to May",
    entryFee: "No entry fee",
    nearbyAttractions: ["Edakkal Caves", "Banasura Sagar Dam"],
    locationLink: "https://www.google.com/maps/place/Wayanad"
  },
  {
    name: "Kovalam Beach",
    state: "Kerala",
    stateSlug: "kerala",
    region: "South India",
    category: "Beach",
    description: "Famous beach destination",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Lighthouse Beach", "Varkala Beach"],
    locationLink: "https://www.google.com/maps/place/Kovalam+Beach"
  },
  {
    name: "Thekkady",
    state: "Kerala",
    stateSlug: "kerala",
    region: "South India",
    category: "Wildlife",
    description: "Periyar wildlife sanctuary",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Jun",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Periyar Lake", "Spice Plantations"],
    locationLink: "https://www.google.com/maps/place/Thekkady"
  },
  {
    name: "Fort Kochi",
    state: "Kerala",
    stateSlug: "kerala",
    region: "South India",
    category: "Heritage",
    description: "Colonial history and culture",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Chinese Fishing Nets", "Mattancherry Palace"],
    locationLink: "https://www.google.com/maps/place/Fort+Kochi"
  },
  {
    name: "Khajuraho Temples",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    region: "Central India",
    category: "Heritage",
    description: "Famous for intricate carvings",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Raneh Falls", "Panna National Park"],
    locationLink: "https://www.google.com/maps/place/Khajuraho+Temples"
  },
  {
    name: "Bandhavgarh National Park",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    region: "Central India",
    category: "Wildlife",
    description: "Tiger reserve",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Jun",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Tala Zone", "Bandhavgarh Fort"],
    locationLink: "https://www.google.com/maps/place/Bandhavgarh+National+Park"
  },
  {
    name: "Sanchi Stupa",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    region: "Central India",
    category: "Heritage",
    description: "Buddhist heritage site",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Udayagiri Caves", "Vidisha"],
    locationLink: "https://www.google.com/maps/place/Sanchi+Stupa"
  },
  {
    name: "Pachmarhi",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    region: "Central India",
    category: "Nature",
    description: "Hill station",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Jun",
    entryFee: "No entry fee",
    nearbyAttractions: ["Bee Falls", "Dhoopgarh"],
    locationLink: "https://www.google.com/maps/place/Pachmarhi"
  },
  {
    name: "Bhimbetka Caves",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    region: "Central India",
    category: "Heritage",
    description: "Prehistoric rock shelters",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Bhojpur Temple", "Bhopal"],
    locationLink: "https://www.google.com/maps/place/Bhimbetka+Caves"
  },
  {
    name: "Kanha National Park",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    region: "Central India",
    category: "Wildlife",
    description: "Inspired Jungle Book forests",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Jun",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Kisli Zone", "Mandla"],
    locationLink: "https://www.google.com/maps/place/Kanha+National+Park"
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    region: "West India",
    category: "City",
    description: "Financial capital of India",
    images: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Gateway of India", "Marine Drive"],
    locationLink: "https://www.google.com/maps/place/Mumbai"
  },
  {
    name: "Ajanta Caves",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    region: "West India",
    category: "Heritage",
    description: "Ancient Buddhist caves",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Ellora Caves", "Aurangabad"],
    locationLink: "https://www.google.com/maps/place/Ajanta+Caves"
  },
  {
    name: "Ellora Caves",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    region: "West India",
    category: "Heritage",
    description: "Rock-cut architecture",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Ajanta Caves", "Grishneshwar Temple"],
    locationLink: "https://www.google.com/maps/place/Ellora+Caves"
  },
  {
    name: "Lonavala",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    region: "West India",
    category: "Nature",
    description: "Popular hill station",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Jun to Sep",
    entryFee: "No entry fee",
    nearbyAttractions: ["Tiger Point", "Bhushi Dam"],
    locationLink: "https://www.google.com/maps/place/Lonavala"
  },
  {
    name: "Mahabaleshwar",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    region: "West India",
    category: "Nature",
    description: "Strawberry farms and viewpoints",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Jun",
    entryFee: "No entry fee",
    nearbyAttractions: ["Venna Lake", "Arthur's Seat"],
    locationLink: "https://www.google.com/maps/place/Mahabaleshwar"
  },
  {
    name: "Alibaug Beach",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    region: "West India",
    category: "Beach",
    description: "Coastal getaway near Mumbai",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Kolaba Fort", "Nagaon Beach"],
    locationLink: "https://www.google.com/maps/place/Alibaug+Beach"
  },
  {
    name: "Loktak Lake",
    state: "Manipur",
    stateSlug: "manipur",
    region: "North-East India",
    category: "Nature",
    description: "Floating lake with phumdis",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Sendra Island", "Keibul Lamjao National Park"],
    locationLink: "https://www.google.com/maps/place/Loktak+Lake"
  },
  {
    name: "Keibul Lamjao National Park",
    state: "Manipur",
    stateSlug: "manipur",
    region: "North-East India",
    category: "Wildlife",
    description: "Floating national park",
    images: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Loktak Lake", "Moirang"],
    locationLink: "https://www.google.com/maps/place/Keibul+Lamjao+National+Park"
  },
  {
    name: "Imphal",
    state: "Manipur",
    stateSlug: "manipur",
    region: "North-East India",
    category: "City",
    description: "Capital city with history",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Ima Keithel", "Kangla Fort"],
    locationLink: "https://www.google.com/maps/place/Imphal"
  },
  {
    name: "Kangla Fort",
    state: "Manipur",
    stateSlug: "manipur",
    region: "North-East India",
    category: "Heritage",
    description: "Historic fort",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Imphal River", "Shree Govindajee Temple"],
    locationLink: "https://www.google.com/maps/place/Kangla+Fort"
  },
  {
    name: "Ukhrul",
    state: "Manipur",
    stateSlug: "manipur",
    region: "North-East India",
    category: "Nature",
    description: "Hill station with scenic beauty",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to Jun",
    entryFee: "No entry fee",
    nearbyAttractions: ["Shirui Hills", "Khayang Peak"],
    locationLink: "https://www.google.com/maps/place/Ukhrul"
  },
  {
    name: "Shirui Hills",
    state: "Manipur",
    stateSlug: "manipur",
    region: "North-East India",
    category: "Nature",
    description: "Famous for Shirui Lily",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Jun",
    entryFee: "No entry fee",
    nearbyAttractions: ["Ukhrul", "Shirui Peak"],
    locationLink: "https://www.google.com/maps/place/Shirui+Hills"
  },
  {
    name: "Cherrapunji",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    region: "North-East India",
    category: "Nature",
    description: "One of the wettest places on Earth",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to May",
    entryFee: "No entry fee",
    nearbyAttractions: ["Nohkalikai Falls", "Living Root Bridges"],
    locationLink: "https://www.google.com/maps/place/Cherrapunji"
  },
  {
    name: "Shillong",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    region: "North-East India",
    category: "City",
    description: "Scenic hill station and capital",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Sep to May",
    entryFee: "No entry fee",
    nearbyAttractions: ["Umiam Lake", "Elephant Falls"],
    locationLink: "https://www.google.com/maps/place/Shillong"
  },
  {
    name: "Living Root Bridges",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    region: "North-East India",
    category: "Nature",
    description: "Unique natural bridges",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Cherrapunji", "Nongriat Village"],
    locationLink: "https://www.google.com/maps/place/Living+Root+Bridges"
  },
  {
    name: "Dawki River",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    region: "North-East India",
    category: "Nature",
    description: "Crystal clear river",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Boat charges applicable",
    nearbyAttractions: ["India-Bangladesh Border", "Shnongpdeng"],
    locationLink: "https://www.google.com/maps/place/Dawki+River"
  },
  {
    name: "Mawsmai Caves",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    region: "North-East India",
    category: "Adventure",
    description: "Famous limestone caves",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Cherrapunji", "Nohsngithiang Falls"],
    locationLink: "https://www.google.com/maps/place/Mawsmai+Caves"
  },
  {
    name: "Elephant Falls",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    region: "North-East India",
    category: "Nature",
    description: "Beautiful multi-tier waterfall",
    images: [
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Sep to Dec",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Shillong", "Shillong Peak"],
    locationLink: "https://www.google.com/maps/place/Elephant+Falls"
  },
  {
    name: "Aizawl",
    state: "Mizoram",
    stateSlug: "mizoram",
    region: "North-East India",
    category: "City",
    description: "Capital city with scenic views",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Durtlang Hills", "Solomon's Temple"],
    locationLink: "https://www.google.com/maps/place/Aizawl"
  },
  {
    name: "Reiek Hills",
    state: "Mizoram",
    stateSlug: "mizoram",
    region: "North-East India",
    category: "Nature",
    description: "Panoramic hilltop views",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Reiek Village", "Aizawl"],
    locationLink: "https://www.google.com/maps/place/Reiek+Hills"
  },
  {
    name: "Phawngpui Peak",
    state: "Mizoram",
    stateSlug: "mizoram",
    region: "North-East India",
    category: "Adventure",
    description: "Highest peak in Mizoram",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Blue Mountain National Park", "Sangau"],
    locationLink: "https://www.google.com/maps/place/Phawngpui+Peak"
  },
  {
    name: "Vantawng Falls",
    state: "Mizoram",
    stateSlug: "mizoram",
    region: "North-East India",
    category: "Nature",
    description: "Highest waterfall in the state",
    images: [
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Jul to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Thenzawl", "Serchhip"],
    locationLink: "https://www.google.com/maps/place/Vantawng+Falls"
  },
  {
    name: "Tam Dil Lake",
    state: "Mizoram",
    stateSlug: "mizoram",
    region: "North-East India",
    category: "Nature",
    description: "Serene lake surrounded by forest",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Apr",
    entryFee: "No entry fee",
    nearbyAttractions: ["Saitual", "Aizawl"],
    locationLink: "https://www.google.com/maps/place/Tam+Dil+Lake"
  },
  {
    name: "Murlen National Park",
    state: "Mizoram",
    stateSlug: "mizoram",
    region: "North-East India",
    category: "Wildlife",
    description: "Rich biodiversity",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Champhai", "Ngengpui Wildlife Sanctuary"],
    locationLink: "https://www.google.com/maps/place/Murlen+National+Park"
  },
  {
    name: "Kohima",
    state: "Nagaland",
    stateSlug: "nagaland",
    region: "North-East India",
    category: "City",
    description: "Capital city with history",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to May",
    entryFee: "No entry fee",
    nearbyAttractions: ["Kohima War Cemetery", "Dzukou Valley"],
    locationLink: "https://www.google.com/maps/place/Kohima"
  },
  {
    name: "Dzukou Valley",
    state: "Nagaland",
    stateSlug: "nagaland",
    region: "North-East India",
    category: "Nature",
    description: "Valley of flowers",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Jun to Sep",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Japfu Peak", "Kohima"],
    locationLink: "https://www.google.com/maps/place/Dzukou+Valley"
  },
  {
    name: "Hornbill Festival",
    state: "Nagaland",
    stateSlug: "nagaland",
    region: "North-East India",
    category: "Festival",
    description: "Cultural festival",
    images: [
      "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Dec",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Kisama Heritage Village", "Kohima"],
    locationLink: "https://www.google.com/maps/place/Hornbill+Festival"
  },
  {
    name: "Japfu Peak",
    state: "Nagaland",
    stateSlug: "nagaland",
    region: "North-East India",
    category: "Adventure",
    description: "Second highest peak",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Apr",
    entryFee: "No entry fee",
    nearbyAttractions: ["Dzukou Valley", "Kohima"],
    locationLink: "https://www.google.com/maps/place/Japfu+Peak"
  },
  {
    name: "Mon District",
    state: "Nagaland",
    stateSlug: "nagaland",
    region: "North-East India",
    category: "Culture",
    description: "Tribal heritage",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Apr",
    entryFee: "No entry fee",
    nearbyAttractions: ["Longwa Village", "Veda Peak"],
    locationLink: "https://www.google.com/maps/place/Mon+District"
  },
  {
    name: "Kohima War Cemetery",
    state: "Nagaland",
    stateSlug: "nagaland",
    region: "North-East India",
    category: "Heritage",
    description: "WWII memorial",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to May",
    entryFee: "No entry fee",
    nearbyAttractions: ["Kohima", "State Museum"],
    locationLink: "https://www.google.com/maps/place/Kohima+War+Cemetery"
  },
  {
    name: "Konark Sun Temple",
    state: "Odisha",
    stateSlug: "odisha",
    region: "East India",
    category: "Heritage",
    description: "UNESCO heritage temple",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Chandrabhaga Beach", "Puri"],
    locationLink: "https://www.google.com/maps/place/Konark+Sun+Temple"
  },
  {
    name: "Puri Beach",
    state: "Odisha",
    stateSlug: "odisha",
    region: "East India",
    category: "Beach",
    description: "Popular beach destination",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Jagannath Temple", "Chilika Lake"],
    locationLink: "https://www.google.com/maps/place/Puri+Beach"
  },
  {
    name: "Jagannath Temple",
    state: "Odisha",
    stateSlug: "odisha",
    region: "East India",
    category: "Spiritual",
    description: "Sacred Hindu temple",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free (restricted entry for non-Hindus)",
    nearbyAttractions: ["Puri Beach", "Gundicha Temple"],
    locationLink: "https://www.google.com/maps/place/Jagannath+Temple"
  },
  {
    name: "Chilika Lake",
    state: "Odisha",
    stateSlug: "odisha",
    region: "East India",
    category: "Nature",
    description: "Largest coastal lagoon",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Boat charges applicable",
    nearbyAttractions: ["Satapada", "Nalabana Bird Sanctuary"],
    locationLink: "https://www.google.com/maps/place/Chilika+Lake"
  },
  {
    name: "Simlipal National Park",
    state: "Odisha",
    stateSlug: "odisha",
    region: "East India",
    category: "Wildlife",
    description: "Wildlife sanctuary",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Jun",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Barehipani Falls", "Joranda Falls"],
    locationLink: "https://www.google.com/maps/place/Simlipal+National+Park"
  },
  {
    name: "Dhauli Hills",
    state: "Odisha",
    stateSlug: "odisha",
    region: "East India",
    category: "Heritage",
    description: "Buddhist peace pagoda",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Shanti Stupa", "Bhubaneswar"],
    locationLink: "https://www.google.com/maps/place/Dhauli+Hills"
  },
  {
    name: "Golden Temple",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    category: "Spiritual",
    description: "Holiest Sikh shrine",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Jallianwala Bagh", "Amritsar"],
    locationLink: "https://www.google.com/maps/place/Golden+Temple"
  },
  {
    name: "Jallianwala Bagh",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    category: "Heritage",
    description: "Historic memorial",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Golden Temple", "Partition Museum"],
    locationLink: "https://www.google.com/maps/place/Jallianwala+Bagh"
  },
  {
    name: "Wagah Border",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    category: "Event",
    description: "Border ceremony",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Attari", "Amritsar"],
    locationLink: "https://www.google.com/maps/place/Wagah+Border"
  },
  {
    name: "Amritsar",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    category: "City",
    description: "Cultural city",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Golden Temple", "Durgiana Temple"],
    locationLink: "https://www.google.com/maps/place/Amritsar"
  },
  {
    name: "Anandpur Sahib",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    category: "Spiritual",
    description: "Religious site",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Virasat-e-Khalsa", "Naina Devi Temple"],
    locationLink: "https://www.google.com/maps/place/Anandpur+Sahib"
  },
  {
    name: "Patiala",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    category: "Heritage",
    description: "Royal heritage city",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Qila Mubarak", "Sheesh Mahal"],
    locationLink: "https://www.google.com/maps/place/Patiala"
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    category: "City",
    description: "Pink City",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Amber Fort", "Hawa Mahal"],
    locationLink: "https://www.google.com/maps/place/Jaipur"
  },
  {
    name: "Udaipur",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    category: "City",
    description: "City of Lakes",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Lake Pichola", "City Palace"],
    locationLink: "https://www.google.com/maps/place/Udaipur"
  },
  {
    name: "Jaisalmer Fort",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    category: "Heritage",
    description: "Golden Fort",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Patwon Ki Haveli", "Sam Sand Dunes"],
    locationLink: "https://www.google.com/maps/place/Jaisalmer+Fort"
  },
  {
    name: "Pushkar",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    category: "Spiritual",
    description: "Holy town and fair",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Nov",
    entryFee: "No entry fee",
    nearbyAttractions: ["Pushkar Lake", "Brahma Temple"],
    locationLink: "https://www.google.com/maps/place/Pushkar"
  },
  {
    name: "Mount Abu",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    category: "Nature",
    description: "Hill station",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Nakki Lake", "Dilwara Temples"],
    locationLink: "https://www.google.com/maps/place/Mount+Abu"
  },
  {
    name: "Thar Desert",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    category: "Adventure",
    description: "Desert safari experience",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Safari charges applicable",
    nearbyAttractions: ["Jaisalmer", "Sam Sand Dunes"],
    locationLink: "https://www.google.com/maps/place/Thar+Desert"
  },
  {
    name: "Gangtok",
    state: "Sikkim",
    stateSlug: "sikkim",
    region: "North-East India",
    category: "City",
    description: "Capital city",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to Jun, Sep to Dec",
    entryFee: "No entry fee",
    nearbyAttractions: ["MG Marg", "Rumtek Monastery"],
    locationLink: "https://www.google.com/maps/place/Gangtok"
  },
  {
    name: "Tsomgo Lake",
    state: "Sikkim",
    stateSlug: "sikkim",
    region: "North-East India",
    category: "Nature",
    description: "Glacial lake",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Apr to Jun",
    entryFee: "Permit required",
    nearbyAttractions: ["Nathula Pass", "Baba Mandir"],
    locationLink: "https://www.google.com/maps/place/Tsomgo+Lake"
  },
  {
    name: "Nathula Pass",
    state: "Sikkim",
    stateSlug: "sikkim",
    region: "North-East India",
    category: "Adventure",
    description: "Mountain pass",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Oct",
    entryFee: "Permit required",
    nearbyAttractions: ["Tsomgo Lake", "Baba Mandir"],
    locationLink: "https://www.google.com/maps/place/Nathula+Pass"
  },
  {
    name: "Yumthang Valley",
    state: "Sikkim",
    stateSlug: "sikkim",
    region: "North-East India",
    category: "Nature",
    description: "Valley of flowers",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Apr to Jun",
    entryFee: "Permit required",
    nearbyAttractions: ["Zero Point", "Lachung"],
    locationLink: "https://www.google.com/maps/place/Yumthang+Valley"
  },
  {
    name: "Pelling",
    state: "Sikkim",
    stateSlug: "sikkim",
    region: "North-East India",
    category: "Nature",
    description: "Scenic town",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Sep to May",
    entryFee: "No entry fee",
    nearbyAttractions: ["Kanchenjunga Falls", "Pemayangtse Monastery"],
    locationLink: "https://www.google.com/maps/place/Pelling"
  },
  {
    name: "Rumtek Monastery",
    state: "Sikkim",
    stateSlug: "sikkim",
    region: "North-East India",
    category: "Spiritual",
    description: "Buddhist monastery",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to Jun",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Gangtok", "Lingdum Monastery"],
    locationLink: "https://www.google.com/maps/place/Rumtek+Monastery"
  },
  {
    name: "Meenakshi Temple",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    region: "South India",
    category: "Spiritual",
    description: "Iconic temple in Madurai",
    images: [
      "https://images.unsplash.com/photo-1590080876-01ade6e7c869?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Thirumalai Nayakkar Palace", "Vaigai River"],
    locationLink: "https://www.google.com/maps/place/Meenakshi+Temple"
  },
  {
    name: "Ooty",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    region: "South India",
    category: "Nature",
    description: "Queen of Hill Stations",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Apr to Jun, Sep to Nov",
    entryFee: "No entry fee",
    nearbyAttractions: ["Botanical Garden", "Ooty Lake"],
    locationLink: "https://www.google.com/maps/place/Ooty"
  },
  {
    name: "Kodaikanal",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    region: "South India",
    category: "Nature",
    description: "Popular hill retreat",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Apr to Jun, Sep to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Kodaikanal Lake", "Coaker's Walk"],
    locationLink: "https://www.google.com/maps/place/Kodaikanal"
  },
  {
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    region: "South India",
    category: "Heritage",
    description: "UNESCO heritage site",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Shore Temple", "Five Rathas"],
    locationLink: "https://www.google.com/maps/place/Mahabalipuram"
  },
  {
    name: "Rameswaram",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    region: "South India",
    category: "Spiritual",
    description: "Sacred pilgrimage town",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Apr",
    entryFee: "Free",
    nearbyAttractions: ["Ramanathaswamy Temple", "Dhanushkodi"],
    locationLink: "https://www.google.com/maps/place/Rameswaram"
  },
  {
    name: "Marina Beach",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    region: "South India",
    category: "Beach",
    description: "One of the longest beaches",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Fort St. George", "Santhome Cathedral"],
    locationLink: "https://www.google.com/maps/place/Marina+Beach"
  },
  {
    name: "Charminar",
    state: "Telangana",
    stateSlug: "telangana",
    region: "South India",
    category: "Heritage",
    description: "Iconic monument",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Laad Bazaar", "Mecca Masjid"],
    locationLink: "https://www.google.com/maps/place/Charminar"
  },
  {
    name: "Golconda Fort",
    state: "Telangana",
    stateSlug: "telangana",
    region: "South India",
    category: "Heritage",
    description: "Historic fort",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Qutb Shahi Tombs", "Hyderabad"],
    locationLink: "https://www.google.com/maps/place/Golconda+Fort"
  },
  {
    name: "Ramoji Film City",
    state: "Telangana",
    stateSlug: "telangana",
    region: "South India",
    category: "Entertainment",
    description: "World’s largest film studio",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Hyderabad", "Sanghi Temple"],
    locationLink: "https://www.google.com/maps/place/Ramoji+Film+City"
  },
  {
    name: "Hussain Sagar Lake",
    state: "Telangana",
    stateSlug: "telangana",
    region: "South India",
    category: "Nature",
    description: "Famous lake with Buddha statue",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Tank Bund", "Lumbini Park"],
    locationLink: "https://www.google.com/maps/place/Hussain+Sagar+Lake"
  },
  {
    name: "Warangal Fort",
    state: "Telangana",
    stateSlug: "telangana",
    region: "South India",
    category: "Heritage",
    description: "Historic ruins",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Thousand Pillar Temple", "Bhadrakali Temple"],
    locationLink: "https://www.google.com/maps/place/Warangal+Fort"
  },
  {
    name: "Yadadri Temple",
    state: "Telangana",
    stateSlug: "telangana",
    region: "South India",
    category: "Spiritual",
    description: "Famous temple",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Hyderabad", "Bhongir Fort"],
    locationLink: "https://www.google.com/maps/place/Yadadri+Temple"
  },
  {
    name: "Ujjayanta Palace",
    state: "Tripura",
    stateSlug: "tripura",
    region: "North-East India",
    category: "Heritage",
    description: "Royal palace museum",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Agartala", "Heritage Park"],
    locationLink: "https://www.google.com/maps/place/Ujjayanta+Palace"
  },
  {
    name: "Neermahal",
    state: "Tripura",
    stateSlug: "tripura",
    region: "North-East India",
    category: "Heritage",
    description: "Water palace",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Rudrasagar Lake", "Melaghar"],
    locationLink: "https://www.google.com/maps/place/Neermahal"
  },
  {
    name: "Unakoti",
    state: "Tripura",
    stateSlug: "tripura",
    region: "North-East India",
    category: "Heritage",
    description: "Rock carvings",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Kailashahar", "Dharmanagar"],
    locationLink: "https://www.google.com/maps/place/Unakoti"
  },
  {
    name: "Sepahijala Wildlife Sanctuary",
    state: "Tripura",
    stateSlug: "tripura",
    region: "North-East India",
    category: "Wildlife",
    description: "Wildlife and nature",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Agartala", "Clouded Leopard Park"],
    locationLink: "https://www.google.com/maps/place/Sepahijala+Wildlife+Sanctuary"
  },
  {
    name: "Jampui Hills",
    state: "Tripura",
    stateSlug: "tripura",
    region: "North-East India",
    category: "Nature",
    description: "Scenic hill range",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Apr",
    entryFee: "No entry fee",
    nearbyAttractions: ["Vanghmun Village", "Orange Festival"],
    locationLink: "https://www.google.com/maps/place/Jampui+Hills"
  },
  {
    name: "Tripura Sundari Temple",
    state: "Tripura",
    stateSlug: "tripura",
    region: "North-East India",
    category: "Spiritual",
    description: "Famous temple",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Udaipur (Tripura)", "Kalyan Sagar Lake"],
    locationLink: "https://www.google.com/maps/place/Tripura+Sundari+Temple"
  },
  {
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "North India",
    category: "Heritage",
    description: "Symbol of love",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Agra Fort", "Mehtab Bagh"],
    locationLink: "https://www.google.com/maps/place/Taj+Mahal"
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "North India",
    category: "Spiritual",
    description: "Spiritual city",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat"],
    locationLink: "https://www.google.com/maps/place/Varanasi"
  },
  {
    name: "Ayodhya",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "North India",
    category: "Spiritual",
    description: "Birthplace of Lord Rama",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Ram Janmabhoomi", "Hanuman Garhi"],
    locationLink: "https://www.google.com/maps/place/Ayodhya"
  },
  {
    name: "Lucknow",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "North India",
    category: "City",
    description: "City of Nawabs",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Bara Imambara", "Rumi Darwaza"],
    locationLink: "https://www.google.com/maps/place/Lucknow"
  },
  {
    name: "Allahabad (Prayagraj)",
    state: "Uttar Pradesh",
    region: "North India",
    category: "Spiritual",
    description: "Triveni Sangam",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Kumbh Mela Grounds", "Anand Bhavan"],
    locationLink: "https://www.google.com/maps/place/Prayagraj"
  },
  {
    name: "Mathura",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "North India",
    category: "Spiritual",
    description: "Birthplace of Krishna",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Vrindavan", "Dwarkadhish Temple"],
    locationLink: "https://www.google.com/maps/place/Mathura"
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    stateSlug: "uttarakhand",
    region: "North India",
    category: "Spiritual",
    description: "Yoga capital",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Sep to Nov, Feb to May",
    entryFee: "No entry fee",
    nearbyAttractions: ["Laxman Jhula", "Ram Jhula"],
    locationLink: "https://www.google.com/maps/place/Rishikesh"
  },
  {
    name: "Haridwar",
    state: "Uttarakhand",
    stateSlug: "uttarakhand",
    region: "North India",
    category: "Spiritual",
    description: "Holy city",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Har Ki Pauri", "Mansa Devi Temple"],
    locationLink: "https://www.google.com/maps/place/Haridwar"
  },
  {
    name: "Nainital",
    state: "Uttarakhand",
    stateSlug: "uttarakhand",
    region: "North India",
    category: "Nature",
    description: "Lake town",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to Jun",
    entryFee: "No entry fee",
    nearbyAttractions: ["Naini Lake", "Snow View Point"],
    locationLink: "https://www.google.com/maps/place/Nainital"
  },
  {
    name: "Kedarnath",
    state: "Uttarakhand",
    stateSlug: "uttarakhand",
    region: "North India",
    category: "Spiritual",
    description: "Sacred temple",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Jun, Sep to Oct",
    entryFee: "Free",
    nearbyAttractions: ["Badrinath", "Vasuki Tal"],
    locationLink: "https://www.google.com/maps/place/Kedarnath"
  },
  {
    name: "Auli",
    state: "Uttarakhand",
    stateSlug: "uttarakhand",
    region: "North India",
    category: "Adventure",
    description: "Ski destination",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Dec to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Joshimath", "Gurso Bugyal"],
    locationLink: "https://www.google.com/maps/place/Auli"
  },
  {
    name: "Jim Corbett National Park",
    state: "Uttarakhand",
    stateSlug: "uttarakhand",
    region: "North India",
    category: "Wildlife",
    description: "Famous wildlife park",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Jun",
    entryFee: "Safari charges applicable",
    nearbyAttractions: ["Ramnagar", "Garjia Temple"],
    locationLink: "https://www.google.com/maps/place/Jim+Corbett+National+Park"
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    stateSlug: "west-bengal",
    region: "East India",
    category: "City",
    description: "Cultural capital",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "No entry fee",
    nearbyAttractions: ["Victoria Memorial", "Dakshineswar Temple"],
    locationLink: "https://www.google.com/maps/place/Kolkata"
  },
  {
    name: "Darjeeling",
    state: "West Bengal",
    stateSlug: "west-bengal",
    region: "East India",
    category: "Nature",
    description: "Tea gardens and hills",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Apr to Jun, Sep to Nov",
    entryFee: "No entry fee",
    nearbyAttractions: ["Tiger Hill", "Batasia Loop"],
    locationLink: "https://www.google.com/maps/place/Darjeeling"
  },
  {
    name: "Sundarbans",
    state: "West Bengal",
    stateSlug: "west-bengal",
    region: "East India",
    category: "Wildlife",
    description: "Mangrove forest",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Sajnekhali Sanctuary", "Dobanki Watch Tower"],
    locationLink: "https://www.google.com/maps/place/Sundarbans"
  },
  {
    name: "Howrah Bridge",
    state: "West Bengal",
    stateSlug: "west-bengal",
    region: "East India",
    category: "Heritage",
    description: "Iconic bridge",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "Free",
    nearbyAttractions: ["Kolkata", "Hooghly River"],
    locationLink: "https://www.google.com/maps/place/Howrah+Bridge"
  },
  {
    name: "Kalimpong",
    state: "West Bengal",
    stateSlug: "west-bengal",
    region: "East India",
    category: "Nature",
    description: "Hill town",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to May, Sep to Dec",
    entryFee: "No entry fee",
    nearbyAttractions: ["Deolo Hill", "Durpin Monastery"],
    locationLink: "https://www.google.com/maps/place/Kalimpong"
  },
  {
    name: "Digha Beach",
    state: "West Bengal",
    stateSlug: "west-bengal",
    region: "East India",
    category: "Beach",
    description: "Popular beach",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "Free",
    nearbyAttractions: ["New Digha", "Marine Aquarium"],
    locationLink: "https://www.google.com/maps/place/Digha+Beach"
  },
  {
    name: "Radhanagar Beach",
    state: "Andaman and Nicobar Islands",
    stateSlug: "andaman-and-nicobar-islands",
    region: "Islands",
    category: "Beach",
    description: "One of Asia’s best beaches",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Free",
    nearbyAttractions: ["Havelock Island", "Elephant Beach"],
    locationLink: "https://www.google.com/maps/place/Radhanagar+Beach"
  },
  {
    name: "Cellular Jail",
    state: "Andaman and Nicobar Islands",
    stateSlug: "andaman-and-nicobar-islands",
    region: "Islands",
    category: "Heritage",
    description: "Historic colonial prison",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to May",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Port Blair", "Ross Island"],
    locationLink: "https://www.google.com/maps/place/Cellular+Jail"
  },
  {
    name: "Havelock Island",
    state: "Andaman and Nicobar Islands",
    stateSlug: "andaman-and-nicobar-islands",
    region: "Islands",
    category: "Adventure",
    description: "Famous for scuba diving",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "No entry fee",
    nearbyAttractions: ["Radhanagar Beach", "Elephant Beach"],
    locationLink: "https://www.google.com/maps/place/Havelock+Island"
  },
  {
    name: "Neil Island",
    state: "Andaman and Nicobar Islands",
    stateSlug: "andaman-and-nicobar-islands",
    region: "Islands",
    category: "Nature",
    description: "Peaceful island escape",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "No entry fee",
    nearbyAttractions: ["Bharatpur Beach", "Natural Bridge"],
    locationLink: "https://www.google.com/maps/place/Neil+Island"
  },
  {
    name: "Ross Island",
    state: "Andaman and Nicobar Islands",
    stateSlug: "andaman-and-nicobar-islands",
    region: "Islands",
    category: "Heritage",
    description: "British-era ruins",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Port Blair", "North Bay Island"],
    locationLink: "https://www.google.com/maps/place/Ross+Island"
  },
  {
    name: "North Bay Island",
    state: "Andaman and Nicobar Islands",
    stateSlug: "andaman-and-nicobar-islands",
    region: "Islands",
    category: "Adventure",
    description: "Snorkeling paradise",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Ross Island", "Port Blair"],
    locationLink: "https://www.google.com/maps/place/North+Bay+Island"
  },
  {
    name: "Rock Garden",
    state: "Chandigarh",
    stateSlug: "chandigarh",
    region: "North India",
    category: "Art",
    description: "Unique sculptures made from waste",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Sukhna Lake", "Capitol Complex"],
    locationLink: "https://www.google.com/maps/place/Rock+Garden+of+Chandigarh"
  },
  {
    name: "Sukhna Lake",
    state: "Chandigarh",
    stateSlug: "chandigarh",
    region: "North India",
    category: "Nature",
    description: "Popular leisure spot",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "Free",
    nearbyAttractions: ["Rock Garden", "Leisure Valley"],
    locationLink: "https://www.google.com/maps/place/Sukhna+Lake"
  },
  {
    name: "Rose Garden",
    state: "Chandigarh",
    stateSlug: "chandigarh",
    region: "North India",
    category: "Nature",
    description: "Asia’s largest rose garden",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Feb to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Sector 17 Market", "Zakir Hussain Garden"],
    locationLink: "https://www.google.com/maps/place/Zakir+Hussain+Rose+Garden"
  },
  {
    name: "Capitol Complex",
    state: "Chandigarh",
    stateSlug: "chandigarh",
    region: "North India",
    category: "Heritage",
    description: "UNESCO heritage site",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free (with permit)",
    nearbyAttractions: ["High Court Museum", "Open Hand Monument"],
    locationLink: "https://www.google.com/maps/place/Capitol+Complex"
  },
  {
    name: "Elante Mall",
    state: "Chandigarh",
    stateSlug: "chandigarh",
    region: "North India",
    category: "Shopping",
    description: "Shopping destination",
    images: [
      "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "All year",
    entryFee: "Free",
    nearbyAttractions: ["Industrial Area Phase 1", "Paras Downtown Square"],
    locationLink: "https://www.google.com/maps/place/Elante+Mall"
  },
  {
    name: "Pinjore Gardens",
    state: "Chandigarh",
    stateSlug: "chandigarh",
    region: "North India",
    category: "Nature",
    description: "Mughal-style garden",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Yadavindra Gardens", "Morni Hills"],
    locationLink: "https://www.google.com/maps/place/Pinjore+Gardens"
  },
  {
    name: "Silvassa",
    state: "Dadra and Nagar Haveli",
    stateSlug: "dadra-and-nagar-haveli",
    region: "West India",
    category: "City",
    description: "Capital town",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Tribal Museum", "Vanganga Lake Garden"],
    locationLink: "https://www.google.com/maps/place/Silvassa"
  },
  {
    name: "Vanganga Lake Garden",
    state: "Dadra and Nagar Haveli",
    stateSlug: "dadra-and-nagar-haveli",
    region: "West India",
    category: "Nature",
    description: "Scenic garden and lake",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Silvassa", "Island Garden"],
    locationLink: "https://www.google.com/maps/place/Vanganga+Lake+Garden"
  },
  {
    name: "Dudhni Lake",
    state: "Dadra and Nagar Haveli",
    stateSlug: "dadra-and-nagar-haveli",
    region: "West India",
    category: "Adventure",
    description: "Water sports hub",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to May",
    entryFee: "Activity charges applicable",
    nearbyAttractions: ["Island Campsite", "Khanvel"],
    locationLink: "https://www.google.com/maps/place/Dudhni+Lake"
  },
  {
    name: "Tribal Museum",
    state: "Dadra and Nagar Haveli",
    stateSlug: "dadra-and-nagar-haveli",
    region: "West India",
    category: "Museum",
    description: "Tribal culture exhibits",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Silvassa", "Warli Cultural Center"],
    locationLink: "https://www.google.com/maps/place/Tribal+Museum+Silvassa"
  },
  {
    name: "Hirwa Van Garden",
    state: "Dadra and Nagar Haveli",
    stateSlug: "dadra-and-nagar-haveli",
    region: "West India",
    category: "Nature",
    description: "Green park with waterfalls",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Silvassa", "Satmaliya Deer Park"],
    locationLink: "https://www.google.com/maps/place/Hirwa+Van+Garden"
  },
  {
    name: "Lion Safari Wildlife Park",
    state: "Dadra and Nagar Haveli",
    stateSlug: "dadra-and-nagar-haveli",
    region: "West India",
    category: "Wildlife",
    description: "Wildlife safari experience",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Apr",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Silvassa", "Satmaliya Deer Park"],
    locationLink: "https://www.google.com/maps/place/Lion+Safari+Wildlife+Park"
  },
  {
    name: "Diu Fort",
    state: "Daman and Diu",
    stateSlug: "daman-and-diu",
    region: "West India",
    category: "Heritage",
    description: "Historic Portuguese fort",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Diu Museum", "St. Thomas Church"],
    locationLink: "https://www.google.com/maps/place/Diu+Fort"
  },
  {
    name: "Nagoa Beach",
    state: "Daman and Diu",
    stateSlug: "daman-and-diu",
    region: "West India",
    category: "Beach",
    description: "Popular beach",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "Free",
    nearbyAttractions: ["Diu Fort", "INS Khukri Memorial"],
    locationLink: "https://www.google.com/maps/place/Nagoa+Beach"
  },
  {
    name: "Naida Caves",
    state: "Daman and Diu",
    stateSlug: "daman-and-diu",
    region: "West India",
    category: "Adventure",
    description: "Natural cave formations",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Free",
    nearbyAttractions: ["Diu Fort", "Sunset Point"],
    locationLink: "https://www.google.com/maps/place/Naida+Caves"
  },
  {
    name: "Jampore Beach",
    state: "Daman and Diu",
    stateSlug: "daman-and-diu",
    region: "West India",
    category: "Beach",
    description: "Peaceful beach",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "Free",
    nearbyAttractions: ["Devka Beach", "Daman Fort"],
    locationLink: "https://www.google.com/maps/place/Jampore+Beach"
  },
  {
    name: "St. Paul’s Church",
    state: "Daman and Diu",
    region: "West India",
    category: "Heritage",
    description: "Colonial church",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Diu Museum", "Diu Fort"],
    locationLink: "https://www.google.com/maps/place/St.+Paul’s+Church+Diu"
  },
  {
    name: "Devka Beach",
    state: "Daman and Diu",
    stateSlug: "daman-and-diu",
    region: "West India",
    category: "Beach",
    description: "Scenic shoreline",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Feb",
    entryFee: "Free",
    nearbyAttractions: ["Jampore Beach", "Moti Daman Fort"],
    locationLink: "https://www.google.com/maps/place/Devka+Beach"
  },
  {
    name: "Red Fort",
    state: "Delhi",
    stateSlug: "delhi",
    region: "North India",
    category: "Heritage",
    description: "Historic Mughal fort",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Chandni Chowk", "Jama Masjid"],
    locationLink: "https://www.google.com/maps/place/Red+Fort"
  },
  {
    name: "India Gate",
    state: "Delhi",
    stateSlug: "delhi",
    region: "North India",
    category: "Heritage",
    description: "War memorial",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Rajpath", "Rashtrapati Bhavan"],
    locationLink: "https://www.google.com/maps/place/India+Gate"
  },
  {
    name: "Qutub Minar",
    state: "Delhi",
    stateSlug: "delhi",
    region: "North India",
    category: "Heritage",
    description: "Tallest brick minaret",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Mehrauli Archaeological Park", "Iron Pillar"],
    locationLink: "https://www.google.com/maps/place/Qutub+Minar"
  },
  {
    name: "Lotus Temple",
    state: "Delhi",
    stateSlug: "delhi",
    region: "North India",
    category: "Spiritual",
    description: "Unique architecture",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["ISKCON Temple", "Nehru Place"],
    locationLink: "https://www.google.com/maps/place/Lotus+Temple"
  },
  {
    name: "Chandni Chowk",
    state: "Delhi",
    stateSlug: "delhi",
    region: "North India",
    category: "Shopping",
    description: "Famous market",
    images: [
      "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Red Fort", "Jama Masjid"],
    locationLink: "https://www.google.com/maps/place/Chandni+Chowk"
  },
  {
    name: "Akshardham Temple",
    state: "Delhi",
    stateSlug: "delhi",
    region: "North India",
    category: "Spiritual",
    description: "Modern temple complex",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free (Exhibition ticket extra)",
    nearbyAttractions: ["Yamuna Riverfront", "Commonwealth Games Village"],
    locationLink: "https://www.google.com/maps/place/Akshardham+Temple"
  },

  {
    name: "Srinagar",
    state: "Jammu & Kashmir",
    stateSlug: "jammu-and-kashmir",
    region: "North India",
    category: "Nature",
    description: "Dal Lake and houseboats",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Apr to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Dal Lake", "Mughal Gardens"],
    locationLink: "https://www.google.com/maps/place/Srinagar"
  },
  {
    name: "Gulmarg",
    state: "Jammu & Kashmir",
    stateSlug: "jammu-and-kashmir",
    region: "North India",
    category: "Adventure",
    description: "Ski resort",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Dec to Mar",
    entryFee: "No entry fee",
    nearbyAttractions: ["Gulmarg Gondola", "Apharwat Peak"],
    locationLink: "https://www.google.com/maps/place/Gulmarg"
  },
  {
    name: "Pahalgam",
    state: "Jammu & Kashmir",
    stateSlug: "jammu-and-kashmir",
    region: "North India",
    category: "Nature",
    description: "Valley town",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Apr to Oct",
    entryFee: "No entry fee",
    nearbyAttractions: ["Betaab Valley", "Aru Valley"],
    locationLink: "https://www.google.com/maps/place/Pahalgam"
  },
  {
    name: "Vaishno Devi",
    state: "Jammu & Kashmir",
    stateSlug: "jammu-and-kashmir",
    region: "North India",
    category: "Spiritual",
    description: "Pilgrimage site",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Mar to Oct",
    entryFee: "Free",
    nearbyAttractions: ["Katra", "Bhairavnath Temple"],
    locationLink: "https://www.google.com/maps/place/Vaishno+Devi"
  },
  {
    name: "Sonmarg",
    state: "Jammu & Kashmir",
    stateSlug: "jammu-and-kashmir",
    region: "North India",
    category: "Nature",
    description: "Meadow of gold",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Sep",
    entryFee: "No entry fee",
    nearbyAttractions: ["Thajiwas Glacier", "Zoji La Pass"],
    locationLink: "https://www.google.com/maps/place/Sonmarg"
  },
  {
    name: "Patnitop",
    state: "Jammu & Kashmir",
    stateSlug: "jammu-and-kashmir",
    region: "North India",
    category: "Nature",
    description: "Hill station",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Apr to Jun",
    entryFee: "No entry fee",
    nearbyAttractions: ["Nathatop", "Sanasar"],
    locationLink: "https://www.google.com/maps/place/Patnitop"
  },

  {
    name: "Pangong Lake",
    state: "Ladakh",
    stateSlug: "ladakh",
    region: "North India",
    category: "Nature",
    description: "Famous blue lake",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Sep",
    entryFee: "Permit required",
    nearbyAttractions: ["Spangmik Village", "Chang La Pass"],
    locationLink: "https://www.google.com/maps/place/Pangong+Lake"
  },
  {
    name: "Leh",
    state: "Ladakh",
    stateSlug: "ladakh",
    region: "North India",
    category: "City",
    description: "Capital town",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Sep",
    entryFee: "No entry fee",
    nearbyAttractions: ["Leh Palace", "Shanti Stupa"],
    locationLink: "https://www.google.com/maps/place/Leh"
  },
  {
    name: "Nubra Valley",
    state: "Ladakh",
    stateSlug: "ladakh",
    region: "North India",
    category: "Nature",
    description: "Desert in mountains",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Sep",
    entryFee: "Permit required",
    nearbyAttractions: ["Diskit Monastery", "Hunder Sand Dunes"],
    locationLink: "https://www.google.com/maps/place/Nubra+Valley"
  },
  {
    name: "Khardung La",
    state: "Ladakh",
    stateSlug: "ladakh",
    region: "North India",
    category: "Adventure",
    description: "High mountain pass",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Sep",
    entryFee: "Permit required",
    nearbyAttractions: ["Leh", "Nubra Valley"],
    locationLink: "https://www.google.com/maps/place/Khardung+La"
  },
  {
    name: "Magnetic Hill",
    state: "Ladakh",
    stateSlug: "ladakh",
    region: "North India",
    category: "Adventure",
    description: "Gravity-defying hill",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Sep",
    entryFee: "Free",
    nearbyAttractions: ["Zanskar River", "Gurudwara Pathar Sahib"],
    locationLink: "https://www.google.com/maps/place/Magnetic+Hill"
  },
  {
    name: "Hemis Monastery",
    state: "Ladakh",
    stateSlug: "ladakh",
    region: "North India",
    category: "Spiritual",
    description: "Famous monastery",
    images: [
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "May to Sep",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Hemis National Park", "Thiksey Monastery"],
    locationLink: "https://www.google.com/maps/place/Hemis+Monastery"
  },
  {
    name: "Agatti Island",
    state: "Lakshadweep",
    stateSlug: "lakshadweep",
    region: "South India",
    category: "Beach",
    description: "Gateway island",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Permit required",
    nearbyAttractions: ["Bangaram Island", "Kalpeni Island"],
    locationLink: "https://www.google.com/maps/place/Agatti+Island"
  },
  {
    name: "Bangaram Island",
    state: "Lakshadweep",
    stateSlug: "lakshadweep",
    region: "South India",
    category: "Beach",
    description: "Luxury island stay",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Permit required",
    nearbyAttractions: ["Agatti Island", "Thinnakara Island"],
    locationLink: "https://www.google.com/maps/place/Bangaram+Island"
  },
  {
    name: "Kavaratti",
    state: "Lakshadweep",
    stateSlug: "lakshadweep",
    region: "South India",
    category: "City",
    description: "Capital island",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Permit required",
    nearbyAttractions: ["Marine Aquarium", "Ujra Mosque"],
    locationLink: "https://www.google.com/maps/place/Kavaratti"
  },
  {
    name: "Minicoy Island",
    state: "Lakshadweep",
    stateSlug: "lakshadweep",
    region: "South India",
    category: "Nature",
    description: "Cultural island",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Permit required",
    nearbyAttractions: ["Minicoy Lighthouse", "Lagoon Beach"],
    locationLink: "https://www.google.com/maps/place/Minicoy+Island"
  },
  {
    name: "Kalpeni Island",
    state: "Lakshadweep",
    stateSlug: "lakshadweep",
    region: "South India",
    category: "Nature",
    description: "Lagoon and coral reefs",
    images: [
      "https://images.unsplash.com/photo-1597764699510-3a7d2c3f64d6?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Permit required",
    nearbyAttractions: ["Agatti Island", "Pitti Island"],
    locationLink: "https://www.google.com/maps/place/Kalpeni+Island"
  },
  {
    name: "Marine Museum",
    state: "Lakshadweep",
    stateSlug: "lakshadweep",
    region: "South India",
    category: "Museum",
    description: "Marine biodiversity",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Mar",
    entryFee: "Entry fee applicable",
    nearbyAttractions: ["Kavaratti", "Marine Aquarium"],
    locationLink: "https://www.google.com/maps/place/Marine+Museum+Lakshadweep"
  },

  {
    name: "Promenade Beach",
    state: "Puducherry",
    stateSlug: "puducherry",
    region: "South India",
    category: "Beach",
    description: "Seaside walkway",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Rock Beach", "French War Memorial"],
    locationLink: "https://www.google.com/maps/place/Promenade+Beach+Puducherry"
  },
  {
    name: "Auroville",
    state: "Puducherry",
    stateSlug: "puducherry",
    region: "South India",
    category: "Spiritual",
    description: "Spiritual township",
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32c7f49?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Free (Matrimandir viewing pass required)",
    nearbyAttractions: ["Matrimandir", "Auroville Beach"],
    locationLink: "https://www.google.com/maps/place/Auroville"
  },
  {
    name: "Paradise Beach",
    state: "Puducherry",
    stateSlug: "puducherry",
    region: "South India",
    category: "Beach",
    description: "Clean sandy beach",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Boat charges applicable",
    nearbyAttractions: ["Chunnambar Boat House", "Backwaters"],
    locationLink: "https://www.google.com/maps/place/Paradise+Beach+Puducherry"
  },
  {
    name: "French Quarter",
    state: "Puducherry",
    stateSlug: "puducherry",
    region: "South India",
    category: "Heritage",
    description: "Colonial architecture",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Free",
    nearbyAttractions: ["Promenade Beach", "Basilica of the Sacred Heart"],
    locationLink: "https://www.google.com/maps/place/White+Town+Puducherry"
  },
  {
    name: "Sri Aurobindo Ashram",
    state: "Puducherry",
    stateSlug: "puducherry",
    region: "South India",
    category: "Spiritual",
    description: "Spiritual center",
    images: [
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Nov to Feb",
    entryFee: "Free",
    nearbyAttractions: ["French Quarter", "Promenade Beach"],
    locationLink: "https://www.google.com/maps/place/Sri+Aurobindo+Ashram"
  },
  {
    name: "Chunnambar Boat House",
    state: "Puducherry",
    stateSlug: "puducherry",
    region: "South India",
    category: "Adventure",
    description: "Boating experience",
    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400&h=300&fit=crop"
    ],
    bestTimeToVisit: "Oct to Mar",
    entryFee: "Entry + boating charges",
    nearbyAttractions: ["Paradise Beach", "Backwaters"],
    locationLink: "https://www.google.com/maps/place/Chunnambar+Boat+House"
  }
]

export default places;