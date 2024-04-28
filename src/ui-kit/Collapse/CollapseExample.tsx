import React from 'react';

import { Collapse } from './Collapse';
import { Checkbox } from '../Checkbox/Checkbox';

export const CollapseExample = () => {
  return (
    <Collapse label={'collapse example'}>
      <Checkbox checkboxType={'checkbox'} title={'checkbox'} />
    </Collapse>
  );
};