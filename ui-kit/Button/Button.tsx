import cn from 'classnames';
import React, { PropsWithChildren, useState } from 'react';

import styles from './Button.module.scss';
import { Typography } from '../Typography/Typography';
import { getLabelColor } from '../helpers';

interface ButtonProps {
  disabled?: boolean;
  buttonType?: 'filled' | 'outline' | 'clear' | 'withIcon';
  label: string;
}

export const Button = ({ buttonType = 'filled', disabled = false, label = '' }: PropsWithChildren<ButtonProps>) => {
  const [isClicked, setIsClicked] = useState(false);
  // TODO: погуглить решение
  const handleClick = () => {
    if (!disabled) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  };

  return (
    <button
      disabled={disabled}
      className={cn(styles.button, styles[buttonType], { [styles.clicked]: !disabled && isClicked })}
      onClick={handleClick}
    >
      <Typography size={'xs'} weight={700} upperCase color={getLabelColor(buttonType)}>
        {label}
      </Typography>
    </button>
  );
};
