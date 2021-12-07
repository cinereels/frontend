import { SET_CURRENT_USER, SET_USERS, USER_SUCCESS } from '../action-types';

const initialState = {
    users: [],
    currentUser: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
            }
        case USER_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;