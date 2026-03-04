import express from "express";
import {
  getAllPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
} from "../controllers/placeController.js";

const router = express.Router();

// GET all places (with optional filtering)
router.get("/", getAllPlaces);

// GET single place by ID
router.get("/:id", getPlaceById);

// POST create new place
router.post("/", createPlace);

// PUT update place
router.put("/:id", updatePlace);

// DELETE place
router.delete("/:id", deletePlace);

export default router;
