import React from 'react';

import styles from './Footer.module.scss';
import { Typography } from '../../ui-kit';

type FooterLinks = {
  name: string;
  value: string[];
};

type FooterLinksProps = {
  links: FooterLinks[];
};

export const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
    <div className={styles.footerColumn}>
      {links.map((link) => (
        <div key={link.name}>
          <Typography size={'xs'} color={'dark100'} upperCase weight={700}>
            {link.name}
          </Typography>
          {link.value.map((value) => (
            <div key={value} className={styles.columnItem}>
              <Typography color={'dark50'} size={'s'}>
                {value}
              </Typography>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
