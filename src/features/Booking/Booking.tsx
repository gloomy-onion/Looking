import React, { useState } from 'react';
import { Button, PickDate, Typography } from 'shared/ui/atoms';
import { QuantitySelector } from 'shared/ui/molecules';
import { RoomNumPrice } from 'shared/ui/molecules/RoomNumPrice/RoomNumPrice';
import styles from './Booking.module.scss';

type BookingProps = {
  price: number;
  roomNum: number;
  duration: number;
  onClickClear: () => void;
  onClickApply: () => void;
  onClickPlus: () => void;
  onClickMinus: () => void;
};
const initialGuests = [
  { value: 'adults', label: 'Взрослые', count: 0 },
  { value: 'children', label: 'Дети', count: 0 },
  { value: 'newborn', label: 'Младенцы', count: 0 },
];

export const Booking = ({
  price,
  roomNum,
  duration,
  onClickClear,
  onClickApply,
  onClickPlus,
  onClickMinus,
}: BookingProps) => {
  const [guests, setGuests] = useState(initialGuests);

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.bookingInfo}>
        <RoomNumPrice price={price} roomNum={roomNum} lux />
      </div>
      <PickDate label={'прибытие'} />
      <QuantitySelector
        items={guests}
        onClickMinus={onClickMinus}
        onClickPlus={onClickPlus}
        onClickApply={onClickApply}
        onClickClear={onClickClear}
      />
      <div className={styles.bookingInfo}>
        <Typography size={'s'} color={'dark75'}>{`${price}₽ x ${duration} суток`}</Typography>
        <Typography size={'s'} color={'dark75'}>{`${price * duration}₽`}</Typography>
      </div>
      <div className={styles.bookingInfo}>
        <Typography size={'s'} color={'dark75'}>
          Сбор за услуги
        </Typography>
        <Typography size={'s'} color={'dark75'}>
          0₽
        </Typography>
      </div>
      <div className={styles.bookingInfo}>
        <Typography size={'s'} color={'dark75'}>
          Сбор за дополнительные услуги
        </Typography>
        <Typography size={'s'} color={'dark75'}>
          300₽
        </Typography>
      </div>
      <div className={styles.bookingInfo}>
        <Typography size={'m'} color={'dark100'} weight={700}>
          Итого
        </Typography>
        <div className={styles.bottomLine} />
        <Typography size={'m'} color={'dark100'} weight={700}>
          300₽
        </Typography>
      </div>
      <Button label={'Подобрать номер'} buttonType={'withIcon'} />
    </div>
  );
};
