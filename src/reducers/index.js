import { combineReducers } from 'redux';
import searchReducer from './search';
import fixturesReducer from './fixtures';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    search: searchReducer,
    fixtures: fixturesReducer,
    routing: routerReducer
});

export default rootReducer;
