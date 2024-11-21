import React from 'react';
import { roomImg } from 'shared/mocks';
import { ImageCarousel, Rating, Typography } from 'shared/ui/atoms';
import { RoomNumPrice } from 'shared/ui/molecules/RoomNumPrice/RoomNumPrice';
import styles from './RoomCard.module.scss';

type RoomCardProps = {
  price: number;
  reviews: number;
  rating: number;
  roomNum: number;
  lux?: boolean;
};

export const RoomCard = ({ price, reviews, rating, roomNum, lux }: RoomCardProps) => {
  return (
    <div className={styles.roomContainer}>
      <div className={styles.roomPic}>
        <ImageCarousel items={roomImg} />
      </div>
      <div className={styles.roomInfo}>
        <div className={styles.roomCardUpper}>
          <RoomNumPrice price={price} roomNum={roomNum} lux={lux} />
        </div>
        <div className={styles.roomCardBottom}>
          <Rating initialRating={rating} />
          <div className={styles.roomReviews}>
            <Typography size={'xs'} color={'dark50'} weight={700}>
              {reviews}
            </Typography>
            <Typography size={'xs'} color={'dark50'}>
              Отзывов
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
