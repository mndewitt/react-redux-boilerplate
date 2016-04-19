import { combineReducers } from 'redux';
import tableReducer from './table';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    table: tableReducer,
    routing: routerReducer
});

export default rootReducer;
