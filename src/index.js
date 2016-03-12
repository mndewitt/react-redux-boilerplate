import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import configureStore from './store';
import { Root } from './containers/root';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);
