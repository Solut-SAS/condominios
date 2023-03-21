import { recurrentAnnotations, recentAnnotations } from "../../data/dummyData";
import SidebarAnnotations from "./SideBarAnnotations";
import { RABoxSpan } from "./styles";
import { star } from "../../assets";
import { useAnnotation } from "../../hooks/useAnnotation";

const RecurrentBoxElement = ({ items }) => {
  const { updateItems, updateContentAnnotation } = useAnnotation();

  const handleItemSelected = (r) => {
    updateItems(r.to, false, false);
    updateContentAnnotation(r.content);
  };

  return (
    <div className="p-2 overflow-auto">
      {items.map((r) => (
        <div
          onClick={() => {
            handleItemSelected(r);
          }}
          key={r.id}
          className={
            "bg-neutral-50 rounded-md mt-2 p-1 cursor-pointer hover:bg-neutral-100"
          }
        >
          <span className={RABoxSpan}>{r.content}</span>
          <div className="flex flex-wrap">
            {r.to.map((to) => (
              <div
                key={to.id}
                className="mr-2 bg-neutral-100 pl-1 pr-1 rounded-md mt-1"
              >
                <span className="text-sm">{to.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
const RecurrentAnnotations = () => {
  return (
    <SidebarAnnotations>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full h-[47vh] p-2">
          <div className="flex mb-2 ml-2">
            <span className="font-medium mr-2">Comunicados favoritos</span>
            <img src={star} className="flex" />
          </div>
          <RecurrentBoxElement items={recurrentAnnotations} />
        </div>

        <div className="flex flex-col w-full h-[47vh] mt-4 p-2">
          <span className="mb-2 ml-2 font-medium">Comunicados recientes</span>
          <RecurrentBoxElement items={recentAnnotations} />
        </div>
      </div>
    </SidebarAnnotations>
  );
};

export default RecurrentAnnotations;
