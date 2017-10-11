import { Map } from 'immutable';

import { TimerActionTypes } from '../actions/timer';

const initialState = {
  running: false,
  currentVal: 0,
  initialVal: 0,
  interval: 0
};

function TimerReducer(
  state = new Map(initialState),
  action = {}
) {

  switch (action.type) {

    case TimerActionTypes.TIMER_START:
      return new Map({
        running: true,
        initialVal: action.initialVal,
        currentVal: action.initialVal,
        interval: action.interval
      });

    case TimerActionTypes.TIMER_STOP:
      return state.set('running', false);

    case TimerActionTypes.TIMER_INCREMENT:
      return state.update('currentVal', value => value + 1);

    default:
      return state;
  }
}

export default TimerReducer;
