import React from 'react';

import { DropdownContainer , QuantityItem } from '../../ui-kit';

interface Item {
  value: string;
  label: string;
}

interface QuantitySelectorProps {
  items: Item[];
  label?: string;
}

export const QuantitySelector = ({ items, label }: QuantitySelectorProps) => {
  return (
    <DropdownContainer placeholder={'Сколько гостей'} label={label}>
      {items.map(({ value, label }) => (
        <QuantityItem key={value} label={label} />
      ))}
    </DropdownContainer>
  );
};