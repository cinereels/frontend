import axios from '../../axios-config';
import { header } from '../../utility/header-config';
import { SET_USERS, USER_SUCCESS } from '../action-types';

export const fetchUsers = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('user', header(token));
            const { users } = response.data;
            dispatch(setUsers(users));
        } catch (err) {
            throw err;
        }
    }
}

const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export const updateUser = (token, id, userData) => {
    return async dispatch => {
        try {
            await axios.put('user/' + id, userData, header(token));
            dispatch(userSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const deleteUser = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('user/' + id, header(token));
            dispatch(userSuccess());
        } catch (err) {
            throw err;
        }
    }
}


const userSuccess = () => {
    return {
        type: USER_SUCCESS,
    }
}