var InputSelect = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    options: React.PropTypes.array,
    optionsUrl: React.PropTypes.string,
    dependsOn: React.PropTypes.object,
    includeBlank: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    nameField: React.PropTypes.string,
    valueField: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      includeBlank: true,
      disabled: false,
      dependsOn: null,
      options: [],
      nameField: 'name',
      valueField: 'id'
    };
  },

  getInitialState: function() {
    return {
      options: this.props.options,
      disabled: this.props.disabled
    };
  },

  componentWillMount: function() {
    if(!!this.props.dependsOn) {
      this.state.disabled = true;
    }
  },

  componentDidMount: function() {
    this.applyMaterialize();

    if(this.props.optionsUrl) {
      if(!!this.props.dependsOn) {
        this.listenDependableChanges();
      } else {
        this.loadOptions();
      }
    }
  },

  componentDidUpdate: function(previousProps, previousState) {
    var state = this.state;
    if(state.options != previousState.options) {
      this.applyMaterialize();
    }
  },

  render: function() {
    return (
      <select
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        disabled={this.state.disabled}
        ref="select">
        {this.renderOptions()}
      </select>
    );
  },

  handleChange: function(event) {
    var selectElement = React.findDOMNode(this.refs.select);
    var $selectElement = $(selectElement);

    $selectElement.trigger('dependable_changed', [selectElement.value]);
    this.props.onChange(event);
  },

  renderOptions: function() {
    var selectOptions = [];
    var options = this.state.options;

    if(this.props.includeBlank) {
      selectOptions.push(<InputSelectOption name="Selecione" value="" key="empty_option" />);
    }

    for(var i = 0; i < options.length; i++) {
      var optionProps = options[i];
      selectOptions.push(<InputSelectOption {...optionProps} key={optionProps.name} />);
    }

    return selectOptions;
  },

  loadOptions: function(params) {
    $.ajax({
      url: this.props.optionsUrl,
      method: 'GET',
      dataType: 'json',
      data: params,
      success: this.loadOptionsCallback,
      error: function(xhr, status, error) {
        console.log('InputSelect Load error:' + error);
      }.bind(this)
    });
  },

  loadOptionsCallback: function(data) {
    var options = [];

    for(var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var option = {
        name: String(dataItem[this.props.nameField]),
        value: String(dataItem[this.props.valueField])
      };

      options.push(option);
    }

    this.setState({
      options: options,
      disabled: (!!this.props.dependsOn && options.length <= 0)
    });
  },

  listenDependableChanges: function() {
    var dependsOnObj = this.props.dependsOn;
    var dependableId = dependsOnObj.dependableId;
    var paramName = dependsOnObj.paramName || dependableId;
    var dependable = document.getElementById(dependableId);

    $(dependable).on('dependable_changed', function(event, dependableValue) {
      if(!dependableValue) {
        this.emptyAndDisable();
        return false;
      }

      var loadParams = {};
      loadParams[paramName] = dependableValue;
      this.loadOptions(loadParams);
    }.bind(this));
  },

  emptyAndDisable: function() {
    this.setState({
      options: [],
      disabled: true
    });
  },

  // Funcoes especificas para o Materialize

  applyMaterialize: function() {
    var selectElement = React.findDOMNode(this.refs.select);

    $(selectElement).material_select(this.handleChangeMaterialize.bind(this, selectElement));
    this.handleChangeMaterialize(selectElement);
  },

  handleChangeMaterialize: function(selectElement) {
    var $selectElement = $(selectElement);
    var fakeEvent = { currentTarget: selectElement };

    //Implementação que resolve o seguinte bug do Materialize: https://github.com/Dogfalo/materialize/issues/1570
    $selectElement.parent().parent().find('> .caret').remove();

    $selectElement.trigger('dependable_changed', [selectElement.value]);
    this.props.onChange(fakeEvent);
  }
});
