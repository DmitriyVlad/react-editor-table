

/*
 * Actions for Notifications
 */

export const NotificationActionTypes = {
  NOTIFICATION_ADD: 'NOTIFICATION_ADD',
  NOTIFICATION_REMOVE: 'NOTIFICATION_REMOVE',
  NOTIFICATION_PURGE: 'NOTIFICATION_PURGE'
};

function addTimedNotification({
  message,
  type,
  issuer,
  timeout
}) {

  return (dispatch) => {

    const id = new Date().valueOf();
    dispatch({
      type: NotificationActionTypes.NOTIFICATION_ADD,
      notification: {
        message,
        type,
        issuer,
        id,
        timeout
      }
    });
    setTimeout( () => {

      dispatch({
        type: NotificationActionTypes.NOTIFICATION_REMOVE,
        id
      });
    }, timeout);
  };
}

export const NotificationActions = {
  addTimedNotification
};
