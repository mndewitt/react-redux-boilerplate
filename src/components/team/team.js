import React, { Component, PropTypes } from 'react';

export default class Team extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    getTeamFixtures(fixturesUrl) {
        this.props.fixturesActions.getTeamFixtures(fixturesUrl);
    }
    
    render() {
        const getTeamFixtures = this.getTeamFixtures.bind(this, this.props.team._links.fixtures.href);
        return (
            <div className="team-container">
                <img className="team-crest" src={this.props.team.crestUrl} />
                <h1>{this.props.team.name}</h1>
                <button onClick={getTeamFixtures}>Get fixtures for {this.props.team.name}</button>
            </div>
        );
    }
}
