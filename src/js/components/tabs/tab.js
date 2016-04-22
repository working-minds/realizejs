import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { config, i18n, themes } from 'realize'
import { mixin } from 'utils/decorators';

import {
  CssClassMixin,
  ContainerMixin
} from 'mixins';

@mixin(
  CssClassMixin,
  ContainerMixin
)
export default class Tab extends Component {
  static propTypes = {
    id: React.PropTypes.string
  };

  render () {
    return (
      <div id={this.props.id} className={this.className()}>
        {this.renderChildren()}
      </div>
    );
  }
}
