import Immutable from 'immutable';
import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import apiWrapper from '../lib/api-wrapper';
import api from '../../api';

import IntlReducer from './intl';
import NotificationReducer from './notifications';
import TimerReducer from './timer';
import UserReducer from './user';

const apiConfig = {
  apiBase: __APIBASE__ // eslint-disable-line no-undef
};
const kangApi = apiWrapper(api(apiConfig));

const reducer = combineReducers({
  router: routerReducer,
  intl: IntlReducer,
  notifications: NotificationReducer,
  timer: TimerReducer,
  user: UserReducer
});

function createStore(history) {
  const myRouterMiddleware = routerMiddleware(history);

  // eslint-disable-next-line no-undef
  if (__DEVTOOLS__) {
    const store = compose(
      applyMiddleware(thunk.withExtraArgument(kangApi), myRouterMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(reduxCreateStore)(reducer, Immutable.Map({}));

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./', () => {
        const nextReducer = require('./'); // eslint-disable-line global-require
        store.replaceReducer(nextReducer);
      });
    }

    return store;
  }

  const store = compose(applyMiddleware(thunk.withExtraArgument(kangApi), myRouterMiddleware))(
    reduxCreateStore
  )(reducer, Immutable.Map({}));

  return store;
}

export default createStore;
