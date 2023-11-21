import { useState, useEffect } from "react";
import { Modal, Button } from "../../components";
import {
  GuestsTable,
  InvitationsTable,
  BoxComponent,
} from "../../components/commerce";
import { guests, invitations } from "../../data/dummyData";
import { CreateInvitation, CreateGuest } from "../../components/invitations";
import { commerceButton } from "../../components/commerce/styles";

const TitleItem = ({ title }) => (
  <div className="flex flex-row w-1/2 mb-2 sm:mb-0 mt-10 sm:mt-0">
    <span className="text-lg font-semibold">{title}</span>
  </div>
);

function Invitations() {
  const [showCreateElement, setShowCreateElement] = useState(false);
  const [elementType, setElementType] = useState();
  const [queryData, setQueryData] = useState({});
  const [guestData, setGuestData] = useState({});
  const [loading, setLoading] = useState(false);
  const types = {
    invitation: "Invitación",
    guest: "Invitado",
  };

  const handleOnCreate = (type = "") => {
    setElementType(type);
    setShowCreateElement(!showCreateElement);
  };

  const handleCreateGuest = (data) => {
    setElementType("guest");
    let query = { ...guestData, ...data };
    setGuestData(query);
  };

  const handleUpdateDate = (data) => {
    let query = { ...queryData, ...data };
    setQueryData(query);
  };

  const handleCancelButton = () => {
    setShowCreateElement(!showCreateElement);
  };

  const handleCreateButton = () => {
    setLoading(true);
    elementType === "guest" ? createGuest() : createInvitation();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const createInvitation = () => {
    let data = {
      id: invitations.data.length + 1,
      guestName: queryData.guest.name,
      guestId: queryData.guest.id,
      startDate: queryData.dates?.start.toLocaleString(),
      endDate: queryData.dates?.end.toLocaleString(),
      noExpiration: queryData.noExpiration,
      status: "Activo",
    };
    // TODO call api to create invitation
    invitations.data.push(data);
  };

  const createGuest = () => {
    let data = {
      id: guests.data.length + 1,
      guestName: guestData.name,
      status: "Activo",
    };
    guests.data.push(data);
  };

  const FooterComponent = ({ cancel, create }) => {
    return (
      <div className="flex flex-row w-full justify-center items-center">
        <Button
          title="Cancelar"
          action={cancel}
          customClass="text-center mr-4 bg-neutral-600 text-white rounded-md p-2 my-4 hover:bg-neutral-700"
        />
        <Button
          action={create}
          title={`Crear ${types[elementType]}`}
          customClass={commerceButton}
          loading={loading}
        />
      </div>
    );
  };

  const CreateElement = () => {
    const drawCompontent = {
      invitation: <CreateInvitation updateData={handleUpdateDate} />,
      guest: <CreateGuest onCreateGuest={handleCreateGuest} />,
    };

    const header = `Crear ${types[elementType]}`;

    return (
      <Modal
        show={showCreateElement}
        onClose={handleOnCreate}
        header={header}
        body={drawCompontent[elementType]}
        footer={
          <FooterComponent
            cancel={handleCancelButton}
            create={handleCreateButton}
          />
        }
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
      {CreateElement()}

      <div className="flex flex-col sm:flex-row mb-8 px-4 justify-between">
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
        <div className=" w-full min-w-[200px] sm:w-2/5 flex flex-col bg-neutral-100 border rounded-md p-2 text-center justify-center items-center ">
          <span className="text-neutral-600 font-semibold">
            No tienes invitaciones pendientes para hoy
          </span>
        </div>
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
