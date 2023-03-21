import { plus } from "../../../assets";
import { invitationBox } from "./styles";

const BoxComponent = ({ onCreate, title, value }) => (
  <div className={invitationBox}>
    <div className="flex w-[2em] h-[2em]">
      <img
        src={plus}
        onClick={onCreate}
        width={"90%"}
        className="cursor-pointer hover:w-[100%] ease-in-out duration-300"
      />
    </div>
    <div className="flex flex-col">
      <span>{title}</span>
      <span className="font-bold">{value}</span>
    </div>
  </div>
);

export default BoxComponent;
