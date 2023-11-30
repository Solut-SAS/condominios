import { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import CreateIncident from "../../components/incidents/CreateIncident";
import BoxIncident from "../../components/incidents/BoxIncident";
import { IncidentContext } from "../../context/Contexts";
import { Modal } from "../../components";
import { plus } from "/src/assets";
import { list, create } from "../../features/incidents";

import Notify from "../../components/ui/notify/Notify";

function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [showCreateElement, setShowCreateElement] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    listIncidents();
  }, []);

  const listIncidents = async () => {
    setLoading(true);
    try {
      const response = await list();
      console.log({ response });
      setIncidents(response.incidents);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelButton = () => {
    setShowCreateElement(!showCreateElement);
  };

  const handleOnCreate = () => {
    setShowCreateElement(!showCreateElement);
  };

  const handleOnCreateIncident = async (data) => {
    try {
      await create(data);
      setType("success");
      setMessage("Incidente creado con éxito");
      setActive(true);
      listIncidents();
    } catch (error) {
      console.log(error);
    }
    setShowCreateElement(!showCreateElement);
  };

  const HeaderModal = () => {
    return <span>Crear incidente</span>;
  };

  const handleOnUpdate = (data) => {
    setType("success");
    setMessage(data.message);
    setActive(true);
    listIncidents();
  };

  const ButtonCreate = () => {
    return (
      <div className="flex w-[2em] h-[2em] m-4">
        <img
          src={plus}
          onClick={handleOnCreate}
          width={"90%"}
          className="cursor-pointer hover:w-[100%] ease-in-out duration-300"
        />
        <span className="self-center w-30 ml-2">Crear Incidente</span>
      </div>
    );
  };

  return (
    <IncidentContext.Provider value={{ incidents, setIncidents }}>
      <ButtonCreate />

      <Notify
        message={message}
        type={type}
        active={active}
        setActive={setActive}
      />

      <Modal
        show={showCreateElement}
        onClose={handleCancelButton}
        header={<HeaderModal />}
        body={<CreateIncident onCreate={handleOnCreateIncident} />}
        footer={""}
      />
      {incidents?.length ? (
        <BoxIncident incidents={incidents} onUpdate={handleOnUpdate} />
      ) : (
        loading && (
          <FallingLines
            color="#f53641"
            width="100"
            visible={loading}
            ariaLabel="falling-lines-loading"
          />
        )
      )}
    </IncidentContext.Provider>
  );
}

export default Incidents;
