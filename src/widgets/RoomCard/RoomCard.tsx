import React from 'react';

import styles from './RoomCard.module.scss';
import { ImageCarousel, Rating, Typography } from '../../ui-kit';
import { roomImg } from '../../assets/img/roomImg';

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
          <div className={styles.roomNum}>
            <Typography size={'s'} color={'dark100'} weight={700}>
              {'№'}
            </Typography>
            <Typography size={'m'} color={'dark100'} weight={700}>
              {roomNum}
            </Typography>
            {lux && (
              <Typography color={'purple'} upperCase size={'xs'} weight={700}>
                {'Люкс'}
              </Typography>
            )}
          </div>
          <div className={styles.roomPrice}>
            <Typography size={'xs'} color={'dark50'} weight={700}>{`${price}₽`}</Typography>
            <Typography size={'xs'} color={'dark50'}>
              {'в сутки'}
            </Typography>
          </div>
        </div>
        <div className={styles.roomCardBottom}>
          <div>
            <Rating initialRating={rating} />
          </div>
          <div className={styles.roomReviews}>
            <Typography size={'xs'} color={'dark50'} weight={700}>
              {reviews}
            </Typography>
            <Typography size={'xs'} color={'dark50'}>
              {'Отзывов'}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
