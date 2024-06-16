import React, { useState } from 'react';

import { PickDate } from '../DatePicker/PickDate';
import { PLACEHOLDER } from '../DatePicker/constants';
import { DropdownContainer } from '../Dropdown/DropdownContainer';

export const DropdownDatePickers = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const onDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const Picker = () => <PickDate startDate={startDate} endDate={endDate} onChange={onDateChange} />;

  return (
    <div>
      <DropdownContainer
        placeholder={PLACEHOLDER}
        label={'Въезд'}
        value={startDate?.toLocaleDateString()}
        onClick={() => setIsEndOpen(false)}
        open={isStartOpen}
        setOpen={setIsStartOpen}
      >
        <Picker />
      </DropdownContainer>
      <DropdownContainer
        placeholder={PLACEHOLDER}
        label={'Выезд'}
        value={endDate?.toLocaleDateString()}
        onClick={() =>setIsStartOpen(false)}
        open={isEndOpen}
        setOpen={setIsEndOpen}
      >
        <Picker />
      </DropdownContainer>
    </div>
  );
};
