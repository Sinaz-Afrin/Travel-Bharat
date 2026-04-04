import express from "express";
import {
  getAllPlaces,
  getPlaceById,
  getPlacesByState,
  getRandomPlaces,
  createPlace,
  updatePlace,
  deletePlace,
} from "../controllers/placeController.js";

const router = express.Router();

// GET random places (specific route first)
router.get("/random", getRandomPlaces);

// GET places by stateSlug (specific route before generic :id)
router.get("/state/:slug", getPlacesByState);

// GET all places (with optional filtering)
router.get("/", getAllPlaces);

// GET single place by ID (generic route last)
router.get("/:id", getPlaceById);

// POST create new place
router.post("/", createPlace);

// PUT update place
router.put("/:id", updatePlace);

// DELETE place
router.delete("/:id", deletePlace);

export default router;
