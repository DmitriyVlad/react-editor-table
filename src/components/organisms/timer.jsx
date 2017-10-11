import './timer.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from '@blueprintjs/core';
import { TimerActions } from 'Actions/timer';

import {
  classNameElement,
  classNameModifiers
} from '../../helpers/component';

function Timer({
    running,
    currentVal,
    startTimer,
    stopTimer
  }) {

  const classBase = 'Timer';

  return (
    <div className={ classNameModifiers(classBase) }>
      <div className={ classNameElement(classBase, 'Content') } >
        Timer is { running ? '' : 'not' } running.<br />
        Current: {currentVal}<br />
      </div>
      <div className={ classNameElement(classBase, 'Actions') } >
        <Button iconName="refresh" onClick={ startTimer }>Start</Button>
        <Button iconName="refresh" onClick={ stopTimer }>Stop</Button>
      </div>
    </div>
  );
}

function mapStateToProps(state, _ownProps) {

  return {
    running: state.get('timer').get('running'),
    currentVal: state.get('timer').get('currentVal')
  };
}

function mapDispatchToProps(dispatch, _ownProps) {

  return {
    startTimer: () => dispatch(TimerActions.startTimer({ interval: 1, initialVal: 0 }) ),
    stopTimer: () => dispatch(TimerActions.stopTimer() )
  };
}

Timer.propTypes = {
  running: PropTypes.bool.isRequired,
  currentVal: PropTypes.number.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
