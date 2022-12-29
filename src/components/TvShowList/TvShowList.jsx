import React from 'react';
import { SMALL_IMG_COVER } from '../../config';
import style from './TvShowList.module.css';
const MAX_TITLE = 20;

export function TvShowList({ tvShow, onClick }) {
    const onClick_ = () => {
        onClick(tvShow)
    }

  return (
    <div onClick={onClick_} className={style.container}>
        <img 
            alt={tvShow.name} 
            src={SMALL_IMG_COVER + tvShow.backdrop_path}
            className={style.img}
        />
        <div className={style.title}>
            {tvShow.name.length > MAX_TITLE 
            ? tvShow.name.slice(0, MAX_TITLE) + '...' 
            : tvShow.name
            }
        </div>
    </div>
  )
}
