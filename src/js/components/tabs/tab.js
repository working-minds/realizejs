import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import {
  CssClassMixin,
  ContainerMixin
} from '../../mixins';

@mixin(
  CssClassMixin,
  ContainerMixin
)
export default class Tab extends Component {
  static propTypes = {
    id: PropTypes.string
  };

  render () {
    return (
      <div id={this.props.id} className={this.className()}>
        {this.renderChildren()}
      </div>
    );
  }
}
