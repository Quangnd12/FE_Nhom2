import request from "Admin/src/config/apiConfig";

const Artists = async () => {
  const res = await request({
    method: "GET",
    path: "/api/artists",
  });
  return res;
};

const getArtistById = async (id) => {
  const res = await request({
    method: "GET",
    path: `/api/artists/${id}`,
  });
  return res;
};

const addArtist = async (artist) => {
  const res = await request({
    method: "POST",
    path: "/api/artists",
    data: artist,
  });
  return res;
};

const deleteArtist = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/artists/${id}`,
  });
  return res;
};

const updateArtist = async (id, artist) => {
  const res = await request({
    method: "PUT",
    path: `/api/artists/${id}`,
    data: artist,
  });
  return res;
};

export { Artists, getArtistById, addArtist, deleteArtist, updateArtist };