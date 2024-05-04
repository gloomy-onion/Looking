import React from 'react';

import { DropdownContainer } from '../Dropdown/DropdownContainer';
import { DropdownItem } from '../Dropdown/DropdownItem/DropdownItem';

interface Item {
  value: string;
  label: string;
}

interface GuestsDropdownProps {
  items: Item[];
  label?: string;
}

export const GuestsDropdown = ({ items, label }: GuestsDropdownProps) => {
  return (
    <DropdownContainer type={'single'} placeholder={'Сколько гостей'} label={label}>
      {items.map(({ value, label }) => (
        <DropdownItem key={value} label={label} />
      ))}
    </DropdownContainer>
  );
};