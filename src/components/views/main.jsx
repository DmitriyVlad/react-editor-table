import './Main.scss';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPageView from 'Components/views/MainPageView';

import {
  classNameElement,
  classNameModifiers
} from 'Helpers/component';

const Main = () => {
  const classBase = 'Main';

  return (
    <div className={ classNameModifiers(classBase) }>
      <div className={ classNameElement(classBase, 'Content') } >
        <Switch>
          <Route exact path="/" component={ MainPageView } />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
