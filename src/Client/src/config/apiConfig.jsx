// src/config/apiConfig.jsx
import axios from 'axios';

// artistConfig.js
export const API_BASE_URL = 'http://localhost:4000';
export const UPLOADS_BASE_URL = 'http://localhost:4000/uploads/';


export const getAllGenres = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/genres`);
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

export const getArtists = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/artists`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artists:', error);
    throw error;
  }
};


export const getAlbums = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/albums`);
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};

export const getSongs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/songs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};

export const getAlbumsSong = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/albums_song`);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};


export const getArtistsSong = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/artists_song`);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};

export const getSongsByGenreId = async (id) => {
  try {
      const response = await axios.get(`${API_BASE_URL}/api/genres/${id}/songs`);
      return response.data;
  } catch (error) {
      throw error;
  }
};