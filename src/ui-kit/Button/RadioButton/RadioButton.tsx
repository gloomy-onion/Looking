import React from 'react';

import styles from './RadioButton.module.scss';
import { Typography } from '../../Typography/Typography';

interface RadioButtonProps {
  label?: string;
  selected?: boolean;
  value: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({ label, selected, value, name, onChange }: RadioButtonProps) => {
  return (
    // я не понимаю какой htmlFor сюда прилепить
    <label className={styles.radioContainer}>
      <input type={'radio'} onChange={onChange} checked={selected} name={name} value={value} className={styles.radio} />
      <Typography size={'s'} color={'dark75'}>
        {label}
      </Typography>
    </label>
  );
};
