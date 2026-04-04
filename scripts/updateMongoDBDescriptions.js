import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import places data  
const placesDataPath = path.join(__dirname, '../backend/data/placesData.js');
const placesDataModule = await import(`file://${placesDataPath}`);
const places = placesDataModule.default;

// Define schema
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
async function updateAllDescriptions() {
  try {
    const mongoUri = 'mongodb+srv://travelBharatAdmin:TravelBharat%402026@travel-bharat.empw0ob.mongodb.net/?appName=Travel-Bharat';
    
    await mongoose.connect(mongoUri);
    console.log('✅ Successfully connected to MongoDB');

    let updatedCount = 0;
    let skippedCount = 0;

    for (const place of places) {
      try {
        const result = await Place.findOneAndUpdate(
          { name: place.name },
          {
            description: place.description,
            updatedAt: new Date()
          },
          { new: true }
        );

        if (result) {
          updatedCount++;
          console.log(`✅ [${updatedCount}] Updated: ${place.name}`);
        } else {
          skippedCount++;
          console.log(`⚠️  Skipped (not found): ${place.name}`);
        }
      } catch (err) {
        console.error(`❌ Error updating ${place.name}:`, err.message);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log(`✅ Migration Complete!`);
    console.log(`   • Updated places: ${updatedCount}`);
    console.log(`   • Skipped places: ${skippedCount}`);
    console.log(`   • Total places: ${places.length}`);
    console.log('='.repeat(60));

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

updateAllDescriptions();
