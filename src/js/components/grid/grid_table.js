var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.GridTable = React.createClass({
  mixins: [CssClassMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.table'
    };
  },

  render: function() {
    return(
      <div className={this.className()}>
        <Table {...this.propsWithoutCSS()} className={this.props.tableClassName} clearTheme={this.props.clearThemeTable} />
      </div>
    );
  }
});
