import { Box, Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { MdPlayArrow, MdEdit, MdDelete, MdAdd } from "react-icons/md";
import '../css/song.css';
import DeletePlaylist from "./delete";

const sampleData = [
    {
        playlistName: "Playlist 1",
        lastModified: "2024-07-19",
        songName: "Song 1",
        artistName: "Artist 1",
        albumName: "Album 1",
        localFileName: "Song1.mp3",
        description: "Description for Song 1",
        followersCount: 120
    },
    {
        playlistName: "Playlist 2",
        lastModified: "2024-07-18",
        songName: "Song 2",
        artistName: "Artist 2",
        albumName: "Album 2",
        localFileName: "Song2.mp3",
        description: "Description for Song 2",
        followersCount: 85
    },
    {
        playlistName: "Playlist 3",
        lastModified: "2024-07-17",
        songName: "Song 3",
        artistName: "Artist 3",
        albumName: "Album 3",
        localFileName: "Song3.mp3",
        description: "Description for Song 3",
        followersCount: 150
    }
];

function ListPlaylist() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);

    const handleOpenModal = (playlist) => {
        setCurrentPlaylist(playlist);
        setModalOpen(true);
    };
    const handleCloseModal = () => setModalOpen(false);

    const textColor = useColorModeValue("navy.700", "white");

    return (
        <>
            <Flex
                direction='column'
                w='100%'
                overflowX={{ sm: "scroll", lg: "hidden" }}
            >
                <Flex
                    align={{ sm: "flex-start", lg: "center" }}
                    justify='space-between'
                    w='100%'
                    px='22px'
                    pb='20px'
                    mb='10px'
                    boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'
                >
                    <Text color={textColor} fontSize='xl' fontWeight='600'>
                        Playlist List
                    </Text>
                    <Link to='/admin/AddPlaylist'>
                        <Button
                            variant='action'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            backgroundColor='#1ed760'
                            color='black'
                            _hover={{ backgroundColor: '#1dcf6b' }}
                        >
                            <Icon as={MdAdd} width='20px' height='20px' color='inherit' />
                        </Button>
                    </Link>
                </Flex>

                <Box overflowX="auto">
                    <Table variant="simple" color="gray.500">
                        <Thead>
                            <Tr>
                                <Th>Playlist Name</Th>
                                <Th>Last Modified</Th>
                                <Th>Song Name</Th>
                                <Th>Artist Name</Th>
                                <Th>Album Name</Th>
                                <Th>Local File Name</Th>
                                <Th>Description</Th>
                                <Th>Followers</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {sampleData.map((row, index) => (
                                <Tr key={index} className={`row-${index % 2}`}>
                                    <Td>{row.playlistName}</Td>
                                    <Td>{row.lastModified}</Td>
                                    <Td>{row.songName}</Td>
                                    <Td>{row.artistName}</Td>
                                    <Td>{row.albumName}</Td>
                                    <Td>{row.localFileName}</Td>
                                    <Td>{row.description}</Td>
                                    <Td>{row.followersCount}</Td>
                                    <Td>
                                        <Link to='/admin/editPlaylist' className='text-blue-600 hover:text-blue-800'>
                                            <Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' />
                                        </Link>
                                        <button onClick={() => handleOpenModal(row)} className="text-red-600 hover:text-red-800">
                                            <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
                                        </button>
                                        <DeletePlaylist isOpen={isModalOpen} onClose={handleCloseModal} playlist={currentPlaylist} />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </>
    );
}

export default ListPlaylist;
