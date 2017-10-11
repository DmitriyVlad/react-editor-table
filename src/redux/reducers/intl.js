import { IntlActionTypes } from '../actions/intl';


function initialState() {

  return {
    messages: {},
    content: {},
    locale: navigator ? navigator.languages[0].split('-')[0] : 'en'
  };
}

function IntlReducer(
  state = initialState(),
  action = {}
) {


  switch (action.type) {
    case IntlActionTypes.SET_LOCALE:
      return {
        ...state,
        locale: action.locale
      };

    case IntlActionTypes.SET_LOCALE_MESSAGES:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.locale]: action.messages
        }
      };

    case IntlActionTypes.SET_LOCALE_CONTENT:
      return {
        ...state,
        content: {
          ...state.content,
          [action.id]: {
            [action.locale]: action.content
          }
        }
      };

    default:
      return state;
  }
}

export default IntlReducer;
