import React from 'react';

import styles from './Dropdown.module.scss';
import {DropdownItem} from './DropdownItem';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

interface DropdownProps {
  label?: string;
  showDropDown: boolean;
}

export const Dropdown = ({ label = 'dropdown', showDropDown }: DropdownProps) => {
  return (
    <div className={styles.dropdown}>
      {label && (
        <Typography color={'dark100'} size={'xs'} weight={700} upperCase>
          {label}
        </Typography>
      )}
      <div className={styles.dropdownDefault}>
        <Typography color={'dark75'} size={'s'}>{'dropdown text'}</Typography>
      </div>
      <div className={styles.dropdownExpanded}>
        <ul>
          <DropdownItem label={'sjjsjsj'} />
        </ul>
        <div className={styles.dropdownButtons}>
          <Button label={'очистить'} buttonType={'clear'}/>
          <Button label={'применить'} buttonType={'clear'} />
        </div>
      </div>
    </div>
  );
};
