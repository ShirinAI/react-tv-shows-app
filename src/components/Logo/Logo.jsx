import React from 'react'
import style from './Logo.module.css'
export function Logo({title, subtitle, img}) {
  return (
    <>
    <div className={style.container}>
        <img className={style.img} src={img} alt='tv-logo'/>
        <div className={style.title}>{title}</div>
    </div>
    <div className={style.subtitle}>
        {subtitle}
    </div>
    </>
  )
}
