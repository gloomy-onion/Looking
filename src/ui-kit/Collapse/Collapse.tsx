import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Collapse.module.scss';
import { Typography } from '../Typography/Typography';

interface CollapseProps {
  label?: string;
  children?: React.ReactNode;
  color?: 'dark100' | 'dark50';
  upperCase?: boolean;
  size?: 'xs' | 's';
  weight?: 700 | 400;
}

export const Collapse = ({ label, children, color, upperCase, size, weight }: CollapseProps) => {
  const [showCollapse, setShowCollapse] = useState(false);
  const toggleCollapse = () => {
    setShowCollapse((prevState) => !prevState);
  };

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.collapseHead} onClick={toggleCollapse}>
        <Typography color={color} upperCase={upperCase} size={size} weight={weight}>
          {label}
        </Typography>
        <button className={cn({ [styles.arrowExpanded]: showCollapse, [styles.arrow]: !showCollapse })} />
      </div>
      {showCollapse && <div>{children}</div>}
    </div>
  );
};