import { useEffect, useState } from "react";
import { search as searchImg } from "../../assets";

const SearchGuests = ({ selectedGuest }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [showGuestCreation, setShowGuestCreation] = useState(false);
  const [guestsFinded, setGuestFinded] = useState([]);

  useEffect(() => {
    let guests = JSON.parse(localStorage.getItem("guests"));
    setGuestFinded(guests.data);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (!event.target.value) {
      setResult([]);
      return;
    }
    const matchingGuests = guestsFinded.filter((guest) => {
      return guest.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setResult(matchingGuests);
  };

  return (
    <div className="flex flex-col w-3/4 mb-2 z-0">
      <div className="flex relative h-10  w-[100%]">
        <input
          className={"flex w-full bg-neutral-100 rounded-md p-2"}
          type="text"
          placeholder="Buscar invitado..."
          name="search"
          value={search}
          onChange={handleSearch}
        />
        <img src={searchImg} className="absolute right-4 bottom-3" />
      </div>

      {result.length ? (
        <div className="flex flex-col w-[100%] rounded-b-lg border -mt-1 p-2 h-max">
          {result.map((r) => (
            <span
              key={r.id}
              onClick={() => {
                setResult([]);
                setSearch("");
                selectedGuest(r);
              }}
              className="flex w-[100%] p-1 cursor-pointer rounded-md hover:bg-neutral-100"
            >
              {r.name}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchGuests;
