import axios from 'axios';
import { API_BASE_URL } from './albumConfig';

export const getAlbums = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/albums`);
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};


