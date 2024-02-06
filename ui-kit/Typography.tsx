import React, { PropsWithChildren } from 'react';

import styles from './Typography.module.scss';

interface TypographyProps {
  children?: string;
  size?: 's'| 'm' | 'l';
  color?: string;
  weight?: 400 | 700;
  as?: 'h1' | 'h2' | 'div';
  upperCase?: boolean;
  style?: React.CSSProperties;
  sizeMap?: { [key: string]: string };
}

const sizeMap = {
  s: 'font-size: 12px;',
  m: 'font-size: 19px;',
  l: 'font-size: 24px;',
};

export const Typography = ({ children, as: Text = 'div', ...rest }: PropsWithChildren<TypographyProps>) => {
  return (
    <Text {...rest} className={styles.typography} >
      {children}
    </Text>
  );
};

