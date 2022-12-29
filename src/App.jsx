import React, { useEffect, useState } from 'react'
import { TvShowAPI } from './api/TvShow'
import style from './App.module.css'
import { BACKDROP_BASE_URL } from './config';
import { TvShowDetail } from './components/TvShowDetail/TvShowDetail';
import { Logo } from './components/Logo/Logo';
import logo from './assets/images/tv-logo.png'
import { TvShowList } from './components/TvShowList/TvShowList';
import { Recommended } from './components/Recommended/Recommended';
import { SearchBar } from './components/SearchBar/SearchBar';


export function App() {
    const [ currentTvShow, setCurrentTvShow ] = useState();
    const [ recommendationList, setRecommendationList ] = useState();

    async function fetchPopulars(){
        const popularTvShowList = await TvShowAPI.fetchPopulars();
        if (popularTvShowList.length > 0) {
         setCurrentTvShow(popularTvShowList[0])
        }
    }

    async function fetchRecommendations(tvShowId){
        const recommendationResponse = await TvShowAPI.fetchRecommendations(tvShowId);
        if (recommendationResponse.length > 0) {
            setRecommendationList(recommendationResponse.slice(0, 10))
        }
    }

    async function fetchByTitle(title){
        const searchResponse = await TvShowAPI.fetchByTitle(title);
        if (searchResponse.length > 0) {
            setCurrentTvShow(searchResponse[0])
        }
    }

    useEffect(() => { 
        fetchPopulars();
    }, [])

    useEffect(() => { 
        if(currentTvShow){
            fetchRecommendations(currentTvShow.id)
        };
    }, [currentTvShow])

    function updateCurrentTvShow(tvShow){
        setCurrentTvShow(tvShow)
    }

console.log(currentTvShow)
  return (
    <div className={style.main_container}
    style={{background: currentTvShow 
    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}') no-repeat center / cover`
    : 'black'}}>
        <div className={style.header}>
            <div className='row'>
                <div className='col-4'>
                     <Logo img={logo} title='Best Shows Now' subtitle='What everyone is watching'/>
                </div>
                <div className='col-md-12 col-lg-4'>
                    <SearchBar onSubmit={fetchByTitle}/>
                </div>
            </div>
        </div>
        <div className={style.tv_show_detail}>
            { currentTvShow && <TvShowDetail tvShow={currentTvShow}/> }
        </div>
        <div className={style.recommended_tv_shows}>
            { currentTvShow && <Recommended 
                onClickItem={updateCurrentTvShow} 
                tvShowList={recommendationList} 
            />}
           
        </div>
    </div>
  )
}

