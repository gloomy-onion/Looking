import React, { useState } from 'react';

import styles from './Collapse.module.scss';
import { Checkbox } from '../Checkbox/Checkbox';
import { Typography } from '../Typography/Typography';

interface CollapseProps {
  label?: string;
}

export const Collapse = ({ label }: CollapseProps) => {
  const [showCollapse, setShowCollapse] = useState(false);
  const toggleCollapse = () => {
    setShowCollapse((prevState) => !prevState);
  };

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.collapseHead}>
        <Typography color={'dark100'} upperCase size={'xs'} weight={700}>
          {label}
        </Typography>
        <button className={showCollapse ? styles.arrowExpanded : styles.arrow} onClick={toggleCollapse} />
      </div>
      {showCollapse && (
        <div>
          <Checkbox label={'checkbox-1'} />
          <Checkbox label={'checkbox-2'} />
        </div>
      )}
    </div>
  );
};