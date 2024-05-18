import cn from 'classnames';
import React from 'react';

import styles from './LikeButton.module.scss';
import { ReactComponent as LikeEmpty } from '../../../assets/img/LikeEmpty.svg';
import { ReactComponent as LikeFilled } from '../../../assets/img/LikeFilled.svg';
import { Typography } from '../../Typography/Typography';

interface LikeButtonProps {
  isClicked: boolean;
  likesCount: number;
  onClick: () => void;
}

export const LikeButton = ({ isClicked, likesCount, onClick }: LikeButtonProps) => {
  const likeColor = isClicked ? 'purple' : 'dark25';

  return (
    <div className={cn(styles.likeButton, { [styles.clicked]: isClicked })} onClick={onClick}>
      {isClicked ? <LikeFilled /> : <LikeEmpty />}
      <Typography size={'xs'} color={likeColor}>
        {likesCount}
      </Typography>
    </div>
  );
};

