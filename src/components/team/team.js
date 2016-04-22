import React, { Component, PropTypes } from 'react';

export default class Team extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
   
    
    render() {
        const { team, onClick } = this.props;
        
        return <h3 className={'team-name ' + (team.isSelected ? 'team-selected' : '')} onClick={onClick}>{team.teamName} - {team.points} pts.</h3>;
    }
}