import React from 'react';

import styles from './LandingSearch.module.scss';
import { Button, PickDate, Typography } from '../../ui-kit';
import { guests } from '../constants';
import { QuantitySelector } from "../index";

export const LandingSearch = () => {
  return (
    <div className={styles.landingSearchContainer}>
      <Typography weight={700} size={'l'} color={'dark100'}>
        Найдём номера под ваши пожелания
      </Typography>
      <PickDate label={'прибытие'} />
      <QuantitySelector items={guests} label={'Гости'} />
      <Button label={'Забронировать'} buttonType={'withIcon'} />
    </div>
  );
};