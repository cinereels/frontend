import axios from '../../axios-config';
import { header } from '../../utility/header-config';
import { SERIES_SUCCESS, SET_SERIES } from '../action-types';

export const fetchAllSeries = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('series', header(token));
            const { allSeries } = response.data;
            dispatch(setAllSeries(allSeries));
        } catch (err) {
            throw err;
        }
    }
}

const setAllSeries = (allSeries) => {
    return {
        type: SET_SERIES,
        allSeries,
    }
}


export const addSeries = (token, seriesData) => {
    return async dispatch => {
        try {
            await axios.post('series', seriesData, header(token));
            dispatch(seriesSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateSeries = (token, id, seriesData) => {
    return async dispatch => {
        try {
            await axios.put('series/' + id, seriesData, header(token));
            dispatch(seriesSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const deleteSeries = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('series/' + id, header(token));
            dispatch(seriesSuccess());
        } catch (err) {
            throw err;
        }
    }
}

const seriesSuccess = () => {
    return {
        type: SERIES_SUCCESS,
    }
}