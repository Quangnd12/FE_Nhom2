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

const addAlbum = async (formData) => {
  const res = await request({
    method: "POST",
    path: "/api/albums",
    data: formData,
    header:{
      'Content-Type': 'multipart/form-data',
    }
  });
  return res;
};


const deleteAlbum = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/albums/${id}`,
  });
  return res;
};

const updateAlbum = async (id, formData) => {
  const res = await request({
    method: "PUT",
    path: `/api/albums/${id}`,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

export { Album, getAlbumById, addAlbum, deleteAlbum, updateAlbum };
