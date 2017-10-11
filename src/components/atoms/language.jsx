import './language.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  germanLang: {
    id: 'kangapp.german-lang',
    description: 'German language text for switch languages on website',
    defaultMessage: 'German'
  },
  frenchLang: {
    id: 'kangapp.french-lang',
    description: 'French language text for switch languages on website',
    defaultMessage: 'French'
  },
  englishLang: {
    id: 'kangapp.english-lang',
    description: 'English language text for switch languages on website',
    defaultMessage: 'English'
  }
});

import { classNameModifiers } from 'Helpers/component';

class Language extends Component {
  static getFullLang(iso) {

    switch (iso) {
      case 'en':
        return 'English';
      case 'de':
        return 'Deutsch';
      case 'fr':
        return 'Français';
      default:
        return iso;
    }
  }

  render() {

    const { modifier, iso } = this.props;

    const classBase = 'Language';
    let language = <span className={ classNameModifiers(classBase) }>{iso}</span>;

    if (modifier === 'provided-lang') {
      language = (
        <span className={ classNameModifiers(classBase, modifier) }>
          {Language.getFullLang(iso)}
        </span>
      );
    }

    if (modifier === 'current-lang') {
      switch (iso) {
        case 'en':
          language = (
            <span className={ classNameModifiers(classBase, modifier) }>
              <FormattedMessage { ...messages.englishLang } />
            </span>
          );

          return language;
        case 'de':
          language = (
            <span className={ classNameModifiers(classBase, modifier) }>
              <FormattedMessage { ...messages.germanLang } />
            </span>
          );

          return language;
        case 'fr':
          language = (
            <span className={ classNameModifiers(classBase, modifier) }>
              <FormattedMessage { ...messages.frenchLang } />
            </span>
          );

          return language;
        default:
          return iso;
      }
    }

    return language;
  }
}

Language.propTypes = {
  iso: PropTypes.string.isRequired,
  modifier: PropTypes.string
};

Language.defaultProps = {
  modifier: ''
};

export default Language;
