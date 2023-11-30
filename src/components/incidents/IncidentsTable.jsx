import { Table, Pagination } from "flowbite-react";
import { deleteIcon, edit } from "../../assets";

const IncidentsTable = ({ items, onAction }) => {
  const headers = ["Tipo", "Descripción", "Estado", "Respuesta", "Acción"];
  return (
    <>
      <Table
        hoverable={true}
        className={"h-[35vh] min-h-[40vh] max-h-[45vh] overscroll-y-contain	"}
      >
        <Table.Head>
          {headers.map((header) => (
            <Table.HeadCell key={header}>{header}</Table.HeadCell>
          ))}
        </Table.Head>

        <Table.Body className="divide-y">
          {items.map((item) => (
            <Table.Row
              key={item.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {item.type == "security"
                  ? "Seguridad"
                  : item.type == "coexistence"
                  ? "Convivencia"
                  : item.type == "damage" && "Daño"}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {item.description}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {item.status == "finished"
                  ? "Cerrado"
                  : item.status == "pending"
                  ? "Pendiente"
                  : item.type == "in_progress" && "En proceso"}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {item.response || "Sin respuesta"}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                <div className="flex flex-row">
                  {item.status != "finished" && (
                    <img
                      src={edit}
                      onClick={() => onAction("edit", item)}
                      className={"mr-2 cursor-pointer hover:brightness-75"}
                      id={item.id}
                    />
                  )}

                  <img
                    src={deleteIcon}
                    onClick={() => onAction("delete", item)}
                    className={"mr-2 cursor-pointer hover:brightness-75"}
                    id={item.id}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="flex justify-center">
        <Pagination
          currentPage={1}
          totalPages={100}
          layout="pagination"
          previousLabel="Atrás"
          nextLabel="Siguiente"
          showIcons={true}
          onPageChange={() => {}}
        />
      </div>
    </>
  );
};

export default IncidentsTable;
