// src/components/pagination/Pagination.jsx
import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange, resetPagination }) => {
  const handlePageClick = (data) => {
    onPageChange(data.selected + 1);
  };

  useEffect(() => {
    if (resetPagination) {
      onPageChange(1);
    }
  }, [resetPagination, onPageChange]);

  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
