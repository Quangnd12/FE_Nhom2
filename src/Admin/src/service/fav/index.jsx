import request from "Admin/src/config/apiConfig";

const Favorite = async () => {
  const res = await request({
    method: "GET",
    path: "/api/favorite",
  });
  return res;
};

const getFavoriteId = async (id) => {
  const res = await request({
    method: "GET",
    path: `/api/favorite/${id}`,
  });
  return res;
};

const addFavorite = async (favorite) => {
  const res = await request({
    method: "POST",
    path: "/api/favorite",
    data: favorite,
  });
  return res;
};

const deleteFavorite = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/favorite/${id}`,
  });
  return res;
};

const updateFavorite = async (id, favorite) => {
  const res = await request({
    method: "PUT",
    path: `/api/favorite/${id}`,
    data: favorite,
  });
  return res;
};

export { Favorite, getFavoriteId, addFavorite, deleteFavorite, updateFavorite };
