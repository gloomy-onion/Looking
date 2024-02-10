import cn from 'classnames';
import React, { PropsWithChildren } from 'react';

import styles from './Typography.module.scss';

interface TypographyProps {
  size?: 's' | 'm' | 'l';
  color?: 'dark100' | 'dark75' | 'dark50' | 'dark25' | 'dark5' | 'purple' | 'green' | 'white';
  weight?: 400 | 700;
  as?: 'h1' | 'h2' | 'div';
  upperCase?: boolean;
  style?: React.CSSProperties;
}

const sizeMap = {
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
  style
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
