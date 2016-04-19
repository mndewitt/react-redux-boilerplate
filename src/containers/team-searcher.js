import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TableActions from '../actions/table-actions';
import Table from '../components/table/table';

export default class App extends Component {
    render() {
        const { standing, tableActions } = this.props;
        return (
            <div className="main-app-container">
                <div className="main-app-nav">EPL Table</div>
                <Table standing={standing} tableActions={tableActions} />
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
        tableActions: bindActionCreators(TableActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
