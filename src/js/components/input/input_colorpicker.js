import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import ColorPicker from 'react-color';

import Label from '../label';
import InputHidden from './input_hidden';
import InputBase from './input_base';

import {
  CssClassMixin,
} from '../../mixins';

@mixin(CssClassMixin)
export default class InputColorpicker extends InputBase {
  static propTypes = {
    type: React.PropTypes.string
  }

  static defaultProps = {
    wrapperThemeClassKey: 'input.colorpicker.wrapper',
    displayThemeClassKey: 'input.colorpicker.display',
    themeClassKey: 'input.colorpicker',
    defaultColor: 'EEE',
    type: 'sketch',
    position: 'below',
    display: false,
    positionCSS: {
      marginTop: '0'
    }
  };

  state = {
    displayColorPicker: this.props.display,
    color: {}
  };

  componentWillMount () {
    var value = this.props.value;
    if(!value) {
      this.setState({
        value: this.props.defaultColor
      });
    }
  }

  render () {
    return (
      <div className={this.themedClassName(this.props.wrapperThemeClassKey)}>
        <input
          id="colorpicker_input"
          placeholder=""
          className={this.inputClassName()}
          readOnly={true}
          type="text"
          ref="input"
        />
        <Label {...this.propsWithoutCSS()} id="colorpicker_input" active={true} />

        <div
          className={this.themedClassName(this.props.displayThemeClassKey)}
          style={this.displayBackgroundStyle()}
          onClick={this.showColorPicker}
        ></div>

        <ColorPicker {...this.props}
          color={this.state.value}
          display={this.state.displayColorPicker}
          onChangeComplete={this.onColorSelect}
        />

        <InputHidden
          {...this.propsWithoutCSS()}
          value={this.state.value}
        />
      </div>
    );
  }

  displayBackgroundStyle () {
    var colorHex = this.state.value || this.props.defaultColor;

    return {
      backgroundColor: '#' + colorHex
    };
  }

  showColorPicker () {
    this.setState({
      displayColorPicker: true
    });
  }

  onColorSelect (color) {
    this.setState({
      color: color,
      value: color.hex
    });
  }
}
