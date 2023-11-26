import { post, get } from "../../app/api";

const response = async (data) => {
  return await post("incidents/response", data);
};

const create = async () => {
  return await post("incidents/create");
};

const update = async (data) => {
  return await post("incidents/update", data);
};

const deleteIncident = async (data) => {
  return await post("incidents/delete", data);
};

export { create, response, update, deleteIncident };
