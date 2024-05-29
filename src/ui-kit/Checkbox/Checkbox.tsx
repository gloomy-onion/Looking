import React from 'react';

import styles from './Checkbox.module.scss';
import { Typography } from '../Typography/Typography';

type CheckboxProps = {
  checkboxType?: 'checkbox' | 'toggle';
  label?: string;
  title?: string;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ checkboxType = 'checkbox', label, title, onChange, checked }: CheckboxProps) => {
  return (
    <div className={styles.checkboxWrapper}>
      <input className={styles[checkboxType]} type={'checkbox'} checked={checked} onChange={onChange} />
      <div className={styles.checkboxLabel}>
        {title && (
          <Typography size={'s'} color={'dark75'} weight={700}>
            {title}
          </Typography>
        )}
        {label && (
          <Typography size={'s'} color={'dark50'}>
            {label}
          </Typography>
        )}
      </div>
    </div>
  );
};
