import { UserActionTypes } from '../actions/user';

function errorHandler(dispatch, err) {
  if (err && err.status === 401) {
    localStorage.removeItem('jwt');
    dispatch({
      type: UserActionTypes.NOT_AUTHENTICATED
    });
  }
  throw err;
}

function apiWrapper(api) {
  const wrappedApi = {};
  Object.keys(api).forEach((endpoint) => {
    if (!wrappedApi[endpoint]) {
      wrappedApi[endpoint] = {};
    }
    Object.keys(api[endpoint]).forEach((f) => {
      wrappedApi[endpoint][f] = (dispatch, ...params) =>
        api[endpoint][f](...params).catch(err => errorHandler(dispatch, err));
    });
  });

  return wrappedApi;
}

export default apiWrapper;
