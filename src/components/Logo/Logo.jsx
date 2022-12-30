import React from 'react'
import style from './Logo.module.css'
export function Logo({title, subtitle, img}) {
  return (
    <>
    <div className={style.container}>
        <img className={style.img} src={img} alt='tv-logo'/>
        <h3 className={style.title}>{title}</h3>
    </div>
    <h5 className={style.subtitle}>
        {subtitle}
    </h5>
    </>
  )
}
