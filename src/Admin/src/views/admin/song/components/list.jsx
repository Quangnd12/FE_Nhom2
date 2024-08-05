import { Box, Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Image, Icon } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdAdd, MdPause, MdPlayArrow } from "react-icons/md";
import '../css/song.css';
import DeleteSong from "./delete";
import { Song, deleteSong } from "../../../../services/song";
import AudioPlayer from "../../audio";
import { BASE_URL } from "../../../../config/apiConfig";


function ListSong() {
    const [song, setSong] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentAudioUrl, setCurrentAudioUrl] = useState(null);
    const [songIdToDelete, setSongIdToDelete] = useState(null);
    const path="uploads";

    useEffect(() => {
        initData();
    }, []);


    const initData = async () => {
        const result = await Song();
        console.log(result);
        setSong(result);
    }

    const handleOpenModal = (songId) => {
        setSongIdToDelete(songId);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSongIdToDelete(null);
    };

    const handlePlayPause = (fileName) => {
        const audioUrl = `${BASE_URL}/${path}/${fileName}`;
        setCurrentAudioUrl(currentAudioUrl === audioUrl ? null : audioUrl);
    };


    const handleDelete = async (songId) => {
        try {
            await deleteSong(songId);
            setSong((prevSongs) => prevSongs.filter((song) => song.id !== songId));
            handleCloseModal();
        } catch (error) {
            console.error('Error deleting song:', error);
        }
    };


    const textColor = useColorModeValue("navy.700", "white");


    return (
        <>
            <Flex direction='column' w='100%' overflowX={{ sm: "scroll", lg: "hidden" }}>
                <Flex
                    align={{ sm: "flex-start", lg: "center" }}
                    justify='space-between'
                    w='100%'
                    px='22px'
                    pb='20px'
                    mb='10px'
                    boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
                    <Text color={textColor} fontSize='xl' fontWeight='600'>
                        List song
                    </Text>

                    <Link to='/admin/addSong'>
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
                                <Th>No</Th>
                                <Th>Title</Th>
                                <Th>Audio</Th>
                                <Th>Duration</Th>
                                <Th>Artist</Th>
                                <Th>Albums</Th>
                                <Th>Image</Th>
                                <Th>Genre</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {song?.map((value, index) => (
                                <Tr key={index} className={`row-${(index + 1) % 2}`}>
                                    <Td>{index + 1}</Td>
                                    <Td>{value?.title}</Td>
                                    <Td>
                                        <Icon
                                            as={currentAudioUrl === `${BASE_URL}/${path}/${value?.audio_file}` ? MdPause : MdPlayArrow}
                                            width='20px'
                                            height='20px'
                                            color='inherit'
                                            cursor='pointer'
                                            onClick={() => handlePlayPause(value?.audio_file)}
                                        />

                                    </Td>
                                    <Td>{value?.duration_ms}</Td>
                                    <Td>{value?.artist_name}</Td>
                                    <Td>{value?.album_title}</Td>
                                    <Td>
                                        <Image src={`${BASE_URL}/${path}/${value?.cover_image}`} alt={value?.artist_name} boxSize="50px" mr="2" />
                                    </Td>
                                    <Td>{value?.genre_name}</Td>
                                    <Td>
                                        <Link to={`/admin/editSong/${value?.id}`} className='text-blue-600 hover:text-blue-800'>
                                            <Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' />
                                        </Link>
                                        <button onClick={() => handleOpenModal(value?.id)} className="text-red-600 hover:text-red-800">
                                            <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
                                        </button>
                                        <DeleteSong isOpen={isModalOpen} onClose={handleCloseModal} onDelete={handleDelete} songId={songIdToDelete} />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
                {currentAudioUrl && <AudioPlayer audioUrl={currentAudioUrl} />}
            </Flex>
        </>
    );
}

export default ListSong;
