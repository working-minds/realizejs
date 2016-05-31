import React, { Component } from 'react';
import PropTypes from '../../prop_types';

import Button from '../../components/button/button';

export default class MenuItem extends Component {
  static propTypes = {
    icon: PropTypes.string,
    iconAlign: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.object,
    className: PropTypes.string,
    method: PropTypes.string,
    element: PropTypes.string
  };

  static defaultProps = {
    iconAlign: 'left',
    method: 'get',
    element: 'a'
  };

  render () {
    return (
      <li>
        <Button {...this.props} clearTheme={true} name={this.props.text} />
      </li>
    );
  }
}
