import { SEARCH, SEARCH_FINISHED } from '../constants/action-types';
import { searchEnglishTeams } from '../api/search-teams';

export function searchTeams() {
    return dispatch => {
        dispatch({
            type: SEARCH,
        });
        searchEnglishTeams().then(teams => {
            dispatch({
                type: SEARCH_FINISHED,
                teams
            });
        });
    };
}
