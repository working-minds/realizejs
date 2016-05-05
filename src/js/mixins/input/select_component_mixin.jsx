var utils = require('../../utils.js');
var _map = require('lodash/map');

window.SelectComponentMixin = {
  propTypes: {
    options: React.PropTypes.array,
    dependsOn: React.PropTypes.object,
    optionsUrl: React.PropTypes.string,
    optionsParam: React.PropTypes.string,
    nameField: React.PropTypes.string,
    valueField: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    onLoad: React.PropTypes.func,
    onLoadError: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    requestTimeout: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      dependsOn: null,
      optionsParam: null,
      nameField: 'name',
      valueField: 'id',
      options: [],
      multiple: false,
      onSelect: null,
      onLoad: function(data) {
        return true;
      },
      onLoadError: function(xhr, status, error) {
        console.log('Select Load error:' + error);
      },
      requestTimeout: 300
    };
  },

  getInitialState: function() {
    return {
      options: this.props.options,
      optionsCache: this.props.options,
      disabled: this.props.disabled,
      mustDisable: false,
      loadParams: {},
      loadData: [],
      hasPendingRequest: false
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
        this.loadDependentOptions(null, true);
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
    $.each(this.state.optionsCache, function(i, option) {
      if(this.state.value.indexOf(option.value) >= 0) {
        selectedOptions.push(option);
      }
    }.bind(this));


    return selectedOptions;
  },

  loadOptions: function() {
    this.state.hasPendingRequest = true;
    var requestTime = new Date().getTime();
    var timeout = 0;

    if (!!this.state.xhr && this.state.xhr.readyState != 4)
      this.state.xhr.abort();

    if (!!this.state.lastXhrRequestTime)
      timeout = this.props.requestTimeout;

    if (!!this.state.lastXhrRequestTime &&
        ((this.state.lastXhrRequestTime + timeout) > requestTime))
      clearTimeout(this.state.xhrTimer);

    var context = this;
    this.state.xhrTimer = setTimeout(function () {
      context.state.xhr = $.ajax({
        url: context.props.optionsUrl,
        method: 'GET',
        dataType: 'json',
        data: context.state.loadParams,
        success: context.handleLoad,
        error: context.handleLoadError
      });
    }, timeout);

    this.state.lastXhrRequestTime = requestTime;
  },

  handleLoad: function(data) {
    var options = [];
    var optionsParam = this.props.optionsParam;
    if(!!optionsParam) {
      data = utils.getProp(optionsParam, data);
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
      loadData: data,
      options: options,
      optionsCache: this.cacheOptions(options),
      mustDisable: (!!this.props.dependsOn && options.length <= 0)
    }, this.triggerDependableChanged);

    this.state.hasPendingRequest = false;
    this.props.onLoad(data);
  },

  handleLoadError: function handleLoadError(xhr, status, error) {
    this.state.hasPendingRequest = false;
    this.props.onLoadError(xhr, status, error);
  },

  cacheOptions: function(options) {
    var optionsCache = options.slice(0);
    var optionValuesCache = $.map(optionsCache, function(option) {
      return option.value;
    });

    $.each(this.state.optionsCache, function(i, option) {
      var optionValue = option.value;
      if(optionValuesCache.indexOf(optionValue) < 0) {
        optionsCache.push(option);
      }
    });

    return optionsCache;
  },

  listenToDependableChange: function() {
    var dependableId = this.props.dependsOn.dependableId;
    dependableId = dependableId.replace( /(:|\.|\[|]|,)/g, "\\$1" );
    $('body').delegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },

  unbindDependableChangeListener: function() {
    var dependableId = this.props.dependsOn.dependableId;
    dependableId = dependableId.replace( /(:|\.|\[|]|,)/g, "\\$1" );
    $('body').undelegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },

  onDependableChange: function(event, dependableValue) {
    this.loadDependentOptions(dependableValue, false);
  },

  loadDependentOptions: function(dependableValue, keepValue) {
    if(!dependableValue) {
      dependableValue = this.getDependableNode().val();
    }

    if(!dependableValue || dependableValue.length === 0) {
      this.emptyAndDisable(keepValue);
      return false;
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
    var $valuesElement = $(ReactDOM.findDOMNode(this.refs.select));
    var optionValues = this.state.value;

    $valuesElement.trigger('dependable_changed', [optionValues]);
  },

  emptyAndDisable: function(keepValue) {
    var newState = {
      options: [],
      optionsCache: [],
      mustDisable: true
    };

    if(!keepValue) {
      newState.value = [];
    }

    this.setState(newState);
  },

  isDisabled: function () {
    return this.state.disabled || this.state.mustDisable;
  },

  /* Serializer functions */

  getDisplayValues: function() {
    return _map(this.selectedOptions(), function(selectedOption) {
      return selectedOption[this.props.nameField];
    }.bind(this));
  },

  serialize: function() {
    var serializedInput = {};
    serializedInput[this.props.name] = this.getValue();
    serializedInput[this.props.name + "Display"] = this.getDisplayValues();

    return serializedInput;
  }

};

module.exports = SelectComponentMixin;