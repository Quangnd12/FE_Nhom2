import request from "Admin/src/config/apiConfig";

const Song = async () => {
    const res = await request({
      method: "GET",
      path: "/api/song",
    });
    return res;
  };
  
  export {Song}