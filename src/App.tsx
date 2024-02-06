import React from 'react';

import { Typography } from '../ui-kit';

export const App = () => {
  return (
    <>
      <Typography as={'h1'} color={'dark100'} upperCase> hello h1</Typography>
      <Typography as={'h2'} size={'s'}>hello h2</Typography>
      <Typography as={'div'} weight={700} size={'l'}> hello div</Typography>
    </>
  );
};
