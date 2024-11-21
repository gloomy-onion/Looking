import cn from 'classnames';
import React, { useState } from 'react';
import { Button, Typography } from 'shared/ui/atoms';
import styles from './Pagination.module.scss';

export type PaginationProps = {
  totalPages?: number;
  pageSize?: number;
  itemsLength?: number;
};

export const Pagination = ({ totalPages = 10, pageSize = 5, itemsLength = 20 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // TODO: посмотри пагинацию
  const handlePageClick = (page: string | number) => {
    if (typeof page === 'string') {
      return;
    }
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    const middlePages = Math.floor(totalPages / 2);

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= middlePages) {
      for (let i = 1; i <= middlePages; i++) {
        pages.push(i);
      }
      if (totalPages > middlePages) {
        pages.push('...');
        pages.push(totalPages - 1);
        pages.push(totalPages);
      }
    } else if (currentPage > totalPages - middlePages - 1) {
      pages.push(1);
      pages.push(2);
      if (totalPages - middlePages - 2 > 2) {
        pages.push('...');
      }
      for (let i = totalPages - middlePages; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push(2);
      pages.push(3);
      if (currentPage - middlePages > 2) {
        pages.push('...');
      }
      for (let i = currentPage - middlePages; i <= currentPage + middlePages; i++) {
        pages.push(i);
      }
      if (totalPages - currentPage - middlePages > 1) {
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };
  const pageNums = generatePageNumbers();

  return (
    <nav className={styles.pagination}>
      <Button buttonType={'previous'} disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)} />
      {pageNums.map((page) => (
        <div
          key={page}
          className={cn(styles.pageNumber, { [styles.active]: currentPage === page })}
          onClick={() => handlePageClick(page)}
        >
          <Typography color={currentPage === page ? 'white' : 'dark50'} size={'xs'}>
            {page === '...' ? page : page}
          </Typography>
        </div>
      ))}

      <Button
        buttonType={'next'}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </nav>
  );
};
