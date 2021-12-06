import axios from '../../axios-config';
import { header } from '../../utility/header-config';
import { SEASON_SUCCESS } from '../action-types';


export const addSeason = (token, seasonData) => {
    return async dispatch => {
        try {
            await axios.post('season', seasonData, header(token));
            dispatch(seasonSuccess());
        } catch (err) {
            throw err;
        }
    }
}


export const updateSeason = (token, id, seasonData) => {
    return async dispatch => {
        try {
            await axios.put('season/' + id, seasonData, header(token));
            dispatch(seasonSuccess());
        } catch (err) {
            throw err;
        }
    }
}


export const deleteSeason = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('season/' + id, header(token));
        } catch (err) {
            throw err;
        }
    }
}


const seasonSuccess = () => {
    return {
        type: SEASON_SUCCESS,
    }
}