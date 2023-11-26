import { useState, useEffect } from "react";
import { Modal, Button } from "../../components";
import {
  GuestsTable,
  InvitationsTable,
  BoxComponent,
} from "../../components/commerce";
// import { guests, invitations } from "../../data/dummyData";
import { CreateGuest } from "../../components/invitations";

import CreateInvitationComponent from "../../components/invitations/CreateinvitationComponent.jsx";

import { commerceButton } from "../../components/commerce/styles";

import { FallingLines } from "react-loader-spinner";

import { useContext } from "react";
import { InvitationContext } from "../../context/Contexts";

import { useInvitations } from "../../hooks/useInvitations";

import {
  list as listGuests,
  create as createGuestApi,
  update as updateGuest,
  deleteGuest,
} from "../../features/guests";

import {
  list,
  create,
  update,
  deleteInvitation,
} from "../../features/invitations";

const TitleItem = ({ title }) => (
  <div className="flex flex-row w-1/2 mb-10 sm:mb-0 mt-10 sm:mt-0">
    <span className="text-lg font-semibold">{title}</span>
  </div>
);

function Invitations() {
  const [showCreateElement, setShowCreateElement] = useState(false);
  const [elementType, setElementType] = useState();
  const [queryData, setQueryData] = useState({});
  const [guestData, setGuestData] = useState({});
  const [loading, setLoading] = useState(false);

  const [guests, setGuests] = useState([]);
  const [invitations, setInvitations] = useState([]);

  const [loadingInvitations, setLoadingInvitations] = useState(true);
  const [loadingGuests, setLoadingGuests] = useState(true);

  // const { setInvitationsItems, setGuestsItems } = useInvitations();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [currentInvitation, setCurrentInvitation] = useState({});
  const [currentGuest, setCurrentGuest] = useState({});
  const [showGuestDeleteModal, setShowGuestDeleteModal] = useState(false);

  const invitationContext = {
    guests,
    setGuests,
    invitations,
    setInvitations,
  };

  const types = {
    invitation: "Invitación",
    guest: "Invitado",
  };

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  async function processInvitations() {
    const fetchInvitations = await list();
    fetchInvitations.headers = [
      "Persona",
      "Desde",
      "Hasta",
      "Estado",
      "Acción",
    ];
    setInvitations(fetchInvitations);
    window.localStorage.setItem(
      "invitations",
      JSON.stringify(fetchInvitations)
    );
    // setInvitationsItems(fetchInvitations);
    setLoadingInvitations(false);
  }

  async function processGuests() {
    const fetchGuests = await listGuests();
    fetchGuests.headers = ["Id", "Nombre", "Estado", "Acción"];
    setGuests(fetchGuests);
    window.localStorage.setItem("guests", JSON.stringify(fetchGuests));
    // setGuestsItems(fetchGuests);
    setLoadingGuests(false);
  }

  useEffect(() => {
    processInvitations();
    processGuests();
  }, []);

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

  const handleCreateButton = async () => {
    elementType === "guest" ? createGuest() : handleCreateInvitation();
  };

  const handleDeleteButton = async () => {
    setLoading(true);
    await deleteInvitation({ id: currentInvitation.id });
    setLoading(false);
    setShowDeleteModal(!showDeleteModal);
    processInvitations();
  };

  const handleGuestDeleteButton = async () => {
    setLoading(true);
    await deleteGuest({ id: currentGuest.id });
    setLoading(false);
    setShowGuestDeleteModal(!showGuestDeleteModal);
    processGuests();
  };

  function formatDate(date) {
    if (!date) date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    let formatedDate = `${year}-${month}-${day}`;
    return formatedDate;
  }

  const handleCreateInvitation = async () => {
    setLoadingInvitations(true);
    setLoading(true);
    let data = {
      guestId: queryData.guest.id,
      dateStart: formatDate(queryData.dates?.start),
      dateEnd: formatDate(queryData.dates?.end),
      noExpiration: !!queryData.noExpiration,
    };
    await create(data);
    processInvitations();
    setLoading(false);
    handleCancelButton();
  };

  const createGuest = async () => {
    setLoadingGuests(true);
    setLoading(true);
    let data = {
      id: guests.data.length + 1,
      name: guestData.name,
      cellphone: guestData.cellphone,
    };
    await createGuestApi(data);
    processGuests();
    setLoading(false);
    handleCancelButton();
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

  const DeleteOptions = ({ cancel, deleteAction }) => {
    return (
      <div className="flex flex-row w-full justify-center items-center">
        <Button
          title="Cancelar"
          action={cancel}
          customClass="text-center mr-4 bg-neutral-600 text-white rounded-md p-2 my-4 hover:bg-neutral-700"
        />
        <Button
          action={deleteAction}
          title={`Eliminar`}
          customClass={commerceButton}
          loading={loading}
        />
      </div>
    );
  };

  const CreateElement = () => {
    const drawCompontent = {
      guest: <CreateGuest onCreateGuest={handleCreateGuest} />,
      invitation: <CreateInvitationComponent updateData={handleUpdateDate} />,
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

  const ModalDelete = () => {
    return (
      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(!showDeleteModal)}
        header={"Eliminar invitación"}
        body={`¿Estás seguro de eliminar la invitación de \n ${currentInvitation.guestname}?`}
        footer={
          <DeleteOptions
            cancel={() => setShowDeleteModal(!showDeleteModal)}
            deleteAction={handleDeleteButton}
          />
        }
      />
    );
  };

  const ModalGuestDelete = () => {
    return (
      <Modal
        show={showGuestDeleteModal}
        onClose={() => setShowGuestDeleteModal(!showGuestDeleteModal)}
        header={"Eliminar invitado"}
        body={`¿Estás seguro de eliminar al invitado \n ${currentGuest.name}?`}
        footer={
          <DeleteOptions
            cancel={() => setShowGuestDeleteModal(!showGuestDeleteModal)}
            deleteAction={handleGuestDeleteButton}
          />
        }
      />
    );
  };

  const handleAction = (action, item) => {
    switch (action) {
      case "edit":
        setQueryData({ ...queryData, guest: item });
        handleOnCreate("invitation");
        break;
      case "delete":
        setCurrentInvitation(item);
        setShowDeleteModal(!showDeleteModal);
        break;
      default:
        break;
    }
  };
  const handleGuestAction = (action, item) => {
    switch (action) {
      case "edit":
        setQueryData({ ...queryData, guest: item });
        handleOnCreate("invitation");
        break;
      case "delete":
        setCurrentGuest(item);
        setShowGuestDeleteModal(!showGuestDeleteModal);
        break;
      default:
        break;
    }
  };

  return (
    <InvitationContext.Provider value={invitationContext}>
      <div className="h-[100vh] rounded-md">
        {CreateElement()}
        {ModalDelete()}
        {ModalGuestDelete()}

        <div className="flex flex-col sm:flex-row mb-8 px-4 justify-between">
          {loadingInvitations ? (
            <FallingLines
              color="#f53641"
              width="100"
              visible={loadingInvitations}
              ariaLabel="falling-lines-loading"
            />
          ) : (
            <BoxComponent
              onCreate={() => handleOnCreate("invitation")}
              title="Invitaciones activas"
              value={invitations.data.length}
            />
          )}
          {loadingGuests ? (
            <FallingLines
              color="#f53641"
              width="100"
              visible={loadingGuests}
              ariaLabel="falling-lines-loading"
            />
          ) : (
            <BoxComponent
              onCreate={() => handleOnCreate("guest")}
              title="Invitados"
              value={guests.data.length}
            />
          )}

          <div className=" w-full min-w-[200px] sm:w-2/5 flex flex-col bg-neutral-100 border rounded-md p-2 text-center justify-center items-center ">
            <span className="text-neutral-600 font-semibold">
              No tienes invitaciones pendientes para hoy
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/2 px-4">
            <TitleItem title="Invitaciones" />
            {loadingInvitations ? (
              <FallingLines
                color="#f53641"
                width="100"
                visible={loading}
                ariaLabel="falling-lines-loading"
              />
            ) : (
              <InvitationsTable
                headers={invitations.headers}
                items={invitations.data}
                onAction={handleAction}
              />
            )}
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/2 px-4">
            <TitleItem title="Invitados" />
            {loadingGuests ? (
              <FallingLines
                color="#f53641"
                width="100"
                visible={loading}
                ariaLabel="falling-lines-loading"
              />
            ) : (
              <GuestsTable
                headers={guests.headers}
                items={guests.data}
                onAction={handleGuestAction}
              />
            )}
          </div>
        </div>
      </div>
    </InvitationContext.Provider>
  );
}

export default Invitations;
