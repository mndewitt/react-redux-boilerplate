import React, { Component, PropTypes } from 'react';
import debounce from 'lodash/debounce';

const waitTime = 200;

export default class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.search = debounce(this.search.bind(this), waitTime);
    }
    handleChange(event) {
        event.persist();
        this.search(event);
    }
    search(event) {
        this.props.actions.searchUsers(event.target.value);
    }
    render() {
        const handleChange = this.handleChange.bind(this);
        return (
            <input type="text" className="input-search" placeholder="Search for users" onChange={handleChange}/>
        );
    }
}

Search.propTypes = {
    actions: PropTypes.object.isRequired
};
