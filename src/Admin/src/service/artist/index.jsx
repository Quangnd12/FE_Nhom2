import request from "Admin/src/config/apiConfig";

const Artist = async () => {
  const res = await request({
    method: "GET",
    path: "/api/artists",
  });
  return res;
};

export {Artist}