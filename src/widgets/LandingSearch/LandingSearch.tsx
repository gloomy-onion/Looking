import React from 'react';

import styles from './LandingSearch.module.scss';
import {Button, GuestsDropdown, PickDate, Typography} from '../../ui-kit';
import {guests} from '../constants';

export const LandingSearch = () => {
  return (
    <div className={styles.landingSearchContainer}>
      <Typography weight={700} size={'l'} color={'dark100'}>
        {'Найдём номера под ваши пожелания'}
      </Typography>
      <PickDate type={'double'} label={'прибытие'}/>
      <GuestsDropdown items={guests} label={'Гости'}/>
      <Button label={'Забронировать'} buttonType={'withIcon'}/>
    </div>
  );
};