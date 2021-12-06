import { combineReducers } from 'redux';

import authReducer from './reducers/auth';
import seriesReducer from './reducers/series';
import seasonReducer from './reducers/season';
import episodeReducer from './reducers/episode';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    ath: authReducer,
    srs: seriesReducer,
    ssn: seasonReducer,
    epd: episodeReducer,
    usr: userReducer,
});

export default rootReducer;