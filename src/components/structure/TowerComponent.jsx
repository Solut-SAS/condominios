import { FloorsComponent } from ".";
import { alert } from "../../assets";

const OccupationLevel = ({ occupationPercent }) => {
  return (
    <div className="flex justify-center bg-neutral-800 w-16 h-16 rounded-full z-30 -mt-6 mr-10 opacity-90">
      <span className="text-white self-center">{occupationPercent || 0}%</span>
    </div>
  );
};

const TowerComponent = ({ tower, toggleSidebar }) => {
  let { id, name, floors, annotations, occupationPercent } = tower;

  const handleToggleSidebar = (floorId = false) => {
    let renderType = "annotations";
    let toRender = annotations;
    if (floorId) {
      renderType = "floor";
      toRender = floorId;
    }
    toggleSidebar({ renderType, toRender });
  };

  return (
    <div key={`${id}`} className="flex flex-col self-center">
      <div className="flex flex-row mb-4">
        {annotations?.length && (
          <img
            src={alert}
            className="mx-4 w-1/6 cursor-pointer animate-pulse hover:animate-none "
            onClick={() => handleToggleSidebar()}
          />
        )}
        <span className="text-lg">{name}</span>
      </div>
      <FloorsComponent floors={floors} viewFloor={handleToggleSidebar} />
      <OccupationLevel occupationPercent={occupationPercent} />
    </div>
  );
};

export default TowerComponent;
