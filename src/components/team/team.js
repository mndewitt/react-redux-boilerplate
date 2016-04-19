import React, { Component, PropTypes } from 'react';

export default class Team extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return <h3>{this.props.team.teamName}</h3>;
    }
}