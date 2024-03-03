import cn from 'classnames';
import React, { PropsWithChildren } from 'react';

import styles from './Button.module.scss';
import { Typography } from '../Typography/Typography';
import { getLabelColor } from '../helpers';

interface ButtonProps {
  disabled?: boolean;
  buttonType?: 'filled' | 'outline' | 'clear' | 'withIcon';
  label: string;
}

export const Button = ({ buttonType = 'filled', disabled = false, label = '' }: PropsWithChildren<ButtonProps>) => {
  return (
    <button disabled={disabled} className={cn(styles.button, styles[buttonType])}>
      <Typography size={'xs'} weight={700} upperCase color={getLabelColor(buttonType)}>
        {label}
      </Typography>
    </button>
  );
};
