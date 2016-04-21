window.LabelPermission = React.createClass({

  PropTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: ''
    }
  },

  render: function() {
    return (
      <div className={this.props.className}>
        {this.renderLabel()}
      </div>
    )
  },

  renderLabel: function() {
    var component = [];
    var permissions= this.props.value;

    if (permissions.length == 0) {
      component.push(<div> - </div>)
    } else {
      permissions.forEach(function (permission) {
        component.push(<div>{I18n.t('permissions.'+permission)}</div>)
      });
    }

    return component;
  }

});