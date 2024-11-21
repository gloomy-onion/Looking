import React from 'react';
import { useSelector } from 'react-redux';
import { LandingSearch } from 'features';
import { addGuest, clearAllGuests, Guest, minusGuest, selectGuests, useAppDispatch } from 'shared/api/redux';
import MainPagePic from 'shared/assets/images/MainPagePic.png';
import styles from './Landing.module.scss';

export const Landing = () => {
  const dispatch = useAppDispatch();
  const { guests } = useSelector(selectGuests);

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
          // onClickApply={handleApply}
          onClickMinus={onClickMinus}
          onClickPlus={onClickPlus}
        />
      </div>
      <img alt={'Hotel room'} src={MainPagePic} className={styles.landingImage} />
    </div>
  );
};
