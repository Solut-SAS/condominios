import { floor } from "../../assets";
import { floorText } from "./styles";

const FloorsComponent = ({ floors, viewFloor }) =>
  Array.from({ length: floors }).map((_, index) => {
    let floorValue = floors - index;
    return (
      <div
        style={{ zIndex: floorValue }}
        key={index}
        className="floor-component h-4 md:h-4 lg:h-6"
        onClick={() => viewFloor(floorValue)}
      >
        <div className={floorText}>
          <span className={`text-white text-sm self-center z-10`}>{floorValue}</span>
        </div>
        <img
          src={floor}
          className="box-svg"
          style={{ width: "45%", maxWidth: "100%", height: "auto" }}
        />
      </div>
    );
  });

export default FloorsComponent;
