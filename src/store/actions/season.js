import axios from '../../axios-config';
import { header } from '../../utility/header-config';
import { ADD_SEASON_EPISODE, REMOVE_SEASON_EPISODE, SEASON_SUCCESS } from '../action-types';


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

export const addSeasonEpisode = (token, episodeData) => {
    return async dispatch => {
        try {
            const response = await axios.post('api/episode', episodeData, header(token));
            const { episode } = response.data;
            dispatch(addSeasonEpisodeSuccess(episode));
        } catch (err) {
            throw err;
        }
    }
}

const addSeasonEpisodeSuccess = (episode) => {
    return {
        type: ADD_SEASON_EPISODE,
        episode,
    }
}

export const removeSeasonEpisode = (token, id) => {
    return async dispatch => {
        try {
            const response = await axios.delete('api/episode/' + id, header(token));
            const { episode } = response.data;
            dispatch(removeSeasonEpisodeSuccess(episode.id));
        } catch (err) {
            throw err;
        }
    }
}

const removeSeasonEpisodeSuccess = (episodeId) => {
    return {
        type: REMOVE_SEASON_EPISODE,
        episodeId,
    }
}