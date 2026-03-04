import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/travel-bharat';
const samplePlaces = [
  {
    name: 'Taj Mahal',
    state: 'Uttar Pradesh',
    region: 'North India',
    category: 'Heritage',
    description: 'Iconic white marble mausoleum in Agra built by Shah Jahan.',
    images: ['https://example.com/images/taj1.jpg', 'https://example.com/images/taj2.jpg'],
    bestTimeToVisit: 'Oct to Mar',
    entryFee: '₹50 for Indians, ₹1100 for Foreigners (approx)',
    nearbyAttractions: ['Agra Fort', 'Mehtab Bagh'],
    locationLink: 'https://www.google.com/maps/place/Taj+Mahal'
  },
  {
    name: 'Leh Ladakh',
    state: 'Ladakh',
    region: 'North India',
    category: 'Adventure',
    description: 'High-altitude desert famed for dramatic landscapes and passes.',
    images: ['https://example.com/images/leh1.jpg'],
    bestTimeToVisit: 'May to Sep',
    entryFee: 'No entry fee',
    nearbyAttractions: ['Pangong Lake', 'Nubra Valley'],
    locationLink: 'https://www.google.com/maps/place/Leh'
  },
  {
    name: 'Mysore Palace',
    state: 'Karnataka',
    region: 'South India',
    category: 'Heritage',
    description: 'Royal historic palace known for its ornate architecture and Dussehra festivities.',
    images: ['https://example.com/images/mysore1.jpg'],
    bestTimeToVisit: 'Sep to Mar',
    entryFee: '₹70 (approx)',
    nearbyAttractions: ['Brindavan Gardens'],
    locationLink: 'https://www.google.com/maps/place/Mysore+Palace'
  },
  {
    name: 'Goa Beaches',
    state: 'Goa',
    region: 'West India',
    category: 'Beach',
    description: 'Sandy beaches, nightlife, and seafood along the Arabian Sea.',
    images: ['https://example.com/images/goa1.jpg', 'https://example.com/images/goa2.jpg'],
    bestTimeToVisit: 'Nov to Feb',
    entryFee: 'No entry fee',
    nearbyAttractions: ['Basilica of Bom Jesus', 'Anjuna Flea Market'],
    locationLink: 'https://www.google.com/maps/place/Goa'
  },
  {
    name: 'Darjeeling Himalayan Railway',
    state: 'West Bengal',
    region: 'East India',
    category: 'Heritage',
    description: 'Toy train offering scenic rides through tea gardens and hills.',
    images: ['https://example.com/images/darjeeling1.jpg'],
    bestTimeToVisit: 'Mar to May, Oct to Nov',
    entryFee: 'Ticketed rides vary',
    nearbyAttractions: ['Tiger Hill', 'Batasia Loop'],
    locationLink: 'https://www.google.com/maps/place/Darjeeling'
  },
  {
    name: 'Rann of Kutch',
    state: 'Gujarat',
    region: 'West India',
    category: 'Landscape',
    description: 'Vast white salt desert best seen during the full moon festival (Rann Utsav).',
    images: ['https://example.com/images/rann1.jpg'],
    bestTimeToVisit: 'Nov to Feb',
    entryFee: 'No entry fee (festival tickets extra)',
    nearbyAttractions: ['Kalo Dungar', 'Kutch villages'],
    locationLink: 'https://www.google.com/maps/place/Rann+of+Kutch'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const col = mongoose.connection.collection('places');

    // Remove existing documents
    await col.deleteMany({});
    console.log('Cleared existing places');

    // Insert sample documents
    const result = await col.insertMany(samplePlaces);
    console.log(`Inserted ${result.insertedCount} sample places`);
  } catch (err) {
    console.error('Seeder error:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected');
  }
}

run();