import React from 'react';

import { Typography } from '../ui-kit';

export const App = () => {
  return (
    <>
      <Typography as={'h1'}> hello h1</Typography>
      <Typography as={'h2'}>hello h2</Typography>
      <Typography as={'div'}> hello div</Typography>
    </>
  );
};
