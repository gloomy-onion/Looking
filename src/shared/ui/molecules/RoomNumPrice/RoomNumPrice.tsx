import React from 'react';
import styles from 'features/RoomCard/RoomCard.module.scss';
import { Typography } from 'shared/ui/atoms';

type RoomNumPriceProps = {
  price: number;
  roomNum: number;
  lux?: boolean;
};

export const RoomNumPrice = ({ price, roomNum, lux }: RoomNumPriceProps) => {
  return (
    <>
      <div className={styles.roomNum}>
        <Typography size={'s'} color={'dark100'} weight={700}>
          №
        </Typography>
        <Typography size={'m'} color={'dark100'} weight={700}>
          {roomNum}
        </Typography>
        {lux && (
          <Typography color={'purple'} upperCase size={'xs'} weight={700}>
            Люкс
          </Typography>
        )}
      </div>
      <div className={styles.roomPrice}>
        <Typography size={'s'} color={'dark50'} weight={700}>{`${price}₽`}</Typography>
        <Typography size={'s'} color={'dark50'}>
          в сутки
        </Typography>
      </div>
    </>
  );
};
