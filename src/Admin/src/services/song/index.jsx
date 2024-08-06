import request from "Admin/src/config/apiConfig";

const Song = async () => {
  const res = await request({
    method: "GET",
    path: "/api/songs",
  });
  return res;
};

const getSongById = async (id) => {
  const res = await request({
    method: "GET",
    path: `/api/songs/${id}`,
  });
  return res;
};

const addSong = async (formData) => {
  const res = await request({
    method: "POST",
    path: "/api/songs",
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return res;
};

const deleteSong = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/songs/${id}`,
  });
  return res;
};

const updateSong = async (id, formData) => {
  const res = await request({
    method: "PUT",
    path: `/api/songs/${id}`,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

export { Song, getSongById, addSong, deleteSong, updateSong };
