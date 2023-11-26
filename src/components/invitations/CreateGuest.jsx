import { useState } from "react";

const CreateGuest = ({ name, onCreateGuest }) => {
  const [guestName, setGuestName] = useState(name);
  const [cellphone, setCellphone] = useState(null);

  const handleInputChange = (event, setFunction) => {
    setFunction(event.target.value);
    const data = {
      name: guestName,
      cellphone,
    };
    onCreateGuest(data);
  };

  const handleCreateGuest = () => {
    const data = {
      name: guestName,
      cellphone,
    };
    onCreateGuest(data);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <input
        className={"mb-4 bg-neutral-100 rounded-md p-2 w-1/2"}
        type="text"
        placeholder="Escribe el nombre del invitado..."
        name="search"
        value={guestName}
        onChange={(e) => handleInputChange(e, setGuestName)}
      />

      <input
        className={" bg-neutral-100 rounded-md p-2 w-1/2"}
        type="number"
        placeholder="Celular (opcional)"
        value={cellphone}
        onChange={(e) => handleInputChange(e, setCellphone)}
      />
    </div>
  );
};

export default CreateGuest;
