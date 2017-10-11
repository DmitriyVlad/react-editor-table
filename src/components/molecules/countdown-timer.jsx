import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import './countdown-timer.scss';

import { classNameElement } from 'Helpers/component';

const messages = defineMessages({
  timerDays: {
    id: 'kangapp.countdown-timer.days',
    description: 'Text for Days counter',
    defaultMessage: 'Days'
  },
  timerHours: {
    id: 'kangapp.countdown-timer.hours',
    description: 'Text for Hours counter',
    defaultMessage: 'Hours'
  },
  timerMinutes: {
    id: 'kangapp.countdown-timer.minutes',
    description: 'Text for Minutes counter',
    defaultMessage: 'Minutes'
  },
  timerSeconds: {
    id: 'kangapp.countdown-timer.seconds',
    description: 'Text for Seconds counter',
    defaultMessage: 'Seconds'
  }
});

export default class CountdownTimer extends Component {
  static getTimeRemaining(endtime) {

    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (t / 1000) % 60 );
    const minutes = Math.floor( (t / 1000 / 60) % 60 );
    const hours = Math.floor( (t / (1000 * 60 * 60)) % 24 );
    const days = Math.floor( t / (1000 * 60 * 60 * 24) );

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds
    };
  }

  constructor(props) {

    super(props);

    this.state = {
      deadline: {}
    };

    this.tick = this.tick.bind(this);
  }

  componentWillMount() {

    this.setState({
      deadline: CountdownTimer.getTimeRemaining(this.props.deadline)
    });
  }

  componentDidMount() {

    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {

    clearInterval(this.interval);
  }

  tick() {

    this.setState({
      deadline: CountdownTimer.getTimeRemaining(this.props.deadline)
    });

    if (this.state.deadline.total <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {

    const classBase = 'CountdownTimer';

    let { days, minutes, hours, seconds } = this.state.deadline;

    days = (`0${days}`).slice(-2).split('');
    hours = (`0${hours}`).slice(-2).split('');
    minutes = (`0${minutes}`).slice(-2).split('');
    seconds = (`0${seconds}`).slice(-2).split('');

    return (
      <div className={ classBase }>
        <div className={ classNameElement(classBase, 'block') }>
          <h4 className={ classNameElement(classBase, 'title') }>
            <FormattedMessage { ...messages.timerDays } />
          </h4>
          <div className={ classNameElement(classBase, 'digits') }>
            <span className={ classNameElement(classBase, 'digit') }>{days[0]}</span>
            <span className={ classNameElement(classBase, 'digit') }>{days[1]}</span>
          </div>
        </div>
        <div className={ classNameElement(classBase, 'block') }>
          <h4 className={ classNameElement(classBase, 'title') }>
            <FormattedMessage { ...messages.timerHours } />
          </h4>
          <div className={ classNameElement(classBase, 'digits') }>
            <span className={ classNameElement(classBase, 'digit') }>{hours[0]}</span>
            <span className={ classNameElement(classBase, 'digit') }>{hours[1]}</span>
          </div>
        </div>
        <div className={ classNameElement(classBase, 'block') }>
          <h4 className={ classNameElement(classBase, 'title') }>
            <FormattedMessage { ...messages.timerMinutes } />
          </h4>
          <div className={ classNameElement(classBase, 'digits') }>
            <span className={ classNameElement(classBase, 'digit') }>{minutes[0]}</span>
            <span className={ classNameElement(classBase, 'digit') }>{minutes[1]}</span>
          </div>
        </div>
        <div className={ classNameElement(classBase, 'block') }>
          <h4 className={ classNameElement(classBase, 'title') }>
            <FormattedMessage { ...messages.timerSeconds } />
          </h4>
          <div className={ classNameElement(classBase, 'digits') }>
            <span className={ classNameElement(classBase, 'digit') }>{seconds[0]}</span>
            <span className={ classNameElement(classBase, 'digit') }>{seconds[1]}</span>
          </div>
        </div>
      </div>
    );
  }
}

CountdownTimer.propTypes = {
  deadline: PropTypes.string.isRequired
};
