import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import i18n from '../../i18n';
import { autobind, mixin } from '../../utils/decorators';

import InputBase from './input_base';

import { CssClassMixin } from '../../mixins';

@mixin(
  CssClassMixin,
)
export default class InputMasked extends InputBase {
  static propTypes = {
    type: PropTypes.string,
    mask: PropTypes.string,
    maskType: PropTypes.string,
    regex: PropTypes.string,
    autoUnmask: PropTypes.bool,
    onComplete: PropTypes.func,
    onIncomplete: PropTypes.func,
    onCleared: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'input.text',
    type: 'text',
    mask: null,
    maskType: null,
    regex: null,
    autoUnmask: false,
    onComplete: () => {},
    onIncomplete: () => {},
    onCleared: () => {},
  };

  state = {
    ...this.state,
    placeholder: this.getPlaceholder(),
    applyMask: true,
  };

  componentDidMount() {
    super.componentDidMount();
    const appliedMask = this.applyMask();
    this.setMaskPlaceholder(appliedMask);
  }

  componentDidUpdate() {
    if (this.state.applyMask) {
      this.applyMask();
    }
  }

  getInputElement() {
    return ReactDOM.findDOMNode(this.input);
  }

  setMaskPlaceholder(appliedMaskOptions) {
    const appliedPlaceholder = appliedMaskOptions.placeholder;

    if (!!appliedPlaceholder) {
      this.setState({
        placeholder: appliedPlaceholder,
        applyMask: true,
      });
    }
  }

  parseMaskOptions() {
    const maskOptions = $.extend({
      showMaskOnHover: false,
      clearIncomplete: true,
    }, this.filterMaskOptionProps());

    maskOptions.oncomplete = this.handleComplete;
    maskOptions.onincomplete = this.handleIncomplete;
    maskOptions.oncleared = this.props.onCleared;

    return maskOptions;
  }

  filterMaskOptionProps() {
    const maskOptionProps = {};
    const propsToFilter = ['onComplete', 'onIncomplete', 'onCleared'];
    for (const propName in this.props) {
      if (this.props.hasOwnProperty(propName)) {
        const prop = this.props[propName];
        if (!!prop && propsToFilter.indexOf(propName) < 0) {
          maskOptionProps[propName] = prop;
        }
      }
    }

    return maskOptionProps;
  }

  predefinedMasks() {
    const localeMasks = i18n.t('masks');
    const predefinedMasks = {};

    for (const maskName in localeMasks) {
      if (localeMasks.hasOwnProperty(maskName)) {
        const mask = localeMasks[maskName];
        if (typeof mask === 'string') {
          predefinedMasks[maskName] = { mask };
        } else if (typeof mask === 'object') {
          predefinedMasks[maskName] = mask;
        }
      }
    }

    return predefinedMasks;
  }

  applyMask() {
    let appliedMask = {};
    if (!!this.props.regex) {
      appliedMask = this.applyRegexMask();
    } else {
      appliedMask = this.applyBaseMask();
    }

    return appliedMask;
  }

  applyRegexMask() {
    const $input = $(this.getInputElement());
    const maskOptions = this.parseMaskOptions();

    $input.inputmask('Regex', maskOptions);
    return maskOptions;
  }

  applyBaseMask() {
    const maskType = this.props.maskType;
    const predefinedMasks = this.predefinedMasks();
    const predefinedMask = predefinedMasks[maskType];

    let appliedMask = {};
    if (!!predefinedMask) {
      appliedMask = this.applyPredefinedMask(predefinedMask);
    } else {
      appliedMask = this.applyCustomMask();
    }

    return appliedMask;
  }

  applyPredefinedMask(predefinedMask) {
    const $input = $(this.getInputElement());
    const predefinedMaskOptions = $.extend({}, predefinedMask, this.parseMaskOptions());

    $input.inputmask(predefinedMaskOptions);
    return predefinedMaskOptions;
  }

  applyCustomMask() {
    const $input = $(this.getInputElement());
    const maskOptions = this.parseMaskOptions();

    $input.inputmask(maskOptions);
    this.setMaskPlaceholder(maskOptions);
    return maskOptions;
  }

  updateValue(value) {
    this.setState({
      value,
      applyMask: false,
    });
  }

  getUnmaskedValue () {
     const $el = $(this.getInputElement())
     return $el.inputmask('unmaskedvalue')
  }

  @autobind
  handleComplete(event) {
    this.props.onComplete(event);
    this.updateValue(event.target.value);
  }

  @autobind
  handleIncomplete(event) {
    this.props.onIncomplete(event);
    this.updateValue(null);
  }

  @autobind
  handleChange(event) {
    let maskedValue = event.target.value;
    let value = this.props.removeMaskOnChange ? this.getUnmaskedValue() : maskedValue;
    this.props.onChange(event, value, this);

    if(!event.isDefaultPrevented()) {
      this.updateValue(maskedValue);
    }
  }

  render() {
    return (
      <input
        {...this.props}
        value={this.state.value}
        placeholder={this.state.placeholder}
        className={this.inputClassName()}
        onKeyUp={this.handleChange}
        onFocus={this.handleFocus}
        ref={ref => { this.input = ref; }}
      >
        {this.props.children}
      </input>
    );
  }
}
