import { useState } from "react";
import AppButton from "../ui/button/AppButton";

const CreateGuest = ({ name, onCreateGuest }) => {
  const [guestName, setGuestName] = useState(name);
  const [cellphone, setCellphone] = useState(null);

  const handleInputChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const handleCreateGuest = () => {
    const data = {
      name: guestName,
      cellphone,
    };
    onCreateGuest(data);
  };

  return (
    <div className="flex-col ml-6 flex w-[30%]">
      <input
        className={" mb-4 bg-neutral-100 rounded-md p-2"}
        type="text"
        placeholder="Escribe el nombre del invitado..."
        name="search"
        value={guestName}
        onChange={(e) => handleInputChange(e, setGuestName)}
      />

      <input
        className={" bg-neutral-100 rounded-md p-2"}
        type="number"
        placeholder="Celular"
        value={cellphone}
        onChange={(e) => handleInputChange(e, setCellphone)}
      />

      <AppButton
        title="Crear invitado"
        action={handleCreateGuest}
        customClass="rounded-lg mt-4 text-white bg-red-500 hover:bg-red-600 p-1"
        loading={false}
      />
    </div>
  );
};

export default CreateGuest;
