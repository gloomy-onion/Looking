import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Collapse.module.scss';
import { Typography } from '../Typography/Typography';
import { TypographyProps } from '../Typography/types';

type CollapseProps = {
  label?: string;
  children?: React.ReactNode;
} & TypographyProps;

export const Collapse = ({ label, children, ...typographyProps}: CollapseProps) => {
  const [showCollapse, setShowCollapse] = useState(false);
  const toggleCollapse = () => {
    setShowCollapse((prevState) => !prevState);
  };

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.collapseHead} onClick={toggleCollapse}>
        <Typography {...typographyProps}>
          {label}
        </Typography>
        <button className={cn({ [styles.arrowExpanded]: showCollapse, [styles.arrow]: !showCollapse })} />
      </div>
      {showCollapse && <div>{children}</div>}
    </div>
  );
};