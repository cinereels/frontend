import { applyMiddleware, createStore, compose } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { Provider } from 'react-redux';

const composeEnhancer = compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(Thunk)));

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default ReduxProvider;
