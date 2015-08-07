var Header = React.createClass({
  //mixins: [CssClassMixin],

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: ''
    };
  },

  render: function() {
    return (
        <nav className={'blue-grey darken-2 ' + this.props.className} role="navigation">
          <div className="nav-wrapper">
          {this.props.children}
          </div>
        </nav>
    );
  }

});