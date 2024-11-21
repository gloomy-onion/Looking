import cn from 'classnames';
import React, { useEffect, useRef } from 'react';
import { Typography } from 'shared/ui/atoms';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  label?: string;
  children?: React.ReactNode;
  value?: string | null;
  placeholder?: string | null;
  open?: boolean;
  setOpen: (value: boolean) => void;
  onClick?: () => void;
};

type ComposedPath = () => Node[];

export const DropdownContainer = ({ label, children, value, placeholder, open, setOpen, onClick }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setOpen(!open);
    onClick && onClick();
  };

  const handleClickOutside = (e: MouseEvent) => {
    const event = e as MouseEvent & {
      path: Node[];
      composedPath?: ComposedPath;
    };
    const path = event.path || (e.composedPath && e.composedPath());
    if (path && !path.includes(dropdownRef.current as Node)) {
      setOpen(false);
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
            [styles.dropdownTopExpanded]: open,
            [styles.dropdownDefault]: !open,
          })}
          onClick={(e) => {
            e.stopPropagation();
            toggleDropDown();
          }}
        >
          <Typography color={'dark75'} size={'s'}>
            {value || placeholder}
          </Typography>
          <button className={open ? styles.arrowExpanded : styles.arrow} />
        </div>
        {open && (
          <div ref={dropdownRef} className={styles.dropdownExpanded}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
