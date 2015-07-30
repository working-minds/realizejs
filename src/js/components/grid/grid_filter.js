var GridFilter = React.createClass({displayName: "GridFilter",
  propTypes: {
    form: React.PropTypes.object,
    url: React.PropTypes.string,
    method: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    clearButton: React.PropTypes.object,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      form: {},
      method: "GET",
      submitButton: {
        name: 'Filtrar',
        icon: 'search'
      },
      clearButton: {
        name: 'Limpar',
        className: WRF.themeClass('grid.filter.clearButton button.cancel')
      },
      onSuccess: function(data) {
        return true;
      },
      onError: function(xhr, status, error) {
        return true;
      },
      onSubmit: function(event) {
        return true;
      }
    };
  },

  render: function() {
    return(
      React.createElement(Form, React.__spread({},  this.props.form, 
        {action: this.props.url, 
        method: this.props.method, 
        onSuccess: this.props.onSuccess, 
        onError: this.props.onError, 
        onSubmit: this.props.onSubmit, 
        ref: "form"}), 

        this.props.children, 

        React.createElement("div", {className: WRF.themeClass('grid.filter.buttonGroup')}, 
          React.createElement(Button, React.__spread({},  this.props.clearButton, {type: "reset"})), 
          React.createElement(Button, React.__spread({},  this.props.submitButton, {type: "submit"}))
        )
      )
    );
  },

  serialize: function() {
    return this.refs.form.serialize();
  }

});
