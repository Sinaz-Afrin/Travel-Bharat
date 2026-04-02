import mongoose from "mongoose";
import dotenv from "dotenv";
import Place from "../models/Place.js";
import places from "../data/placesData.js"; // full places data file

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/travel-bharat";

async function run() {
  try {
    // Connect DB
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear old data
    await Place.deleteMany();
    console.log("🧹 Cleared existing places");

    // 🔥 Ensure every place has stateSlug (auto-generate if missing)
    const formattedPlaces = places.map((place) => ({
      ...place,
      stateSlug:
        place.stateSlug ||
        place.state
          ?.toLowerCase()
          .replace(/&/g, "and")
          .replace(/\s+/g, "-"),
    }));

    // Insert all data
    const result = await Place.insertMany(formattedPlaces);

    console.log(`🚀 Inserted ${result.length} places successfully`);
  } catch (err) {
    console.error("❌ Seeder error:", err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

run();