import { combineReducers } from 'redux';
import searchReducer from './search';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    search: searchReducer,
    routing: routerReducer
});

export default rootReducer;
