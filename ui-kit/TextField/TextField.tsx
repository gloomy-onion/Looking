import React, { useState } from 'react';

import styles from './TextField.module.scss';
import { Typography } from '../Typography/Typography';

interface TextFieldProps {
  placeholder?: string;
  textFieldType?: 'text' | 'date' | 'password' | 'email';
  label?: string;
}

export const TextField = ({
  placeholder = 'type sth',
  label = 'text field',
  textFieldType = 'text',
}: TextFieldProps) => {
  const [inputValue, setInputValue] = useState('');

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
        {textFieldType === 'email' && <button className={styles.email} />}
      </div>
    </div>
  );
};

// сколько же я ебалась с этой стрелкой ты представить себе не можешь я потом добавлю анимацию потому ято смотреть я на нее больше не могц
