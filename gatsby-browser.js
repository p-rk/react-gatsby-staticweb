import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './src/reducers';

const store = createStore(combineReducers);

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  ConnectedRouterWrapper.propTypes = {
    children: PropTypes.object.isRequired
  };
  return ConnectedRouterWrapper;
};
