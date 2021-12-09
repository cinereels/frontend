export {
    autoLogin,
    login,
    logout,
    signup,
    verify,
} from './auth';

export {
    addSeries,
    fetchAllSeries,
    updateSeries,
    deleteSeries,
    addSeriesGallery,
    removeSeriesGallery,
} from './series';

export {
    addSeason,
    updateSeason,
    deleteSeason,
} from './season';

export {
    addEpisode,
    updateEpisode,
    deleteEpisode,
} from './episode';

export {
    addMovie,
    fetchMovies,
    updateMovie,
    deleteMovie,
    addMovieGallery,
    removeMovieGallery,
} from './movie';

export {
    addChannel,
    updateChannel,
    deleteChannel,
    fetchChannels,
    addChannelGallery,
    removeChannelGallery,
} from './channel';