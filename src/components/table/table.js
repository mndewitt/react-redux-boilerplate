import React, { Component, PropTypes } from 'react';
import Team from '../team/team';

export default class Table extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    componentDidMount() {
        this.props.tableActions.eplTable();
    }
    
    render() {
        const { standing, onTeamClick } = this.props;
        
        return <div>{standing.map((team, i) => 
                    <Team 
                        team={team} 
                        key={i} 
                        onClick={() => onTeamClick(i)}
                    />)}
              </div>;
    }
}
