import { post, get } from "../../app/api";

const create = async (data) => {
  return await post("invitations/create", data);
};

const list = async () => {
  return await get("invitations/list");
};

const update = async (data) => {
  return await post("invitations/update", data);
};

const deleteInvitation = async (data) => {
  return await post("invitations/delete", data);
};

export { create, list, update, deleteInvitation };
