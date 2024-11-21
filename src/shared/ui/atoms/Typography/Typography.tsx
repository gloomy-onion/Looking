import cn from 'classnames';
import React, { PropsWithChildren } from 'react';
import styles from './Typography.module.scss';
import { TypographyProps } from './types';

const sizeMap = {
  xs: '12px',
  s: '14px',
  m: '19px',
  l: '24px',
};

export const Typography = ({
  children,
  as: Text = 'div',
  color = 'dark100',
  weight = 400,
  upperCase = false,
  size = 'm',
  style,
}: PropsWithChildren<TypographyProps>) => {
  return (
    <Text
      style={{ fontWeight: weight, fontSize: sizeMap[size], ...style }}
      className={cn(styles.typography, styles[color], { [styles.upperCase]: upperCase })}
    >
      {children}
    </Text>
  );
};
