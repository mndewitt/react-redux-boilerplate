import React from 'react';
import User from './users';

export default function Results({ users }) {
    return <div>{users.map(user => <User user={user} key={user.id} />)}</div>;
}
