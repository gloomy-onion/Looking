import React from 'react';

import styles from './LandingSearch.module.scss';
import { Button, PickDate, Typography } from '../../ui-kit';
import { QuantitySelector } from '../index';

type Guest = {
  value: string;
  label: string;
  count: number;
};

type LandingSearchProps = {
  guests: Guest[];
  onClickClear: () => void;
  onClickApply: () => void;
  onClickPlus: () => void;
  onClickMinus: () => void;
};

export const LandingSearch = ({
  guests,
  onClickApply,
  onClickClear,
  onClickMinus,
  onClickPlus,
}: LandingSearchProps) => {
  return (
    <div className={styles.landingSearchContainer}>
      <Typography weight={700} size={'l'} color={'dark100'}>
        Найдём номера под ваши пожелания
      </Typography>
      <PickDate label={'прибытие'} />
      <QuantitySelector
        onClickMinus={onClickMinus}
        onClickPlus={onClickPlus}
        items={guests}
        label={'Гости'}
        onClickApply={onClickApply}
        onClickClear={onClickClear}
      />
      <Button label={'Забронировать'} buttonType={'withIcon'} />
    </div>
  );
};