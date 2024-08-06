import request from "Admin/src/config/apiConfig";

const Follow = async () => {
  const res = await request({
    method: "GET",
    path: "/api/follows",
  });
  return res;
};

const getFollowById = async (id) => {
  const res = await request({
    method: "GET",
    path: `/api/follows/${id}`,
  });
  return res;
};

const addFollow = async (follow) => {
  const res = await request({
    method: "POST",
    path: "/api/follows",
    data: follow,
  });
  return res;
};

const deleteFollow = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/follows/${id}`,
  });
  return res;
};

const updateFollow = async (id, follow) => {
    const res = await request({
      method: "PUT",
      path: `/api/follows/${id}`,
      data: follow,
    });
    return res;
  };

export { Follow, getFollowById, addFollow, deleteFollow, updateFollow };
