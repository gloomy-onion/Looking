import cn from 'classnames';
import React, {PropsWithChildren} from 'react';

import styles from './Button.module.scss';


interface ButtonProps {
  disabled?: boolean;
  buttonType?: 'filled' | 'outline' | 'clear' | 'withPicture';
}

export const Button = ({children, buttonType = 'filled', disabled = false}: PropsWithChildren<ButtonProps>) => {
return <button disabled={disabled} className={cn(styles.button, styles[buttonType])}>{children}</button>;
};