import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index.js';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import identity from 'lodash/identity';

const logger = createLogger();

const finalCreateStore = compose(
    applyMiddleware(logger, thunk),
    window.devToolsExtension ? window.devToolsExtension() : identity
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
}
