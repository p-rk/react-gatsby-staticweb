import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import combineReducers from './src/reducers';

const store = createStore(combineReducers);

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider store={store}>
      {bodyComponent}
    </Provider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
