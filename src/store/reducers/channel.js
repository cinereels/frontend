import { CHANNEL_SUCCESS, SET_CHANNELS } from "../action-types";

const initialState = {
  channels: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      return {
        ...state,
        channels: action.channels,
      };
    case CHANNEL_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
