import { useState, useContext, useEffect } from "react";
import { IncidentContext } from "../../context/Contexts";
import IncidentsTable from "./IncidentsTable";
import AppForm from "../../components/form/AppForm";
import { Modal } from "../index";
import { incidentFormforEdit } from "../../data/form/FormFields";
import AppButton from "../../components/ui/button/AppButton";
import { response, deleteIncident } from "../../features/incidents";

function BoxIncident({ onUpdate }) {
  const [filterValue, setFilterValue] = useState("todo");
  const [showCreateElement, setShowCreateElement] = useState(false);
  const [currentIncident, setCurrentIncident] = useState({});
  const { incidents, setIncidents } = useContext(IncidentContext);
  const [incidentsToPrint, setIncidentsToPrint] = useState(incidents);
  const [loading, setLoading] = useState(false);
  const [currentAction, setCurrentAction] = useState("");

  useEffect(() => {
    if (filterValue == "todo") {
      setIncidentsToPrint(incidents);
    } else {
      const data = incidents.filter(
        (incident) => incident.status == filterValue
      );
      setIncidentsToPrint(data);
    }
  }, [filterValue, incidents]);

  const SpanFilter = () => {
    return (
      <>
        <div className=" absolut flex items-center justify-end">
          <select
            onChange={(e) => setFilterValue(e.target.value)}
            className=" relative bg-transparent cursor-pointer border-none mb-2 mr-2 bottom-14"
          >
            <option value="todo">Filtra</option>
            <option value="todo">Todos</option>
            <option value="pending">Pendiente</option>
            <option value="in_progress">En proceso</option>
            <option value="finished">Cerrado</option>
          </select>
        </div>
      </>
    );
  };

  const handleCancelButton = () => {
    setShowCreateElement(!showCreateElement);
  };

  const handleDeleteButton = async () => {
    setLoading(true);
    const data = { id: currentIncident.id };
    await deleteIncident(data);
    onUpdate({ action: "delete", message: "Incidente eliminado con éxito" });
    setLoading(false);
    setShowCreateElement(!showCreateElement);
  };

  const toEdit = async (form) => {
    setLoading(true);
    form.incidentId = currentIncident.id;
    await response(form);
    onUpdate({ action: "edit", message: "Incidente actualizado con éxito" });
    setLoading(false);
    setShowCreateElement(!showCreateElement);
  };

  const HeaderModal = () => {
    let headerMessage =
      currentAction == "edit" ? "Editar incidente" : "Eliminar incidente";
    return <span>{headerMessage}</span>;
  };

  const handleAction = (action, incident) => {
    setCurrentAction(action);
    setShowCreateElement(!showCreateElement);
    setCurrentIncident(incident);
  };

  const DrawModalBody = () => {
    return currentAction == "edit" ? (
      <AppForm
        form={incidentFormforEdit}
        onSubmit={(e) => toEdit(e)}
        loading={loading}
        loadedData={currentIncident}
      />
    ) : (
      <div className="flex flex-col justify-center items-center">
        <span>¿Está seguro que desea eliminar el incidente?</span>
        <AppButton
          title="Eliminar"
          type={"incident"}
          action={handleDeleteButton}
          loading={loading}
        />
      </div>
    );
  };

  return (
    <>
      <SpanFilter />
      <IncidentsTable items={incidentsToPrint} onAction={handleAction} />
      <Modal
        show={showCreateElement}
        onClose={handleCancelButton}
        header={<HeaderModal />}
        body={<DrawModalBody />}
        footer={""}
      />
    </>
  );
}

export default BoxIncident;
