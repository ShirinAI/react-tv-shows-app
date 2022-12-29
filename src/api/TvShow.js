import axios from 'axios';
import { FAKE_POPULARS, FAKE_RECOMMENDS } from './fake_data';
import { BASE_URL, API_KEY_PARAM } from '../config';


export class TvShowAPI {
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        return response.data.results;
        // return FAKE_POPULARS
    }

    static async fetchRecommendations(tvShowId){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
        return response.data.results;
        // return FAKE_RECOMMENDS
    }

    static async fetchByTitle(title){
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`)
        return response.data.results;
    }
}

