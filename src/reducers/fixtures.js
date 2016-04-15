import { GET_FIXTURES, GET_FIXTURES_FINISHED } from '../constants/action-types';
import set from 'lodash/fp/set';

const initialState = {
    results: [],
    history: []
};

const reducers = {};

reducers[GET_FIXTURES] = function fixtures(state, action) {
    return set('history', [action.fixturesUrl, ...state.history], state);
};

reducers[GET_FIXTURES_FINISHED] = function fixturesFinished(state, action) {
    return set('results', action.fixtures, state);
};

export default function reducer(state = initialState, action) {
    const reducerForAction = reducers[action.type];
    if (reducerForAction) {
        return reducerForAction(state, action);
    }
    return state;
}