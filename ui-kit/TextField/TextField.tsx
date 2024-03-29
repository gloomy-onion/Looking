import React, { useState } from 'react';

import styles from './TextField.module.scss';
import { Typography } from '../Typography/Typography';

interface TextFieldProps {
  placeholder?: string;
  textFieldType?: 'text' | 'date' | 'password' | 'email';
  label?: string;
  hasButton?: boolean;
}

export const TextField = ({
  hasButton = false,
  placeholder = 'type sth',
  label = 'text field',
  textFieldType = 'text',
}: TextFieldProps) => {
  const [inputValue, setInputValue] = useState('');
  const clickClear = () => {
    setInputValue('');
  };

  return (
    <div className={styles.textField}>
      {label && (
        <Typography color={'dark100'} size={'xs'} weight={700} upperCase>
          {label}
        </Typography>
      )}
      <div className={styles.textFieldInputCover}>
        <input
          type={textFieldType}
          max={'2050-12-31'}
          min={'2000-01-01'}
          placeholder={placeholder}
          className={styles.textFieldInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue && <button className={styles.clearButton} onClick={clickClear} />}
        {hasButton && <button className={styles.subscription} />}
      </div>
    </div>
  );
};
