import axios from "../../axios-config";
import * as actionTypes from "../action-types";

let timer = null;

export const autoLogin = (token, id, expiryDate) => {
  return (dispatch) => {
    if (token) {
      dispatch(authSuccess(token, id, expiryDate));
    } else {
      dispatch(authLogout());
    }
  };
    };

export const login = (loginData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("auth/login", loginData);

      const { token, user, expiryDate } = response.data;

      const expiryDateModified =
        new Date(expiryDate).getTime() - new Date().getTime();

      dispatch(setLocalVariables(token, user.id, expiryDateModified));
    } catch (err) {
      throw err;
    }
  };
};

export const signup = (signupData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("auth/signup", signupData);

      console.log("signup response data", response.data);

      const { token, id, expiryDate } = response.data;

      const expiryDateModified =
        new Date(expiryDate).getTime() - new Date().getTime();

      dispatch(setLocalVariables(token, id, expiryDateModified));
    } catch (err) {
      throw err;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("authData");
    if (timer) {
      clearTimeout(timer);
    }
    dispatch(authLogout());
  };
};

const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

const setLocalVariables = (token, id, expiryDate) => {
  return (dispatch) => {
    console.log("setting local variables", token);
    localStorage.setItem(
      "authData",
      JSON.stringify({
        token,
        id,
      })
    );

    timer = setTimeout(() => {
      dispatch(logout());
    }, 24 * 60 * 60 * 1000);

    dispatch(authSuccess(token, id, expiryDate));
  };
};

const authSuccess = (token, id, expiryDate) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    id,
    expiryDate,
  };
};
