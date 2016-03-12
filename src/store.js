import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import DevTools from './containers/dev-tools';

const logger = createLogger();

const finalCreateStore = compose(
    applyMiddleware(logger, thunk),
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
}
