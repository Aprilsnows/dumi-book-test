import React, { useState, FC, memo, useMemo } from 'react';

import Pagination from '../index';

export default function Paginations() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        totalPages={20}
        maxVisiblePages={5}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
