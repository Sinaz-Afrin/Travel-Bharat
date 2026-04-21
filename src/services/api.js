import axios from 'axios';
import { statesData, getStateByName } from '../data/statesData';
import { getTopDestinations as filterTopDestinations, TOP_DESTINATIONS_LIST } from '../data/topDestinationsConfig';

const API_BASE_URL = 'https://travelbharat-api.onrender.com/api'; // render - backend URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch all places from the backend
 * @returns {Promise<Array>} Array of place objects
 */
export const getAllPlaces = async () => {
  try {
    const response = await apiClient.get('/places');
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching all places:', error);
    throw error;
  }
};

/**
 * Fetch places filtered by region
 * @param {string} region - Region name
 * @returns {Promise<Array>} Array of filtered place objects
 */
export const getPlacesByRegion = async (region) => {
  try {
    const response = await apiClient.get('/places', {
      params: { region },
    });
    return response.data.data || [];
  } catch (error) {
    console.error(`Error fetching places by region (${region}):`, error);
    throw error;
  }
};

/**
 * Fetch places filtered by category
 * @param {string} category - Category name
 * @returns {Promise<Array>} Array of filtered place objects
 */
export const getPlacesByCategory = async (category) => {
  try {
    const response = await apiClient.get('/places', {
      params: { category },
    });
    return response.data.data || [];
  } catch (error) {
    console.error(`Error fetching places by category (${category}):`, error);
    throw error;
  }
};

/**
 * Fetch places filtered by category and state
 * @param {string} category - Category name
 * @param {string} stateSlug - State slug (e.g., "tamil-nadu")
 * @returns {Promise<Array>} Array of filtered place objects
 */
export const getPlacesByCategoryAndState = async (category, stateSlug) => {
  try {
    const response = await apiClient.get('/places', {
      params: { 
        category,
        state: stateSlug
      },
    });
    return response.data.data || [];
  } catch (error) {
    console.error(`Error fetching places by category (${category}) and state (${stateSlug}):`, error);
    throw error;
  }
};

/**
 * Fetch places filtered by state (using slug)
 * @param {string} slug - State slug (e.g., "tamil-nadu")
 * @returns {Promise<Array>} Array of filtered place objects
 */
export const getPlacesByState = async (slug) => {
  try {
    const response = await apiClient.get(`/places/state/${slug}`);
    return response.data.data || [];
  } catch (error) {
    console.error(`Error fetching places by state (${slug}):`, error);
    throw error;
  }
};

/**
 * Fetch a single place by ID
 * @param {string|number} id - Place ID
 * @returns {Promise<Object>} Place object
 */
export const getPlaceById = async (id) => {
  try {
    const response = await apiClient.get(`/places/${id}`);
    return response.data.data || response.data;
  } catch (error) {
    console.error(`Error fetching place with ID (${id}):`, error);
    throw error;
  }
};

/**
 * Fetch random places from the backend
 * @param {number} limit - Number of random places to fetch (default: 6)
 * @returns {Promise<Array>} Array of random place objects
 */
export const getRandomPlaces = async (limit = 6) => {
  try {
    const response = await apiClient.get('/places/random', {
      params: { limit },
    });
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching random places:', error);
    throw error;
  }
};

/**
 * Get unique categories from all places
 * @returns {Promise<Array>} Array of unique categories
 */
export const getCategories = async () => {
  try {
    const places = await getAllPlaces();
    const uniqueCategories = new Map();

    places.forEach((place) => {
      if (place.category && !uniqueCategories.has(place.category)) {
        uniqueCategories.set(place.category, {
          name: place.category,
          slug: place.category.toLowerCase().replace(/\s+/g, '-'),
        });
      }
    });

    return Array.from(uniqueCategories.values());
  } catch (error) {
    console.error('Error extracting categories:', error);
    throw error;
  }
};

/**
 * Get state data by state name (uses local data)
 * @param {string} stateName - State name or ID
 * @returns {Promise<Object>} State data object
 */
export const getStateData = async (stateName) => {
  try {
    // In future, this can be replaced with an API call:
    // const response = await apiClient.get(`/states/${stateName}`);
    // return response.data.data || response.data;

    // For now, use local data
    const state = getStateByName(stateName);
    if (!state) {
      throw new Error(`State not found: ${stateName}`);
    }
    return state;
  } catch (error) {
    console.error(`Error fetching state data (${stateName}):`, error);
    throw error;
  }
};

/**
 * Get all states data (uses local data)
 * @returns {Promise<Array>} Array of state objects
 */
export const getAllStates = async () => {
  try {
    // In future, this can be replaced with an API call:
    // const response = await apiClient.get('/states');
    // return response.data.data || [];

    // For now, use local data
    return statesData;
  } catch (error) {
    console.error('Error fetching all states:', error);
    throw error;
  }
};

/**
 * Get top destinations in fixed order
 * Returns destinations from the TOP_DESTINATIONS_LIST in the specified order
 * Maintains consistency across page loads (no randomization)
 * 
 * @returns {Promise<Array>} Array of top destination place objects
 */
export const getTopDestinations = async () => {
  try {
    // Fetch all places from the API
    const allPlaces = await getAllPlaces();
    
    // Filter using the static list (maintains order)
    const topDestinations = filterTopDestinations(allPlaces);
    
    if (topDestinations.length === 0) {
      console.warn('No top destinations found in database. Expected:', TOP_DESTINATIONS_LIST);
    }
    
    return topDestinations;
  } catch (error) {
    console.error('Error fetching top destinations:', error);
    throw error;
  }
};

export default apiClient;
