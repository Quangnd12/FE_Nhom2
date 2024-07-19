import { Box, Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { MdPlayArrow, MdEdit, MdDelete } from "react-icons/md";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";

import '../css/song.css';

function ListSong(props) {
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

    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
        tableInstance;

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
                        List song
                    </Text>
                    <Link to='/admin/addSong'><Button variant='action' style={{ backgroundColor: '#1ed760', color: 'black', }}> Add</Button></Link>

                </Flex>
                <Box overflowX="auto">
                    <Table variant="simple" color="gray.500">
                        <Thead>
                            <Tr>
                                <Th>STT</Th>
                                <Th>Title</Th>
                                <Th>Audio</Th>
                                <Th>Duration</Th>
                                <Th>Tempo</Th>
                                <Th>More</Th>
                                <Th>Genre</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr className={`row-${1 % 2}`}>
                                <Td>1</Td>
                                <Td>Em của ngày hôm qua</Td>
                                <Td><Icon as={MdPlayArrow} width='20px' height='20px' color='inherit' /></Td>
                                <Td>3:30</Td>
                                <Td>1x</Td>
                                <Td>256kbps</Td>
                                <Td>Nhạc hiện đại</Td>
                                <Td>
                                    <Link to='/editSong'><Icon as={MdEdit} width='20px' height='20px' color='inherit' mr='20px' /></Link>
                                    <Link to='/deleteSong'><Icon as={MdDelete} width='20px' height='20px' color='inherit' /></Link>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </>
    );
}

export default ListSong;
