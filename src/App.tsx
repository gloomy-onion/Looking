import React, { useState } from 'react';

import { Footer, Header, Landing } from './modules';
import {
  Checkbox,
  CollapseExample,
  LikeButton,
  Pagination,
  PickDate,
  RadioButtonGroup,
  RangeSlider,
  Rating,
} from './ui-kit';
import {  LoginForm,  Registration, RoomCard } from './widgets';

const options = [
  { value: 'option1', label: 'option 1' },
  { value: 'option2', label: 'option 2' },
  { value: 'option3', label: 'option 3' },
];

export const App = () => {
  const [filled, setIsFilled] = useState(false);
  const [checked, setIsChecked] = useState(false);
  const [likesCount, setLikesCount] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleLikeChange = () => {
    setIsFilled((prevState) => !prevState);
    setLikesCount((prevCount) => (prevCount ? prevCount + 1 : prevCount - 1));
  };

  const handleCheckboxChange = () => setIsChecked((prev) => !prev);

  const onDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <Landing />
      <div style={{ width: '318px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <PickDate startDate={startDate} onChange={onDateChange} />
        <PickDate endDate={endDate} onChange={onDateChange} />
      </div>
      <Footer />
      <Header isAuth={false} />
      <RoomCard rating={3} price={7000} roomNum={363} reviews={12} lux />
      <LoginForm />
      <Registration />
      <div style={{ width: '500px' }}>
        <Pagination />
      </div>
      <LikeButton onClick={handleLikeChange} filled={filled} likesCount={likesCount} />
      <div style={{ width: '266px' }}>
        <CollapseExample />
      </div>
      <Rating initialRating={4} />
      <RadioButtonGroup options={options} name={'radio'} />
      <div style={{ width: '266px' }}>
        <RangeSlider label={'Slider'} description={'description'} range={'range'} />
      </div>
      <Checkbox checkboxType={'toggle'} label={'toggle'} onChange={handleCheckboxChange} checked={checked} />
      <Checkbox
        checkboxType={'checkbox'}
        title={'Checkbox title'}
        label={'checkbox'}
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </>
  );
};
