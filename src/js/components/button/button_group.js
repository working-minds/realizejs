import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { mixin } from 'utils/decorators';

import CssClassMixin from 'mixins/css_class_mixin';

import Button from './button';

@mixin(CssClassMixin)
export default class ButtonGroup extends Component {
  static propTypes = {
    buttons: PropTypes.array
  };

  static defaultProps = {
    themeClassKey: 'button.group',
    buttons: []
  };

  renderButtons () {
    const buttonsProps = this.props.buttons;
    let buttons = [];

    for(let i = 0; i < buttonsProps.length; i++) {
      let buttonProps = buttonsProps[i];

      buttons.push(<Button {...buttonProps} key={"button_" + i} />);
    }

    return buttons;
  }

  render () {
    return (
      <div className={this.className()}>
        {this.renderButtons()}
      </div>
    );
  }
}
