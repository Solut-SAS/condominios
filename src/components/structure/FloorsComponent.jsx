import { floor } from "../../assets";
import { floorText } from "./styles";

const FloorsComponent = ({ floors, viewFloor }) =>
  Array.from({ length: floors }).map((_, index) => {
    let floorValue = floors - index;
    return (
      <div
        style={{ zIndex: floorValue }}
        key={index}
        className="floor-component -mb-8"
        onClick={() => viewFloor(floorValue)}
      >
        <div className={floorText}>
          <span className={`text-white text-sm self-center`}>{floorValue}</span>
        </div>
        <img src={floor} className="box-svg" style={{ width: "60%" }} />
      </div>
    );
  });

export default FloorsComponent;
