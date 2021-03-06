import axios from '../../axios-config';
import * as actionTypes from '../action-types';

let timer = null;

export const autoLogin = (token, id, expiryDate, isAdmin) => {
    return dispatch => {
        if (token) {
            dispatch(authSuccess(token, id, expiryDate, isAdmin));
        } else {
            dispatch(authLogout());
        }
    }
}

export const login = (loginData) => {
    return async dispatch => {
        try {
            const response = await axios.post('auth/login', loginData);

            const { token, user, expiryDate } = response.data;

            const expiryDateModified = new Date(expiryDate).getTime() - new Date().getTime();

            dispatch(setLocalVariables(token, user.id, expiryDateModified, user.isAdmin));
        } catch (err) {
            throw err;
        }
    }
}

export const signup = (signupData) => {
    return async dispatch => {
        try {
            const response = await axios.post('auth/signup', signupData);

            console.log('signup response data', response.data);

            const { token, id, expiryDate, isAdmin } = response.data;

            const expiryDateModified = new Date(expiryDate).getTime() - new Date().getTime();

            dispatch(setLocalVariables(token, id, expiryDateModified, isAdmin));
        } catch (err) {
            throw err;
        }
    }
}


export const verify = (verifyData) => {
    return async dispatch => {
        try {
            const response = await axios.post('auth/verify', verifyData);
            const { verifierId } = response.data;
            dispatch(setVerifier(verifierId));
        } catch (err) {
            throw err;
        }
    }
}

const setVerifier = (verifierId) => {
    return {
        type: actionTypes.SET_AUTH_VERIFIER_ID,
        verifierId,
    };
}

export const logout = () => {
    return async dispatch => {
        localStorage.removeItem('authData');
        if (timer) {
            clearTimeout(timer);
        }
        dispatch(authLogout());
    }
}

const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}


const setLocalVariables = (token, id, expiryDate, isAdmin = false) => {
    return dispatch => {
        console.log('setting local variables', token);
        localStorage.setItem('authData', JSON.stringify({
            token,
            id,
            isAdmin,
        }));

        timer = setTimeout(() => {
            dispatch(logout());
        }, 24 * 60 * 60 * 1000);

        dispatch(authSuccess(token, id, expiryDate, isAdmin));
    }
}

const authSuccess = (token, id, expiryDate, isAdmin) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        id,
        expiryDate,
        isAdmin,
    }
}