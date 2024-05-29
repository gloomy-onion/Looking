import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import styles from './Dropdown.module.scss';
import { Typography } from '../Typography/Typography';

type DropdownProps = {
  label?: string;
  children?: React.ReactNode;
  value?: string | null;
  placeholder?: string | null;
};

type ComposedPath = () => Node[];

export const DropdownContainer = ({ label, children, value, placeholder }: DropdownProps) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const event = e as MouseEvent & {
      path: Node[];
      composedPath?: ComposedPath;
    };
    const path = event.path || (e.composedPath && e.composedPath());
    if (path && !path.includes(dropdownRef.current as Node)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', (e) => handleClickOutside(e));
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

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
          onClick={(e) => {
            e.stopPropagation();
            toggleDropDown();
          }}
        >
          <Typography color={'dark75'} size={'s'}>
            {value || placeholder}
          </Typography>
          <button className={showDropDown ? styles.arrowExpanded : styles.arrow} />
        </div>
        {showDropDown && (
          <div ref={dropdownRef} className={styles.dropdownExpanded}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};