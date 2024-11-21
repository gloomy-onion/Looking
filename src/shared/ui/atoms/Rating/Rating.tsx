import React, { useState } from 'react';
import styles from './Rating.module.scss';
import { Star, StarFilled } from '../../../assets/icons';

type RatingProps = {
  initialRating?: number;
};

export const Rating = ({ initialRating = 3 }: RatingProps) => {
  const [rating, setRating] = useState(initialRating);
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
