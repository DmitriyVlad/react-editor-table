export default function userActions(apiHelper) {

  function signup(formdata) {

    return apiHelper.fetchUnauthorized({
      endpoint: '/users',
      method: 'POST',
      payload: formdata
    });
  }

  function activate(token) {

    return apiHelper.fetchUnauthorized({
      endpoint: '/activate',
      method: 'POST',
      headers: { Authorization: `Token ${token}` }
    });
  }

  function checkUsernameAndEmail(formdata) {

    return apiHelper.fetchUnauthorized({
      endpoint: '/users?check_availability=true',
      method: 'POST',
      payload: formdata
    });
  }

  function login(email, password) {

    return apiHelper.fetchUnauthorized({
      endpoint: '/login',
      method: 'POST',
      payload: {
        email,
        password
      }
    });
  }

  function logout() {

    return apiHelper.fetchAuthorized({
      endpoint: '/logout'
    });
  }

  function getProfile(user) {

    return apiHelper.fetchAuthorized({
      endpoint: `/users/${user}`
    });
  }

  return {
    checkUsernameAndEmail,
    getProfile,
    login,
    logout,
    signup,
    activate
  };
}
