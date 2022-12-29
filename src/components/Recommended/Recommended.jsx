import React from 'react'
import { TvShowList } from '../TvShowList/TvShowList'
import style from './Recommended.module.css'

export function Recommended({  tvShowList, onClickItem }) {
  return (
    <div>
        <h4>What else you could like:</h4>
        <div className={style.title}>

        </div>
        <div className={style.list}>
        {tvShowList?.map((tvShow) => {
          return (
            <span className={style.tv_show_item} key={tvShow.id}>
              <TvShowList
                tvShow={tvShow}
                onClick={onClickItem}
              />
            </span>
          );
        })}
        </div>
    </div>
  )
}
