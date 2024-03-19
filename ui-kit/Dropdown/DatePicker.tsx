import cn from 'classnames';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';
import './styles.css';
import { DropdownContainer } from './DropdownContainer';

interface DatePickerProps {
  selectsStart?: boolean;
  selectsEnd?: boolean;
  selected?: Date | null | [Date, Date];
  minDate?: Date;
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (date: Date | null) => void;
}

export const PickDate: React.FC<DatePickerProps> = () => {
  const [rangeStart, setRangeStart] = useState<Date | null>(new Date());
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);
  const today = new Date();
  const midnightToday = today.setHours(0, 0, 0, 0);
  const selectStartDate = (date: Date | null) => {
    if (date !== null) {
      setRangeStart(date);
    }
  };

  const selectEndDate = (date: Date | null) => {
    if (date !== null) {
      setRangeEnd(date);
    }
  };

  return (
    <DropdownContainer
      value={
        rangeStart && rangeEnd
          ? `${rangeStart?.toLocaleDateString()} - ${rangeEnd?.toLocaleDateString()}`
          : 'ДД.ММ.ГГГГ'
      }
      placeholder={'ДД.ММ.ГГГГ'}
    >
      <DatePicker
        inline
        selectsStart
        wrapperClassName={styles.calendarWrapper}
        selected={rangeStart}
        minDate={today}
        startDate={rangeStart}
        endDate={rangeEnd}
        onChange={selectStartDate}
        className={styles.calendar}
        dayClassName={(date) =>
          cn({
            [styles.disabled]: new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() < midnightToday,
            [styles.currentDay]:
              new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() === midnightToday,
          })
        }
      />
      <DatePicker selectsEnd selected={rangeEnd} startDate={rangeStart} endDate={rangeEnd} onChange={selectEndDate} />
    </DropdownContainer>
  );
};
