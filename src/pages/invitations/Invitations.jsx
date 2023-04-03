import { useState } from "react";
import { Modal } from "../../components";
import {
  GuestsTable,
  InvitationsTable,
  BoxComponent,
} from "../../components/commerce";
import { guests, invitations } from "../../data/dummyData";
import { CreateInvitation, CreateGuest } from "../../components/invitations";

const TitleItem = ({ title }) => (
  <div className="flex flex-row w-1/2 mb-2 sm:mb-0 mt-10 sm:mt-0">
    <span className="text-lg font-semibold">{title}</span>
  </div>
);

function Invitations() {
  const [showCreateElement, setShowCreateElement] = useState(false);
  const [elementType, setElementType] = useState();

  const handleOnCreate = (type = "") => {
    setElementType(type);
    setShowCreateElement(!showCreateElement);
  };

  const handleCreateGuest = (data) => {
    setElementType("invitation");
  }


  const CreateElement = () => {
    console.log("render modals");

    const types = {
      invitation: "Invitación",
      guest: "Invitado",
    };

    const drawCompontent = {
      invitation: <CreateInvitation />,
      guest: <CreateGuest onCreateGuest={handleCreateGuest} />,
    }

    const header = `Crear ${types[elementType]}`;

    return (
      <Modal
        show={showCreateElement}
        onClose={handleOnCreate}
        header={header}
        body={ drawCompontent[elementType] }
        footer={"Crear invitación"}
      />
    );
  };

  const handleAction = (action) => {
    console.log(
      "🚀 ~ file: Invitations.tsx:64 ~ handleAction ~ action",
      action
    );
  };

  return (
    <div className="h-[100vh] rounded-md">
      <CreateElement />

      <div className="flex flex-col sm:flex-row mb-8 px-4">
        <BoxComponent
          onCreate={() => handleOnCreate("invitation")}
          title="Invitaciones activas"
          value={invitations.data.length}
        />
        <BoxComponent
          onCreate={() => handleOnCreate("guest")}
          title="Invitados"
          value={guests.data.length}
        />
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/2 px-4">
          <TitleItem title="Invitaciones" />
          <InvitationsTable
            headers={invitations.headers}
            items={invitations.data}
            onAction={handleAction}
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/2 px-4">
          <TitleItem title="Invitados" />
          <GuestsTable
            headers={guests.headers}
            items={guests.data}
            onAction={handleAction}
          />
        </div>
      </div>
    </div>
  );
}

export default Invitations;
