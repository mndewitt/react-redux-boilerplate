import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import TeamSearcher from './containers/team-searcher.js';
import configureStore from './store';

import './styles/main.scss';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={TeamSearcher}/>
                <Route path="/team" component={TeamSearcher}/>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
