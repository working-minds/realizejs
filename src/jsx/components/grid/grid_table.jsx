var GridTable = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.table grid.row',
      columns: {},
      sortConfigs: {},
      sortData: {},
      dataRows: [],
      onSort: function(sortData) {
        return true;
      }
    };
  },

  render: function() {
    return(
      <div className={this.className()}>
        <Table
          columns={this.props.columns}
          sortConfigs={this.props.sortConfigs}
          sortData={this.props.sortData}
          dataRows={this.props.dataRows}
          onSort={this.props.onSort}
        />
      </div>
    );
  }
});
