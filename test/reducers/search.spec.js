import searchReducer from '../../src/reducers/search';
import { SEARCH } from '../../src/constants/action-types';

describe('[Reducer] Search', () => {
    it('should update history with search term', () => {
        const currentState = { history: ['otherValue'] };
        const term = 'test';
        const newState = searchReducer(currentState, { type: SEARCH, term });
        expect(newState.history[0]).toBe(term);
        expect(newState.history).not.toBe(currentState.history);
    });
});
