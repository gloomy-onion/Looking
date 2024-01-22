import React from 'react';

interface TypographyProps {
  size?: string;
  colour?: string;
  weight?: number;
  as?: 'h1' | 'h2' | 'div';
  upperCase?: boolean
}

const Typography: React.FC<TypographyProps> = ({
                                                 children,
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
        fontSize: size,
        colour,
        fontWeight: weight,
        textTransform: upperCase ? 'uppercase' : 'none',
      }}
    >
      {children}
    </Text>
  );
};

const H1: React.FC<{ weight: string }> = ({children, weight}) => {
  return (
    <h1 style={{fontWeight: weight, fontFamily: 'Montserrat'}}>{children}</h1>
  );
};

const H2: React.FC<{ weight: string }> = ({children, weight}) => {
  return (
    <h2 style={{fontWeight: weight, fontFamily: 'Montserrat'}}>{children}</h2>
  );
};

const DefaultText: React.FC<{ weight: string }> = ({children, weight}) => {
  return (
    <div style={{fontWeight: weight, fontFamily: 'Montserrat'}}>{children}</div>
  );
};

export default Typography;