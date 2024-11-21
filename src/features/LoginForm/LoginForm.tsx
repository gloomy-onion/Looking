import React from 'react';
import { Button, TextField, Typography } from 'shared/ui/atoms';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <div className={styles.loginContainer}>
      <Typography weight={700} size={'l'} color={'dark100'}>
        Войти
      </Typography>
      <div className={styles.loginMailBlock}>
        <TextField textFieldType={'email'} placeholder={'Email'} />
        <TextField textFieldType={'password'} placeholder={'Пароль'} />
      </div>
      <Button label={'Войти'} buttonType={'withIcon'} />
      <div className={styles.loginBottom}>
        <Typography color={'dark100'} size={'s'}>
          Нет аккаунта?
        </Typography>
        <Button label={'Создать'} buttonType={'outline'} />
      </div>
    </div>
  );
};
