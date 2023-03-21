import { commerces } from "../../data/dummyData";

const Commerces = ({ selectCommerce }) => {
  return (
    <div className="flex flex-col h-[100vh] w-[80vw] ml-16">
      <h1 className="text-xl mb-6">
        Escoge el conjunto que quieres administrar hoy
      </h1>
      <div className="flex flex-row">
        {commerces.map((c) => (
          <div
            key={c.id}
            className="flex flex-col bg-neutral-700  w-3/12 rounded-md p-2 text-white mr-8 cursor-pointer hover:bg-neutral-900"
            onClick={() => selectCommerce(c)}
          >
            <span className="font-bold text-xl self-center">{c.name}</span>
            <span className="text-md self-center">{c.address}</span>
            <span className="text-md self-center">{c.city}</span>
            <span className="text-md self-center">{c.cellphone}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commerces;
