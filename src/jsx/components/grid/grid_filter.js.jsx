var GridFilter = React.createClass({
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
      form: {

      },
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
      <Form {...this.props.form}
        action={this.props.url}
        method={this.props.method}
        onSuccess={this.props.onSuccess}
        onError={this.props.onError}
        onSubmit={this.props.onSubmit}
        ref="form">

        {this.props.children}

        <div className={WRF.themeClass('grid.filter.buttonGroup')}>
          <Button {...this.props.clearButton} onClick={this.resetFilter} />
          <Button {...this.props.submitButton} type="submit" />
        </div>
      </Form>
    );
  },

  serialize: function() {
    return this.refs.form.serialize();
  },

  resetFilter: function(event) {
    var formNode = React.findDOMNode(this.refs.form);
    formNode.reset();
  }

});
