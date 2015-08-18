var GridForm = React.createClass({
  mixins: [
    CssClassMixin,
    RestActionsMixin
  ],

  propTypes: {
    url: React.PropTypes.string,
    actionButtons: React.PropTypes.object,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filter: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    actionUrls: React.PropTypes.object,
    form: React.PropTypes.object,
    isLoading: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      form: {},
      themeClassKey: 'gridForm',
      actionButtons: {
        collection: []
      },
      isLoading: false
    };
  },

  getInitialState: function() {
    return {
      formAction: 'create',
      isLoading: this.props.isLoading
    };
  },

  componentDidMount: function() {
    this.loadGridData();
  },

  render: function() {
    return (
      <div className={this.className()}>

        //TODO: adicionar os divs de card em um componente separado.
        <div className="card">
          <div className="card-content">
            <Form
              style={"filter"}
              {...this.props.form}
              action={this.getFormAction()}
              method={this.getFormMethod()}
              onSubmit={this.onSubmit}
              onSuccess={this.onSuccess}
              ref="form"
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <Grid
              {...this.propsWithoutCSS()}
              ref="grid"
            />
          </div>
        </div>
      </div>
    );
  },

  getFormAction: function() {
    return this.getActionUrl(this.state.formAction);
  },

  getFormMethod: function() {
    return this.getActionMethod(this.state.formAction);
  },

  onSuccess: function(data) {
    this.loadGridData();
    this.resetForm();

  },

  loadGridData: function() {
    var gridRef = this.refs.grid;
    gridRef.loadData();
  },

  resetForm: function() {
    var formNode = React.findDOMNode(this.refs.form);
    formNode.reset();
  }


});
