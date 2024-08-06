import request from "Admin/src/config/apiConfig";

const Genre = async () => {
  const res = await request({
    method: "GET",
    path: "/api/genres",
  });
  return res;
};

const getGenreById = async (id) => {
  const res = await request({
    method: "GET",
    path: `/api/genres/${id}`,
  });
  return res;
};

const addGenre = async (formData) => {
  const res = await request({
    method: "POST",
    path: "/api/genres",
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

const deleteGenre = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/genres/${id}`,
  });
  return res;
};

const updateGenre = async (id, formData) => {
  const res = await request({
    method: "PUT",
    path: `/api/genres/${id}`,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

export { Genre, getGenreById, addGenre, deleteGenre, updateGenre };
