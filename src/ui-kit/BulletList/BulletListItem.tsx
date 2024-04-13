import React from 'react';

import styles from './BulletList.module.scss';
import { Typography } from '../Typography/Typography';

type BulletListItemProps = {
  description?: string;
};

export const BulletListItem = ({description} : BulletListItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.bullet} />
      <Typography color={'dark75'} size={'s'}>{description}</Typography>
    </div>
  );
};