import React from 'react';
import Team from '../team/team';

export default function Results({ teams }) {
    return <div>{teams.map(team => <Team team={team} key={team.id} />)}</div>;
}
