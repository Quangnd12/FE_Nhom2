import React from "react";
import { Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
};

export const tableColumnsAlbums = (handleOpenModal) => [
  {
    Header: "No",
    accessor: "no"
  },
  {
    Header: "Title",
    accessor: "title"
  },
  {
    Header: "Album Art",
    accessor: "album_art",
    Cell: ({ value }) => (
      <Image
        src={`http://localhost:4000/uploads/${value}`}
        alt="Album Art"
        boxSize="50px"
        objectFit="cover"
      />
    ),
  },
  {
    Header: "Artist",
    accessor: "artist_name"
  },
  {
    Header: "Release Date",
    accessor: "release_date",
    Cell: ({ value }) => (
      <span>{formatDate(value)}</span>
    )
  },
  {
    Header: "Total Tracks",
    accessor: "total_tracks"
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => (
      <div>
        <Link to={`/admin/editAlbums/${row.original.id}`} className="text-blue-600 hover:text-blue-800">
          <Icon as={MdEdit} width="20px" height="20px" color="inherit" mr="20px" />
        </Link>
        <button onClick={() => handleOpenModal(row.original.id)} className="text-red-600 hover:text-red-800">
          <Icon as={MdDelete} width="20px" height="20px" color="inherit" mr="20px" />
        </button>
      </div>
    )
  }
];
