import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import GithubSearcher from './containers/github-searcher.js';
import configureStore from './store';

import './styles/main.scss';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={GithubSearcher}/>
                <Route path="/github" component={GithubSearcher}/>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
