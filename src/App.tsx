import React from 'react';

import { Button, Typography } from '../ui-kit';

export const App = () => {
  return (
    <>
      <Typography as={'h1'} color={'dark100'} upperCase>
        hello h1
      </Typography>
      <Typography as={'h2'} size={'s'}>
        hello h2
      </Typography>
      <Typography as={'div'} weight={700} size={'l'}>
        hello div
      </Typography>
      <Button buttonType={'filled'}>
        <Typography upperCase size={'s'} weight={700} color={'white'}>
          filled button
        </Typography>
      </Button>
      <Button buttonType={'outline'} disabled>
        <Typography upperCase size={'s'} weight={700} color={'purple'}>
          outline button
        </Typography>
      </Button>
      <Button buttonType={'clear'} disabled>
        <Typography upperCase size={'s'} weight={700} color={'purple'}>
          clear button
        </Typography>
      </Button>
      <Button buttonType={'withPicture'}>
        <Typography upperCase size={'s'} weight={700} color={'white'}>
          Кнопка со стрелкой
        </Typography>
      </Button>
    </>
  );
};
