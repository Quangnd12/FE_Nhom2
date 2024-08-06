import React from "react";
import { Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + "...";
};

export const tableColumnsArtists = (handleOpenModal) => [
    {
        Header: "No",
        accessor: "no",
    },
    {
        Header: "Artist",
        accessor: "name",
    },
    {
        Header: "Artist art",
        accessor: "artist_art",
        Cell: ({ value }) => (
          <Image
            src={`http://localhost:4000/uploads/${value}`}
            alt="Artist Art"
            boxSize="50px"
            objectFit="cover"
          />
        ),
    },
    {
        Header: "Information",
        accessor: "personal_info",
        Cell: ({ value }) => <span>{truncateText(value, 50)}</span>,
    },
    {
        Header: "Skill",
        accessor: "musical_instrument_ability",
    },
    {
        Header: "Experience",
        accessor: "experience_history",
        Cell: ({ value }) => <span>{truncateText(value, 50)}</span>,
    },
    {
        Header: "Vocal Ability",
        accessor: "vocal_ability",
    },
    {
        Header: "Role",
        accessor: "role",
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
            <div>
                <Link to={`/admin/editArtist/${row.original.id}`} className="text-blue-600 hover:text-blue-800">
                    <Icon as={MdEdit} width="20px" height="20px" color="inherit" mr="20px" />
                </Link>
                <button onClick={() => handleOpenModal(row.original.id)} className="text-red-600 hover:text-red-800">
                    <Icon as={MdDelete} width="20px" height="20px" color="inherit" mr="20px" />
                </button>
            </div>
        ),
    },
];
