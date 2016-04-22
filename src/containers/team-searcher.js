import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TableActions from '../actions/table-actions';
import * as TeamActions from '../actions/team-actions';
import Table from '../components/table/table';

export default class App extends Component {
    render() {
        const { standing, tableActions, onTeamClick } = this.props;
        return (
            <div className="main-app-container">
                <div className="main-app-nav">EPL Table</div>
                <Table standing={standing} tableActions={tableActions} onTeamClick={onTeamClick} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        standing: state.table.standing
    };
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(TableActions, dispatch),
        onTeamClick: (key) => {
            dispatch(TeamActions.toggleTeamSelected(key))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
