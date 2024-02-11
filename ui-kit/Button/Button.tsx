import cn from 'classnames';
import React, { PropsWithChildren, useState } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  disabled?: boolean;
  buttonType?: 'filled' | 'outline' | 'clear' | 'withPicture';
}

export const Button = ({ children, buttonType = 'filled', disabled = false }: PropsWithChildren<ButtonProps>) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  // вот тут хз правильно или нет, я хотела анимацию на клик, не поняла, можно ли это было сделать ток на сиэси
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, styles[buttonType], { [styles.clicked]: isClicked })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
