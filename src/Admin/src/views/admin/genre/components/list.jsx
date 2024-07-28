import React, { useMemo, useState, useCallback } from "react";
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
import DeleteGenre from "./delete";
import '../css/genre.css'; 
import { tableColumnsTopCreators } from "../variables/tableColumnsTopCreators";

function ListGenre(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenModal = useCallback((id) => {
    setSelectedId(id);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedId(null);
    setModalOpen(false);
  }, []);

  const handleDelete = useCallback((id) => {
    console.log(`Deleting genre with ID: ${id}`);
    // Thực hiện các thao tác xóa ở đây
    handleCloseModal();
  }, [handleCloseModal]);

  const { tableData } = props;

  // Đảm bảo rằng columnsData và tableData không bị undefined
  const columns = useMemo(() => tableColumnsTopCreators(handleOpenModal) || [], [handleOpenModal]);
  const data = useMemo(() => tableData || [], [tableData]);

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
            List genre
          </Text>

          <Link to='/admin/addGenre'>
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

      {/* Hiển thị modal Delete */}
      <DeleteGenre isOpen={isModalOpen} onClose={handleCloseModal} onDelete={() => handleDelete(selectedId)} />
    </>
  );
}

export default ListGenre;
