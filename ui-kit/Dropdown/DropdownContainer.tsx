import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Dropdown.module.scss';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

interface DropdownProps {
  label?: string;
  children: React.ReactNode;
  value: string;
}

export const DropdownContainer = ({ label = 'dropdown', children, value }: DropdownProps) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  return (
    <div className={styles.dropdownWrapper}>
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
          onClick={toggleDropDown}
        >
          <Typography color={'dark75'} size={'s'}>
            {'dropdown text'}
          </Typography>
          <button className={showDropDown ? styles.arrowExpanded : styles.arrow} />
        </div>
        {showDropDown && (
          <div className={styles.dropdownExpanded}>
            {children}
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
