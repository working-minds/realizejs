import React, { Component } from 'react';
import PropTypes from 'prop_types';
import moment from 'momentWithLocale';
import { uuid } from 'utils';
import { mixin } from 'utils/decorators';

import {
  CssClassMixin,
  InputComponentMixin
} from 'mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin
)
export default class InputDatepicker extends Component {
  static propTypes = {
    mask: PropTypes.string
  };

  static defaultProps = {
    themeClassKey: 'input.datepicker',
    mask: null,
    format: null,
    maskType: 'date'
  };

  state = {
    inputMaskedKey: uuid.v4()
  };

  componentDidMount () {
    var currentLocale = Realize.i18n.currentLocale.toLowerCase();
    moment.locale(currentLocale);
    this.setPickadatePlugin();
  }

  render () {
    return (
      <span>
        <InputMasked
          {...this.props}
          value={this.getFormattedDateValue()}
          className={this.className()}
          onChange={this._handleChange}
          onIncomplete={this.handleMaskIncomplete}
          key={this.state.inputMaskedKey}
          ref="input"
        />

        <Label {...this.propsWithoutCSS()} active={this.labelIsActive()} />
        <Button
          disabled={this.props.disabled || this.props.readOnly}
          icon={{type: "calendar"}}
          className="input-datepicker__button prefix"
          onClick={this.handleCalendarClick}
          type="button"
          ref="button"
        />
      </span>
    );
  }

  getDateFormat () {
    return (this.props.format || Realize.i18n.t('date.formats.date'));
  }

  getFormattedDateValue () {
    var date = moment.utc(this.state.value, moment.ISO_8601);
    if(date.isValid()) {
      return date.format(this.getDateFormat());
    }

    return this.state.value;
  }

  labelIsActive() {
    let inputValue = this.state.value;

    return (inputValue != null && String(inputValue).length > 0);
  }

  setPickadatePlugin () {
    var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    $inputNode.pickadate({
      editable: true,
      selectMonths: true,
      selectYears: true,
      format: this.getDateFormat().toLowerCase(),
      onSet: this.handlePickadateSet
    });

    var picker = $inputNode.pickadate('picker');
    picker.on('close', this.props.onChange);
  }

  handleCalendarClick (event) {
    var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
    var picker = $inputNode.pickadate('picker');

    // TODO: should close on date click - materialize currently broke it
    if(picker.get('open')) {
      picker.close();
    } else {
      picker.open();
    }

    event.stopPropagation();
  }

  handlePickadateSet (pickadateObject) {
    var selectedDate = moment(pickadateObject.select).format();
    this.props.onChange(null, this.getFormattedDateValue(), this);

    this.setState({
      value: selectedDate,
      inputMaskedKey: uuid.v4()
    }, this.setPickadatePlugin);
  }

  handleMaskIncomplete (event) {
    this.setState({value: null});
  }

  _getValue () {
    return this.getFormattedDateValue();
  }
}
