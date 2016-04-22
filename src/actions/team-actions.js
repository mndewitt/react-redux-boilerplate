import { TOGGLE_TEAM_SELECTED } from '../constants/action-types';

export function toggleTeamSelected(key) {
    return {
        type: TOGGLE_TEAM_SELECTED,
        key
    };
}