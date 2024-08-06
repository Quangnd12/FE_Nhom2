import React, { useMemo, useState, useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import DeleteArtist from "./delete"; // Assume you have this component similar to DeleteGenre
import { tableColumnsArtists } from "../variables/tableColumnsTopCreators";
import { Artists, deleteArtist } from "Admin/src/services/artists";
import { toast } from 'react-toastify';
import Pagination from "Admin/src/components/pagination/Pagination"; // Assume you have a Pagination component

function ListArtist() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [artists, setArtists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resetPagination, setResetPagination] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    initData();
  }, [currentPage]);

  const initData = async () => {
    const result = await Artists();
    const artistsWithIndex = result.map((artist, index) => ({
      ...artist,
      no: index + 1,
    }));
    setArtists(artistsWithIndex);
  };

  const handleOpenModal = useCallback((id) => {
    setSelectedId(id);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedId(null);
    setModalOpen(false);
  }, []);

  const handleDelete = useCallback(async (id) => {
    try {
      await deleteArtist(id);
      toast.success("Deleted successfully");
      setCurrentPage(1);
      setResetPagination(true);
      initData();
    } catch (error) {
      toast.error("Failed to delete artist");
    }
    handleCloseModal();
  }, [handleCloseModal]);

  const columns = useMemo(() => tableColumnsArtists(handleOpenModal) || [], [handleOpenModal]);
  const data = useMemo(() => artists.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [], [artists, currentPage]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } = tableInstance;

  const textColor = useColorModeValue("navy.700", "white");

  const totalPages = Math.ceil(artists.length / itemsPerPage);

  return (
    <>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify="space-between"
          w="100%"
          px="22px"
          pb="20px"
          mb="10px"
          boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
        >
          <Text color={textColor} fontSize="xl" fontWeight="600">
            List of Artists
          </Text>

          <Link to='/admin/addArtist'>
            <Button
              variant="action"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="#1ed760"
              color="black"
              _hover={{ backgroundColor: "#1dcf6b" }}
            >
              <Icon as={MdAdd} width="20px" height="20px" color="inherit" />
            </Button>
          </Link>
        </Flex>
        <Box overflow="auto">
          <Table {...getTableProps()} variant="simple" color="gray.500">
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <Th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id}>
                      {column.render("Header")}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()} key={row.id} className={`row-${i % 2}`}>
                    {row.cells.map((cell) => (
                      <Td {...cell.getCellProps()} key={cell.column.id}>
                        {cell.render("Cell")}
                      </Td>
                    ))}
                  </Tr>
                );
              })}
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
      <DeleteArtist isOpen={isModalOpen} onClose={handleCloseModal} onDelete={() => handleDelete(selectedId)} />
    </>
  );
}

export default ListArtist;
