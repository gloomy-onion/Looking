import cn from 'classnames';
import React, { PropsWithChildren } from 'react';
import { Typography } from 'shared/ui/atoms';
import styles from './Button.module.scss';
import { getLabelColor } from './helpers';

type ButtonProps = {
  disabled?: boolean;
  buttonType?: 'filled' | 'outline' | 'clear' | 'withIcon' | 'previous' | 'next';
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  buttonType = 'filled',
  disabled = false,
  label = '',
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, styles[buttonType])}
      onClick={(event) => onClick && onClick(event)}
    >
      <Typography size={'xs'} weight={700} upperCase color={getLabelColor(buttonType)}>
        {label}
      </Typography>
    </button>
  );
};
