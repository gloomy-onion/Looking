import React, { ReactElement } from 'react';

type IconProps<T> = {
  className?: string;
} & T;

export type IconType<T> = (props: IconProps<T>) => ReactElement | null;

export const withDefaultProps =
  <T,>(Icon: IconType<T>) =>
  ({ ...props }: IconProps<T>): ReactElement =>
    <Icon {...(props as IconProps<T>)} />;
