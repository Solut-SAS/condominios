import { useContext, useState } from "react";
import { InvitationContext } from "../context/Contexts";

export function useInvitations() {
  // const [guests, setGuests] = useState([]);
  const { guests, setGuests, invitations, setInvitations } = useContext(InvitationContext);

  const setInvitationsItems = (items) => {
    setInvitations(items);
  };

  const setGuestsItems = (items) => {
    setGuests(items);
  };
  // const getGuestsList = () => {
  //   return guests;
  // };

  return {
    guests,
    invitations,
    setInvitationsItems,
    setGuestsItems
  };
}
