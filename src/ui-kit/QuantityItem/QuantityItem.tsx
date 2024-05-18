import React, { useState } from 'react';

import styles from './QuantityItem.module.scss';
import { Typography } from '../Typography/Typography';

interface QuantityItemProps {
  label: string;
}

export const QuantityItem = ({ label }: QuantityItemProps) => {
  const [count, setCount] = useState(0);
  const onClickPlus = () => setCount((prevCount) => prevCount + 1);
  const onClickMinus = () => setCount((prevCount) => (prevCount >= 1 ? prevCount - 1 : prevCount));

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
