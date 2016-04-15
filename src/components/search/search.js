import React, { Component, PropTypes } from 'react';
import debounce from 'lodash/debounce';

export default class Search extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    searchForTeams() {
        this.props.searchActions.searchTeams();
    }
    render() {
        const searchForTeams = this.searchForTeams.bind(this);
        
        return (
            <button type="text" className="button-search" onClick={searchForTeams}>Get teams</button>
        );
    }
}

Search.propTypes = {
    searchActions: PropTypes.object.isRequired
};
