import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';

@mixin(CssClassMixin)
export default class TableSelectionIndicator extends Component {
  static propTypes = {
    dataRows: PropTypes.array,
    selectedRowIds: PropTypes.array,
    actionButtons: PropTypes.array,
    message: PropTypes.object,
    removeSelectionButtonName: PropTypes.localizedString,
    selectable: PropTypes.oneOf(['multiple', 'none', 'one']),
    selectAllButtonName: PropTypes.localizedString,
    allSelected: PropTypes.bool,
    count: PropTypes.number,
    onRemoveSelection: PropTypes.func,
    onSelectAll: PropTypes.func,
    rowSelectableFilter: PropTypes.func,
    forceShowSelectAllButton: PropTypes.bool
  };

  static defaultProps = {
    themeClassKey: 'table.selectionIndicator',
    dataRows: [],
    selectedRowIds: [],
    actionButtons: [],
    message: {
      plural: 'table.selection.select.plural',
      singular: 'table.selection.select.singular'
    },
    removeSelectionButtonName: 'table.selection.clear',
    selectable: 'multiple',
    selectAllButtonName: 'table.selection.selectAll',
    allSelected: false,
    rowSelectableFilter: null,
    forceShowSelectAllButton: false,
    onRemoveSelection: function(event) {},
    onSelectAll: function(event) {}
  };

  renderMessage () {
    let count = this.getSelectionCount();
    if(count === 0) {
      return '';
    } else if(count === 1) {
      return Realize.i18n.t(this.props.message.singular);
    } else {
      var message = Realize.i18n.t(this.props.message.plural);
      return message.replace(/:count/, count);
    }
  }

  renderActions () {
    let count = this.getSelectionCount();
    if(count === 0 || this.props.selectable !== 'multiple') {
      return '';
    }

    return (
      <span>
        ({this.renderRemoveSelectionButton()}
        {this.renderSelectAllButton()})
      </span>
    );
  }

  renderRemoveSelectionButton () {
    return (
      <a href="#!" onClick={this.props.onRemoveSelection}>
        {Realize.i18n.t(this.props.removeSelectionButtonName)}
      </a>
    );
  }

  renderSelectAllButton () {
    if(typeof this.props.rowSelectableFilter === "function" || this.props.allSelected) {
      if(!this.props.forceShowSelectAllButton){
        return '';
      }
    }

    return (
      <span>
        &nbsp;|&nbsp;
        <a href="#!" onClick={this.props.onSelectAll}>
          {this.getSelectAllButtonName()}
        </a>
      </span>
    );
  }

  render () {
    return (
      <div className={this.className()}>
        <span>{this.renderMessage()}</span> {this.renderActions()}
      </div>
    );
  }

  getSelectionCount () {
    if(this.props.allSelected && !!this.props.count) {
      return this.props.count;
    } else {
      return this.props.selectedRowIds.length;
    }
  }

  getSelectAllButtonName () {
    let buttonName = Realize.i18n.t(this.props.selectAllButtonName);
    let count = this.props.count || this.props.dataRows.length;

    return buttonName.replace(/:count/, count);
  }
}
