import cn from 'classnames';
import React, {PropsWithChildren} from 'react';

import styles from './Button.module.scss';


interface ButtonProps {
  disabled?: boolean;
  buttonType?: 'filled' | 'outline' | 'clear';
}

export const Button = ({children, buttonType = 'filled'}: PropsWithChildren<ButtonProps>) => {
return <button className={cn(styles.button, styles[buttonType])}>{children}</button>;
};