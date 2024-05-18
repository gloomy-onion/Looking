export interface TypographyProps {
  size?: 'xs' | 's' | 'm' | 'l';
  color?: 'dark100' | 'dark75' | 'dark50' | 'dark25' | 'dark5' | 'purple' | 'green' | 'white';
  weight?: 400 | 700;
  as?: 'h1' | 'h2' | 'div';
  upperCase?: boolean;
  style?: React.CSSProperties;
}