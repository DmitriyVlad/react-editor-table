import helpers from './helpers';
import userActions from './user';
import intlActions from './intl';

export default function api(config) {

  const extConfig = {
    ...config,
    tokenKey: 'jwt'
  };
  const apiHelpers = helpers(extConfig);

  return {
    user: userActions(apiHelpers),
    intl: intlActions(apiHelpers)
  };
}

