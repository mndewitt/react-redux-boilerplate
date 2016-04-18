import React, { Component, PropTypes } from 'react';

export default class Fixtures extends Component {
    constructor(props, context) {
        super(props, context);
    }
 
    render() {
        console.log(this.props.fixtures);
        
        return (
            <div className="fixtures-container">
                {this.props.fixtures.map((fixture) => <h3>{fixture.homeTeamName} vs. {fixture.awayTeamName}</h3>)}
            </div>
        );
    }
}