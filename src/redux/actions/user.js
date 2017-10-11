

import {
  NotificationActionTypes,
  NotificationActions
} from './notifications';

/*
 * Actions for User
 */

export const UserActionTypes = {
  AUTH_LOADING: 'USER_AUTH_LOADING',
  AUTH_SUCCESS: 'USER_AUTH_SUCCESS',
  AUTH_ERROR: 'USER_AUTH_ERROR',
  INIT_AUTH: 'INIT_AUTH',
  SIGNED_OUT: 'USER_SIGNED_OUT',
  PROFILE_LOADING: 'USER_PROFILE_LOADING',
  PROFILE_SUCCESS: 'USER_PROFILE_SUCCESS',
  PROFILE_ERROR: 'USER_PROFILE_ERROR',
  NOT_AUTHENTICATED: 'USER_NOT_AUTHENTICATED'
};


function signUp(formdata, cb) {

  return (dispatch, _getState, api) => {

    api.user.signup(dispatch, formdata)
      .then( (res) => {

        cb(null, res);
      })
      .catch( (err) => {

        err.response.then( (json) => {

          const nextErr = {
            ...err,
            json
          };
          cb(nextErr);
        });

      });
  };
}

function activate(token, cb) {

  return (dispatch, _getState, api) => {

    api.user.activate(dispatch, token).then((res) => {

      cb(null, res);
    }).catch((err) => {

      err.response.then((json) => {

        const nextErr = {
          ...err,
          json
        };
        cb(nextErr);
      });
    });
  };
}

function checkUsernameOrEmail(formdata, cb) {

  return (dispatch, _getState, api) => {

    api.user.checkUsernameAndEmail(dispatch, formdata)
      .then( (res) => {

        cb(null, res);
      })
      .catch( (err) => {

        err.response.then( (json) => {

          const nextErr = {
            ...err,
            json
          };
          cb(nextErr);
        });

      });
  };

}

function signIn(email, password, remember, cb = () => {}) {

  const addTimedNotification = NotificationActions.addTimedNotification;

  return (dispatch, getState, api) => {

    const state = getState().get('user');

    if (state.authLoading) {
      return;
    }
    dispatch({
      type: NotificationActionTypes.NOTIFICATION_PURGE,
      issuer: 'auth_actions'
    });
    dispatch({ type: UserActionTypes.AUTH_LOADING });
    api.user.login(dispatch, email, password)
      .then( (response) => {

        localStorage.setItem('id', response.id);
        localStorage.setItem('remember', remember);
        dispatch({
          type: UserActionTypes.AUTH_SUCCESS,
          id: response.id
        });

        addTimedNotification({
          message: 'Login successful',
          issuer: 'auth_actions',
          type: 'success',
          timeout: 2500
        })(dispatch);

        cb(true);
      })
      .catch((err) => {

        dispatch({ type: UserActionTypes.AUTH_ERROR });

        dispatch({
          type: NotificationActionTypes.NOTIFICATION_ADD,
          notification: {
            message: 'Login failed: Username or Password wrong',
            issuer: 'auth_actions',
            type: 'error',
            err
          }
        });
        cb(false);
      });
  };
}

function initAuth() {

  return { type: UserActionTypes.INIT_AUTH };
}

function fetchProfile(id) {

  return (dispatch, getState, api) => {

    const state = getState().get('user');
    if (state.profile) {
      return;
    }

    if (state.profileLoading) {
      return;
    }
    dispatch({ type: UserActionTypes.PROFILE_LOADING });
    api.user.getProfile(dispatch, id)
      .then( (res) => {

        dispatch({
          type: UserActionTypes.PROFILE_SUCCESS,
          profile: res
        });

      })
      .catch( (err) => {

        dispatch({
          type: UserActionTypes.PROFILE_ERROR,
          err
        });
      });
  };
}

function signOut() {

  return (dispatch, _getState, api) => {

    api.user.logout(dispatch)
      .then( () => {

        localStorage.removeItem('jwt');
        if ( !localStorage.remember ) {
          localStorage.removeItem('id');
        }
        dispatch({
          type: UserActionTypes.SIGNED_OUT
        });
      })
      .catch( (_err) => {
      });
  };
}

export const UserActions = {
  signIn,
  checkUsernameOrEmail,
  fetchProfile,
  signOut,
  signUp,
  activate,
  initAuth
};
