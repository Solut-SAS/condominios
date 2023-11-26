import { post, get } from "../../app/api";

const create = async (data) => {
  return await post("guest/create", data);
};

const list = async () => {
  return await get("guest/list");
};

const update = async (data) => {
  return await post("guest/update", data);
};

const deleteGuest = async (data) => {
  return await post("guest/delete", data);
};

export { create, list, update, deleteGuest };
