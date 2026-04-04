import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Descriptions mapping
const descriptions = {
  "Tirupati Balaji Temple": "One of the most visited and sacred temples in India, dedicated to Lord Venkateswara perched atop the Tirumala hills at 2,165 meters altitude. It receives over 50 million pilgrims annually from across India and abroad, making it one of the wealthiest temples. The temple is famous for its ornate architecture, intricate gopurams (temple towers), and the ancient tradition of head-shaving where devotees offer their hair as a symbol of devotion and humility. The temple follows the Vaishnava tradition and offers various darshan options including VIP and special tickets. Visitors experience the spiritual atmosphere through elaborate rituals, evening prayers, and the distribution of sacred laddu (sweet) as prasad. The temple complex spans over 25 acres with multiple shrines, guest houses, and facilities serving the enormous pilgrim population year-round.",
  "Visakhapatnam Beach": "A beautiful coastal city in Andhra Pradesh known for its scenic crescent-shaped beaches and maritime heritage stretching for 35 kilometers along the Bay of Bengal. The city is home to the Naval Museum, INS Kursura submarine museum, and Visakha Museum showcasing maritime and naval history. It offers diverse water sports activities including swimming, parasailing, windsurfing, and jet skiing along pristine sandy beaches. The city is famous for dolphin spotting tours where visitors can observe playful dolphins in their natural habitat during early mornings. Key attractions include RK Beach offering carnival atmosphere, Kailasagiri temple perched on a hilltop with panoramic views, and the Beach Road offering scenic evening walks. The city serves as a major port and industrial center while maintaining its appeal as a tourist destination.",
  "Araku Valley": "A picturesque hill station nestled in the Eastern Ghats at 1,240 meters elevation, known for its scenic beauty, coffee plantations, and stunning waterfalls throughout the landscape. The valley is home to the Arakku tribe, an indigenous community preserving traditional customs and art forms, offering cultural tourism experiences and tribal village tours. The region is famous for exceptional sunrise views from the hilltops, mist-covered valleys creating a dreamy atmosphere, and the scenic toy train ride through tribal villages and tunnels. The valley experiences a pleasant cool climate throughout the year and receives heavy monsoon rains from June to September creating lush green scenery. Waterfalls including Katiki Falls and Borra Caves offer adventure activities like trekking, rappelling, and cave exploration for adventure enthusiasts. The Araku Valley is also known as the 'Cherrapunji of Eastern Ghats' for its coffee production and is designated as a biodiversity hotspot.",
  // ... (all other descriptions from the previous script)
  "Lepakshi Temple": "A historic 16th-century temple built during the Vijayanagara Empire period, famous for its unique hanging pillar architecture that appears to float without visible support from the ground. The temple features extraordinary stone carvings depicting various Hindu deities, celestial beings, and mythological narratives with intricate details showcasing the craftsmanship of ancient artisans. The walls and ceilings display beautiful murals and paintings representing scenes from the Mahabharata and Ramayana epics with remarkable artistic skill. The temple represents a unique blend of Vijayanagara and Dravidian architectural styles visible in its design, layout, and decorative elements throughout the complex. The main deity Veerabhadra is believed to be an incarnation of Shiva and attracts thousands of devotees during temple festivals especially during Rama Navami. The temple complex includes separate shrines for various deities and features stunning views of the surrounding landscape from its elevated location.",
  "Tawang Monastery": "The largest and most significant Tibetan Buddhist monastery in India, situated at 3,500 meters altitude in the Himalayan region of Arunachal Pradesh, founded in 1680 by Merab Lama. It houses approximately 300-400 monks practicing Tibetan Buddhism and features stunning golden-roof architecture visible from kilometers away with intricate murals and paintings throughout. The monastery contains a 27-foot golden statue of Buddha, prayer halls with colorful thangka paintings, and ancient manuscripts describing Buddhist philosophy and teachings. The complex includes multiple temples, stupas, and residential structures spread across the mountainside offering breathtaking views of the Himalayan peaks and valleys. Visitors experience the spiritual atmosphere through morning prayer sessions, butter candle ceremonies, and interactions with monks who share Buddhist philosophy and practices. The monastery serves as an important cultural and religious center for Tibetan Buddhist followers and attracts scholars, tourists, and pilgrims from worldwide.",
  "Ziro Valley": "Famous for its distinctive scenic beauty and unique agricultural practices of the Apatani tribe, featuring traditional rice fields interspersed with fish ponds creating a sustainable and symbiotic ecosystem. The valley is home to around 60,000 Apatani people who practice an ancient zero-waste farming system where fish farming and rice cultivation coexist in perfect harmony. The landscape undergoes remarkable transformation with rice paddies turning golden during harvest season, fresh green during monsoon, and misty throughout the year creating photographer's paradise. The valley has been recognized as a biodiversity hotspot with diverse avifauna including migratory birds, making it a haven for bird watchers and nature enthusiasts. The annual Ziro Festival of Music held in September attracts music lovers with both Indian and international artists performing against the backdrop of scenic valleys. The tribal community continues to maintain their traditional customs, architecture, and cultural practices making it an excellent destination for cultural tourism and authentic tribal experiences."
};

// MongoDB Place Schema
const placeSchema = new mongoose.Schema({
  name: String,
  state: String,
  stateSlug: String,
  region: String,
  category: String,
  description: String,
  images: [String],
  bestTimeToVisit: String,
  entryFee: String,
  nearbyAttractions: [String],
  locationLink: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Place = mongoose.model('Place', placeSchema);

// Migration function
async function updateDescriptions() {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://travelBharatAdmin:TravelBharat%402026@travel-bharat.empw0ob.mongodb.net/?appName=Travel-Bharat';
    
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    let updatedCount = 0;
    
    for (const [placeName, newDescription] of Object.entries(descriptions)) {
      const result = await Place.updateMany(
        { name: placeName },
        { 
          description: newDescription,
          updatedAt: new Date()
        }
      );
      
      if (result.modifiedCount > 0) {
        updatedCount++;
        console.log(`✅ Updated: ${placeName}`);
      } else {
        console.log(`⚠️  Not found or already updated: ${placeName}`);
      }
    }

    console.log(`\n✅ Migration completed! Updated ${updatedCount} places with 6-line descriptions.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating descriptions:', error);
    process.exit(1);
  }
}

// Run migration
updateDescriptions();
