window.CloseModalButton = React.createClass({
  PropTypes: {
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    clearTheme: React.PropTypes.bool,
    element: React.PropTypes.string,
    modalId: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      name: 'Fechar',
      className: 'btn waves-effect waves-light close-button grey lighten-4',
      clearTheme: true,
      element: 'a'
    }
  },

  render: function() {
    return (
      <Button {...this.props} onClick={this.closeModal} />
    )
  },

  closeModal: function() {
    if (!!this.props.modalId){
     $('#'+this.props.modalId).closeModal()
    }
  }

});