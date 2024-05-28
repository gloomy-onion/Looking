import React from 'react';

import styles from './BulletList.module.scss';
import { Typography } from '../Typography/Typography';

type Item = {
  id: string;
  value: string;
};

type BulletListProps = {
  items: Item[];
  title: string;
};

export const BulletList = ({ items, title }: BulletListProps) => {
  return (
    <div className={styles.bulletListContainer}>
      <Typography size={'xs'} color={'dark100'} upperCase weight={700}>
        {title}
      </Typography>
      <div className={styles.bulletListItems}>
        {items.map(({ id, value }, i) => (
          <div key={id} className={styles.itemContainer}>
            <div className={styles.bullet} />
            <Typography color={'dark75'} size={'s'}>
              {value}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
