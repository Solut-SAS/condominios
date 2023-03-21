import { block } from "../../assets";

const BlockComponent = ({ id, name }) => (
  <div key={`${id}`} className="flex flex-col items-center">
    <p>{name}</p>
    <div key={`${id}`} className="block-component flex flex-col mx-8">
      <img src={block} className="box-svg" style={{ width: "80%" }} />
    </div>
  </div>
);

export default BlockComponent;
