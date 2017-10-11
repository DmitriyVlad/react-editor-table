/*
 * Actions for Intl
 */

export const IntlActionTypes = {
  SET_LOCALE: 'INTL_SET_LOCALE',
  SET_LOCALE_MESSAGES: 'INTL_SET_LOCALE_MESSAGES',
  SET_LOCALE_CONTENT: 'INTL_SET_LOCALE_CONTENT'
};

function getLocaleData(locale) {
  return (dispatch, _getState, api) =>
    api.intl.getLocaleData(dispatch, locale).then(res =>
      dispatch({
        type: IntlActionTypes.SET_LOCALE_MESSAGES,
        locale,
        messages: res
      })
    );
}

function getLocaleContent(locale, id) {
  return (dispatch, getState, api) => {
    // check if already requested and local
    const markdownContent = getState().get('intl').content;

    if (markdownContent[id] && markdownContent[id][locale]) {
      return Promise.resolve();
    }

    // fetch if missing
    return api.intl.getLocaleMarkdown(dispatch, locale, id).then((res) => {
      dispatch({
        type: IntlActionTypes.SET_LOCALE_CONTENT,
        locale,
        id,
        content: res
      });

      return res;
    });
  };
}

function getLocaleContentWithFallback(locale, id) {
  return (dispatch, getState, api) =>
    getLocaleContent(locale, id)(dispatch, getState, api).catch((error) => {
      if (error.status === 404) {
        return dispatch(getLocaleContent('en', id));
      }

      throw error;
    });
}

function setLocale(locale) {
  return (dispatch, getState) => {
    const messages = getState().get('intl').messages;

    if (!messages[locale]) {
      dispatch(getLocaleData(locale)).then(() => {
        dispatch({
          type: IntlActionTypes.SET_LOCALE,
          locale
        });
      });

      return;
    }

    dispatch({
      type: IntlActionTypes.SET_LOCALE,
      locale
    });
  };
}

export const IntlActions = {
  getLocaleData,
  getLocaleContentWithFallback,
  setLocale
};
