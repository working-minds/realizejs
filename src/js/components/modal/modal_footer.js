import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { themes } from 'realize';
import { mixin } from 'utils/decorators';

import { CssClassMixin } from 'mixins';

@mixin(CssClassMixin)
export default class ModalFooter extends Component {
  static propTypes = {
    separatorThemeClassKey: PropTypes.string,
    withSeparator: PropTypes.bool
  };

  static defaultProps = {
    themeClassKey: 'modal.footer',
    separatorThemeClassKey: 'modal.footer.withSeparator',
    withSeparator: true
  };

  render () {
    return <div className={this.footerClassName()}>{this.props.children}</div>;
  }

  footerClassName () {
    let className = this.className();
    if(this.props.withSeparator) {
      className += " " + themes.getCssClass(this.props.separatorThemeClassKey);
    }

    return className;
  }
}
