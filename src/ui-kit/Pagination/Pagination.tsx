import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Pagination.module.scss';
import { Typography } from '../Typography/Typography';

export type Props = {
  lastPage?: number;
  maxLength?: number;
};

export const Pagination = ({ lastPage = 4, maxLength = 7 }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const generatePageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxLength / 2));
    let endPage = Math.min(lastPage, startPage + maxLength - 1);

    if (lastPage >= 5 && endPage - startPage < 4) {
      if (startPage === 1) {
        endPage = 5;
      } else if (endPage === lastPage) {
        startPage = lastPage - 4;
      }
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < lastPage) {
      if (endPage < lastPage - 1) {
        pages.push('...');
      }
      pages.push(lastPage);
    }

    return pages;
  };

  const handlePageClick = (pageNum: number | string) => {
    if (typeof pageNum === 'number') {
      if (pageNum !== currentPage) {
        setCurrentPage(pageNum);
      } else if (typeof pageNum === 'number' && lastPage >= 5) {
        if (currentPage < Math.floor(maxLength / 2) + 1) {
          setCurrentPage(Math.min(lastPage, Math.floor(maxLength / 2) + 1));
        } else if (currentPage > lastPage - Math.floor(maxLength / 2)) {
          setCurrentPage(Math.max(1, lastPage - Math.floor(maxLength / 2)));
        }
      }
    }
  };

  const pageNums = generatePageNumbers();

  return (
    <nav className={styles.pagination}>
      <div
        className={cn(styles.previous, { [styles.disabled]: currentPage === 1 })}
        onClick={() => setCurrentPage(currentPage - 1)}
      />
      {pageNums.map((pageNum, idx) => (
        <div
          key={idx}
          className={cn(styles.pageNumber, { [styles.active]: currentPage === pageNum })}
          onClick={() => handlePageClick(pageNum)}
        >
          <Typography color={currentPage === pageNum ? 'white' : 'dark50'} size={'xs'}>
            {pageNum}
          </Typography>
        </div>
      ))}

      <div
        onClick={() => setCurrentPage(currentPage + 1)}
        className={cn(styles.next, { [styles.disabled]: currentPage === lastPage })}
      />
    </nav>
  );
};
