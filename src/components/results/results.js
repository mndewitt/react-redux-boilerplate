import React, { Component, PropTypes } from 'react';
import Team from '../team/team';

export default class Results extends Component {
    constructor(props, context) {
        super(props, context);
    }
 
    render() {
        return <div>{this.props.teams.map((team, i) => 
                    <Team 
                        team={team} 
                        key={i} 
                        fixturesActions={this.props.fixturesActions} 
                        fixtures={this.props.fixtures} />)}
                </div>;
    }
}
