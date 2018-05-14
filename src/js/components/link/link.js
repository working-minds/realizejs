import React from 'react';
import PropTypes from '../../prop_types';

export const Link = (props) => (
  <a {...props}>{props.children}</a>
);

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Link.defaultProps = {
  children: [],
};

export default Link;
