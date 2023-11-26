import { post } from "../../../app/api";

const getInfo = async (data) => {
  return await post("residential/getInfo", data);
};

export default getInfo;
