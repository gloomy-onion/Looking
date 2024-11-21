import React, { useState } from 'react';
import { Typography } from 'shared/ui/atoms';
import styles from './TextField.module.scss';

type TextFieldProps = {
  placeholder?: string;
  textFieldType?: 'text' | 'password' | 'email';
  label?: string;
  hasButton?: boolean;
};

export const TextField = ({
  hasButton = false,
  placeholder = 'type sth',
  textFieldType = 'text',
  label,
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
