import React, { useState } from 'react';

import { Collapse } from './Collapse';
import { Checkbox } from '../Checkbox/Checkbox';

export const CollapseExample = () => {
  const [checked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => setIsChecked((prev) => !prev);

  return (
    <Collapse label={'collapse example'}>
      <Checkbox checkboxType={'checkbox'} title={'checkbox'} checked={checked} onChange={handleCheckboxChange} />
    </Collapse>
  );
};