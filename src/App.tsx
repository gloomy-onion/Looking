import React from 'react';

import { Button, Dropdown, TextField, Typography } from '../ui-kit';

export const App = () => {
  return (
    <>
      <Dropdown />
      <TextField />
      <TextField label={'masked text field'} textFieldType={'date'} />
      <TextField label={'subscription text field'} textFieldType={'email'} placeholder={'Email'} />
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
      <Button buttonType={'outline'} disabled label={'outline button'} />
      <Button buttonType={'clear'} disabled label={'clear button'} />
      <Button buttonType={'withPicture'} label={'Кнопка со стрелкой'} />
    </>
  );
};
