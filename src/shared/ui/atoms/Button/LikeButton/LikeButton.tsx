import cn from 'classnames';
import React from 'react';
import { LikeEmpty, LikeFilled } from 'shared/assets/icons';
import { Typography } from 'shared/ui/atoms';
import styles from './LikeButton.module.scss';

type LikeButtonProps = {
  filled: boolean;
  likesCount: number;
  onClick: () => void;
};

export const LikeButton = ({ filled, likesCount, onClick }: LikeButtonProps) => {
  const likeColor = filled ? 'purple' : 'dark25';

  return (
    <div className={cn(styles.likeButton, { [styles.clicked]: filled })} onClick={onClick}>
      {filled ? <LikeFilled /> : <LikeEmpty />}
      <Typography size={'xs'} color={likeColor}>
        {likesCount}
      </Typography>
    </div>
  );
};
