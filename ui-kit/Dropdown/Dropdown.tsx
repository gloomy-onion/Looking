import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Dropdown.module.scss';
import { DropdownItem } from './DropdownItem';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

interface DropdownProps {
  label?: string;
}

export const Dropdown = ({ label = 'dropdown' }: DropdownProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className={styles.dropdownCover}>
      {label && (
        <Typography color={'dark100'} size={'xs'} weight={700} upperCase>
          {label}
        </Typography>
      )}
      <div className={styles.dropdownBox}>
        <div
          className={cn(styles.dropdown, {
            [styles.dropdownTopExpanded]: showDropDown,
            [styles.dropdownDefault]: !showDropDown,
          })}
        >
          <Typography color={'dark75'} size={'s'}>
            {'dropdown text'}
          </Typography>
          <button className={styles.arrow} onClick={toggleDropDown} />
        </div>
        {/*  теперь я его блять не могу сделать белым сука */}
        {showDropDown && (
          <div className={styles.dropdownExpanded}>
            <ul>
              <DropdownItem label={'sjjsjsj'} />
            </ul>
            <div className={styles.dropdownButtons}>
              <Button label={'очистить'} buttonType={'clear'} />
              <Button label={'применить'} buttonType={'clear'} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
