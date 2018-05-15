import React from 'react';
import PropTypes from '../../prop_types';
import { autobind, mixin } from '../../utils/decorators';

import ColorPicker from 'react-color';

import { Label } from '../label';
import InputHidden from './input_hidden';
import InputBase from './input_base';

import {
  CssClassMixin,
} from '../../mixins';

@mixin(CssClassMixin)
export default class InputColorpicker extends InputBase {
  static propTypes = {
    type: PropTypes.string,
  };

  static defaultProps = {
    wrapperThemeClassKey: 'input.colorpicker.wrapper',
    displayThemeClassKey: 'input.colorpicker.display',
    themeClassKey: 'input.colorpicker',
    defaultColor: 'EEE',
    type: 'sketch',
    position: 'below',
    display: false,
    positionCSS: {
      marginTop: '0',
    },
  };

  state = {
    ...this.state,
    displayColorPicker: this.props.display,
    color: {},
  };

  componentWillMount() {
    if (!this.props.value) this.setDefaultColor();
  }

  getColor() {
    return this.state.value || this.props.defaultColor;
  }

  setColor(value) {
    this.setState({ value });
  }

  setDefaultColor() {
    this.setColor(this.props.defaultColor);
  }

  displayBackgroundStyle() {
    const backgroundColor = `#${this.getColor()}`;
    return { backgroundColor };
  }

  showColorPicker() {
    this.setState({ displayColorPicker: true });
  }

  render() {
    return (
      <div className={this.themedClassName(this.props.wrapperThemeClassKey)}>
        <input
          id="colorpicker_input"
          placeholder=""
          className={this.inputClassName()}
          type="text"
          ref={ref => { this.input = ref; }}
          readOnly
        />
        <Label {...this.propsWithoutCSS()} id="colorpicker_input" active />

        <div
          className={this.themedClassName(this.props.displayThemeClassKey)}
          style={this.displayBackgroundStyle()}
          onClick={this.showColorPicker}
        ></div>

        <ColorPicker
          {...this.props}
          color={this.state.value}
          display={this.state.displayColorPicker}
          onChangeComplete={this.handleColorSelect}
        />

        <InputHidden
          {...this.propsWithoutCSS()}
          value={this.state.value}
        />
      </div>
    );
  }

  @autobind
  handleColorSelect(color) {
    const value = color.hex;
    this.setState({ color, value });
  }
}
