import React, { useState } from 'react';

import styles from './Registration.module.scss';
import { Button, Checkbox, DatePickerSingleDay, RadioButtonGroup, TextField, Typography } from '../../ui-kit';

const gender = [
  { value: 'male', label: 'Мужской' },
  { value: 'female', label: 'Женский' },
];

export const Registration = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleCheckboxChange = () => setIsClicked((prev) => !prev);

  return (
    <div className={styles.regContainer}>
      <Typography weight={700} size={'l'} color={'dark100'}>
        Регистрация аккаунта
      </Typography>
      <div className={styles.regNameBlock}>
        <TextField textFieldType={'text'} placeholder={'Имя'} />
        <TextField textFieldType={'text'} placeholder={'Фамилия'} />
        <RadioButtonGroup options={gender} name={'gender'} />
      </div>
      <DatePickerSingleDay label={'дата рождения'} />
      <div className={styles.regMailBlock}>
        <TextField textFieldType={'email'} placeholder={'Email'} label={'Данные для входа в сервис'} />
        <TextField textFieldType={'password'} placeholder={'Пароль'} />
        <Checkbox
          checkboxType={'toggle'}
          label={'Получать спецпредложения'}
          isClicked={isClicked}
          onClick={handleCheckboxChange}
        />
      </div>
      <Button label={'Перейти к оплате'} buttonType={'withIcon'} />
      <div className={styles.regBottom}>
        <Typography color={'dark100'} size={'s'}>
          Уже есть аккаунт
        </Typography>
        <Button label={'Войти'} buttonType={'outline'} />
      </div>
    </div>
  );
};
