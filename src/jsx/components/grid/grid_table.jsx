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
        <Table {...this.propsWithoutCSS()} />
      </div>
    );
  }
});
