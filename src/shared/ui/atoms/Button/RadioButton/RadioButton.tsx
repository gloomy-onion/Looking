import React from 'react';
import { Typography } from 'shared/ui/atoms';
import styles from './RadioButton.module.scss';

type RadioButtonProps = {
  label?: string;
  selected?: boolean;
  value: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton = ({ label, selected, value, name, onChange }: RadioButtonProps) => {
  return (
    <label className={styles.radioContainer}>
      <input type={'radio'} onChange={onChange} checked={selected} name={name} value={value} className={styles.radio} />
      <Typography size={'s'} color={'dark75'}>
        {label}
      </Typography>
    </label>
  );
};
