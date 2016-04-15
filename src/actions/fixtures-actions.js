import { GET_FIXTURES, GET_FIXTURES_FINISHED } from '../constants/action-types';
import { getFixtures } from '../api/fixtures';

export function getTeamFixtures(fixturesUrl) {
    return dispatch => {
        dispatch({
            type: GET_FIXTURES,
            fixturesUrl: fixturesUrl
        });
        getFixtures(fixturesUrl).then(fixtures => {
            dispatch({
                type: GET_FIXTURES_FINISHED,
                fixtures
            });
        });
    };
}