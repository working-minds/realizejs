import React, { Component } from 'react';
import PropTypes from 'prop_types';
import $ from 'jquery';
import { mixin } from 'utils/decorators';

import { InputAutocompleteOption } from 'components';
import { CssClassMixin } from 'mixins';

@mixin(CssClassMixin)
export default class InputAutocompleteList extends Component {
  static propTypes = {
    id: PropTypes.string,
    selectedOptions: PropTypes.array,
    options: PropTypes.array,
    active: PropTypes.number,
    onSelect: PropTypes.func,
    onOptionMouseEnter: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'input.autocomplete.list',
    options: [],
    selectedOptions: [],
    onSelect: () => true,
    onOptionMouseEnter: () => true,
  };

  onTopSelectedOptions() {
    const selectedOptions = $.map(this.props.selectedOptions, (selectedOption) => {
      const option = $.extend({}, selectedOption);

      option.selected = true;
      return option;
    });

    return $.grep(selectedOptions, (option) => !!option.showOnTop);
  }

  otherOptions() {
    const otherOptions = $.map(this.props.options, (option) => {
      const otherOption = $.extend({}, option);
      const relatedSelectedOption = $.grep(
        this.props.selectedOptions,
        (selectedOption) => selectedOption.value === otherOption.value
      )[0];

      if (!!relatedSelectedOption) {
        otherOption.selected = true;
        otherOption.showOnTop = relatedSelectedOption.showOnTop;
      }

      return otherOption;
    });

    return $.grep(otherOptions, (option) => !option.showOnTop);
  }

  renderOptions() {
    const options = [].concat(this.onTopSelectedOptions(), this.otherOptions());
    const listOptions = [];

    for (let i = 0; i < options.length; i++) {
      const optionProps = options[i];
      listOptions.push(
        <InputAutocompleteOption
          {...optionProps}
          onSelect={this.props.onSelect}
          onOptionMouseEnter={this.props.onOptionMouseEnter}
          position={i}
          isActive={i === this.props.active}
          id={this.props.id}
          key={optionProps.name}
          ref={`option_${i}`}
        />
      );
    }

    return listOptions;
  }

  render() {
    return (
      <ul className={this.className()}>
        {this.renderOptions()}
      </ul>
    );
  }
}
