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
    if (!disabled) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  };

  // вот тут хз правильно или нет, я хотела анимацию на клик, не поняла, можно ли это было сделать ток на сиэсэс'
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, styles[buttonType], { [styles.clicked]: isClicked})}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// короче на disabled кнопку почему то вешается анимация и кнопка проваливается, может это норм поведение но мне не нравится. Написала пока помню
