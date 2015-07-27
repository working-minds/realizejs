var Button = React.createClass({displayName: "Button",
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
      React.createElement("button", {className: this.className(), type: this.props.type, onClick: this.props.onClick}, 
        this.props.name, 
        this.renderIcon()
      )
    );
  },

  renderIcon: function() {
    var iconName = this.props.icon;
    if(!iconName) {
      return '';
    }

    return React.createElement("i", {className: "material-icons right"}, iconName);
  },

  className: function() {
    var className = "btn waves-effect waves-light ";
    className += this.props.className;

    return className;
  }
});
