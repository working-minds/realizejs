var Header = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    className: React.PropTypes.string
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