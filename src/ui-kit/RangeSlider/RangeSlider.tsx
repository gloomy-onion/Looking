import React from 'react';
import ReactSlider from 'react-slider';

import styles from './RangeSlider.module.scss';
import {Typography} from '../Typography/Typography';

interface RangeSliderProps {
  label?: string;
  description?: string;
  range?: string;
}

export const RangeSlider = ({label, description}: RangeSliderProps) => {
  const [value, setValue] = React.useState([25, 50]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderHeader}>
        <Typography size={'xs'} weight={700} color={'dark100'} upperCase>
          {label}
        </Typography>
        <Typography size={'xs'} color={'dark50'}>
          {value[0]} - {value[1]}
        </Typography>
      </div>
      <ReactSlider
        value={value}
        className={styles.horizontalSlider}
        thumbClassName={styles.exampleThumb}
        trackClassName={styles.exampleTrack}
        onChange={(newValue) => setValue(newValue)}
        renderThumb={(props) => <div {...props}/>}
      />
      <Typography size={'xs'} color={'dark50'}>
        {description}
      </Typography>
    </div>
  );
};
