import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Pagination.module.scss';
import { Typography } from '../Typography/Typography';

export type Props = {
  lastPage?: number;
  maxLength?: number;
};

export const Pagination = ({  lastPage = 4, maxLength = 5, }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const generatePageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxLength / 2));
    const endPage = Math.min(lastPage, startPage + maxLength - 1);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNums = generatePageNumbers();

  return (
    <nav className={styles.pagination}>
      <div
        className={cn(styles.previous, currentPage === 1 ? styles.disabled : '')}
        onClick={() => setCurrentPage && setCurrentPage(currentPage - 1)}
      />
      {pageNums.map((pageNum, idx) => (
        <div
          key={idx}
          className={cn(styles.pageNumber, currentPage === pageNum ? styles.active : '')}
          onClick={() => setCurrentPage && setCurrentPage(pageNum)}
        >
          {/* TODO: понять почему тут не отрабатывает styles.active */}
          <Typography color={'dark50'} size={'xs'}>
            {pageNum}
          </Typography>
        </div>
      ))}
      <div
        onClick={() => setCurrentPage && setCurrentPage(currentPage + 1)}
        className={cn(styles.next, currentPage === lastPage ? styles.disabled : '')}
      />
    </nav>
  );
};
