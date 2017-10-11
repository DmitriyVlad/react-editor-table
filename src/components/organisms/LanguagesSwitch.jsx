import './LanguageSwitch.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Menu,
  MenuItem,
  Popover
} from '@blueprintjs/core';

import { IntlActions } from 'Actions/intl';

function LanguageSwitch({
  locales,
  currentLocale,
  setLocale
}) {

  return (
    <Popover content={
      <Menu>
        { locales.map( l => (

          <MenuItem
            text={ l }
            key={ l }
            disabled={ l === currentLocale }
            onClick={ () => setLocale(l) }
          />
        ))}
      </Menu>
    }
    >
      <Button iconName="globe">{ currentLocale }</Button>
    </Popover>
  );
}

function mapStateToProps(state, _ownProps) {

  return {
    currentLocale: state.get('intl').locale
  };
}

function mapDispatchToProps(dispatch, _ownProps) {

  return {
    setLocale: locale => dispatch( IntlActions.setLocale(locale) )
  };
}

LanguageSwitch.propTypes = {
  locales: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  currentLocale: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitch);
