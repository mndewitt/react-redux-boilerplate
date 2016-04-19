import { GET_TABLE, GET_TABLE_FINISHED } from '../constants/action-types';
import set from 'lodash/fp/set';

const initialState = {
    standing: [],
    history: []
};

const reducers = {};

reducers[GET_TABLE] = function search(state, action) {
    return set('history', [action.term, ...state.history], state);
};

reducers[GET_TABLE_FINISHED] = function search(state, action) {
    return set('standing', action.standing, state);
};

export default function reducer(state = initialState, action) {
    const reducerForAction = reducers[action.type];
    if (reducerForAction) {
        return reducerForAction(state, action);
    }
    return state;
}
