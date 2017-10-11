import './formatted-markdown.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { intlShape } from 'react-intl';

import connectWithIntl from 'Helpers/connect-with-intl';
import { IntlActions } from 'Actions/intl';

import { classNameModifiers } from 'Helpers/component';

class FormattedMarkdown extends Component {
  componentWillMount() {

    const { intl: { locale }, getLocaleContentWithFallback, id } = this.props;

    getLocaleContentWithFallback(locale, id);
  }

  componentWillReceiveProps(nextProps) {

    const { intl: { locale }, getLocaleContentWithFallback, id } = nextProps;
    const { intl: { locale: currentLocale } } = this.props;

    if (locale === currentLocale) return;

    getLocaleContentWithFallback(locale, id);
  }

  render() {

    const { intl: { locale }, content, template } = this.props;
    const classBase = 'FormattedMarkdown';

    let text = content.en;
    if (content[locale]) {
      text = content[locale];
    }

    return (
      <ReactMarkdown
        source={ text }
        className={ classNameModifiers(classBase, template) }
      />
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    content: state.get('intl').content[ownProps.id]
  };
}

function mapDispatchToProps(dispatch, _ownProps) {

  return {
    getLocaleContentWithFallback: (locale, id) =>

      dispatch( IntlActions.getLocaleContentWithFallback(locale, id) )
  };
}

FormattedMarkdown.propTypes = {
  intl: intlShape.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.shape(),
  getLocaleContentWithFallback: PropTypes.func.isRequired,
  template: PropTypes.string
};

FormattedMarkdown.defaultProps = {
  template: '',
  content: { en: '' }
};

export default connectWithIntl(
  mapStateToProps,
  mapDispatchToProps
)(FormattedMarkdown);
