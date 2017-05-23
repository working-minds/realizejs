import React, { Component } from 'react';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';
import { Table } from '../../components';

@mixin(CssClassMixin)
export default class GridTable extends Component {
  static propTypes = {};
  static defaultProps = {
    themeClassKey: 'grid.table',
  };

  render() {
    return (
      <div className={this.className()}>
        <Table
          {...this.propsWithoutCSS()}
          className={this.props.tableClassName}
          clearTheme={this.props.clearThemeTable}
        />
      </div>
    );
  }
}
