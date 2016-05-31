import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import themes from '../../theme';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';

@mixin(
  CssClassMixin
)
export default class ModalHeader extends Component {
  static propTypes = {
    withTitle: PropTypes.bool
  };

  static defaultProps = {
    themeClassKey: 'modal.header',
    withTitle: true
  };

  render () {
    return <div className={this.getClassName()}>{this.props.children}</div>;
  }

  getClassName () {
    let className = themes.getCssClass(this.props.themeClassKey);
    if(!this.props.clearTheme && this.props.withTitle) {
      className += ' '+ themes.getCssClass('modal.header.withTitle');
    }

    return className;
  }
}
