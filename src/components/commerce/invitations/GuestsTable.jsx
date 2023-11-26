import { Table, Pagination } from "flowbite-react";
import { deleteIcon, edit } from "../../../assets";

const GuestsTable = ({ headers, items, onAction }) => {
  return (
    <>
      <Table hoverable={true} className={"h-[10vh]"}>
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
                {item.id}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {item.name}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {item.status}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                <div className="flex flex-row">
                  <img
                    src={edit}
                    onClick={() => onAction("edit")}
                    className={"mr-2 cursor-pointer hover:brightness-75"}
                  />
                  <img
                    src={deleteIcon}
                    onClick={() => onAction("delete")}
                    className={"mr-2 cursor-pointer hover:brightness-75"}
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
          totalPages={10}
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

export default GuestsTable;
