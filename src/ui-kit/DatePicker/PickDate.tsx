import cn from 'classnames';
import { ru } from 'date-fns/locale/ru';
import React, {useState} from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './PickDate.module.scss';
import './styles.css';
import { PLACEHOLDER } from './constants';
import {getDateTimestamp, getDateValue, getToday} from './helpers';
import { Button, DropdownContainer } from '..';

interface DatePickerProps {
  selected?: Date | null | [Date, Date];
  minDate?: Date;
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (date: [Date | null, Date | null]) => void;
  label?: string;
  value?: string;
}

registerLocale('ru', ru);

export const PickDate: React.FC<DatePickerProps> = ({ label, value,  onChange, ...otherProps }) => {

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { today, midnightToday } = getToday();

  const onDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  // здесь почему-то ругается тайпскрипт на onChange, если я ее выношу в апп

  return (
    <>
      <DropdownContainer value={getDateValue(startDate, endDate)} placeholder={PLACEHOLDER} label={label}>
        <DatePicker
          {...otherProps}
          locale="ru"
          inline
          selectsRange
          selected={startDate}
          minDate={today}
          startDate={startDate}
          endDate={endDate}
          onChange={onDateChange}
          className={styles.calendar}
          dayClassName={(date) =>
            cn({
              [styles.disabled]: getDateTimestamp(date) < midnightToday,
              [styles.currentDay]: getDateTimestamp(date) === midnightToday,
            })
          }
        />
        <div className={styles.datepickerButtons}>
          <Button label={'очистить'} buttonType={'clear'} />
          <Button label={'применить'} buttonType={'clear'} />
        </div>
      </DropdownContainer>
    </>
  );
};
