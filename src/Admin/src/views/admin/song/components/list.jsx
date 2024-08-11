import { Box, Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Image, Icon } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdAdd, MdPause, MdPlayArrow } from "react-icons/md";
import { toast } from "react-toastify";

import '../css/song.css';
import '../css/audio.css';

import DeleteSong from "./delete";
import { Song, deleteSong } from "../../../../services/song";
import { BASE_URL } from "../../../../config/apiConfig";
import Pagination from "../../../../components/pagination/Pagination";
import { Durations } from "../../../../components/audio/duration";
import PlayerControls from "../../../../components/audio/PlayerControls";


function ListSong() {
    const [songs, setSongs] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [trackDurations, setTrackDurations] = useState({});
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songIdToDelete, setSongIdToDelete] = useState(null);
    const path = "uploads";
    const [currentPage, setCurrentPage] = useState(1);
    const [resetPagination, setResetPagination] = useState(false);
    const itemsPerPage = 10;

    const Next = () => {
        if (!currentTrack) return;
        const currentIndex = songs.findIndex(song => song.id === currentTrack.id);
        const isLastItemInPage = currentIndex === itemsPerPage - 1;
        const isLastPage = currentIndex === songs.length - 1;
        const LastPage = currentPage === totalPages;
        const isLastItemInLastPage = isLastPage && LastPage;
    
        if (isLastItemInLastPage) {
            // Nếu đang ở bài hát cuối cùng của trang cuối cùng
            // Chuyển về trang đầu tiên và chọn bài hát đầu tiên
            setCurrentPage(1);
            setTimeout(() => {
                const firstPageSongs = songs.slice(0, itemsPerPage);
                setCurrentTrack(firstPageSongs[0]);
            }, 0);
        }
       else if (isLastItemInPage) {
            if (currentPage < totalPages) {
                setCurrentPage(prevPage => prevPage + 1);
                const nextIndex = (currentIndex + 1) % songs.length;
                setCurrentTrack(songs[nextIndex]);
            }
        } else {
            const nextIndex = (currentIndex + 1) % songs.length;
            setCurrentTrack(songs[nextIndex]);
        }
    };

    const Prev = () => {
        if (!currentTrack) return;

        const currentIndex = songs.findIndex(song => song.id === currentTrack.id);
        const isFirstItemInPage = currentIndex === (currentPage - 1) * itemsPerPage;
        const isFirstPage = currentPage === 1;

        if (isFirstItemInPage && !isFirstPage) {
            // Chuyển trang về trang trước
            setCurrentPage(prevPage => {
                const newPage = prevPage - 1;

                // Xác định bài hát cuối cùng của trang mới
                const startIndex = (newPage - 1) * itemsPerPage;
                const lastIndexOfPrevPage = Math.min(startIndex + itemsPerPage, songs.length) - 1;

                // Đặt trạng thái của trang mới và bài hát mới
                setTimeout(() => {
                    setCurrentTrack(songs[lastIndexOfPrevPage]);
                }, 0);

                return newPage;
            });
        } else if (currentIndex > 0) {
            // Nếu không phải bài hát đầu tiên trong trang hiện tại, phát bài hát trước đó
            const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
            setCurrentTrack(songs[prevIndex]);
        }
    };


    useEffect(() => {
        initData();
    }, [currentPage]);


    const api = `${BASE_URL}/${path}`;

    const totalPages = Math.ceil(songs.length / itemsPerPage);
    console.log(totalPages);

    const initData = async () => {
        try {
            const result = await Song();
            console.log('API result:', result);

            if (Array.isArray(result)) {
                setSongs(result);
                const durations = await Durations(result, api);
                setTrackDurations(durations);
                console.log(durations);
            } else if (result.songs && result.total) {
                setSongs(result.songs || []);

            }
        } catch (error) {
            console.error('Error fetching songs:', error);
            setSongs([]);
        }
    };

    const playTrack = (track) => {
        if (currentTrack?.id === track.id) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentTrack(track);
            setIsPlaying(true);
        }
    };
    useEffect(() => {
        if (!isPlaying) {
            setCurrentTrack(null);
        }
    }, [isPlaying]);
    const handleOpenModal = (songId) => {
        setSongIdToDelete(songId);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSongIdToDelete(null);
    };

    const handleTrackEnd = () => {
        if (currentTrack) {
            const currentIndex = songs.findIndex(song => song.id === currentTrack.id);
            if (currentIndex === songs.length - 1) {
                setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
                Next()
            } else {
                Next()
            }
        }
    };

    const handleDelete = async (songId) => {
        try {
            await deleteSong(songId);
            setSongs((prevSongs) => prevSongs.filter((song) => song.id !== songId));
            toast.success("Deleted successfully");
            setCurrentPage(1);
            setResetPagination(true);
            initData();
            handleCloseModal();
        } catch (error) {
            console.error('Error deleting song:', error);
        }
    };

    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    const textColor = useColorModeValue("navy.700", "white");

    const currentData = songs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                                {/* <Th>Audio</Th> */}
                                <Th>Duration</Th>
                                <Th>Artist</Th>
                                <Th>Albums</Th>

                                <Th>Genre</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {currentData.length > 0 ? (
                                currentData.map((value, index) => (
                                    <Tr key={value.id}
                                        className={`row-${(index + 1) % 2}`}
                                        onClick={() => {
                                            playTrack(value);
                                        }}
                                        backgroundColor={currentTrack?.id === value.id ? "#1ed7601a" : "transparent"}
                                        color={currentTrack?.id === value.id ? "black" : "inherit"}
                                        _hover={{
                                            backgroundColor: "#1ed7601a",
                                            color: "black",
                                        }}
                                    >
                                        <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                                        <Td>
                                            <Flex align="center">
                                                <Image
                                                    src={`${BASE_URL}/${path}/${value.cover_image}`}
                                                    alt={value.artist_name}
                                                    boxSize="50px"
                                                    mr="2"
                                                    borderRadius="md"
                                                    transition="all 0.3s ease"
                                                />
                                                <Text>{value.title}</Text>
                                            </Flex>
                                        </Td>
                                        {/* <Td>
                                                <Icon
                                                    as={currentTrack?.id === value.id && isPlaying ? MdPause : MdPlayArrow}
                                                    width='30px'
                                                    height='30px'
                                                    color='inherit'
                                                    cursor='pointer'
                                                    border='2px'
                                                    borderColor='#1dcf6b'
                                                    borderRadius='50%'
                                                    backgroundColor={currentTrack?.id === value.id && isPlaying ? 'white' : 'transparent'}
                                                    p='2px'
                                                    onClick={() => playTrack(value)}
                                                    _hover={{
                                                        backgroundColor: currentTrack?.id === value.id && isPlaying ? 'white' : 'transparent',
                                                        borderColor: 'gray.500'
                                                    }}
                                                />

                                            </Td> */}
                                        <Td> {trackDurations[value.id]
                                            ? formatDuration(trackDurations[value.id])
                                            : "Loading..."}</Td>
                                        <Td>{value.artist_name}</Td>
                                        <Td>{value.album_title}</Td>

                                        <Td>{value.genre_name}</Td>
                                        <Td >
                                            <Link to={`/admin/editSong/${value.id}`} className='text-blue-600 hover:text-blue-800'>
                                                <Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' />
                                            </Link>
                                            <button onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpenModal(value.id);
                                            }} className="text-red-600 hover:text-red-800">
                                                <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
                                            </button>
                                        </Td>

                                    </Tr>
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan="9" textAlign="center">No songs available</Td>
                                </Tr>

                            )}
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                resetPagination={resetPagination}
            />
            <DeleteSong isOpen={isModalOpen} onClose={handleCloseModal} onDelete={handleDelete} songId={songIdToDelete} />
            {currentTrack && (
                <PlayerControls
                    audioUrl={`${api}/${currentTrack.audio_file}`}
                    title={currentTrack.title}
                    Image={`${api}/${currentTrack.cover_image}`}
                    artist={currentTrack.artist_name}
                    isPlaying={isPlaying}
                    onTrackEnd={handleTrackEnd}
                    next={Next}
                    prevsong={Prev}
                    onPlayPause={() => setIsPlaying(!isPlaying)}
                />
            )}

        </>
    );
}

export default ListSong;
