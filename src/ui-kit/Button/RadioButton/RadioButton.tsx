import React, { useState } from 'react';

import styles from './RadioButton.module.scss';
import {Typography} from '../../Typography/Typography';

interface RadioButtonProps {
  label?: string;
  selected?: boolean;
}

export const RadioButton = ({ label, selected }: RadioButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChange = () => setIsSelected((prev) => !prev);

  return (
    <div className={styles.radioContainer}>
      <input type={'radio'} checked={isSelected} onClick={handleChange} className={styles.radio}/>
      <Typography size={'s'} color={'dark75'}>{label}</Typography>
    </div>
  );
};
