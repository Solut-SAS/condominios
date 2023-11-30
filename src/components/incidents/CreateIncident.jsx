import { useState, useContext } from "react";
import { incidentForm } from "../../data/form/FormFields";
import AppForm from "../../components/form/AppForm";

function CreateIncident({onCreate}) {
  const [loading, setLoading] = useState(false);

  const toRegister = (formData) => {
    setLoading(true);
    let user = JSON.parse(localStorage.getItem("user"));
    formData["userId"] = user.id;
    formData["apartmentId"] = user?.residentialcomplexes[0]?.apartments[0]?.id || 274;
    // formData.image ? console.log(formData.image) : (formData.image = "");
    setLoading(false);
    onCreate(formData);
  };

  return (
    <AppForm
      form={incidentForm}
      onSubmit={(e) => toRegister(e)}
      loading={loading}
    />
  );
}

export default CreateIncident;
