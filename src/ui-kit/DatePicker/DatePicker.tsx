import cn from 'classnames';
import { ru } from 'date-fns/locale/ru';
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';
import './styles.css';
import { PLACEHOLDER } from './constants';
import { getDateTimestamp, getDateValue, getToday } from './helpers';
import { DropdownContainer } from '..';

interface DatePickerProps {
  selectsStart?: boolean;
  selectsEnd?: boolean;
  selected?: Date | null | [Date, Date];
  minDate?: Date;
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (date: Date | null) => void;
}

registerLocale('ru', ru);

export const PickDate: React.FC<DatePickerProps> = () => {
  const [rangeStart, setRangeStart] = useState<Date | null>(new Date());
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const { today, midnightToday } = getToday();

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setRangeStart(start);
    setRangeEnd(end);
  };

  return (
    <DropdownContainer value={getDateValue(rangeStart, rangeEnd)} placeholder={PLACEHOLDER}>
      <DatePicker
        locale="ru"
        inline
        selectsRange
        selected={rangeStart}
        minDate={today}
        startDate={rangeStart}
        endDate={rangeEnd}
        onChange={onChange}
        className={styles.calendar}
        dayClassName={(date) =>
          cn({
            [styles.disabled]: getDateTimestamp(date) < midnightToday,
            [styles.currentDay]: getDateTimestamp(date) === midnightToday,
          })
        }
      />
    </DropdownContainer>
  );
};
