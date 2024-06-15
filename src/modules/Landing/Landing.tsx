import React from 'react';

import styles from './Landing.module.scss';
import MainPagePic from '../../assets/img/MainPagePic.png';
import { addGuest, clearAllGuests, Guest, minusGuest } from '../../redux/Slices/FilterSlice';
import { useAppDispatch } from '../../redux/store';
import { LandingSearch } from '../../widgets';

export const Landing = () => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(addGuest({} as Guest));
  };
  const onClickMinus = () => {
    dispatch(minusGuest({} as Guest));
  };
  const handleClear = () => {
    dispatch(clearAllGuests());
  };

  return (
    <div>
      <div className={styles.landingSearch}>
        <LandingSearch
          guests={guests}
          onClickClear={handleClear}
          onClickApply={handleApply}
          onClickMinus={onClickMinus}
          onClickPlus={onClickPlus}
        />
      </div>
      <img alt={'Hotel room'} src={MainPagePic} className={styles.landingImage} />
    </div>
  );
};