function helpers(config) {
  const apiBase = config.apiBase;
  const tokenKey = config.tokenKey;
  let jwt;

  function getJWT() {
    return localStorage.getItem(tokenKey);
  }

  function setJWT(response) {
    const newJwt = response.headers.get('Authorization');
    if (newJwt) {
      localStorage.setItem(tokenKey, newJwt);
      jwt = newJwt;
    }

    return response;
  }

  function handleResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw response;
  }

  function getResponsePayload(response) {
    const contentType = response.headers.get('content-type');

    if (contentType.match(/application\/json/)) {
      return response.json();
    }

    return response.text();
  }

  function handleError(response) {
    // TODO: check if it is a response error or bad implementation
    const error = new Error(response.statusText);
    error.status = response.status;

    return getResponsePayload(response).then((res) => {
      error.response = res;
      throw error;
    });
  }

  function fetchApi(url, request) {
    return fetch(url, request)
      .then(setJWT)
      .then(handleResponse)
      .then((response) => {
        switch (response.status) {
          case 204:
            return null;
          default:
            // TODO: check if response content-type is json
            return response.json();
        }
      })
      .catch(handleError);
  }

  function fetchAuthorized({ endpoint, method = 'GET', payload = null }) {
    // TODO: works for now. should be refactored
    if (!jwt) {
      jwt = getJWT();
      if (!jwt) {
        return new Error('NO_SESSION_TOKEN');
      }
    }

    const url = apiBase + endpoint;
    const request = {
      method,
      headers: {
        Accept: 'application/json',
        Authorization: jwt
      },
      body: payload && JSON.stringify(payload)
    };

    return fetchApi(url, request);
  }

  function fetchUnauthorized({ endpoint, method = 'GET', payload = null, headers = {} }) {
    const url = apiBase + endpoint;
    const request = {
      method,
      headers: Object.assign(headers, { Accept: 'application/json' }),
      body: payload && JSON.stringify(payload)
    };

    return fetchApi(url, request);
  }

  function fetchData(url, type = 'application/json') {
    const request = {
      headers: {
        Accept: type
      }
    };

    return fetch(url, request)
      .then(handleResponse)
      .then(getResponsePayload)
      .catch(handleError);
  }

  return {
    fetchAuthorized,
    fetchUnauthorized,
    fetchData
  };
}

export default helpers;
