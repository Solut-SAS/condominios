import { useState } from "react";
import { searchResults } from "../../data/dummyData";
import { search as searchImg } from "../../assets";
import { useAnnotation } from "../../hooks/useAnnotation";
import { searchStructure } from "../../features/commerces";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [allCommerce, setAllCommerce] = useState(false);
  const { removeItem, updateItems, exists } = useAnnotation();
  const commerceObject = { id: 10, name: "Todo el conjunto" };

  const handleSearch = async (event) => {
    setSearch(event.target.value);
    let query = {
      "search": event.target.value,
      "commerceId": 1
    }

    let response;
    try {
      response = await searchStructure(query)
    } catch (error) {
      console.log(error)
    }
    console.log({ response: response.payload });

    setResult(response.payload);
  };

  const handleSelectOption = (s, clear = false) => {
    if (exists(s)) return;
    updateItems(s, clear);
    setResult([{}]);
  };

  const handleAllCommerceSelected = () => {
    //TODO sacar id del commerce actual
    handleSelectOption(commerceObject, true);
    allCommerce && removeItem(commerceObject);
    setAllCommerce(!allCommerce);
  };

  return (
    <div className="flex flex-col w-[95%] mb-2 z-0">
      <div className="flex relative h-10 w-full">
        <input
          className={"flex w-full bg-neutral-100 rounded-md p-2"}
          type="text"
          placeholder="Buscar casa, apt, torre, mzna..."
          name="search"
          value={search}
          disabled={allCommerce}
          onChange={handleSearch}
        />
        <img src={searchImg} className="absolute right-4 bottom-3" />
      </div>

      {result.length ? (
        <div className="flex flex-col w-full rounded-b-lg border -mt-1 p-2 h-max">
          {result.map((r) => (
            <span
              key={r.id}
              onClick={() => handleSelectOption(r)}
              className="flex w-full p-1 cursor-pointer rounded-md hover:bg-neutral-100"
            >
              {r.name}
            </span>
          ))}
        </div>
      ) : null}

      <div className="flex items-center mt-3">
        <input
          id={"allCommerce"}
          className="rounded-full bg-red-500 p-2 mr-2 cursor-pointer"
          type={"checkbox"}
          checked={allCommerce}
          onChange={handleAllCommerceSelected}
        />
        <label htmlFor="allCommerce" className="cursor-pointer">
          Todo el conjunto
        </label>
      </div>
    </div>
  );
};

export default SearchComponent;
