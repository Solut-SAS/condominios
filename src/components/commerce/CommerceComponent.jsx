import { useState, useEffect } from "react";
import { edit } from "../../assets";
import { Modal, Button } from "../";
import { commerceButton } from "./styles";
import { StructureComponent } from "../structure";
import { guard_annotations } from "../../data/dummyData";
import "./styles.css";


const RoundNews = ({ toggleModal }) => (
  <div className="mr-10 w-[28%] h-[65vh] overflow-y-auto p-1 scrollbar-hide overscroll-contain">
    <div className="flex flex-row justify-evenly">
      <h1 className="font-bold mr-4 text-md self-center">Novedades de turno</h1>
      <Button
        title="Crear +"
        action={toggleModal}
        customClass={commerceButton}
      />
    </div>

    {guard_annotations?.map((ga) => (
      <div
        className="flex flex-col w-full shadow-md mt-1 mb-1 rounded-md p-3"
        key={ga.id}
      >
        <div className="flex flex-row justify-between	mb-1">
          <span className="flex font-bold text-sm">{ga.reportedBy}</span>
          <span className="text-sm flex">
            {ga.date} - {ga.time}
          </span>
        </div>
        <span className="text-sm">{ga.content}</span>
      </div>
    ))}
  </div>
);

const CreateNewTurnComponent = ({ onChange, value }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Escriba acá su novedad, por favor"
      className="bg-neutral-100 w-full rounded-md border-none"
    ></textarea>
  );
};

const FooterNewComponent = ({ cancel, create }) => {
  return (
    <div className="flex flex-row">
      <Button
        title="Cancelar"
        action={cancel}
        customClass=" mr-4 bg-neutral-600 text-white rounded-md p-1 px-2 my-4 hover:bg-neutral-700"
      />
      <Button
        action={create}
        title="Crear novedad"
        customClass={commerceButton}
      />
    </div>
  );
};

const Commerce = ({ commerce, structure }) => {
  const [newTurn, setNewTurn] = useState("");
  const [shortcuts, setShortcuts] = useState([
    { name: "Visitas" },
    { name: "Paquetes" },
    { name: "Comunicados" },
    { name: "Novedades" },
  ]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(structure);
  }, []);

  const handleResponseChange = (event) => {
    setNewTurn(event.target.value);
  };

  const handleToggleNewsModal = () => {
    setShowModal(!showModal);
  };

  const handleCreateNewTurn = () => {
    if (!newTurn) return;
    let newTurnData = {
      id: guard_annotations.length + 1,
      content: newTurn,
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
      reportedBy: "Maya el guarda",
    };
    // console.log(newTurnData);
    //TODO llamar a método de backend que crea novedad de turno
    guard_annotations.unshift(newTurnData);
    handleToggleNewsModal();
    setNewTurn("");
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex flex-row justify-center w-full mb-10">
        <RoundNews toggleModal={handleToggleNewsModal} />
        <Modal
          show={showModal}
          onClose={handleToggleNewsModal}
          header={"Crear novedad de turno"}
          body={
            <CreateNewTurnComponent
              onChange={handleResponseChange}
              value={newTurn}
            />
          }
          footer={
            <FooterNewComponent
              cancel={handleToggleNewsModal}
              create={handleCreateNewTurn}
            />
          }
        />

        <div className="flex flex-col w-4/6 ">
          <span className="font-bold mr-4 text-xl mb-6">
           Conjunto {commerce.name}
          </span>
          {/* <img
              className="flex w-8 cursor-pointer"
              src={edit}
              onClick={() => {
                alert("hola");
              }}
            /> */}
          <StructureComponent structure={structure} />
        </div>
      </div>
      {/* <h1>Accesos directos</h1>
      <div className='flex flex-row shadow-md	mt-6 mb-6 rounded-md w-11/12 p-6'>
        {shortcuts.map(s => (
          <div key={s.name} className="bg-neutral-100 mr-4 p-6 hover:bg-neutral-300 transition rounded-xl cursor-pointer">
            <span>{s.name}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Commerce;
