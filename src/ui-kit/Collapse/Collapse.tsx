import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Collapse.module.scss';
import { Typography } from '../Typography/Typography';

interface CollapseProps {
  label?: string;
  children?: React.ReactNode;
}

export const Collapse = ({ label, children }: CollapseProps) => {
  const [showCollapse, setShowCollapse] = useState(false);
  const toggleCollapse = () => {
    setShowCollapse((prevState) => !prevState);
  };

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.collapseHead} onClick={toggleCollapse}>
        <Typography color={'dark100'} upperCase size={'xs'} weight={700}>
          {label}
        </Typography>
        <button className={cn({ [styles.arrowExpanded]: showCollapse, [styles.arrow]: !showCollapse })} />
      </div>
      {showCollapse && <div>{children}</div>}
    </div>
  );
};