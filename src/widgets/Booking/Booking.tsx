import React from 'react';

import styles from './Booking.module.scss';
import { Button, GuestsDropdown, PickDate, Typography } from '../../ui-kit';
import { RoomNumPrice } from '../RoomCard/RoomNumPrice';
import { guests } from '../constants';

interface BookingProps {
  price: number;
  roomNum: number;
  duration: number;
  lux?: boolean;
}

export const Booking = ({ price, roomNum, lux, duration }: BookingProps) => {
  return (
    <div className={styles.bookingContainer}>
      <div className={styles.bookingInfo}>
        <RoomNumPrice price={price} roomNum={roomNum} lux />
      </div>
      <PickDate type={'double'} label={'прибытие'} />
      <GuestsDropdown items={guests} />
      <div className={styles.bookingInfo}>
        <Typography size={'s'} color={'dark75'}>{`${price} ₽ x ${duration} суток`}</Typography>
        <Typography size={'s'} color={'dark75'}>{`${price * duration} ₽`}</Typography>
      </div>
      <div className={styles.bookingInfo}>
        <Typography size={'s'} color={'dark75'}>
          {'Сбор за услуги'}
        </Typography>
        <Typography size={'s'} color={'dark75'}>
          {'0 ₽'}
        </Typography>
      </div>
      <div className={styles.bookingInfo}>
        <Typography size={'s'} color={'dark75'}>
          {'Сбор за дополнительные услуги'}
        </Typography>
        <Typography size={'s'} color={'dark75'}>
          {'300 ₽'}
        </Typography>
      </div>
      <div className={styles.bookingInfo}>
        <Typography size={'m'} color={'dark100'} weight={700}>
          {'Итого'}
        </Typography>
        <div className={styles.bottomLine}/>
        <Typography size={'m'} color={'dark100'} weight={700}>
          {'300 ₽'}
        </Typography>
      </div>
      <Button label={'Подобрать номер'} buttonType={'withIcon'} />
    </div>
  );
};