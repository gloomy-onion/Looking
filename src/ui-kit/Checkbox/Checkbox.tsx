import React, { useState } from 'react';

import styles from './Checkbox.module.scss';
import { Typography } from '../Typography/Typography';

interface CheckboxProps {
  checkboxType?: 'checkbox' | 'toggle';
  label?: string;
}

export const Checkbox = ({ checkboxType = 'checkbox', label}: CheckboxProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleChange = () => setIsClicked((prev) => !prev);

  return (
    <div className={styles.checkboxWrapper}>
      <input className={styles[checkboxType]} type={'checkbox'} checked={isClicked} onChange={handleChange} />
      <div className={styles.checkboxLabel}>
        {label && (
          <Typography size={'s'} color={'dark50'}>
            {label}
          </Typography>
        )}
      </div>
    </div>
  );
};
