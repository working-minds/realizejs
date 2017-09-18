import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import themes from '../../theme/theme';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';
import TooltipMixin from '../../mixins/tooltip_mixin';

@mixin(
  CssClassMixin,
  TooltipMixin
)
export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string
  };

  static defaultProps = {
    type: '',
  };

  constructor (props) {
    super(props);
    this.state = {
      themeClassKey: 'icon',
    };
  }

  render () {
    return (
      <i className={this.getTooltipClassName()}
        {...this.tooltipAttributes()}>
        {this.iconType()}
      </i>
    );
  }

  iconType () {
    var iconType = themes.getProp('icon.' + this.props.type);
    if(!iconType) {
      iconType = this.props.type;
    }

    return iconType;
  }
}
