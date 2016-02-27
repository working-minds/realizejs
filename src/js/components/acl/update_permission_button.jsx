window.UpdatePermissionsButton = React.createClass({

  PropTypes: {
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    clearTheme: React.PropTypes.bool,
    element: React.PropTypes.string,
    handleUpdatePermissions: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      name: 'Atualizar',
      className: 'btn waves-effect waves-grey button-modal ',
      clearTheme: true,
      element: 'a',
      handleUpdatePermissions: function() { return null }
    }
  },

  render: function() {
    return (
      <Button {...this.props}
        onClick={this.props.handleUpdatePermissions}
      />
    )
  }

});