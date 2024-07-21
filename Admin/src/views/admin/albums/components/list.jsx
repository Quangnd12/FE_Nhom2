import { Box, Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Icon } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";

import '../css/artist.css';
import DeleteAlbum from "./delete";

function ListArtist(props) {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const { columnsData, tableData } = props;

    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);

    const tableInstance = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { prepareRow } = tableInstance;

    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = useColorModeValue("secondaryGray.600", "white");

    return (
        <>
            <Flex
                direction='column'
                w='100%'
                overflowX={{ sm: "scroll", lg: "hidden" }}>
                <Flex
                    align={{ sm: "flex-start", lg: "center" }}
                    justify='space-between'
                    w='100%'
                    px='22px'
                    pb='20px'
                    mb='10px'
                    boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
                    <Text color={textColor} fontSize='xl' fontWeight='600'>
                        List artist
                    </Text>

                    <Link to='/admin/addAlbums'>
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
                                <Th>Artist</Th>
                                <Th>Release Date</Th>
                                <Th>Total Tracks</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr className={`row-${1 % 2}`}>
                                <Td>1</Td>
                                <Td>Sky Tour</Td>
                                <Td>Sơn Tùng MTP</Td>
                                <Td>12/6/2020</Td>
                                <Td>8</Td>
                               
                                <Td>
                                    <Link to='/admin/editAlbums' className='text-blue-600 hover:text-blue-800'><Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' /></Link>
                                    <button onClick={handleOpenModal} className="text-red-600 hover:text-red-800">
                                        <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
                                    </button>
                                    <DeleteAlbum isOpen={isModalOpen} onClose={handleCloseModal} />
                                </Td>
                            </Tr>
                            <Tr className={`row-${2 % 2}`}>
                                <Td>2</Td>
                                <Td>Sky Tour</Td>
                                <Td>Sơn Tùng MTP</Td>
                                <Td>12/6/2020</Td>
                                <Td>8</Td>
                               
                                <Td>
                                    <Link to='/admin/editAlbums' className='text-blue-600 hover:text-blue-800'><Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' /></Link>
                                    <button onClick={handleOpenModal} className="text-red-600 hover:text-red-800">
                                        <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
                                    </button>
                                    <DeleteAlbum isOpen={isModalOpen} onClose={handleCloseModal} />
                                </Td>
                            </Tr>
                            <Tr className={`row-${3 % 2}`}>
                                <Td>3</Td>
                                <Td>Sky Tour</Td>
                                <Td>Sơn Tùng MTP</Td>
                                <Td>12/6/2020</Td>
                                <Td>8</Td>
                               
                                <Td>
                                    <Link to='/admin/editAlbums' className='text-blue-600 hover:text-blue-800'><Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' /></Link>
                                    <button onClick={handleOpenModal} className="text-red-600 hover:text-red-800">
                                        <Icon as={MdDelete} width='20px' height='20px' color='inherit' mr='20px' />
                                    </button>
                                    <DeleteAlbum isOpen={isModalOpen} onClose={handleCloseModal} />
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </>
    );
}

export default ListArtist;
