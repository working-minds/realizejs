import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import { uuid } from '../../../utils';
import { mixin, autobind } from '../../../utils/decorators';

import InputBase from '../input_base';
import InputText from '../input_text';
import { Label } from '../../label';

import {
  CssClassMixin,
} from '../../../mixins';

@mixin(CssClassMixin)
export default class InputDatefilterSelect extends InputBase {
  static propTypes = {
    selectedDates: PropTypes.array,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    selectedDates: [],
    themeClassKey: 'input.datefilter.select',
    placeholder: 'select',
  };

  selectId() {
    return `datefilter_select_${this.props.id}`;
  }

  renderSelectedDates() {
    const dates = this.props.selectedDates;
    return dates.join(' - ');
  }

  render() {
    return (
      <div>
        <div className={this.className()}>
          <span className="caret" onClick={this.handleFocusSelect}>▼</span>
          <InputText
            id={this.selectId()}
            value={this.renderSelectedDates()}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            errors={this.props.errors}
            ref={ref => { this.select = ref; }}
            key={`datefilter_select_${uuid.v4()}`}
          />
        </div>
        <Label {...this.propsWithoutCSS()} id={this.selectId()} />
      </div>
    );
  }

  @autobind
  handleFocusSelect() {
    const selectInput = ReactDOM.findDOMNode(this.select);
    selectInput.focus();
  }
}
