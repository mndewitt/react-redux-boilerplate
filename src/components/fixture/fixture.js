import React, { Component, PropTypes } from 'react';

export default class Fixture extends Component {
    constructor(props, context) {
        super(props, context);
    }
 
    render() {
        return (
            <h3>{this.props.fixture.awayTeamName}</h3>
        );
    }
}