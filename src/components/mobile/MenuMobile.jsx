import { box } from "../../assets";

const MenuMobile = () => {
  return (
    <div className="fixed bottom-0 mt-8 bg-white flex flex-row justify-evenly w-full h-[9vh] border rounded-t-lg drop-shadow-md  z-50">
      <div className="flex flex-col justify-center w-1/4">
        <img src={box} width={"18%"} className="self-center text-center" />
        <span className="text-center">Paquetes</span>
      </div>

      <div className="flex flex-col justify-center w-1/4">
        <img src={box} width={"18%"} className="self-center text-center" />
        <span className="text-center">Invitaciones</span>
      </div>

      <div className="flex flex-col justify-center w-1/4">
        <img src={box} width={"18%"} className="self-center text-center" />
        <span className="text-center">Comunicados</span>
      </div>
    </div>
  );
};
export default MenuMobile;
