import { ADD_CHANNEL_GALLERY, CHANNEL_SUCCESS, REMOVE_CHANNEL_GALLERY, SET_CHANNELS,  } from "../action-types";

const initialState = {
  channels: [],
  gallery: [],
  ids: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      return {
        ...state,
        channels: action.channels,
      };
    case ADD_CHANNEL_GALLERY:
      return {
        ...state,
        gallery: [...state.gallery, action.galleryItem],
        ids: [...state.ids, action.galleryItem.id],
      }
    case REMOVE_CHANNEL_GALLERY:
      const updatedGallery = state.gallery.filter(g => g.id === action.galleryId);
      const updatedIds = state.ids.filter(i => i === action.galleryId);
      return {
        ...state,
        gallery: updatedGallery,
        ids: updatedIds,
      }
    case CHANNEL_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
