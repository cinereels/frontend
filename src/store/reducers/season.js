import { SEASON_SUCCESS } from '../action-types';

const initialState = {

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEASON_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;