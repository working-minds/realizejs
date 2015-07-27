var Button = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      className: ''
    };
  },

  render: function() {
    return (
      <button className={this.className()} type={this.props.type} onClick={this.props.onClick}>
        {this.props.name}
        {this.renderIcon()}
      </button>
    );
  },

  renderIcon: function() {
    var iconName = this.props.icon;
    if(!iconName) {
      return '';
    }

    return <i className="material-icons right">{iconName}</i>;
  },

  className: function() {
    var className = "btn waves-effect waves-light ";
    className += this.props.className;

    return className;
  }
});
