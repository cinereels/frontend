import axios from '../../axios-config';
import { header } from '../../utility/header-config';
import { EPISODE_SUCCESS } from '../action-types';

export const addEpisode = (token, episodeData) => {
    return async dispatch => {
        try {
            await axios.post('episode', episodeData, header(token));
            dispatch(episodeSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateEpisode = (token, id, episodeData) => {
    return async dispatch => {
        try {
            await axios.put('episode/' + id, episodeData, header(token));
            dispatch(episodeSuccess());
        } catch (err) {
            throw err;
        }
    }
}


export const deleteEpisode = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('episode/' + id, header(token));
            dispatch(episodeSuccess());
        } catch (err) {
            throw err;
        }
    }
}


const episodeSuccess = () => {
    return {
        type: EPISODE_SUCCESS,
    }
}