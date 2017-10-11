import 'babel-polyfill'; // Don't remove it!
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from 'Components/helpers/ErrorBoundary';
import App from './App';

if (module.hot) {
  module.hot.accept();
}

const mountNode = document.getElementById('root');

if (typeof window !== 'undefined' && mountNode) {
  ReactDOM.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
    mountNode
  );
}
