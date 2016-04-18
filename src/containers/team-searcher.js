import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/search-actions';
import * as FixturesActions from '../actions/fixtures-actions';
import Results from '../components/results/results';
import Search from '../components/search/search';
import Fixtures from '../components/fixtures/fixtures';

export default class App extends Component {
    render() {
        const { results, searchActions, fixturesActions, fixtures } = this.props;
        return (
            <div className="main-app-container">
                <div className="main-app-nav">Soccer team search</div>
                <Search searchActions={searchActions}/>
                <Fixtures fixtures={fixtures} />
                <Results teams={results} fixturesActions={fixturesActions} />
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
        results: state.search.results,
        fixtures: state.fixtures.results
    };
}

function mapDispatchToProps(dispatch) {
    return {
        searchActions: bindActionCreators(SearchActions, dispatch),
        fixturesActions: bindActionCreators(FixturesActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
