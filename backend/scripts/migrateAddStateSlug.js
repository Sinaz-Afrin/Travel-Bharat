/**
 * Migration script to add stateSlug to all existing places in MongoDB
 * Run: node scripts/migrateAddStateSlug.js
 */

import Place from "../models/Place.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Function to convert state name to slug
const generateStateSlug = (stateName) => {
  if (!stateName) return '';
  return stateName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

const migrateAddStateSlug = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected successfully!");

    console.log("Fetching all places...");
    const places = await Place.find({});
    console.log(`Found ${places.length} places`);

    let updated = 0;
    let skipped = 0;

    for (const place of places) {
      try {
        // Check if stateSlug already exists
        if (place.stateSlug && place.stateSlug.trim() !== '') {
          skipped++;
          continue;
        }

        // Generate stateSlug from state name
        const stateSlug = generateStateSlug(place.state);

        if (!stateSlug) {
          console.warn(`⚠️ Could not generate slug for place: ${place.name} (state: ${place.state})`);
          continue;
        }

        // Update the place
        place.stateSlug = stateSlug;
        await place.save();
        updated++;

        if (updated % 20 === 0) {
          console.log(`Updated ${updated} places...`);
        }
      } catch (err) {
        console.error(`Error updating place ${place.name}:`, err.message);
      }
    }

    console.log(`\n✅ Migration completed!`);
    console.log(`   Updated: ${updated} places`);
    console.log(`   Skipped: ${skipped} places (already have stateSlug)`);
    console.log(`   Total: ${places.length} places`);

    await mongoose.connection.close();
    console.log("Connection closed");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

migrateAddStateSlug();
