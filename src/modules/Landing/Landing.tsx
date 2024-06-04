import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {addGuest, Guest, minusGuest, clearAllGuests} from './GuestsSlice';
import styles from './Landing.module.scss';
import { initialGuests } from './constants/constants';
import MainPagePic from '../../assets/img/MainPagePic.png';
import { LandingSearch } from '../../widgets';

export const Landing = () => {
  const [guests, setGuests] = useState(initialGuests);
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addGuest({} as Guest));
  };
  const onClickMinus = () => {
    dispatch(minusGuest());
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