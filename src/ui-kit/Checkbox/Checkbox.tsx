import React, { useState } from 'react';

import styles from './Checkbox.module.scss';
import { Typography } from '../Typography/Typography';

interface CheckboxProps {
  checkboxType?: 'checkbox' | 'toggle';
  label?: string;
}

export const Checkbox = ({ checkboxType, label = 'checkbox' }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.checkboxWrapper}>
      <input
        className={isChecked ? styles.checked : ''}
        type={'checkbox'}
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <div className={styles.checkboxLabel}>
        <Typography size={'s'} color={'dark50'}>
          {label}
        </Typography>
      </div>
    </div>
  );
};
