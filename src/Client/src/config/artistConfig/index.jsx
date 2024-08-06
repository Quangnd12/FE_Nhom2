import axios from 'axios';
import { API_BASE_URL } from './artistConfig'; // Đường dẫn đến file artistConfig.js

export const getArtists = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/artists`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artists:', error);
    throw error;
  }
};
