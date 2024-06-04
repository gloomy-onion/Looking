import React from 'react';

import styles from './QuantityItem.module.scss';
import { Typography } from '../Typography/Typography';

type QuantityItemProps = {
  label: string;
  count: number;
  onClickPlus: () => void;
  onClickMinus: () => void;
};

export const QuantityItem = ({ label, count, onClickMinus, onClickPlus }: QuantityItemProps) => {


  return (
    <div className={styles.quantityItem}>
      <span>
        <Typography size={'xs'} upperCase color={'dark100'} weight={700}>
          {label}
        </Typography>
      </span>
      <div className={styles.quantityItemButtons}>
        <button className={styles.minusBtn} onClick={onClickMinus} />
        <Typography size={'xs'} upperCase color={'dark100'} weight={700}>
          {count}
        </Typography>
        <button className={styles.plusBtn} onClick={onClickPlus} />
      </div>
    </div>
  );
};
