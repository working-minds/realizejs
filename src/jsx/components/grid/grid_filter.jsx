var GridFilter = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    inputs: React.PropTypes.object,
    action: React.PropTypes.string,
    method: React.PropTypes.string,
    submitButton: React.PropTypes.object,
    clearButton: React.PropTypes.object,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func,
    isLoading: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      method: "GET",
      submitButton: {
        name: Realize.t('actions.filter'),
        icon: 'search'
      },
      clearButton: {
        name: Realize.t('actions.clear'),
        type: 'reset',
        style: 'cancel'
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
      themeClassKey: 'grid.filter.wrapper'
    };
  },

  render: function() {
    return(
      <div className={this.className()}>
        <Form {...this.props} otherButtons={[this.props.clearButton]} style="filter" ref="form" />
      </div>
    );
  },

  serialize: function() {
    return this.refs.form.serialize();
  }

});
