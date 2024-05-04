import cn from 'classnames';
import React, {useEffect, useRef, useState} from 'react';

import styles from './Dropdown.module.scss';
import {Button} from '../Button/Button';
import {Typography} from '../Typography/Typography';

interface DropdownProps {
  label?: string;
  children?: React.ReactNode;
  value?: string | null;
  placeholder?: string | null;
  type?: 'single' | 'double';
  startValue?: string | null;
  endValue?: string | null;
}

type ComposedPath = () => Node[];

export const DropdownContainer = ({
                                    label,
                                    children,
                                    value,
                                    placeholder,
                                    type,
                                    startValue,
                                    endValue,
                                  }: DropdownProps) => {
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
        {type === 'single' && (
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
            <button className={showDropDown ? styles.arrowExpanded : styles.arrow}/>
          </div>
        )}
        {type === 'double' && (
          <>
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
                {startValue}
              </Typography>
              <button className={showDropDown ? styles.arrowExpanded : styles.arrow}/>
            </div>
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
                {endValue}
              </Typography>
              <button className={showDropDown ? styles.arrowExpanded : styles.arrow}/>
            </div>
          </>
        )}
        {showDropDown && <div ref={dropdownRef} className={styles.dropdownExpanded}>{children}
          <div className={styles.dropdownButtons}>
            <Button label={'очистить'} buttonType={'clear'}/>
            <Button label={'применить'} buttonType={'clear'}/>
          </div>
        </div>}
      </div>
    </div>
  );
};
// возникла мысль следующего характера:
// нельзя ли здесь для отображения одного или двух дропдаунов помапиться по массиву
// у которого будет условно [{value: startValue, label: label1}, {value: endValue, label: label2}]
// а то как будто получается трижды дублирование одного и того же кода

//  const dropdownItems = [
//     {value: startValue, label: 'Приезд'},
//     {value: endValue, label: 'Выезд'},
//   ];
// return (
//   <div className={styles.dropdownWrapper}>
//     {dropdownItems.map((item) => (
//       <>
//         {item.label && (
//           <Typography color={'dark100'} size={'xs'} weight={700} upperCase>
//             {item.label}
//           </Typography>
//         )}
//         <div className={styles.dropdownBox}>
//           <div
//             key={item.value}
//             className={cn(styles.dropdown, {
//               [styles.dropdownTopExpanded]: showDropDown,
//               [styles.dropdownDefault]: !showDropDown,
//             })}
//             onClick={(e) => {
//               e.stopPropagation();
//               toggleDropDown();
//             }}
//           >
//             <Typography color={'dark75'} size={'s'}>
//               {item.value || placeholder}
//             </Typography>
//             <button className={showDropDown ? styles.arrowExpanded : styles.arrow}/>
//           </div>
//         </div>
//       </>
//     ))}
//     {showDropDown && (
//       <div ref={dropdownRef} className={styles.dropdownExpanded}>
//         {children}
//         <div className={styles.dropdownButtons}>
//           <Button label={'очистить'} buttonType={'clear'}/>
//           <Button label={'применить'} buttonType={'clear'}/>
//         </div>
//       </div>
//     )}
//   </div>
// );