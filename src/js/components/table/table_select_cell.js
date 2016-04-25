import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { uuid } from 'utils';
import { mixin } from 'utils/decorators';

import { CssClassMixin } from 'mixins';

import { InputCheckbox, Label } from 'components';

@mixin(CssClassMixin)
export default class TableSelectCell extends Component {
  static propTypes = {
    rowId: PropTypes.string,
    cellElement: PropTypes.string,
    dataRowIds: PropTypes.array,
    selected: PropTypes.bool,
    onSelectToggle: PropTypes.func
  };

  static defaultProps = {
    themeClassKey: 'table.select',
    className: 'table-select',
    rowId: '',
    cellElement: 'td',
    dataRowIds: [],
    selected: false,
    onSelectToggle: function(event, dataRows, selected) {}
  };

  render () {
    return (
      React.createElement(this.props.cellElement,
        { className: this.className() },
        [
          <InputCheckbox id={this.getCheckboxId()} checked={this.props.selected} key={uuid.v4()} />,
          <Label id={this.getCheckboxId()} key="label" onClick={this.handleChange} />
        ]
      )
    );
  }

  getCheckboxId () {
    return "select_" + String(this.props.rowId);
  }

  handleChange = (event) => {
    this.props.onSelectToggle(event, this.props.dataRowIds, !this.props.selected);
    event.stopPropagation();
  }
}
