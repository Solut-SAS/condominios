import { useState } from "react";
import { spaceStyle } from "./styles";
import { floor } from "../../data/dummyData";
import SidebarInfo from "../sidebar/SidebarInfo";
import { TowerComponent, Block, Annotation } from "./";

const StructureComponent = ({ structure }) => {
  const [towers] = useState(structure.towers);
  const [blocks] = useState(structure.blocks);
  const [showSidebar, setShowSidebar] = useState(false);
  const [renderObject, setRenderObject] = useState({});

  const RenderAnnotations = () => (
    <>
      <h1 className="text-center text-lg mb-6">Novedades en la torre</h1>
      {renderObject?.toRender?.map((annotation) => (
        <Annotation
          {...annotation}
          key={annotation.id}
          resolveAnnotation={handleResolveAnnotation}
        />
      ))}
    </>
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

  const handleResolveAnnotation = (props) => {
    console.log(props);
  };

  const Towers = () =>
    towers.map((tower) => (
      <TowerComponent
        key={tower.id}
        tower={tower}
        toggleSidebar={handleSidebar}
      />
    ));

  const Blocks = () => blocks.map((block) => Block(block));

  return (
    <div className="flex flex-col">
      <div className={spaceStyle}>
        <Towers />
      </div>

      <div className={spaceStyle}>
        <Blocks />
      </div>

      <SidebarInfo visible={showSidebar} setVisible={handleSidebar}>
        <RenderInSidebar />
      </SidebarInfo>
    </div>
  );
};

export default StructureComponent;
