import { useState, useContext, useEffect } from "react";
import { IncidentContext } from "/src/context/Contexts";
import IncidentsTable from "./IncidentsTable";
import AppForm from "../../components/form/AppForm";
import { Modal, Button } from "../index";
import { incidentFormforEdit } from "../../data/form/FormFields";
import { filter } from "../../assets";


function BoxIncident() {
  const [filterValue, setFilterValue] = useState("todo"); // organizar el renderizado con esta info
  const [showCreateElement, setShowCreateElement] = useState(false);
  const [currentIncident, setCurrentIncident] = useState({});
  const { incidents, setIncidents } = useContext(IncidentContext);
  const [incidentsToPrint, setIncidentsToPrint] = useState(incidents);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(filterValue);

    if (filterValue == "todo") {
      setIncidentsToPrint(incidents);
      console.log("Si entra a todos");
    } else {
      const data = incidents.filter(
        (incident) => incident.status == filterValue
      );
      console.log("Si entra a estados");
      setIncidentsToPrint(data);
    }
  }, [filterValue]);
  console.log("indicentes a imprimir", incidentsToPrint);
  console.log(incidents);
  const SpanFilter = () => {
    return (
      <>

        <div class=" absolut flex items-center justify-end">
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

  const toEdit = (formData) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      formData.image ? console.log(formData.image) : (formData.image = "");

      console.log(formData);

      currentIncident["type"] = formData["type"];
      currentIncident["description"] = formData["description"];
      currentIncident["image"] = formData["image"];

      console.log(currentIncident);
    }, 1000);
  };

  const handleCancelButton = () => {
    setShowCreateElement(!showCreateElement);
  };

  const HeaderModal = () => {
    return <span>Editar incidente</span>;
  };

  const handleAction = (action, incident) => {
    if (action == "edit") {
      setShowCreateElement(!showCreateElement);
      setCurrentIncident(incident);
    } else {
      console.log("Eliminando el incidente con id", incident.id);
    }
  };

  const DrawModalBody = () => {
    return (
      <AppForm
        form={incidentFormforEdit}
        onSubmit={(e) => toEdit(e)}
        loading={loading}
        loadedData={currentIncident}
      />
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
