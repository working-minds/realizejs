import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { mixin } from 'utils/decorators';

import { CssClassMixin } from 'mixins';

@mixin(CssClassMixin)
export default class ModalContent extends Component {
  static defaultProps = {
    themeClassKey: 'modal.content'
  };

  render () {
    return <div className={this.className()}>{this.props.children}</div>;
  }
}
