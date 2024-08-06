import React from "react";
import { Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

export const tableColumnsPlaylists = (handleOpenModal) => [
  {
    Header: "No",
    accessor: "no"
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Cover Image",
    accessor: "cover_image",
    Cell: ({ value }) => {
      const imageUrl = `http://localhost:4000/uploads/${value}`;
      return (
        <Image
          src={imageUrl}
          alt="Cover Image"
          boxSize="50px"
          objectFit="cover"
        />
      );
    },
  },
  {
    Header: 'Status',
    accessor: 'public',
    Cell: ({ value }) => (value === 'public' ? 'Public' : 'Private'), // Format the 'public' field
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => (
      <div>
        <Link to={`/admin/editPlaylist/${row.original.id}`} className='text-blue-600 hover:text-blue-800'>
          <Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' />
        </Link>
        <button onClick={() => handleOpenModal(row.original.id)} className="text-red-600 hover:text-red-800">
          <Icon as={MdDelete} width='20px' height='20px' color='inherit' />
        </button>
      </div>
    ),
  }
];
