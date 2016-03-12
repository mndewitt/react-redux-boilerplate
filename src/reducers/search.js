import { SEARCH, SEARCH_FINISHED } from '../constants/action-types';
import set from 'lodash/fp/set';

const initialState = {
    results: [],
    history: []
};

const reducers = {};

reducers[SEARCH] = function search(state, action) {
    return set('history', [action.term, ...state.history], state);
};

reducers[SEARCH_FINISHED] = function search(state, action) {
    return set('results', action.users, state);
};

export default function reducer(state = initialState, action) {
    const reducerForAction = reducers[action.type];
    if (reducerForAction) {
        return reducerForAction(state, action);
    }
    return state;
}
