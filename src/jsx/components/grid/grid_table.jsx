var GridTable = React.createClass({
  mixins: [CssClassMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.table'
    };
  },

  render: function() {
    return(
      <div className={this.className()}>
        <Table {...this.propsWithoutCSS()} className={this.props.tableClassName} />
      </div>
    );
  }
});
