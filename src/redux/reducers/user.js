import { Record } from 'immutable';

import { UserActionTypes } from '../actions/user';

const UserState = Record({
  id: '',
  remember: false,
  isAuthenticated: false,
  isAuthFailed: false,
  authLoading: false,
  profileLoading: false,
  profileFailed: false,
  profile: null
});

const initialState = {
  id: localStorage.getItem('id'),
  remember: !!localStorage.getItem('id'),
  isAuthenticated: !!localStorage.getItem('jwt'),
  isAuthFailed: false,
  authLoading: false,
  profileLoading: false,
  profileFailed: false,
  profile: null
};

function UserReducer(state = new UserState(initialState), action = {}) {
  switch (action.type) {
    case UserActionTypes.AUTH_LOADING:
      return state.set('authLoading', true);

    case UserActionTypes.INIT_AUTH:
      return state.set('isAuthFailed', false);

    case UserActionTypes.AUTH_SUCCESS:
      return state.withMutations((s) => {
        s
          .set('authLoading', false)
          .set('profileLoading', false)
          .set('isAuthenticated', true)
          .set('isAuthFailed', false)
          .set('id', action.id);
      });

    case UserActionTypes.AUTH_ERROR:
      return state.withMutations((s) => {
        s.set('authLoading', false).set('isAuthFailed', true);
      });

    case UserActionTypes.NOT_AUTHENTICATED:
      return state.set('isAuthenticated', false);

    case UserActionTypes.SIGNED_OUT:
      return new UserState(initialState());

    case UserActionTypes.PROFILE_LOADING:
      return state.withMutations((s) => {
        s.set('profileLoading', true).set('profileFailed', false);
      });

    case UserActionTypes.PROFILE_SUCCESS:
      return state.withMutations((s) => {
        s.set('profileLoading', false).set('profile', action.profile);
      });

    case UserActionTypes.PROFILE_ERROR:
      return state.withMutations((s) => {
        s.set('profileLoading', false).set('profileFailed', true);
      });

    default:
      return state;
  }
}

export default UserReducer;
