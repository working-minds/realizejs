import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import { uuid } from '../../../utils';
import { mixin } from '../../../utils/decorators';

import InputBase from '../input_base';
import InputText from '../input_text';
import { Label } from '../../label';

import {
  CssClassMixin,
} from '../../../mixins';

@mixin(CssClassMixin)
export default class InputAutocompleteSelect extends InputBase {
  static propTypes = {
    selectedOptions: PropTypes.array,
  };

  static defaultProps = {
    selectedOptions: [],
    themeClassKey: 'input.autocomplete.select',
    placeholder: 'select',
  };

  state = {
    ...this.state,
    options: [],
  };

  selectId() {
    return `autocomplete_select_${this.props.id}`;
  }

  focusSelect() {
    const selectInput = ReactDOM.findDOMNode(this.select);
    selectInput.focus();
  }

  renderSelectedOptions() {
    const options = this.props.selectedOptions;

    return $.map(options, (option) => option.name).join(', ');
  }

  // TODO: este e um componente do materialize. Tornar este componente generico.
  render() {
    return (
      <div>
        <div className={this.className()}>
          <span className="caret" onClick={this.focusSelect}>▼</span>
          <InputText
            id={this.selectId()}
            value={this.renderSelectedOptions()}
            disabled={this.props.disabled}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            errors={this.props.errors}
            ref={ref => { this.select = ref; }}
            key={`autocomplete_select_${uuid.v4()}`}
          />
        </div>
        <Label {...this.propsWithoutCSS()} id={this.selectId()} />
      </div>
    );
  }
}
