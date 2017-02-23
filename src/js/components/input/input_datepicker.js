import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import $ from 'jquery';
import { uuid } from '../../utils';
import { autobind, mixin } from '../../utils/decorators';

import InputBase from './input_base';
import InputMasked from './input_masked';
import { Label } from '../label';
import { Button } from '../button';

import { CssClassMixin } from '../../mixins';

@mixin(CssClassMixin)
export default class InputDatepicker extends InputBase {
  static propTypes = {
    mask: PropTypes.string,
  };

  static defaultProps = {
    themeClassKey: 'input.datepicker',
    mask: null,
    format: null,
    maskType: 'date',
  };

  state = {
    ...this.state,
    inputMaskedKey: uuid.v4(),
  };

  componentDidMount() {
    this.setPickadatePlugin();
  }

  render() {
    return (
      <span>
        <InputMasked
          {...this.props}
          value={this.getFormattedDateValue()}
          className={this.className()}
          onChange={this.handleChange}
          onIncomplete={this.handleMaskIncomplete}
          key={this.state.inputMaskedKey}
          ref="input"
        />

        <Label {...this.propsWithoutCSS()} active={this.labelIsActive()} />
        <Button
          disabled={this.props.disabled || this.props.readOnly}
          icon={{ type: 'calendar' }}
          className="input-datepicker__button prefix"
          onClick={this.handleCalendarClick}
          type="button"
          ref="button"
        />
      </span>
    );
  }

  getDateFormat() {
    // TODO: remover deprecation warning na major version
    if (this.props.format && console && console.warn) {
      // eslint-disable-next-line no-console
      console.warn(
          'Prop "format" of component "InputDatepicker" is deprecated. Use "dateFormat" instead.'
      );
    }
    return (this.props.dateFormat || i18n.t('date.formats.date'));
  }

  getFormattedDateValue() {
    const value = this.state.value;
    return !value ? value : this.tryGetISOFormatValue(this.state.value);
  }

  tryGetISOFormatValue(value) {
    const date = moment.utc(value, moment.ISO_8601);
    return date.isValid() ? this.formatDate(date) : value;
  }

  formatDate(date) {
    return date.format(this.getDateFormat());
  }

  labelIsActive() {
    const inputValue = this.state.value;

    return (inputValue != null && String(inputValue).length > 0);
  }

  @autobind
  setPickadatePlugin() {
    const $inputNode = $(ReactDOM.findDOMNode(this.refs.input)).pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true,
      format: this.getDateFormat().toLowerCase(),
      onSet: this.handlePickadateSet,
    });

    $inputNode.pickadate('on', 'close', this.props.onChange);
  }

  @autobind
  handleCalendarClick(event) {
    const $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    const picker = $inputNode.pickadate('picker');

    event.preventDefault();
    event.stopPropagation();

    requestAnimationFrame(() => { picker.get('open') ? picker.close() : picker.open(); });
  }

  @autobind
  handlePickadateSet(pickadateObject) {
    const selectedDate = moment(pickadateObject.select).format();
    this.props.onChange(null, this.getFormattedDateValue(), this);

    this.setState({
      value: selectedDate,
      inputMaskedKey: uuid.v4(),
    }, this.setPickadatePlugin);
  }

  @autobind
  handleMaskIncomplete() {
    this.setState({ value: null });
  }

  _getValue() {
    return this.getFormattedDateValue();
  }
}
