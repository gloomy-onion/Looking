import React from 'react';

import styles from './LandingSearch.module.scss';
import {Button, GuestsDropdown, PickDate, Typography} from '../../ui-kit';

const guests = [
  {value: 'adults', label: 'Взрослые'},
  {value: 'children', label: 'Дети'},
  {value: 'newborn', label: 'Младенцы'}
];

export const LandingSearch = () => {
  return (
    <div className={styles.landingSearchContainer}>
      <Typography weight={700} size={'l'} color={'dark100'}>
        {'Найдём номера под ваши пожелания'}
      </Typography>
      <PickDate type={'double'} label={'прибытие'}/>
      <GuestsDropdown items={guests} label={'Гости'}/>
      <Button label={'Подобрать номер'} buttonType={'withIcon'}/>
    </div>
  );
};