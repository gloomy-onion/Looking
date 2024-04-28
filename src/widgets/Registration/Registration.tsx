import React from 'react';

import styles from './Registration.module.scss';
import { Button, Checkbox, RadioButtonGroup, TextField, Typography } from '../../ui-kit';

const gender = [
  { value: 'male', label: 'Мужской' },
  { value: 'female', label: 'Женский' },
];

export const Registration = () => {
  return (
    <div className={styles.regContainer}>
      <Typography weight={700} size={'l'} color={'dark100'}>
        {'Регистрация  аккаунта'}
      </Typography>
      <TextField textFieldType={'text'} placeholder={'Имя'} />
      <TextField textFieldType={'text'} placeholder={'Фамилия'} />
      <RadioButtonGroup options={gender} name={'gender'} />
      <Typography weight={700} size={'xs'} color={'dark100'} upperCase>
        {'дата рождения'}
      </Typography>
      <TextField textFieldType={'date'} placeholder={'ДД.ММ.ГГГГ'} />
      <Typography weight={700} size={'xs'} color={'dark100'} upperCase>
        {'Данные для входа в сервис'}
      </Typography>
      <TextField textFieldType={'email'} placeholder={'Email'} />
      <TextField textFieldType={'password'} placeholder={'Пароль'} />
      <Checkbox checkboxType={'toggle'} label={'Получать спецпредложения'} />
      <Button label={'Перейти к оплате'} buttonType={'withIcon'} />
      <Typography color={'dark100'} size={'s'}>
        {'Уже есть аккаунт'}
      </Typography>
      <Button label={'Войти'} buttonType={'outline'} />
    </div>
  );
};