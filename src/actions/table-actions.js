import { GET_TABLE, GET_TABLE_FINISHED } from '../constants/action-types';
import { getEplTable } from '../api/table';

export function eplTable() {
    return dispatch => {
        dispatch({
            type: GET_TABLE,
        });
        getEplTable().then(standing => {
            dispatch({
                type: GET_TABLE_FINISHED,
                standing
            });
        });
    };
}
