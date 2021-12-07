import axios from "../../axios-config";
import { header } from "../../utility/header-config";
import { SET_CHANNELS, CHANNEL_SUCCESS } from "../action-types";

const setChannels = (channels) => {
  return {
    type: SET_CHANNELS,
    channels,
  };
};

const channelSuccess = () => {
  return {
    type: CHANNEL_SUCCESS,
  };
};

export const fetchChannels = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("channel", header(token));
      const { channels } = response.data;
      dispatch(setChannels(channels));
    } catch (err) {
      throw err;
    }
  };
};

export const addChannel = (token, channel) => {
  return async (dispatch) => {
    try {
      await axios.post("channel", channel, header(token));
      dispatch(channelSuccess());
    } catch (error) {
      throw error;
    }
  };
};

export const updateChannel = (token, id, channel) => {
  return async (dispatch) => {
    try {
      await axios.put("channel/" + id, channel, header(token));
      dispatch(channelSuccess());
    } catch (err) {
      throw err;
    }
  };
};

export const deleteChannel = (token, id) => {
  return async (dispatch) => {
    try {
      await axios.delete("channel/" + id, header(token));
      dispatch(channelSuccess());
    } catch (err) {
      throw err;
    }
  };
};
