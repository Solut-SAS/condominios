import { useState } from "react";
import { buttonDelete, buttonResponse } from "./styles";
import AppButton from "../ui/button/AppButton";
import { check } from "../../assets";

const Annotation = ({ home, content, personName, id, resolveAnnotation, status }) => {
  const [response, setResponse] = useState("");
  const [visible, setVisible] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleToggleAnnotation = () => {
    setVisible(!visible);
  };

  const handleResolveAnnotation = () => {
    resolveAnnotation({ incidentId: id, response, status: 'finished' });
    setResponse("");
    setVisible(false);
    setSolved(true);
  };

  return (
    <div key={id} className=" bg-white text-black rounded-md p-2 mb-4">
      <span className="flex flex-row font-bold">
        <span>{personName} - </span>
        <span>{home}</span>
      </span>
      <span>{content}</span>
      <div className="flex flex-row">
        {!solved && status != 'finished' ? (
          <>
            <AppButton
              title="Eliminar"
              customClass={buttonDelete}
              action={handleResolveAnnotation}
            />
            <AppButton
              title={!visible ? "Responder" : "Ocultar"}
              customClass={buttonResponse}
              action={handleToggleAnnotation}
            />
          </>
        ) : (
          <>
            <span className="text-red-500 font-medium self-center mr-2">
              Resuelto
            </span>
            <img src={check} className="self-center" />
          </>
        )}
      </div>
      {visible && (
        <>
          <textarea
            className="w-full rounded-md mt-2 resize-none border-2"
            placeholder="Escriba su respuesta aquí..."
            id="message"
            name="message"
            value={response}
            onChange={handleResponseChange}
          />

          <AppButton
            title="Enviar"
            customClass={buttonResponse}
            action={handleResolveAnnotation}
          />
        </>
      )}
    </div>
  );
};

export default Annotation;
