import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import placeRoutes from "./routes/placeRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://travelbharath.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Connect to Database
connectDB();

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "✅ Server is running",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/places", placeRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "🎉 Welcome to Travel Bharat Backend API",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      getAllPlaces: "GET /api/places",
      getPlaceById: "GET /api/places/:id",
      createPlace: "POST /api/places",
      updatePlace: "PUT /api/places/:id",
      deletePlace: "DELETE /api/places/:id",
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || "Internal server error",
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("📡 CORS enabled for localhost + Netlify");
});
