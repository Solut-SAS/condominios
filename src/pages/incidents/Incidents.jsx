import CreateIncident from "../../components/incidents/CreateIncident";
import BoxIncident from "../../components/incidents/BoxIncident.jsx";
import { IncidentContext } from "../../context/Contexts";
import { incidentes } from "../../data/dummyData.js";
import { useState } from "react";
import { Modal, Button } from "../../components";
import { plus } from "/src/assets";

function Incidents() {
  const [incidents, setIncidents] = useState(incidentes);
  const [showCreateElement, setShowCreateElement] = useState(false);

  const handleCancelButton = () => {
    setShowCreateElement(!showCreateElement);
  };

  const handleOnCreate = () => {
    setShowCreateElement(!showCreateElement);
  };

  const HeaderModal = () => {
    return <span>Crear incidente</span>;
  };

  const ButtonCreate = () => {
    return (
      <div className="flex w-[2.2em] h-[2.2em]">
        <img
          src={plus}
          onClick={handleOnCreate}
          width={"90%"}
          className="cursor-pointer hover:w-[100%] ease-in-out duration-300"
        />
        <span className="self-center ml-2">Crear Incidente</span>
      </div>
    );
  };

    const DrawModalBody = () => {
      return (
        <CreateIncident/>
      )
    }
  return (
    <IncidentContext.Provider value={{ incidents, setIncidents }}>
      <ButtonCreate />
      <Modal
        show={showCreateElement}
        onClose={handleCancelButton}
        header={<HeaderModal />}
        body={<DrawModalBody/>}
        footer={""}
      />
      <BoxIncident/>
    </IncidentContext.Provider>
  );
}

export default Incidents;
