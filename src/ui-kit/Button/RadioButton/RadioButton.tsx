import React from 'react';

import styles from './RadioButton.module.scss';
import { Typography } from '../../Typography/Typography';

interface RadioButtonProps {
  label?: string;
  selected?: boolean;
  value: string | number;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({ label, selected, value, name, onChange }: RadioButtonProps) => {
  return (
    <div className={styles.radioContainer}>
      <input type={'radio'} checked={selected} name={name} value={value} onChange={onChange} className={styles.radio} />
      <Typography size={'s'} color={'dark75'}>
        {label}
      </Typography>
    </div>
  );
};
