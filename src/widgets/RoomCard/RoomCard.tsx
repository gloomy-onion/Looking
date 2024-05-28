import React from 'react';

import styles from './RoomCard.module.scss';
import { RoomNumPrice } from './RoomNumPrice';
import { roomImg } from '../../assets/img/roomImg';
import { ImageCarousel, Rating, Typography } from '../../ui-kit';

interface RoomCardProps {
  price: number;
  reviews: number;
  rating: number;
  roomNum: number;
  lux?: boolean;
}

export const RoomCard = ({ price, reviews, rating, roomNum, lux }: RoomCardProps) => {
  return (
    <div className={styles.roomContainer}>
      <div className={styles.roomPic}>
        <ImageCarousel items={roomImg} />
      </div>
      <div className={styles.roomInfo}>
        <div className={styles.roomCardUpper}>
          <RoomNumPrice price={price} roomNum={roomNum} lux />
        </div>
        <div className={styles.roomCardBottom}>
          <div>
            <Rating initialRating={rating} />
          </div>
          <div className={styles.roomReviews}>
            <Typography size={'xs'} color={'dark50'} weight={700}>
              {reviews}
            </Typography>
            <div>
              <Typography size={'xs'} color={'dark50'}>
                Отзывов
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
