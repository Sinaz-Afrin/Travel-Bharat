import Place from "../models/Place.js";

// @desc    Get all places with filtering
// @route   GET /api/places
// @query   ?region=&category=&state=
export const getAllPlaces = async (req, res) => {
  try {
    const { region, category, state, search } = req.query;

    // Build filter object
    let filter = {};

    if (region) {
      filter.region = { $regex: region, $options: "i" };
    }

    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    if (state) {
      filter.state = { $regex: state, $options: "i" };
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } },
      ];
    }

    const places = await Place.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: places.length,
      data: places,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Get single place by ID
// @route   GET /api/places/:id
export const getPlaceById = async (req, res) => {
  try {
    const { id } = req.params;

    const place = await Place.findById(id);

    if (!place) {
      return res.status(404).json({
        success: false,
        error: "Place not found",
      });
    }

    res.status(200).json({
      success: true,
      data: place,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Create a new place
// @route   POST /api/places
export const createPlace = async (req, res) => {
  try {
    const { name, state, region, city, category, description, bestTimeToVisit, entryFee, locationLink, images, nearbyAttractions } = req.body;

    // Validation
    if (!name || !state || !region || !category) {
      return res.status(400).json({
        success: false,
        error: "Please provide all required fields: name, state, region, category",
      });
    }

    const place = await Place.create({
      name,
      state,
      region,
      city,
      category,
      description,
      bestTimeToVisit,
      entryFee,
      locationLink,
      images: images || [],
      nearbyAttractions: nearbyAttractions || [],
    });

    res.status(201).json({
      success: true,
      message: "Place created successfully",
      data: place,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Update a place
// @route   PUT /api/places/:id
export const updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Find and update the place
    const place = await Place.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true } // Return updated document and run schema validators
    );

    if (!place) {
      return res.status(404).json({
        success: false,
        error: "Place not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Place updated successfully",
      data: place,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Delete a place
// @route   DELETE /api/places/:id
export const deletePlace = async (req, res) => {
  try {
    const { id } = req.params;

    const place = await Place.findByIdAndDelete(id);

    if (!place) {
      return res.status(404).json({
        success: false,
        error: "Place not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Place deleted successfully",
      data: place,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
