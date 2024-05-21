import React, { SyntheticEvent, useState } from 'react';

import { Footer, Header } from './components';
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
import { Booking, LandingSearch, LoginForm, QuantitySelector, Registration, RoomCard } from './widgets';


const guests = [
  { value: 'adults', label: 'Взрослые' },
  { value: 'children', label: 'Дети' },
];

const options = [
  { value: 'option1', label: 'option 1' },
  { value: 'option2', label: 'option 2' },
  { value: 'option3', label: 'option 3' },
];

export const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [likesCount, setLikesCount] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleLikeChange = () => {
    setIsClicked((prevState) => !prevState);
    setLikesCount((prevCount) => (prevCount ? prevCount + 1 : prevCount - 1));
  };

  const handleCheckboxChange = () => setIsClicked((prev) => !prev);

  const onDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <div style={{ width: '318px' , display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <PickDate startDate={startDate} onChange={onDateChange}/>
        <PickDate endDate={endDate} onChange={onDateChange}/>
      </div>
       <Footer />
      <Header isAuth={false} />
      <Booking price={200} roomNum={233} duration={4} />
      <RoomCard rating={3} price={7000} roomNum={363} reviews={12} lux />
      <LoginForm />
      <LandingSearch />
      <Registration />
      <div style={{ width: '500px' }}>
        <Pagination />
      </div>
      <LikeButton onClick={handleLikeChange} isClicked={isClicked} likesCount={likesCount} />
      <div style={{ width: '266px' }}>
        <CollapseExample />
        <QuantitySelector items={guests} />
      </div>
      <Rating initialRating={4}/>
      <RadioButtonGroup options={options} name={'radio'} />
      <div style={{ width: '266px' }}>
        <RangeSlider label={'Slider'} description={'description'} range={'range'} />
      </div>
      <Checkbox checkboxType={'toggle'} label={'toggle'} onClick={handleCheckboxChange} isClicked={isClicked} />
      <Checkbox
        checkboxType={'checkbox'}
        title={'Checkbox title'}
        label={'checkbox'}
        isClicked={isClicked}
        onClick={handleCheckboxChange}
      />

</>
  );
};
