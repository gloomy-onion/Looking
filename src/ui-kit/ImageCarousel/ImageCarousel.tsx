import cn from 'classnames';
import React, { useState } from 'react';

import styles from './ImageCarousel.module.scss';

type ImageItem = {
  label: string;
  imgPath: string;
};

type ImageCarouselProps = {
  items: ImageItem[];
};

export const ImageCarousel = ({ items }: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideNext = () => {
    setActiveIndex((val) => {
      return val < items.length - 1 ? val + 1 : 0;
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      return val > 0 ? val - 1 : items.length - 1;
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={styles.carouselPrev}
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      />
      {items.map((item, index) => {
        return (
          <div key={item.label}>
            <img
              src={item.imgPath}
              alt={item.label}
              className={cn(styles.carouselItem, { [styles.carouselItemActive]: activeIndex === index })}
            />
          </div>
        );
      })}
      <div className={styles.carouselDots}>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={cn(styles.carouselDot, { [styles.carouselDotActive]: activeIndex === index })}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            />
          );
        })}
      </div>
      <button
        className={styles.carouselNext}
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      />
    </div>
  );
};
