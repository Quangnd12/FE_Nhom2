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
import { MdAdd } from "react-icons/md";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import DeleteAlbum from "./delete";
import '../css/artist.css'; 
import { tableColumnsAlbums } from "../variables/tableColumnsTopCreators";
import { Album, deleteAlbum } from "Admin/src/services/albums";
import { toast } from 'react-toastify';
import Pagination from "Admin/src/components/pagination/Pagination";

function ListAlbum() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resetPagination, setResetPagination] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    initData();
  }, [currentPage]);

  const initData = async () => {
    try {
      const result = await Album();
      if (result && Array.isArray(result)) {
        const albumsWithIndex = result.map((album, index) => ({
          ...album,
          no: index + 1,
        }));
        setAlbums(albumsWithIndex);
      } else {
        console.error('Data returned from getAlbums() is not an array:', result);
        setAlbums([]);
      }
    } catch (error) {
      console.error('Failed to fetch albums:', error);
    }
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
      await deleteAlbum(id);
      toast.success("Deleted successfully");
      setCurrentPage(1);
      setResetPagination(true);
      initData();
    } catch (error) {
      toast.error("Failed to delete album");
    }
    handleCloseModal();
  }, [handleCloseModal]);

  const columns = useMemo(() => tableColumnsAlbums(handleOpenModal) || [], [handleOpenModal]);
  const data = useMemo(() => albums.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [], [albums, currentPage]);

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

  const totalPages = Math.ceil(albums.length / itemsPerPage);

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
            List of Albums
          </Text>

          <Link to='/admin/addAlbums'>
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
      <DeleteAlbum isOpen={isModalOpen} onClose={handleCloseModal} onDelete={() => handleDelete(selectedId)} />
    </>
  );
}

export default ListAlbum;
