// src/config/apiConfig.jsx
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000'; 

export const getAllGenres = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/genres`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};

export const getAllArtists = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/artists`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};

export const searchAll = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching:', error);
    throw error;
  }
};
