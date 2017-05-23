import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import { mixin } from '../../../utils/decorators';
import InputBase from '../input_base';
import {
  CssClassMixin,
  SelectComponentMixin
} from '../../../mixins';

import { InputCheckbox, Label } from '../../../components';

@mixin(
  CssClassMixin,
  SelectComponentMixin
)
export default class InputCheckboxGroup extends InputBase {
  static propTypes = {
    align: React.PropTypes.oneOf(['vertical', 'horizontal']),
    currentValues: React.PropTypes.string
  };

  static defaultProps = {
    themeClassKey: 'input.checkbox',
    name:'',
    align: 'vertical'
  };

  constructor (props) {
    super(props);
    this.state = {
      currentValues: this.props.currentValues
    };
  }

  renderChildItems () {
    let items = React.Children.map(this.props.children, function(item) {
      if((item !== null) && (item.props.children[0].type.displayName == "input"))
        return item;
    });
    return items;
  }

  renderPropItems () {
    let selectOptions = [];
    let options = this.state.options;

    for(let i = 0; i < options.length; i++) {
      let optionProps = options[i];

      let filledClass =  optionProps.filled? 'filled-in' : '';
      optionProps.id = this.props.id + '_' + i;

      selectOptions.push(
        <p key={'p_input'+i}>
          <InputCheckbox {...optionProps } name={this.props.name} className={filledClass} checked={this.isChecked(optionProps)}/>
          <Label {...optionProps} />
        </p>
      );
    }
    return selectOptions;
  }

  render () {
    return (
      <div className={'input-checkbox-group align-' + this.props.align}>
        {this.renderChildItems()}
        {this.renderPropItems()}
      </div>
    );
  }

  isChecked (item) {
    let currentValues = this.state.currentValues;
    if(!$.isArray(currentValues))
      currentValues = [currentValues];
    return ($.inArray( item.value , currentValues ) !== -1);
  }
}
