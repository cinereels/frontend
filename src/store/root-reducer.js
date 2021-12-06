import { combineReducers } from 'redux';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    ath: authReducer,
});

export default rootReducer;