import { SEARCH, SEARCH_FINISHED } from '../constants/action-types';
import { searchGithub } from '../api/search-github';

export function searchUsers(searchTerm) {
    return dispatch => {
        dispatch({
            type: SEARCH,
            term: searchTerm
        });
        searchGithub(searchTerm).then(users => {
            dispatch({
                type: SEARCH_FINISHED,
                users
            });
        });
    };
}
