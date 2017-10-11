import './link.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkTo, NavLink } from 'react-router-dom';

import { classNameModifiers } from 'Helpers/component';

const Link = ({
  theme,
  modifier,
  children,
  navLink,
  ...linkProps }) => {

  const classBase = 'Link';
  let link = null;

  if (navLink) {
    link = (
      <NavLink
        { ...linkProps }
        className={ classNameModifiers(classBase, theme, modifier) }
        activeClassName="Link--active-nav"
      >
        {children}
      </NavLink>
    );
  } else {
    link = (
      <LinkTo
        { ...linkProps }
        className={ classNameModifiers(classBase, theme, modifier) }
      >
        {children}
      </LinkTo>
    );
  }

  return link;
};

Link.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  modifier: PropTypes.string,
  navLink: PropTypes.bool,
  target: PropTypes.string,
  replace: PropTypes.bool,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};

Link.defaultProps = {
  theme: '',
  navLink: false,
  onClick: null,
  modifier: '',
  target: null,
  replace: false,
  children: null
};

export default Link;
