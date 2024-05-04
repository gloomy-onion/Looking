import React, { useState } from 'react';

import styles from './DropdownItem.module.scss';
import { Typography } from '../../Typography/Typography';

interface DropdownItemProps {
  label: string;
}

export const DropdownItem = ({ label }: DropdownItemProps) => {
 const [count, setCount] = useState(0);
  const onClickPlus = () => setCount((prevCount) => prevCount + 1);
  const onClickMinus = () => setCount((prevCount) => prevCount >=1 ? prevCount - 1 : prevCount);

  return (
    <div className={styles.dropdownItem}>
      <span>
        <Typography size={'xs'} upperCase color={'dark100'} weight={700}>
          {label}
        </Typography>
      </span>
      <div className={styles.dropdownItemButtons}>
        <button className={styles.minusBtn} onClick={onClickMinus}/>
        <Typography size={'xs'} upperCase color={'dark100'} weight={700}>
          {count}
        </Typography>
        <button className={styles.plusBtn} onClick={onClickPlus}/>
      </div>
    </div>
  );
};
