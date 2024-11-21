import React, { useState } from 'react';
import { Typography } from 'shared/ui/atoms';
import { RadioButton } from './RadioButton';
import styles from './RadioButton.module.scss';

type RadioOption = {
  value: string | number;
  label: string;
};

type RadioButtonGroupProps = {
  options: RadioOption[];
  label?: string;
  name: string;
};

export const RadioButtonGroup = ({ options, label, name }: RadioButtonGroupProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.radioButtonGroup}>
      <Typography size={'m'} color={'dark75'}>
        {label}
      </Typography>
      {options.map(({ value, label }) => (
        <RadioButton
          key={value}
          label={label}
          selected={value === value}
          name={name}
          value={selectedValue}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};
