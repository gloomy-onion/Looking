import React from 'react';

import styles from './Landing.module.scss';
import MainPagePic from '../../assets/img/MainPagePic.png';
import { LandingSearch } from '../../widgets';

export const Landing = () => {
  return (
    <div>
      <div className={styles.landingSearch}>
        <LandingSearch />
      </div>
      <img src={MainPagePic} className={styles.landingImage} />
    </div>
  );
};
