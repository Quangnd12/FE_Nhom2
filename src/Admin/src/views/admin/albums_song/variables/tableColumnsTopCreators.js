import React from "react";
import { Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
};

export const tableColumnsAlbumsSong = (handleOpenModal) => [
  {
    Header: "No",
    accessor: "no"
  },
  {
    Header: "Album name",
    accessor: "album_title"
  },
  
  {
    Header: "Song name",
    accessor: "song_title"
  },
  {
    Header: "Release Date",
    accessor: "date",
    Cell: ({ value }) => (
      <span>{formatDate(value)}</span>
    )
  },
 
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => (
      <div>
        <Link to={`/admin/editAlbumSong/${row.original.id}`} className="text-blue-600 hover:text-blue-800">
          <Icon as={MdEdit} width="20px" height="20px" color="inherit" mr="20px" />
        </Link>
        <button onClick={() => handleOpenModal(row.original.id)} className="text-red-600 hover:text-red-800">
          <Icon as={MdDelete} width="20px" height="20px" color="inherit" mr="20px" />
        </button>
      </div>
    )
  }
];
