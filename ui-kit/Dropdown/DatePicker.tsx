import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { DropdownContainer } from './DropdownContainer';
import './DatePicker.module.scss';

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
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(defaultEndDate);
  const today = new Date();

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
    <DropdownContainer value={'date'}>
      <DatePicker
        selectsStart
        selected={rangeStart}
        minDate={today}
        startDate={rangeStart}
        endDate={rangeEnd}
        onChange={selectStartDate}
      />
      <DatePicker selectsEnd selected={rangeEnd} startDate={rangeStart} endDate={rangeEnd} onChange={selectEndDate} />
    </DropdownContainer>
  );
};
