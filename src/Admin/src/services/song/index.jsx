import request from "Admin/src/config/apiConfig";


const Song = async () => {
  const res = await request({
    method: "GET",
    path: `/api/song/allSong`,
  });

  return res;
}
const addSong = async (formData) => {
  const res = await request({
    method: "POST",
    path: "/api/song",
    data: formData,
  });
  return res;
};
const editSong = async (id,formData) => {
  const res = await request({
    method: "PUT",
    path: `/api/song/${id}`,
    data: formData,
  });
  return res;
};

const getbyIdSong = async ( id) => {
  const res = await request({
    method: "GET",
    path: `/api/song/${id}`,
  });
  return res;
};

const deleteSong = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/song/${id}`,

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

export { Song, getbyIdSong, addSong, deleteSong, updateSong };
