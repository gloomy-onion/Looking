import cn from 'classnames';
import React, { PropsWithChildren, useState } from 'react';

import styles from './Button.module.scss';
import { Typography } from '../Typography/Typography';

interface ButtonProps {
  disabled?: boolean;
  buttonType?: 'filled' | 'outline' | 'clear' | 'withPicture';
  label: string;
}

export const Button = ({
  buttonType = 'filled',
  disabled = false,
  label = 'Click me',
}: PropsWithChildren<ButtonProps>) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  };

  type LabelColor = 'white' | 'purple';
  let labelColor: LabelColor;

  if (buttonType === 'filled' || buttonType === 'withPicture') {
    labelColor = 'white';
  } else {
    labelColor = 'purple';
  }

  // вот тут хз правильно или нет, я хотела анимацию на клик, не поняла, можно ли это было сделать ток на сиэсэс'
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, styles[buttonType], { [styles.clicked]: isClicked })}
      onClick={handleClick}
    >
      <Typography size={'xs'} weight={700} upperCase color={labelColor}>
        {label}
      </Typography>
    </button>
  );
};

// короче на disabled кнопку почему то вешается анимация и кнопка проваливается, может это норм поведение но мне не нравится. Написала пока помню
