

/*
 * Actions for Timer
 */

const TimerActionTypes = {
  TIMER_START: 'TIMER_START',
  TIMER_STOP: 'TIMER_STOP',
  TIMER_INCREMENT: 'TIMER_INCREMENT'
};

let timerId = null;

function startTimer({
  interval,
  initialVal
}) {

  return (dispatch) => {

    if (timerId) {
      // if timer is already running, skip it
      return;
    }

    dispatch({
      type: TimerActionTypes.TIMER_START,
      interval,
      initialVal
    });
    timerId = setInterval( () => {

      dispatch({
        type: TimerActionTypes.TIMER_INCREMENT
      });
    }, interval * 1000);
  };
}

function stopTimer() {

  return (dispatch) => {

    if (!timerId) {
      // if no timer is running, skip it
      return;
    }

    dispatch({
      type: TimerActionTypes.TIMER_STOP
    });
    clearInterval(timerId);
    timerId = null;
  };
}

const TimerActions = {
  startTimer,
  stopTimer
};

export { TimerActions };
export { TimerActionTypes };
