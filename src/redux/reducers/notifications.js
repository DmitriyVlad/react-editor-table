import { List } from 'immutable';

import { NotificationActionTypes } from '../actions/notifications';

const NotificationState = List;

const initialState = [];

function NotificationReducer(
  state = new NotificationState(initialState),
  action = {}
) {
  switch (action.type) {
    case NotificationActionTypes.NOTIFICATION_ADD:
      return state.push({
        timestamp: new Date(),
        id: action.notification.id || new Date().valueOf(),
        ...action.notification
      });

    case NotificationActionTypes.NOTIFICATION_REMOVE:
      return state.filter(e => e.id !== action.id);

    case NotificationActionTypes.NOTIFICATION_PURGE:
      return state.filter(e => e.issuer !== action.issuer);

    default:
      return state;
  }
}

export default NotificationReducer;
