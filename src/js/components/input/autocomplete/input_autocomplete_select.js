import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
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
export default class InputAutocompleteSelect extends Component {
  static propTypes = {
    selectedOptions: PropTypes.array,
  };

  static defaultProps = {
    selectedOptions: [],
    themeClassKey: 'input.autocomplete.select',
    placeholder: 'select',
  };

  state = {
    options: [],
  };

  selectId() {
    return `autocomplete_select_${this.props.id}`;
  }

  focusSelect() {
    const selectInput = ReactDOM.findDOMNode(this.refs.select);
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
            ref="select"
            key={`autocomplete_select_${uuid.v4()}`}
          />
        </div>
        <Label {...this.propsWithoutCSS()} id={this.selectId()} />
      </div>
    );
  }
}
