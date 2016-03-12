import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import GithubSearcher from './app';
import DevTools from './dev-tools';

export class Root extends Component {
  render() {
      const { store } = this.props;
      return (
      <Provider store={store}>
        <div>
          <GithubSearcher />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
