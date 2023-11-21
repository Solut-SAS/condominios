import { Table, Pagination } from "flowbite-react";
import { deleteIcon, edit } from "../../../assets";

const InvitationsTable = ({ headers, items, onAction }) => {
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
                {item.guestName}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {item.startDate}
              </Table.Cell>
              <Table.Cell className=" font-medium text-gray-900 dark:text-white">
                {item.endDate}
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

export default InvitationsTable;
