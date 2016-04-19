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
        return <div>{this.props.standing.map((team, i) => <Team team={team} key={i} />)}</div>;
    }
}
