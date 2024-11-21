import React, { useState } from 'react';
import { Button, DropdownContainer, QuantityItem } from 'shared/ui/atoms';
import styles from './QuantitySelector.module.scss';

type Item = {
  value: string;
  label: string;
  count: number;
};

type QuantitySelectorProps = {
  items: Item[];
  label?: string;
  onClickClear?: () => void;
  onClickApply?: () => void;
  onClickPlus: () => void;
  onClickMinus: () => void;
};

export const QuantitySelector = ({
  items,
  label,
  onClickClear,
  onClickApply,
  onClickPlus,
  onClickMinus,
}: QuantitySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer placeholder={'Сколько гостей'} label={label} setOpen={setIsOpen} open={isOpen}>
      {items.map(({ value, label, count }) => (
        <QuantityItem key={value} label={label} count={count} onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
      ))}
      <div className={styles.quantitySelectorButtons}>
        <Button label={'очистить'} buttonType={'clear'} onClick={onClickClear} />
        <Button label={'применить'} buttonType={'clear'} onClick={onClickApply} />
      </div>
    </DropdownContainer>
  );
};
