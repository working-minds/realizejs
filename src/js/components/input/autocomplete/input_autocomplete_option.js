import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import { autobind, mixin } from '../../../utils/decorators';
import { uuid } from '../../../utils'

import {
  InputCheckbox,
  Label,
} from '../../../components';

import {
  CssClassMixin,
} from '../../../mixins';

@mixin(CssClassMixin)
export default class InputAutocompleteOption extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.node,
    selected: PropTypes.bool,
    position: PropTypes.number,
    isActive: PropTypes.bool,
    onSelect: PropTypes.func,
    onOptionMouseEnter: PropTypes.func,
  };

  static defaultProps = {
    selected: false,
    onSelect: () => true,
    onOptionMouseEnter: () => true,
  };

  state = {
    themeClassKey: this.parseThemeClassKey(this.props.isActive),
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      themeClassKey: this.parseThemeClassKey(nextProps.isActive),
    });
  }

  parseThemeClassKey(isActive) {
    let themeClassKey = 'input.autocomplete.option';
    if (isActive) {
      themeClassKey += ' input.autocomplete.option.active';
    }

    return themeClassKey;
  }

  disableEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  @autobind
  handleSelect(event) {
    const option = {
      name: this.props.name,
      value: this.props.value,
      showOnTop: false,
    };

    this.props.onSelect(event, option);
    event.stopPropagation();
  }

  @autobind
  handleMouseEnter() {
    this.props.onOptionMouseEnter(this.props.position);
  }

  render() {
    return (
      <li
        className={this.className()}
        onClick={this.handleSelect}
        onMouseEnter={this.handleMouseEnter}
      >
        <InputCheckbox
          id={this.parseOptionId()}
          checked={this.props.selected}
          onChange={this.disableEvent}
          onClick={this.disableEvent}
          key={uuid.v4()}
        />
        <Label id={this.parseOptionId()} name={this.props.name} />
      </li>
    );
  }
}
