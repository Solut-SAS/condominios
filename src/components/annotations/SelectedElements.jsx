import { useState } from "react";
import { Tooltip } from "flowbite-react";
import AppButton from "../ui/button/AppButton";
import { x, star } from "../../assets";
import { useAnnotation } from "../../hooks/useAnnotation";

const SelectedElements = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const { itemsSelected, removeItem } = useAnnotation();

  const handleSubmit = () => {
    setLoadingButton(true);
    console.log("enviando...");

    setTimeout(() => {
      setLoadingButton(false);
    }, 1000);
  };

  return (
    <>
      {itemsSelected.length > 0 && (
        <div className="flex flex-col items-center w-[95%]">
          <div className=" flex flex-col justify-center p-2">
            <p className="flex my-4 self-center font-medium">
              Tu comunicado será enviado a los inquilinos de estas propiedades:
            </p>
            <div className="flex flex-wrap">
              {itemsSelected.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-row mx-1 rounded-full bg-red-200 pl-2 pr-2 pt-1 pb-1 mt-2 self-center items-center max-w-max min-w-max"
                >
                  <span className="flex self-center text-sm font-medium">
                    {s.name}
                  </span>
                  <div
                    onClick={() => removeItem(s)}
                    className="flex justify-center ml-1 cursor-pointer duration-300 p-2 hover:bg-[#f0bfbf] hover:rounded-lg"
                  >
                    <img className="w-[80%]" src={x} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-10 w-full justify-center">
            <Tooltip content="Guardar comunicado en favoritos">
              <div className="flex mr-4 cursor-pointer" onClick={() => {}}>
                <img src={star} />
              </div>
            </Tooltip>
            <AppButton
              action={handleSubmit}
              loading={loadingButton}
              title="Enviar comunicado"
              customClass="flex bg-red-500 rounded-lg p-2 text-white"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedElements;
