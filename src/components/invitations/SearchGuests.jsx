import { useState } from "react";
import { guestsFinded } from "../../data/dummyData";
import { search as searchImg } from "../../assets";
import { addGuestButton } from "./styles";
import { CreateGuest } from "./";

const SearchGuests = ({ selectedGuest }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [showGuestCreation, setShowGuestCreation] = useState(false);

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

  const handleCreateGuest = () => {
    setShowGuestCreation(!showGuestCreation);
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

      {/* <div className={addGuestButton} onClick={handleCreateGuest}>
          <span className="text-white font-bold">
            {!showGuestCreation ? "+" : "-"}
          </span>
        </div> */}

      {/* {showGuestCreation && <CreateGuest name={search} />} */}

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
