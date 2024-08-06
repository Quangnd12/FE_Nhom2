import request from "Admin/src/config/apiConfig";

 const User = async () => {
  const res = await request({
    method: "GET",
    path: "/api/users",
  });
  return res;
};

export {User}