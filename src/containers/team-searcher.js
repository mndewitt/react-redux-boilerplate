import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/search-actions';
import Results from '../components/results/results';
import Search from '../components/search/search';

export default class App extends Component {
    render() {
        const { results, actions } = this.props;
        return (
            <div className="main-app-container">
                <div className="main-app-nav">Soccer team search</div>
                <Search actions={actions}/>
                <Results teams={results}/>
            </div>
        );
    }
}

App.propTypes = {
    results: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        history: state.search.history,
        results: state.search.results
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SearchActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
