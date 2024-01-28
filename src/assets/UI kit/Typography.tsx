import React from 'react';

interface TypographyProps {
  children?: string;
  size?: string;
  colour?: string;
  weight?: number;
  as?: 'h1' | 'h2' | 'div';
  upperCase?: boolean;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({children,
                                                 size = '',
                                                 colour = '',
                                                 weight = '',
                                                 as = 'div',
                                                 upperCase = false,
                                               }) => {

  const Text = as === 'h1' ? H1 : as === 'h2' ? H2 : DefaultText;

  return (
    <Text
      style={{
        fontFamily: 'Montserrat',
        fontSize: size,
        color: colour,
        fontWeight: weight,
        textTransform: upperCase ? 'uppercase' : 'none',
      }}
    >
      {children}
    </Text>
  );
};

const H1: React.FC<TypographyProps> = ({children, weight}) => {
  return (
    <h1 style={{fontWeight: weight, fontFamily: 'Montserrat'}}>{children}</h1>
  );
};

const H2: React.FC<TypographyProps> = ({children, weight}) => {
  return (
    <h2 style={{fontWeight: weight, fontFamily: 'Montserrat'}}>{children}</h2>
  );
};

const DefaultText: React.FC<TypographyProps> = ({children, weight}) => {
  return (
    <div style={{fontWeight: weight, fontFamily: 'Montserrat'}}>{children}</div>
  );
};

export default Typography;