/**
 * Script to update placesData.js with multiple images for each place
 * This ensures the seed data has 4 images per place
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image pools organized by category
const imagePoolsByCategory = {
  Adventure: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1502675135487-164becee47ba?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551632786-de41ec16a41d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
  ],
  Art: [
    "https://images.unsplash.com/photo-1578321272176-f0c34e8ed4c5?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1578926314433-48eb814ff122?w=600&h=400&fit=crop",
  ],
  Beach: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507371341519-247a59b3d74e?w=600&h=400&fit=crop",
  ],
  City: [
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1486299967070-08de941ceace?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=400&fit=crop",
  ],
  Culture: [
    "https://images.unsplash.com/photo-1535139262971-187250445051?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1578926314433-48eb814ff122?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=400&fit=crop",
  ],
  Entertainment: [
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop",
  ],
  Event: [
    "https://images.unsplash.com/photo-1501281668479-f3afd008e5ca?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop",
  ],
  Festival: [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1501281668479-f3afd008e5ca?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop",
  ],
  Heritage: [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1532994122177-d47537356ba6?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1605246184637-abf16923fa78?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1577720643272-265f434b2f75?w=600&h=400&fit=crop",
  ],
  Museum: [
    "https://images.unsplash.com/photo-1577720643272-265f434b2f75?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1585312686052-1d3d8125a8a8?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1578926314433-48eb814ff122?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1532994122177-d47537356ba6?w=600&h=400&fit=crop",
  ],
  Nature: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1447542519295-0c94b992bda9?w=600&h=400&fit=crop",
  ],
  Shopping: [
    "https://images.unsplash.com/photo-1455849318169-8d01e0f2b63b?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1489050478519-e21cc028cb29?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
  ],
  Spiritual: [
    "https://images.unsplash.com/photo-1532994122177-d47537356ba6?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1585312686052-1d3d8125a8a8?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1605246184637-abf16923fa78?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1577720643272-265f434b2f75?w=600&h=400&fit=crop",
  ],
  Wildlife: [
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551632786-de41ec16a41d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1540573133985-87b6da432b58?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&h=400&fit=crop",
  ],
};

const getRandomImages = (category, count = 4) => {
  const pool = imagePoolsByCategory[category] || imagePoolsByCategory.Nature;
  const images = [];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    images.push(pool[randomIndex]);
  }
  
  return images;
};

const updateSeedDataFile = async () => {
  try {
    const filePath = path.join(__dirname, "../data/placesData.js");
    
    console.log(`Reading ${filePath}...`);
    let content = fs.readFileSync(filePath, "utf-8");

    // Replace images array patterns
    // Match: images: ["https://..."]
    const regex = /images:\s*\[\s*"([^"]+)"\s*\]/g;
    
    let replacementCount = 0;
    content = content.replace(regex, (match, imageUrl) => {
      // Extract category from context - look backwards in the string
      const beforeMatch = content.substring(Math.max(0, content.indexOf(match) - 500), content.indexOf(match));
      const categoryMatch = beforeMatch.match(/category:\s*"([^"]+)"/);
      const category = categoryMatch ? categoryMatch[1] : "Nature";

      const images = getRandomImages(category, 4);
      const imagesStr = images.map(img => `"${img}"`).join(",\n      ");
      
      replacementCount++;
      return `images: [\n      ${imagesStr}\n    ]`;
    });

    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Updated ${replacementCount} places with 4 images each`);
    console.log("File saved successfully!");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

updateSeedDataFile();
