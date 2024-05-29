import React from 'react';

import styles from './Footer.module.scss';
import { FooterLinks } from './FooterLinks';
import { ReactComponent as Facebook } from '../../assets/img/Facebook.svg';
import { ReactComponent as Instagram } from '../../assets/img/Instagram.svg';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg';
import { ReactComponent as Twitter } from '../../assets/img/Twitter.svg';
import { TextField, Typography } from '../../ui-kit';

const footerLinks = [
  [{ name: 'Навигация', value: ['О нас', 'Новости', 'Служба поддержки', 'Услуги'] }],
  [{ name: 'О нас', value: ['О сервисе', 'Наша команда', 'Вакансии', 'Инвесторы'] }],
  [{ name: 'Служба поддержки', value: ['Соглашения', 'Сообщества', 'Связь с нами'] }],
];

export const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <Logo className={styles.footerLogo} />
          <Typography size={'s'} color={'dark75'}>
            Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
          </Typography>
        </div>
        <div className={styles.footerColumns}>
          {footerLinks.map((links) => (
            <FooterLinks links={links} key={links[0].name} />
          ))}
          <div className={styles.footerEmail}>
            <Typography size={'xs'} color={'dark100'} upperCase weight={700}>
              подписка
            </Typography>
            <Typography size={'s'} color={'dark75'}>
              Получайте специальные предложения и новости сервиса
            </Typography>
            <TextField textFieldType={'email'} placeholder={'Email'} hasButton />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Typography size={'s'} color={'dark75'}>
          Copyright © 2018 Toxin отель. Все права защищены.
        </Typography>
        <div className={styles.footerIcons}>
          <Instagram />
          <Twitter />
          <Facebook />
        </div>
      </div>
    </>
  );
};

