import React from "react";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import '../css/truncate.css'

export const tableColumnsTopCreators = (handleOpenModal) => [
    {
      Header: "No",
      accessor: "no"
    },
    {
      Header: "Song",
      accessor: "song_name",
      Cell: ({ value }) => (
        <div className="song-name-cell">
          {value}
        </div>
      ),
    },
    {
      Header: "Content",
      accessor: "content",
      Cell: ({ value }) => (
        <div className="content-cell">
          {value}
        </div>
      ),
    },
    {
      Header: "Language",
      accessor: "language"
    },
    {
      Header: "Created At",
      accessor: "created_at",
      Cell: ({ value }) => new Date(value).toLocaleString()
    },
    {
      Header: "Updated At",
      accessor: "updated_at",
      Cell: ({ value }) => value ? new Date(value).toLocaleString() : 'N/A'
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <div>
          <Link to={`/admin/editLyric/${row.original.id}`} className='text-blue-600 hover:text-blue-800'>
            <Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' />
          </Link>
          <button onClick={() => handleOpenModal(row.original.id)} className="text-red-600 hover:text-red-800">
            <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
          </button>
        </div>
      )
    }
  ];