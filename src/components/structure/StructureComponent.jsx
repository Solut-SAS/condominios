import { useEffect, useState } from "react";
import { spaceStyle } from "./styles";
import { floor } from "../../data/dummyData";
import SidebarInfo from "../sidebar/SidebarInfo";
import { TowerComponent, Block, Annotation } from "./";

import { response } from "../../features/incidents";
import { getInfo } from "../../features/commerces";
import Notify from "../../components/ui/notify/Notify";

const StructureComponent = ({ structure }) => {
  const [towers, setTowers] = useState(structure.towers);
  const [renderedTowers, setRenderedTowers] = useState([]);
  const [blocks] = useState(structure.blocks);
  const [showSidebar, setShowSidebar] = useState(false);
  const [renderObject, setRenderObject] = useState({});
  const [defaultTowersOnscreen] = useState(4);
  const [currentTowerIndex, setCurrentTowerIndex] = useState(0);
  const [type, setType] = useState("");
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(structure);
    let visibleTowes = towers.slice(0, defaultTowersOnscreen);
    setRenderedTowers(visibleTowes);
  }, []);

  const calcVariation = (type) => {
    const types = {
      increment: 1,
      decrement: -1,
    };

    let op = types[type] * defaultTowersOnscreen;

    setCurrentTowerIndex((prev) => prev + op);
    setRenderedTowers(
      towers.slice(
        currentTowerIndex + op,
        currentTowerIndex + op + defaultTowersOnscreen
      )
    );
  };

  const RenderAnnotations = () => (
    <div className="flex flex-col overflow-y-scroll h-[90vh]">
      <h1 className="text-center text-lg mb-6">Novedades en la torre</h1>
      {renderObject?.toRender?.map((annotation) => (
        <Annotation
          {...annotation}
          key={annotation.id}
          resolveAnnotation={handleResolveAnnotation}
        />
      ))}
    </div>
  );

  const RenderFloor = () => (
    <>
      <h1 className="text-center text-lg mb-6">Información del piso</h1>
      {floor.map((f) => (
        <div
          key={f.id}
          className="flex flex-col bg-white text-black rounded-md p-2 mb-4"
        >
          <span className="font-bold">{f.name}</span>
          {f.status == "Ocupada" && <span>Inquilino: {f.inquilino}</span>}
          <span>Estado: {f.status}</span>
        </div>
      ))}
    </>
  );

  const renderTypes = {
    floor: <RenderFloor />,
    annotations: <RenderAnnotations />,
  };

  const RenderInSidebar = () => {
    return renderTypes[renderObject.renderType];
  };

  const handleSidebar = (props) => {
    let show = true;
    if (props) {
      setRenderObject(props);
      if (
        props.renderType == renderObject.renderType &&
        props.toRender == renderObject.toRender &&
        showSidebar
      ) {
        show = false;
      }
    } else {
      show = false;
    }
    setShowSidebar(show);
  };

  const handleResolveAnnotation = async (props) => {
    if (!props.response) props.response = "Resuelto sin descripción";
    await response(props);
    setType("success");
    setMessage("Incidente resuelto con éxito");
    setActive(true);
    let commerce = JSON.parse(window.localStorage.getItem("commerce"));
    let { structure } = await getInfo({ id: commerce.id });
    window.localStorage.setItem("structure", JSON.stringify(structure));
  };

  const Towers = () =>
    renderedTowers.map((tower) => (
      <TowerComponent
        key={tower.id}
        tower={tower}
        toggleSidebar={handleSidebar}
      />
    ));

  const Blocks = () => blocks.map((block) => Block(block));

  return (
    <div className="flex flex-col">
      <Notify
        message={message}
        type={type}
        active={active}
        setActive={setActive}
      />
      <div className="flex flex-row">
        {currentTowerIndex != 0 && (
          <span onClick={() => calcVariation("decrement")}>Atrás</span>
        )}
        {currentTowerIndex + defaultTowersOnscreen <= towers.length && (
          <span onClick={() => calcVariation("increment")}>Siguiente</span>
        )}
      </div>

      <div className={spaceStyle}>
        <Towers />
      </div>

      <div className={spaceStyle}>
        <Blocks />
      </div>

      <div className="overflow-scroll">
        <SidebarInfo visible={showSidebar} setVisible={handleSidebar}>
          <RenderInSidebar />
        </SidebarInfo>
      </div>
    </div>
  );
};

export default StructureComponent;
