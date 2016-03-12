import 'babel-polyfill';
import { searchUsers } from '../../src/actions/search-actions';
import { SEARCH } from '../../src/constants/action-types';

describe('[Action] Search', () => {
    it('dispatch a search action', () => {
        const searchTerm = 'test';
        const thunk = searchUsers(searchTerm);
        const dispatch = jasmine.createSpy();

        thunk(dispatch);
        expect(dispatch).toHaveBeenCalledWith({
            type: SEARCH,
            term: searchTerm
        });
    });
});
