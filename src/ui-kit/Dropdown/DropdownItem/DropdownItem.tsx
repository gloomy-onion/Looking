import React from 'react';

import styles from './DropdownItem.module.scss';
import { Typography } from '../../Typography/Typography';

interface DropdownItemProps {
  label: string;
}

export const DropdownItem = ({ label = 'number 1' }: DropdownItemProps) => {
  return (

    <div className={styles.dropdownItem}>
      <span>
        <Typography size={'xs'} upperCase color={'dark100'} weight={700}>
          {label}
        </Typography>
      </span>
      <div className={styles.dropdownItemButtons}>
        <button className={styles.minusBtn} />
        <Typography size={'xs'} upperCase color={'dark100'} weight={700}>
          {1}
        </Typography>
        <button className={styles.plusBtn} />
      </div>
    </div>
  );
};
