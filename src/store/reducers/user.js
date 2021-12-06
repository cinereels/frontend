import { SET_USERS, USER_SUCCESS } from '../action-types';

const initialState = {
    users: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case USER_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;