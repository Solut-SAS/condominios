import SearchGuests from "./SearchGuests";
import DateRangePicker from "../ui/date-range-picker/DatePicker";
import { useState, useEffect } from "react";

const CreateInvitationComponent = ({ updateData }) => {
  const [noExpiration, setNoExpiration] = useState(false);
  const [currentSelectedGuest, setCurrentSelectedGuest] = useState({});
  const [dates, setDates] = useState({});

  useEffect(() => {
    console.log("Render Create Invitation");
  }, []);

  const handleSelectedGuest = (guest) => {
    setCurrentSelectedGuest(guest);
    updateData({ guest });
  };

  const handleSelectedDates = (dates) => {
    setDates(dates);
    updateData({ dates });
  };

  const handleNoExpiration = () => {
    setNoExpiration(!noExpiration);
    updateData({ noExpiration: !noExpiration });
  };

  const NoExpiration = () => {
    return (
      <div className="flex justify-center items-center my-4">
        <input
          id={"noExpiration"}
          className="rounded-full bg-red-500 p-2 mr-2 cursor-pointer"
          type={"checkbox"}
          checked={noExpiration}
          onChange={handleNoExpiration}
        />
        <label htmlFor="noExpiration" className="cursor-pointer">
          Visita frecuente
        </label>
      </div>
    );
  };

  const GuestSelected = () => {
    return currentSelectedGuest?.name ? (
      <span className="justify-center items-center p-2 w-[100%] mt-4 text-center">
        Invitado: {currentSelectedGuest.name}
      </span>
    ) : (
      <></>
    );
  };

  return (
    <div className="flex flex-col mb-2 justify-center items-center">
      <SearchGuests selectedGuest={handleSelectedGuest} />
      <div className="flex flex-col border w-3/4 rounded-md p-2 justify-center items-center">
        <GuestSelected />
        <NoExpiration />
        {!noExpiration ? (
          <DateRangePicker selectedDates={handleSelectedDates} />
        ) : null}
      </div>
    </div>
  );
};

export default CreateInvitationComponent;
