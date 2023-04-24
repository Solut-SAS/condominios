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
    if (!event.target.value) {
      setResult([{}]);
      return;
    }

    let query = {
      search: event.target.value,
      commerceId: 1,
    };

    let response;
    try {
      response = await searchStructure(query);
    } catch (error) {
      console.log(error);
    }
    buildResult(response.payload);
  };

  const buildResult = (data) => {
    let mappedResult = {};

    data.map((r, i) => {
      mappedResult[i] = {
        names: buildName(r),
        value: r,
      };
    });
    setResult(mappedResult);
  };

  const buildName = (str) => {
    let result = [];
    let names = str.name;
    if (str.floors?.length) {
      str.floors.map((floor) => {
        if (floor.homes?.length) {
          let x = floor.homes.reduce((a, b) => {
            const name = names + " - " + b.name;
            a.push(name);
            return a;
          }, []);
          result = result.concat(x);
        } else {
          result.push(names);
        }
      });
    } else {
      result.push(names);
    }
    return result;
  };

  const handleSelectOption = (name, {strIndex, nameIndex}, clear = false) => {
    let item = { name, id: `${name}-${strIndex}${nameIndex}` };
    console.log({item})
    if (exists(item)) return;
    updateItems(item, clear);
    // setResult([{}]);
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

      {Object.keys(result).length ? (
        <div className="flex flex-col w-full rounded-b-lg border -mt-1 p-2 h-max">
          {Object.values(result).map(
            (r, strIndex) =>
              r.names?.length &&
              r.names.map((name, nameIndex) => (
                <span
                  key={`${name}`+strIndex + nameIndex}
                  onClick={() => handleSelectOption(name, {strIndex, nameIndex})}
                  className="flex w-full p-1 cursor-pointer rounded-md hover:bg-neutral-100"
                >
                  {name}
                </span>
              ))
          )}
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
