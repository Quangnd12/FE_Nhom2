import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000'; // Điều chỉnh URL nếu cần

export const getAllAlbums = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/albums`);
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};

