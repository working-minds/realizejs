var GridFilter = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    inputs: React.PropTypes.object,
    url: React.PropTypes.string,
    method: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    clearButton: React.PropTypes.object,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
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
        additionalThemeClassKeys: 'grid.filter.clearButton button.cancel'
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

  getInitialState: function() {
    return {
      themeClassKey: 'grid.filter.wrapper grid.row'
    };
  },

  render: function() {
    return(
      <div className={this.className()}>
        <Form {...this.props} ref="form">
        {this.props.children}

          <div className={WRF.themeClass('grid.filter.buttonGroup')}>
            <Button {...this.props.clearButton} type="reset" />
            <Button {...this.props.submitButton} type="submit" />
          </div>
        </Form>
      </div>
    );
  },

  serialize: function() {
    return this.refs.form.serialize();
  }

});
