import cn from 'classnames';
import React, { useState } from 'react';

import styles from './LikeButton.module.scss';
import { ReactComponent as LikeEmpty } from '../../../assets/img/LikeEmpty.svg';
import { ReactComponent as LikeFilled } from '../../../assets/img/LikeFilled.svg';
import { Typography } from '../../Typography/Typography';

export const LikeButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [likesCount, setLikesCount] = useState(1);

  const handleChange = () => {
    setIsClicked((prevState) => !prevState);
    setLikesCount((prevCount) => (prevCount ? prevCount + 1 : prevCount - 1));
  };

  const getColor = () => (isClicked ? 'purple' : 'dark25');

  return (
    <div className={cn(styles.likeButton, isClicked ? styles.clicked : '')} onClick={handleChange}>
      {isClicked ? <LikeFilled /> : <LikeEmpty />}
      <Typography size={'xs'} color={getColor()}>
        {likesCount}
      </Typography>
    </div>
  );
};

