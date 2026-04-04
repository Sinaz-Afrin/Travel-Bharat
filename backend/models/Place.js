import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a place name"],
      trim: true,
      maxlength: [100, "Place name cannot exceed 100 characters"],
    },
    state: {
      type: String,
      required: [true, "Please provide a state"],
      trim: true,
    },
    stateSlug: {
      type: String,
      trim: true,
      lowercase: true,
    },
    region: {
      type: String,
      required: [true, "Please provide a region"],
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
      enum: [
        "Adventure", 
        "Art", 
        "Beach", 
        "City", 
        "Culture", 
        "Entertainment", 
        "Event", 
        "Festival", 
        "Heritage", 
        "Museum", 
        "Nature", 
        "Shopping", 
        "Spiritual", 
        "Wildlife",
      ],
    },
    description: {
      type: String,
      trim: true,
    },
    bestTimeToVisit: {
      type: String,
      trim: true,
    },
    entryFee: {
      type: String,
      default: "Free",
    },
    locationLink: {
      type: String,
      trim: true,
    },
    images: [
      {
        type: String,
        trim: true,
      },
    ],
    nearbyAttractions: [
      {
        type: String,
        trim: true,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);

export default Place;
