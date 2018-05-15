import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import $ from 'jquery';
import { uuid } from '../../utils';
import { autobind, mixin } from '../../utils/decorators';
import _ from 'lodash';

import InputBase from './input_base';
import InputMasked from './input_masked';
import { Label } from '../label';
import { Button } from '../button';
import { Link } from '../link/link';

import { CssClassMixin } from '../../mixins';

@mixin(CssClassMixin)
export default class InputDatepicker extends InputBase {
  static propTypes = {
    mask: PropTypes.string,
    calendar: PropTypes.bool,
  };

  static defaultProps = {
    themeClassKey: 'input.datepicker',
    mask: null,
    format: null,
    maskType: 'date',
    calendar: true,
    visible: true
  };

  state = {
    ...this.state,
    inputMaskedKey: uuid.v4(),
  };

  componentDidMount() {
    super.componentDidMount();
    this.setPickadatePlugin();
  }

  componentDidUpdate(_, state) {
    this.setPickadatePlugin();
    if (!this.state.value && !!this.state.value !== !!state.value) {
      this.clearPickadate();
    }
  }

  clearPickadate() {
    const picker = $(ReactDOM.findDOMNode(this.input)).pickadate('picker');
    if (picker && picker.clear) picker.clear();
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
    const { value } = this.state;
    if (!value) return value;

    let date = moment.utc(value, moment.ISO_8601);
    if (date.isValid()) {
      return date.format(this.getDateFormat());
    }

    date = moment.utc(value, this.getDateFormat());
    if (date.isValid() && /^(\d{2})\/(\d{2})\/(\d{4})$/.test(value)) {
      return date.format(this.getDateFormat());
    } else if (!isNaN(value)) {
      return this.formatDate(new Date(parseInt(value)));
    }

    return value;
  }

  formatDate(date) {
    const momentDate = moment(date, moment.ISO_8601);
    return momentDate.isValid()
      ? momentDate.format(this.getDateFormat())
      : date;
  }

  labelIsActive() {
    const inputValue = this.state.value;

    return (inputValue != null && String(inputValue).length > 0);
  }

  @autobind
  setPickadatePlugin() {
    const self = this;
    const $inputNode = $(ReactDOM.findDOMNode(this.input)).pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true,
      format: this.getDateFormat().toLowerCase(),
      onSet: this.handlePickadateSet,
      onOpen() {
        if (self.props.disabled || self.props.readOnly || !self.props.visible) {
          this.close();
        }
      },
      onClose() { $(document.activeElement).blur(); },
    });

    $inputNode.pickadate('on', 'close', this.props.onChange);
  }

  @autobind
  handleCalendarClick(event) {
    const $inputNode = $(ReactDOM.findDOMNode(this.input));
    const picker = $inputNode.pickadate('picker');

    event.preventDefault();
    event.stopPropagation();

    requestAnimationFrame(() => { picker.get('open') ? picker.close() : picker.open(); });
  }

  @autobind
  handlePickadateSet(pickadateObject) {
    const pickedDate = pickadateObject.select;
    if (!pickedDate && !pickadateObject.hasOwnProperty('clear')) return;

    const value = pickedDate ?
      typeof pickadateObject.select === 'object'
        ? pickadateObject.select.pick
        : pickadateObject.select
      : '';

    $(ReactDOM.findDOMNode(this.input)).pickadate('close');
    this.setState({ inputMaskedKey: uuid.v4(), value });
  }

  @autobind
  handleComplete(event) {
    const { value } = event.target;
    this.setState({ inputMaskedKey: uuid.v4(), value });
  }

  @autobind
  handleMaskIncomplete() {
    this.setState({ value: '' }, () =>
      this.props.onChange(event, this.getFormattedDateValue(), this)
    );
  }

  /* Serializer */

  getParsedDateValue() {
    const { value } = this.state;
    if (!value) return value;

    let date = moment.utc(value, this.getDateFormat());
    if (date.isValid() && /^(\d{2})\/(\d{2})\/(\d{4})$/.test(value)) {
      return date.toISOString();
    }

    date = moment.utc(value);
    if (date.isValid()) {
      return date.toISOString();
    }

    return value;
  }

  serialize() {
    const inputName = (this.props.name || this.props.id);

    const serializedInput = {};
    serializedInput[inputName] = this.getParsedDateValue();
    return serializedInput;
  }

  /* Renderers */

  parsePropsForInputMasked() {
    return _.omit(this.props, ['onChange', 'separator']);
  }

  renderMaskedInput() {
    return (
      <InputMasked
        {...this.parsePropsForInputMasked()}
        value={this.getFormattedDateValue()}
        className={this.className()}
        onIncomplete={this.handleMaskIncomplete}
        onComplete={this.handleComplete}
        key={this.state.inputMaskedKey}
        ref={ref => { this.input = ref; }}
      />
    );
  }

  renderCalendarButton() {
    return (
      <Button
        disabled={this.props.disabled || this.props.readOnly}
        icon={{ type: 'calendar' }}
        className="input-datepicker__button prefix"
        onClick={this.handleCalendarClick}
        element={Link}
        ref={ref => { this.button = ref; }}
      />
    );
  }

  render() {
    return (
      <span>
        {this.renderMaskedInput()}
        <Label {...this.propsWithoutCSS()} active={this.labelIsActive()} />
        {this.props.calendar ? this.renderCalendarButton() : <span />}
      </span>
    );
  }
}
