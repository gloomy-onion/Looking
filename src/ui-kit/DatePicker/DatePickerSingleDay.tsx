import cn from 'classnames';
import { getMonth, getYear } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import styles from './PickDate.module.scss';
import { getDateTimestamp, getToday } from './helpers';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

type DatePickerSingleDayProps = {
  label?: string;
}

registerLocale('ru', ru);

export const DatePickerSingleDay = ({ label }: DatePickerSingleDayProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const years = [...Array(getYear(new Date()) - 1989 + 1).keys()].map((i) => i + 1990);
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const { midnightToday } = getToday();

  return (
    <div>
      {label && (
        <Typography weight={700} size={'xs'} color={'dark100'} upperCase>
          {label}
        </Typography>
      )}
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles.dayMonthHeader}>
            <Button buttonType={'previous'} onClick={decreaseMonth} disabled={prevMonthButtonDisabled} />
            <select
              className={styles.dateSelect}
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              className={styles.dateSelect}
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <Button buttonType={'next'} onClick={increaseMonth} disabled={nextMonthButtonDisabled} />
          </div>
        )}
        dayClassName={(date) =>
          cn({
            [styles.currentDay]: getDateTimestamp(date) === midnightToday,
          })
        }
        locale="ru"
        className={styles.calendarTextField}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};