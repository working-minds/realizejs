import React, { PropTypes } from 'react';

export const Link = (props) => (
  <a {...props}>{props.children}</a>
);

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};

Link.defaultProps = {
  children: [],
};

export default Link;
