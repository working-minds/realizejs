import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';

import Icon from '../../components/icon/icon';

@mixin(CssClassMixin)
export default class FlashDismiss extends Component {
  static propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
  };

  constructor (props) {
    super(props);
    this.state = {
      themeClassKey: 'flash.dismiss flash.' + this.props.type + '.content'
    };
  }

  render () {
    return (
      <div className={this.className()} onClick={this.props.onClick}>
        <Icon type="close" />
      </div>
    );
  }
}
