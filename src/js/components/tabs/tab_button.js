import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import {
  CssClassMixin,
  ContainerMixin,
  FormContainerMixin
} from '../../mixins';

@mixin(
  CssClassMixin,
  ContainerMixin,
  FormContainerMixin
)
export default class TabButton extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    active: PropTypes.bool
  };

  static defaultProps = {
    themeClassKey: 'tabs.tabButton',
    errorThemeClassKey: 'tabs.tabButton.error',
    className: 's1',
    active: false
  };

  render () {
    return (
      <li className={this.formContainerClassName()}>
        <a href={'#' + this.props.id} className={this.props.active ? "active" : ""}>
          {this.props.title}
        </a>
      </li>
    );
  }
}
