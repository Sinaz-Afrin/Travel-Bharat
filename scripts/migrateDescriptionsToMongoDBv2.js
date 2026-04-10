import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), '../backend/.env') });

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

// Read placesData.js and extract descriptions
function extractPlacesData() {
  const dataPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../backend/data/placesData.js');
  const fileContent = fs.readFileSync(dataPath, 'utf8');
  
  // Extract all place objects
  const placesArray = [];
  const placeMatches = fileContent.matchAll(/\{\s*name:\s*"([^"]*)"\s*,[\s\S]*?description:\s*"([\s\S]*?)"\s*,[\s\S]*?images:/g);
  
  for (const match of placeMatches) {
    placesArray.push({
      name: match[1],
      description: match[2]
    });
  }
  
  return placesArray;
}

// Migration function
async function updateDescriptions() {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    const placesData = extractPlacesData();
    console.log(`Found ${placesData.length} places to update`);

    let updatedCount = 0;
    let errorCount = 0;
    const notFoundPlaces = [];
  
    for (const place of placesData) {
      try {
        const result = await Place.findOneAndUpdate(
          { name: { $regex: `^${place.name}$`, $options: "i" } },
          { 
            description: place.description,
            updatedAt: new Date()
          },
          { new: true }
        );
        if (!result) {
          notFoundPlaces.push(place.name);
        }
        if (result) {
          updatedCount++;
          console.log(`✅ Updated: ${place.name}`);
        } else {
          console.log(`⚠️  Place not found: ${place.name}`);
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ Error updating ${place.name}:`, error.message);
      }
    }

    console.log(`\n✅ Migration completed!`);
    console.log(`   Updated: ${updatedCount} places`);
    console.log(`   Errors: ${errorCount}`);
    console.log(`   Total: ${placesData.length} places`);
    console.log("❌ Missing places:", notFoundPlaces);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during migration:', error);
    process.exit(1);
  }
}

// Run migration
updateDescriptions();
