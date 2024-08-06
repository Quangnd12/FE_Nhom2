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
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import DeleteFollow from "./delete";
import "../css/follow.css";
import { tableColumnsTopCreators } from "../variables/tableColumnsTopCreators";
import { Follow, deleteFollow } from "Admin/src/service/follow";
import { toast } from 'react-toastify';
import Pagination from "Admin/src/components/pagination/Pagination"; 

function ListFollow() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [follows, setFollows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resetPagination, setResetPagination] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    initData();
  }, [currentPage]);

  const initData = async () => {
    try {
      const result = await Follow();
      if (result && Array.isArray(result)) {
        const followsWithIndex = result.map((follow, index) => ({
          ...follow,
          no: index + 1,
        }));
        setFollows(followsWithIndex);
      } else {
        console.error("Follow returned invalid data", result);
        setFollows([]);
      }
    } catch (error) {
      console.error("Failed to fetch follows", error);
      setFollows([]);
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
      await deleteFollow(id);
      toast.success("Deleted successfully");
      setCurrentPage(1);
      setResetPagination(true);
      initData();
    } catch (error) {
      toast.error("Failed to delete genre");
    }
    handleCloseModal();
  }, [handleCloseModal]);

  const columns = useMemo(() => tableColumnsTopCreators(handleOpenModal) || [], [handleOpenModal]);
  const data = useMemo(() => follows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [], [follows, currentPage]); 

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

  const totalPages = Math.ceil(follows.length / itemsPerPage);

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
            List follow
          </Text>

          <Link to='/admin/addFollow'>
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
                        {cell.column.id === "user_name" || cell.column.id === "artist_name" ? cell.render("Cell") : cell.render("Cell")}
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
      {/* Hiển thị modal Delete */}
      <DeleteFollow isOpen={isModalOpen} onClose={handleCloseModal} onDelete={() => handleDelete(selectedId)} />
    </>
  )
}

export default ListFollow;
