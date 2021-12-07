import * as actionTypes from '../action-types';

const initialState = {
    token: null,
    id: null,
    expiryDate: null,
    isAdmin: false,
    verifierId: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                id: action.id,
                expiryDate: action.expiryDate,
                isAdmin: action.isAdmin,
                verifierId: null,
            }
        case actionTypes.SET_AUTH_VERIFIER_ID:
            return {
                ...state,
                verifierId: action.verifierId,
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                id: null,
                expiryDate: null,
                isAdmin: false,
                verifierId: null,
            }
        default:
            return state;
    }
}

export default reducer;