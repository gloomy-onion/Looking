import React from 'react';
import styles from './BulletList.module.scss';
import { Typography } from '../Typography/Typography';

interface Rule {
  id: string;
  rule: string;
}

interface BulletListProps {
  rules: Rule[];
}

export const BulletList = ({ rules }: BulletListProps) => {
  return (
    <div className={styles.bulletListContainer}>
      <Typography size={'xs'} color={'dark100'} upperCase weight={700}>
        Rules
      </Typography>
      <div className={styles.bulletListItems}>
        {rules.map(({ id, rule }, i) => (
          <div key={id} className={styles.itemContainer}>
            <div className={styles.bullet} />
            <Typography color={'dark75'} size={'s'}>{rule}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
