import { ADD_SEASON_EPISODE, REMOVE_SEASON_EPISODE, SEASON_SUCCESS } from '../action-types';

const initialState = {
    episodes: [],
    ids: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SEASON_EPISODE:
            return {
                ...state,
                episodes: [...state.episodes, action.episode],
                ids: [...state.ids, action.episode.id],
            }
        case REMOVE_SEASON_EPISODE:
            const updatedEpisodes = state.episodes.filter(e => e.id === action.episodeId);
            const updatedIds = state.ids.filter(i => i === action.episodeId);
            return {
                ...state,
                episodes: updatedEpisodes,
                ids: updatedIds,
            }
        case SEASON_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;