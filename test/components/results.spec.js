import React from 'react';
import { shallow } from 'enzyme';
import Results from '../../src/components/results';

describe('[Component] Results', () => {
    it('should render the right number of users', () => {
        const users = [{ id: 1 }];
        const wrapper = shallow(<Results users={users}/>);
        const renderedUsers = wrapper.find('User');

        expect(renderedUsers.length).toBe(users.length);
    });

    it('should pass the right user data', () => {
        const users = [{ id: 1 }];
        const wrapper = shallow(<Results users={users}/>);
        const renderedUsers = wrapper.find('User');

        expect(renderedUsers.first().props().user).toBe(users[0]);
    });
});
