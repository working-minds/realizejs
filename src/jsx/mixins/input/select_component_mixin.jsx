var SelectComponentMixin = {
  propTypes: {
    options: React.PropTypes.array,
    dependsOn: React.PropTypes.object,
    optionsUrl: React.PropTypes.string,
    optionsParam: React.PropTypes.string,
    nameField: React.PropTypes.string,
    valueField: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    onLoad: React.PropTypes.func,
    onLoadError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      dependsOn: null,
      optionsParam: null,
      nameField: 'name',
      valueField: 'id',
      options: [],
      multiple: false,
      onLoad: function(data) {
        return true;
      },
      onLoadError: function(xhr, status, error) {
        console.log('Select Load error:' + error);
      }
    };
  },

  getInitialState: function() {
    return {
      options: this.props.options,
      disabled: this.props.disabled,
      mustDisable: false,
      loadParams: {}
    };
  },

  componentWillMount: function() {
    // SelecComponent alwalys handle value as an array.
    this.state.value = this.ensureIsArray(this.state.value);

    if(!!this.props.dependsOn) {
      this.state.mustDisable = true;
    }
  },

  componentDidMount: function() {
    if(this.props.optionsUrl) {
      if(!!this.props.dependsOn) {
        this.listenToDependableChange();
        this.loadDependentOptions();
      } else {
        this.loadOptions();
      }
    }

    if(this.state.value.length > 0) {
      this.triggerDependableChanged();
    }
  },

  componentWillUnmount: function() {
    if(!!this.props.dependsOn) {
      this.unbindDependableChangeListener();
    }
  },

  ensureIsArray: function(value) {
    if(value === null || value === undefined || value.length === 0) {
      value = [];
    } else if(!$.isArray(value)) {
      value = [value];
    }
    return value;
  },

  selectedOptions: function() {
    var selectedOptions = [];
    $.each(this.state.options, function(i, option){
      if(this.state.value.indexOf(option.value) >= 0) {
        selectedOptions.push(option);
      }
    }.bind(this));


    return selectedOptions;
  },

  loadOptions: function() {
    $.ajax({
      url: this.props.optionsUrl,
      method: 'GET',
      dataType: 'json',
      data: this.state.loadParams,
      success: this.handleLoad,
      error: this.onLoadError
    });
  },

  handleLoad: function(data) {
    var options = [];
    var optionsParam = this.props.optionsParam;
    if(!!optionsParam) {
      data = data[optionsParam];
    }

    for(var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var option = {
        name: String(dataItem[this.props.nameField]),
        value: dataItem[this.props.valueField]
      };

      options.push(option);
    }

    this.setState({
      options: options,
      mustDisable: (!!this.props.dependsOn && options.length <= 0)
    }, this.triggerDependableChanged);

    this.props.onLoad(data);
  },

  listenToDependableChange: function() {
    var dependableId = this.props.dependsOn.dependableId;
    $('body').delegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },

  unbindDependableChangeListener: function() {
    var dependableId = this.props.dependsOn.dependableId;
    $('body').undelegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },

  onDependableChange: function(event, dependableValue) {
    if(!dependableValue) {
      this.emptyAndDisable();
      return false;
    }

    this.loadDependentOptions(dependableValue);
  },

  loadDependentOptions: function(dependableValue) {
    if(!dependableValue) {
      dependableValue = this.getDependableNode().val();
    }

    if($.isArray(dependableValue) && dependableValue.length == 1) {
      dependableValue = dependableValue[0];
    }

    var dependsOnObj = this.props.dependsOn;
    var paramName = dependsOnObj.param || dependsOnObj.dependableId;
    this.state.loadParams[paramName] = dependableValue;
    this.loadOptions();
  },

  getDependableNode: function() {
    var dependsOnObj = this.props.dependsOn;
    return $(document.getElementById(dependsOnObj.dependableId));
  },

  triggerDependableChanged: function() {
    var $valuesElement = $(React.findDOMNode(this.refs.select));
    var optionValues = this.state.value;

    $valuesElement.trigger('dependable_changed', [optionValues]);
  },

  emptyAndDisable: function() {
    this.setState({
      options: [],
      mustDisable: true
    });
  },

  isDisabled: function () {
    return this.state.disabled || this.state.mustDisable;
  }
};