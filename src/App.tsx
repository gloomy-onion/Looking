import React from 'react';

import {
  BulletList,
  Button,
  Checkbox,
  Collapse,
  LikeButton,
  Pagination,
  PickDate,
  RadioButton,
  RangeSlider,
  Rating,
  TextField,
  Typography,
} from './ui-kit';

const rules = [
  { id: '1', value: 'No pets allowed' },
  { id: '2', value: 'No smoking' },
];
export const App = () => {
  return (
    <>
      <div style={{ width: '266px' }}>
        <Pagination />
      </div>
      <BulletList items={rules} title={'Rules'}/>
      <LikeButton />
      <div style={{ width: '266px' }}>
        <Collapse label={'Collapse'} />
      </div>
      <Rating />
      <RadioButton label={'radio'} />
      <div style={{ width: '266px' }}>
        <RangeSlider label={'Slider'} description={'description'} range={'range'} />
      </div>
      <Checkbox checkboxType={'toggle'} label={'toggle'} />
      <Checkbox checkboxType={'checkbox'} title={'Checkbox title'} label={'checkbox'} />
      <div style={{ width: '322px' }}>
        <PickDate />
      </div>
      <TextField />
      <TextField label={'masked text field'} textFieldType={'date'} />
      <TextField label={'subscription text field'} textFieldType={'email'} placeholder={'Email'} hasButton />
      <Typography as={'h1'} color={'dark100'} upperCase>
        hello h1
      </Typography>
      <Typography as={'h2'} size={'s'}>
        hello h2
      </Typography>
      <Typography as={'div'} weight={700} size={'l'}>
        hello div
      </Typography>
      <Button buttonType={'filled'} label={'filled button'} />
      <Button buttonType={'outline'} label={'outline button'} />
      <Button buttonType={'clear'} label={'clear button'} />
      <Button buttonType={'withIcon'} label={'Кнопка со стрелкой'} />
    </>
  );
};
