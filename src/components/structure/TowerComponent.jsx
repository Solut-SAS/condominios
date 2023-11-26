import { FloorsComponent } from ".";
import { alert } from "../../assets";
import { Tooltip } from "flowbite-react";

const OccupationLevel = ({ occupationPercent }) => {
  return (
    <div className="flex justify-center bg-neutral-800 w-16 h-16 rounded-full z-30 -mt-6 mr-10 opacity-90">
      <span className="text-white self-center">{occupationPercent || 0}%</span>
    </div>
  );
};

const TowerComponent = ({ tower, toggleSidebar }) => {
  console.log(tower.occupationpercent);
  let { id, name, floors, annotations, occupationpercent } = tower;

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
    <div key={`${id}`} className="flex flex-col mb-6">
      <div className="flex flex-row mb-4">
        {annotations?.length && (
          <Tooltip content="Visualiza y gestiona incidentes de esta torre">
            <img
              src={alert}
              className="mx-4 w-[30px] cursor-pointer animate-pulse hover:animate-none "
              onClick={() => handleToggleSidebar()}
            />
          </Tooltip>
        )}
        <span className="text-lg font-bold text-center">{name}</span>
      </div>
      <FloorsComponent floors={floors} viewFloor={handleToggleSidebar} />
      <OccupationLevel occupationPercent={occupationpercent} />
    </div>
  );
};

export default TowerComponent;
