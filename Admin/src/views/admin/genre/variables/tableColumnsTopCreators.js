import React from "react";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

export const tableColumnsTopCreators = (handleOpenModal) => [
  {
    Header: "No",
    accessor: "no"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Description",
    accessor: "description"
  },
  {
    Header: "Create_at",
    accessor: "create_at"
  },
  {
    Header: "Update_at",
    accessor: "update_at"
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => (
      <div>
        <Link to={`/admin/editGenre/${row.original.no}`} className='text-blue-600 hover:text-blue-800'>
          <Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' />
        </Link>
        <button onClick={() => handleOpenModal(row.original.no)} className="text-red-600 hover:text-red-800">
          <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
        </button>
      </div>
    )
  }
];
