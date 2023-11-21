import fetch from "../../lib/axios";
const defaultApiName = "commerce";

let user = JSON.parse(window.localStorage.getItem("user") || "{}");

let setToken = apiName => {
  fetch[apiName].defaults.headers.common["Authorization"] = user
    ? `Bearer ${user.token}`
    : "";
};

export const post = async (endPoint, req, apiName = defaultApiName) => {
  return await execHttpMethod("post", endPoint, req, apiName);
};

export const get = async (endPoint, req, apiName = defaultApiName) => {
  return await execHttpMethod("get", endPoint, req, apiName);
};

const execHttpMethod = async (method, endPoint, params, apiName) => {
  user && setToken(apiName);
  params = method == "post" ? params : { params };
  try {
    const { data } = await fetch[apiName][method](endPoint, params);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
