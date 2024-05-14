import React from 'react';

import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import { Typography } from '../../ui-kit';

interface Column {
  name: string;
  value: string[];
}

interface FooterProps {
  column: Column;
}

const column1 = [
  { name: 'Навигация', value: ['О нас', 'Новости', 'Служба поддержки', 'Услуги'] },
  { name: 'О нас', value: ['О сервисе', 'Наша компания', 'Вакансии', 'Инвесторы'] },
  { name: 'Служба поддержки', value: ['Соглашения', 'Сообщества', 'Связь с нами'] },
];

const FooterLinks = ({ column }: FooterProps) => (
  <div className={styles.footerColumn}>
    <Typography size={'xs'} color={'dark100'} upperCase weight={700}>
      {column.name}
    </Typography>
    {column.value.map((value) => (
      <Typography key={value} color={'dark50'} size={'s'}>
        {value}
      </Typography>
    ))}
  </div>
);

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Logo className={styles.footerLogo} />
      <div className={styles.footerColumns}>
        {column1.map((column, index) => (
          <FooterLinks key={index} column={column} />
        ))}
        <Typography size={'xs'} color={'dark100'} upperCase weight={700}>
          {'подписка'}
        </Typography>
      </div>
    </div>
  );
};
