window.MenuItem = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    iconAlign: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    onClick: React.PropTypes.object,
    className: React.PropTypes.string,
    method: React.PropTypes.string,
    element: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconAlign: 'left',
      method: 'get',
      element: 'a'
    };
  },

  render: function() {
    return (
      <li>
        <Button {...this.props} clearTheme={true} name={this.props.text} />
      </li>
    );
  }
});
