import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import { uuid } from '../../../utils';
import { mixin } from '../../../utils/decorators';

import {
  InputText,
  Label,
} from '../../../components';

import {
  CssClassMixin,
  InputComponentMixin,
} from '../../../mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin
)
export default class InputDatefilterSelect extends Component {
  static propTypes = {
    selectedDates: PropTypes.array,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    selectedDates: [],
    themeClassKey: 'input.datefilter.select',
    placeholder: 'select',
  };

  focusSelect() {
    const selectInput = ReactDOM.findDOMNode(this.refs.select);
    selectInput.focus();
  }

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
          <span className="caret" onClick={this.focusSelect}>▼</span>
          <InputText
            id={this.selectId()}
            value={this.renderSelectedDates()}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            errors={this.props.errors}
            ref="select"
            key={`datefilter_select_${uuid.v4()}`}
          />
        </div>
        <Label {...this.propsWithoutCSS()} id={this.selectId()} />
      </div>
    );
  }
}