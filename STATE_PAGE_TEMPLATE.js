// TEMPLATE: Copy this and customize for a new state in statesData.js

{
  id: "state-id-lowercase-hyphenated",
  state: "State Full Name",
  
  // 1-2 sentence summary (shown in preview)
  description: "Brief description about the state that captures its essence and main attractions.",
  
  // 3-5 sentences (shown when user clicks "View More")
  fullDescription: "Detailed description about the state's history, culture, geography, and why it's worth visiting. Include unique selling points and what makes it special.",
  
  // Hero section image - should be high quality, 1200x600px or larger
  heroImage: "https://images.unsplash.com/photo-XXXXX?w=1200&h=600&fit=crop",
  
  // Top Attractions Section - Exactly 4 items recommended
  attractions: [
    {
      id: 1,
      name: "Attraction Name 1",
      image: "https://images.unsplash.com/photo-XXXXX?w=400&h=300&fit=crop",
      description: "Brief 1-2 line description of what makes this attraction special",
      category: "Heritage"  // Options: Heritage, Nature, Adventure, Beach, Wildlife
    },
    {
      id: 2,
      name: "Attraction Name 2",
      image: "https://images.unsplash.com/photo-XXXXX?w=400&h=300&fit=crop",
      description: "Brief 1-2 line description of what makes this attraction special",
      category: "Nature"
    },
    {
      id: 3,
      name: "Attraction Name 3",
      image: "https://images.unsplash.com/photo-XXXXX?w=400&h=300&fit=crop",
      description: "Brief 1-2 line description of what makes this attraction special",
      category: "Adventure"
    },
    {
      id: 4,
      name: "Attraction Name 4",
      image: "https://images.unsplash.com/photo-XXXXX?w=400&h=300&fit=crop",
      description: "Brief 1-2 line description of what makes this attraction special",
      category: "Beach"
    }
  ],
  
  // Best Time to Visit Section - Exactly 4 seasons
  bestTime: [
    {
      season: "Summer",
      months: "March - May",
      description: "Describe why summer is or isn't good for visiting this state",
      icon: "☀️",
      temperature: "28-35°C"  // Average temperature range
    },
    {
      season: "Monsoon",
      months: "June - September",
      description: "Describe why monsoon is or isn't good for visiting this state",
      icon: "🌧️",
      temperature: "20-28°C"
    },
    {
      season: "Autumn",
      months: "October - November",
      description: "Describe why autumn is or isn't good for visiting this state",
      icon: "🍂",
      temperature: "22-30°C"
    },
    {
      season: "Winter",
      months: "December - February",
      description: "Describe why winter is or isn't good for visiting this state",
      icon: "❄️",
      temperature: "15-28°C"
    }
  ],
  
  // Travel Tips Section - 8 items with emoji icons
  tips: [
    { name: "First tip about traveling here", icon: "🎯" },
    { name: "Second tip about traveling here", icon: "🗣️" },
    { name: "Third tip about traveling here", icon: "🍜" },
    { name: "Fourth tip about traveling here", icon: "🗺️" },
    { name: "Fifth tip about traveling here", icon: "💵" },
    { name: "Sixth tip about traveling here", icon: "📱" },
    { name: "Seventh tip about traveling here", icon: "🏨" },
    { name: "Eighth tip about traveling here", icon: "👗" }
  ],
  
  // Gallery Section - 6+ images (400x400px recommended)
  gallery: [
    "https://images.unsplash.com/photo-XXXXX?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-XXXXX?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-XXXXX?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-XXXXX?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-XXXXX?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-XXXXX?w=400&h=400&fit=crop"
  ]
}

/* 
EMOJI SUGGESTIONS FOR TIPS:
🎯 - Tips, advice, goals
🗣️ - Language, communication
🍜 - Food, dining
🗺️ - Maps, navigation
💵 - Money, budgeting
📱 - Technology, apps
🏨 - Hotels, accommodation
👗 - Clothing, what to wear
☔ - Weather, umbrella
🚌 - Transport, travel
🏥 - Medical, health
📸 - Photography
🏖️ - Beach, relaxation
🧘 - Wellness, yoga
💪 - Adventure, trekking
🎭 - Culture, events
🍷 - Wine, beverages
🏰 - Heritage, history
🌿 - Nature, environment
⛰️ - Mountain, elevation
🕉️ - Religion, temples
🦁 - Wildlife
🚗 - Driving
✈️ - Flights
🎪 - Entertainment, festivals
*/

/*
ATTRACTION CATEGORIES:
- Heritage: Temples, forts, historical monuments
- Nature: Mountains, valleys, forests, wildlife
- Adventure: Trekking, sports, extreme activities
- Beach: Coastal areas, water activities
- Wildlife: National parks, sanctuaries
- Culture: Museums, cultural centers, local experiences
- Wellness: Spas, yoga retreats, ashrams
- Urban: City attractions, markets, nightlife
*/

/*
POPULAR IMAGE SOURCES:
- Unsplash: https://unsplash.com/search/[keyword]
- Pexels: https://pexels.com/search/[keyword]
- Pixabay: https://pixabay.com/search/[keyword]

Get image URL by:
1. Search for relevant keyword on any site above
2. Right-click image → Copy image link
3. Use the direct link in the data
*/

/*
STEPS TO ADD THIS STATE:
1. Copy this entire object
2. Open src/data/statesData.js
3. Paste before the closing ] of statesData array
4. Replace all placeholder values
5. Test at: http://localhost:5173/state/{state-id}
6. Ensure all images load correctly
*/
