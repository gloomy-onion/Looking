import React, {useState} from 'react';

import styles from './LandingSearch.module.scss';
import { Button, PickDate, Typography } from '../../ui-kit';
import { QuantitySelector } from "../index";

const initialGuests = [
  { value: 'adults', label: 'Взрослые' },
  { value: 'children', label: 'Дети' },
  { value: 'newborn', label: 'Младенцы' }
];

export const LandingSearch = () => {
  const [guests, setGuests] = useState(initialGuests);

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