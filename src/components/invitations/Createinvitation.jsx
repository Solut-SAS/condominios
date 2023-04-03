import SearchGuests from "./SearchGuests";
import DateRangePicker from "../ui/date-range-picker/DatePicker";

const CreateInvitation = () => {
  return (
    <div className="flex flex-col mb-2 justify-center items-center ">
      <SearchGuests />
      <DateRangePicker />
    </div>
  );
};

export default CreateInvitation;