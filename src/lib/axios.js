import axios from "axios";
import { APIS } from "../common/config";

const handleError = (error) => {
  return Promise.reject(error);
};

let axiosInstances = {};

for (let i = 0; i < APIS.length; i++) {
  const api = APIS[i];
  axiosInstances[api.name] = axios.create({
    baseURL: api.url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  axiosInstances[api.name].interceptors.response.use(function (response) {
    return response;
  }, handleError);
}

export default axiosInstances;
