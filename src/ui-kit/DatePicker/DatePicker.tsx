import cn from 'classnames';
import { ru } from 'date-fns/locale/ru';
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';
import './styles.css';
import { PLACEHOLDER } from './constants';
import { DropdownContainer } from '..';
import { getDateTimestamp } from '../helpers';

interface DatePickerProps {
  selectsStart?: boolean;
  selectsEnd?: boolean;
  selected?: Date | null | [Date, Date];
  minDate?: Date;
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (date: Date | null) => void;
}

const getDateValue = (start: Date | null, end: Date | null) => {
  if (start && end) {
    return `${start?.toLocaleDateString()} - ${end?.toLocaleDateString()}`;
  }

  return PLACEHOLDER;
};

registerLocale('ru', ru);

export const PickDate: React.FC<DatePickerProps> = () => {
  const [rangeStart, setRangeStart] = useState<Date | null>(new Date());
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const today = new Date();
  const midnightToday = today.setHours(0, 0, 0, 0);

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
        wrapperClassName={styles.calendarWrapper}
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
