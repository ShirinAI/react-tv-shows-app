import React from 'react'
import Rating from './Rating'
import style from './TvShowDetail.module.css'

export function TvShowDetail( {tvShow} ) {
  return (
    <div>
        <div className={style.title}>{tvShow.name}</div>
        <div className={style.rating}>
          <Rating value={tvShow.vote_average / 2}/>
          <div className={style.score}> {tvShow.vote_average / 2}</div>
        </div>
        <div className={style.overview}>{tvShow.overview}</div>
    </div>
  )
}
