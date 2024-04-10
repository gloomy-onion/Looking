import React, { useState } from 'react';

import styles from './Rating.module.scss';
import { ReactComponent as Star } from '../../assets/img/Star.svg';

export const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className={styles.ratingContainer}>
      {[...Array(5)].map((star, index) => {

        return (
          <>
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? 'on' : 'off'}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
             />
            <Star />
          </>
        );
      })}
    </div>
  );
};
