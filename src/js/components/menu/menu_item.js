import React, { Component } from 'react';
import PropTypes from '../../prop_types';

import Link from '../link/link';
import Button from '../button/button';

export default class MenuItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    method: PropTypes.string,
    element: PropTypes.component,
    clearTheme: PropTypes.bool,
  };

  static defaultProps = {
    text: '',
    method: 'GET',
    element: Link,
    clearTheme: true,
  };

  render() {
    return (
      <li>
        <Button
          {...this.props}
          name={this.props.text}
          clearTheme
        />
      </li>
    );
  }
}
