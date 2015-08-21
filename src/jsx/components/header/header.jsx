var Header = React.createClass({
  mixins: [CssClassMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'header'
    };
  },

  render: function() {
    return (
      <nav className={this.className()} role="navigation">
        <div className="nav-wrapper">
          {this.props.children}
        </div>
      </nav>
    );
  }

});