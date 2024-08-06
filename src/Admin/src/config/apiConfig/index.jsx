import axios from "axios";
import { Cookies } from "react-cookie";

const BASE_URL = "http://localhost:4000";

const request = async ({
    method = "GET",
    path = "",
    data = {},
    headers = {},
}) => {
    try {
        const cookie = new Cookies();
        const token = cookie.get("token");


        const res = await axios({
            method: method,
            baseURL: BASE_URL,
            url: path,
            data: data,
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        alert(error?.response?.data?.message || "Error");
        return null;
    }
};

export default request;
export { BASE_URL};