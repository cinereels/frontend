import { SERIES_SUCCESS, SET_SERIES } from '../action-types';

const initialState = {
    allSeries: [],
    seasons: [],
    ids: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERIES:
            return {
                ...state,
                allSeries: action.allSeries,
            }
        case SERIES_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;