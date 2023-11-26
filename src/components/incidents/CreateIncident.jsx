import { incidentForm } from "../../data/form/FormFields";
import AppForm from "../../components/form/AppForm";
import { useState, useContext } from "react";

import { IncidentContext } from "/src/context/Contexts";

function CreateIncident() {
  const [loading, setLoading] = useState(false);
  const { incidents, setIncidents } = useContext(IncidentContext);

  const toRegister = (formData) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      formData["id"] = incidents.length + 1;
      formData["status"] = "pending";
      formData.image ? console.log(formData.image): formData.image = ""

      console.log(formData);
      console.log(incidents);
      setIncidents((prev) => [...prev, formData]);
    }, 1000);
  };
  console.log("nuevo", incidents);

  return (

      <AppForm
        form={incidentForm}
        onSubmit={(e) => toRegister(e)}
        loading={loading}
      />

  );
}

export default CreateIncident;
