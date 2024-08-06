import request from "Admin/src/config/apiConfig";

const Lyric = async () => {
  const res = await request({
    method: "GET",
    path: "/api/lyrics",
  });
  return res;
};

const getLyricById = async (id) => {
  const res = await request({
    method: "GET",
    path: `/api/lyrics/${id}`,
  });
  return res;
};

const addLyric = async (lyric) => {
  const res = await request({
    method: "POST",
    path: "/api/lyrics",
    data: lyric,
  });
  return res;
};

const deleteLyric = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/lyrics/${id}`,
  });
  return res;
};

const updateLyric = async (id, lyric) => {
    const res = await request({
      method: "PUT",
      path: `/api/lyrics/${id}`,
      data: lyric,
    });
    return res;
  };

export { Lyric, getLyricById, addLyric, deleteLyric, updateLyric };
