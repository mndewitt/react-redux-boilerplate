import { GET_TABLE, GET_TABLE_FINISHED, TOGGLE_TEAM_SELECTED } from '../constants/action-types';
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


//It would make sense to create a separate set of reducers just for team relatd things
reducers[TOGGLE_TEAM_SELECTED] = function toggleTeamSelected(state, action) {
    let updatedTeams = state.standing.map((teamState, i) => {
        /*
        Ideally, you'd cross check this with an ID - however we aren't getting one from the API for each team.
        So, as a quick fix we're cross checking the position of the team in the list with it's position
        in the state object, to find the team that was clicked...
        */
        if (i !== action.key) {
            return teamState;
        }
        
        return set('isSelected', !teamState.isSelected, teamState);   
    });
    return set('standing', updatedTeams, state);
}

export default function reducer(state = initialState, action) {
    const reducerForAction = reducers[action.type];
    if (reducerForAction) {
        return reducerForAction(state, action);
    }
    return state;
}
