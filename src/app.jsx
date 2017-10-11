import './app.scss';

import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

// Components
import Main from 'Components/views/main';

import createStore from './redux/reducers';

const history = createHistory();
const store = createStore(history);

function App() {

  return (
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <Switch>
          <Route path="/" component={ Main } />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
