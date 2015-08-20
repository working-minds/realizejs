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
      loadParams: {}
    };
  },

  componentWillMount: function() {
    // SelecComponent alwalys handle value as an array.
    this.state.value = this.ensureIsArray(this.state.value);

    if(!!this.props.dependsOn) {
      this.state.disabled = true;
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var nextValue = this.ensureIsArray(nextProps.value);
    var valueChanged = (nextValue !== this.state.value);

    this.setState({
      value: nextValue
    }, function() {
      if(valueChanged) {
        this.triggerDependableChanged();
      }
    });
  },

  componentDidMount: function() {
    if(this.props.optionsUrl) {
      if(!!this.props.dependsOn) {
        this.listenToDependableChange();
      } else {
        this.loadOptions();
      }
    }

    if(this.state.value.length > 0) {
      this.triggerDependableChanged();
    }
  },

  ensureIsArray: function(value) {
    if(!value) {
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
      disabled: (!!this.props.dependsOn && options.length <= 0)
    });

    this.props.onLoad(data);
  },

  listenToDependableChange: function() {
    var dependsOnObj = this.props.dependsOn;
    var dependableId = dependsOnObj.dependableId;
    var paramName = dependsOnObj.param || dependableId;
    var dependable = document.getElementById(dependableId);

    $(dependable).on('dependable_changed', function(event, dependableValue) {
      if(!dependableValue) {
        this.emptyAndDisable();
        return false;
      }

      this.state.loadParams[paramName] = dependableValue;
      this.loadOptions();
    }.bind(this));
  },

  triggerDependableChanged: function() {
    var $valuesElement = $(React.findDOMNode(this.refs.select));
    var optionValues = this.state.value;

    if(optionValues.length == 1) {
      optionValues = optionValues[0];
    }

    $valuesElement.trigger('dependable_changed', [optionValues]);
  },

  emptyAndDisable: function() {
    this.setState({
      options: [],
      disabled: true
    });
  }
};