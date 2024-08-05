import request from "Admin/src/config/apiConfig";

const Album = async () => {
  const res = await request({
    method: "GET",
    path: "/api/albums",
  });
  return res;
};




const getAlbumById = async (id) => {
  const res = await request({
    method: "GET",
    path: `/api/albums/${id}`,
  });
  return res;
};

const addAlbum = async (album) => {
  try {
    const res = await request({
      method: "POST",
      path: "/api/albums",
      data: album,
    });
    return res;
  } catch (error) {
    console.error("Error adding album:", error);
    throw new Error(error.response?.data?.message || "Failed to add album");
  }
};

const deleteAlbum = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/albums/${id}`,
  });
  return res;
};

const updateAlbum = async (id, album) => {
  const res = await request({
    method: "PUT",
    path: `/api/albums/${id}`,
    data: album,
  });
  return res;
};

export { Album,getAlbumById, addAlbum, deleteAlbum, updateAlbum };