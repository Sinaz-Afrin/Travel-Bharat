import mongoose from "mongoose";
import Place from "./models/Place.js";
import { places } from "./data/placesData.js";

const updateImages = async () => {
  try {
    await mongoose.connect("mongodb+srv://travelBharatAdmin:TravelBharatAdmin2026@travel-bharat.empw0ob.mongodb.net/?appName=Travel-Bharat");

    for (let place of places) {
      await Place.updateOne(
        { name: place.name },
        { $set: { images: place.images } }
      );
    }

    console.log("Images updated successfully");
    process.exit();
  } catch (error) {
    console.log("❌ Error updating images");
    console.error(error);
    process.exit(1);
  }
};

updateImages();