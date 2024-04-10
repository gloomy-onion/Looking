import React, { useState } from 'react';

import styles from './Rating.module.scss';
import { ReactComponent as Star } from '../../assets/img/Star.svg';
import { ReactComponent as StarFilled } from '../../assets/img/StarFilled.svg';

export const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleStarHover = (index: number) => {
    setHover(index + 1);
  };

  const handleStarLeave = () => {
    setHover(0);
  };

  return (
    <div className={styles.ratingContainer}>
      {[...Array(5)].map((_, index) => {
        const starFilled = index < (hover || rating);

        return (
          <div
            key={index}
            className={styles.starContainer}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={handleStarLeave}
          >
            {starFilled ? <StarFilled /> : <Star />}
          </div>
        );
      })}
    </div>
  );
};