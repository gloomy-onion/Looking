import React, { useState } from 'react';

import { Collapse } from './Collapse';
import { Checkbox } from '../Checkbox/Checkbox';

export const CollapseExample = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleCheckboxChange = () => setIsClicked((prev) => !prev);

  return (
    <Collapse label={'collapse example'}>
      <Checkbox checkboxType={'checkbox'} title={'checkbox'} isClicked={isClicked} onClick={handleCheckboxChange} />
    </Collapse>
  );
};