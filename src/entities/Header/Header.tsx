import React from 'react';
import { Logo } from 'shared/assets/icons';
import { Button, Collapse, Typography } from 'shared/ui/atoms';
import styles from './Header.module.scss';

type HeaderProps = {
  isAuth: boolean;
};

export const Header = ({ isAuth }: HeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <Logo className={styles.headerLogo} />
      <div className={styles.headerRight}>
        <div className={styles.headerLinks}>
          <Typography size={'s'} color={'dark50'}>
            О нас
          </Typography>
          <Collapse color={'dark50'} label={'Услуги'} weight={400} size={'s'} upperCase={false} />
          <Typography size={'s'} color={'dark50'}>
            Вакансии
          </Typography>
          <Typography size={'s'} color={'dark50'}>
            Новости
          </Typography>
          <Collapse color={'dark50'} label={'Соглашения'} weight={400} size={'s'} upperCase={false} />
        </div>
        {isAuth ? (
          <div>username</div>
        ) : (
          <div className={styles.headerButtons}>
            <Button label={'войти'} buttonType={'outline'} />
            <Button label={'зарегистрироваться'} buttonType={'filled'} />
          </div>
        )}
      </div>
    </div>
  );
};
