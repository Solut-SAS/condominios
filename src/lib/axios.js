import axios from "axios";
import { SERVER_URL } from "../common/config";

const axiosClient = axios.create({
  baseURL: SERVER_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const handleError = (error) => {
  return Promise.reject(error);
};

axiosClient.interceptors.response.use(function (response) {
  return response;
}, handleError);

export default axiosClient;
