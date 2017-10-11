import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';

import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...fr, ...es, ...de, ...ru]); // TODO: should happen dynamically

function ConnectedIntlProvider(props) {

  const elementProps = {
    ...props,
    locale: props.locale,
    messages: props.messages
  };

  if (!props.messages) return null; // TODO: show loading screen?

  return <IntlProvider { ...elementProps } />;
}

ConnectedIntlProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.objectOf(PropTypes.string)
};

ConnectedIntlProvider.defaultProps = {
  messages: null
};

ConnectedIntlProvider.displayName = 'ConnectedIntlProvider';

function mapStateToProps(state, _ownProps) {

  const locale = state.get('intl').locale;

  return {
    locale,
    messages: state.get('intl').messages[locale]
  };
}

export default connect(
  mapStateToProps
)(ConnectedIntlProvider);
