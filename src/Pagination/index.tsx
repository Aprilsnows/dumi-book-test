import React, { useState, FC, memo ,useMemo } from "react";

import './Pagination.less'

import { PaginationProps,PaginationStyle } from './interface';

const Pagination : FC<PaginationProps> = memo((props : any) => {


  const { currentPage, totalPages, onPageChange, maxVisiblePages } = props;

  const getPageRange = () => {
    if (totalPages < maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
  
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
      const pages : any= [...Array(maxVisiblePages)].map((_, index) => index + 1);
      pages.push("...");
      pages.push(totalPages);
      return pages;
    } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
      const pages = [1, "..."];
      for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    } else {
      const pages = [1, "..."];
      for (let i = currentPage - Math.floor(maxVisiblePages / 2); i <= currentPage + Math.floor(maxVisiblePages / 2); i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
      return pages;
    }
  };

  const handlePageChange = (page: any) => {
    onPageChange(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageRange = getPageRange();

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={handlePreviousPage}>
        Previous
      </button>

      {pageRange.map((page : any, index : any) => (
        <button
          key={index}
          className={page === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button disabled={currentPage === totalPages} onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
})

Pagination.defaultProps= {
    totalPages:50,
    maxVisiblePages:5,
    currentPage:1,
    onPageChange:()=>{}
}

export default Pagination;