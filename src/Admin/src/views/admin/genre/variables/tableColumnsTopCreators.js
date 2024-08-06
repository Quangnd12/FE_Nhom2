import React from "react";
import { Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import '../css/truncate.css'

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
    Header: "Cover art",
    accessor: "cover_art",
    Cell: ({ value }) => (
      <Image
        src={`http://localhost:4000/uploads/${value}`}
        alt="Cover Art"
        boxSize="50px"
        objectFit="cover"
      />
    ),
  },
  {
    Header: "Description",
    accessor: "description",
    Cell: ({ value }) => (
      <div className="description-cell">
        {value}
      </div>
    ),
  },
  {
    Header: "Create_at",
    accessor: "created_at",
    Cell: ({ value }) => new Date(value).toLocaleString()
  },
  {
    Header: "Update_at",
    accessor: "updated_at",
    Cell: ({ value }) => new Date(value).toLocaleString()
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => (
      <div>
        <Link to={`/admin/editGenre/${row.original.id}`} className='text-blue-600 hover:text-blue-800'>
          <Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' />
        </Link>
        <button onClick={() => handleOpenModal(row.original.id)} className="text-red-600 hover:text-red-800">
          <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
        </button>
      </div>
    )
  }
];
