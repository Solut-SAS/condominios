import { useEffect, useState } from "react";
// import { commerces } from "../../data/dummyData";
import { logo } from "../../assets";
import { FallingLines } from "react-loader-spinner";

const Commerces = ({ selectCommerce, commerces, loading }) => {
  return (
    <div className="flex flex-col h-[100vh] w-full justify-center items-center">
      <img src={logo} className={"w-1/4 mb-16 "} />

      <h1 className="text-xl mb-6 font-bold ">
        Escoge el conjunto que quieres administrar hoy
      </h1>

      <div className="flex flex-row w-full justify-center items-center">
        {commerces.map((c) => (
          <div
            key={c.id}
            className="flex flex-row bg-neutral-700 rounded-md p-4 text-white  cursor-pointer hover:bg-neutral-900 mr-4 mb-4"
            onClick={() => selectCommerce(c)}
          >
            {loading ? (
              <FallingLines
                color="#f53641"
                width="100"
                visible={loading}
                ariaLabel="falling-lines-loading"
              />
            ) : (
              <>
                <div className="flex flex-col">
                  <span className="font-bold text-xl self-center">
                    {c.name}
                  </span>
                  <span className="text-md self-center">{c.address}</span>
                  <span className="text-md self-center">{c.city}</span>
                  <span className="text-md self-center">{c.cellphone}</span>
                </div>
                <div className="flex justify-center items-center ml-4 mt-4 mb-4">
                  <img
                    src="/src/assets/building.png"
                    alt="commerce"
                    className="w-12 h-12"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commerces;
