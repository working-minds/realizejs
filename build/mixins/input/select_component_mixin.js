'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _desc, _value, _obj;

var _utils = require('../../utils');

var _decorators = require('../../utils/decorators');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

exports.default = (_obj = {
  propTypes: {
    options: _prop_types2.default.array,
    dependsOn: _prop_types2.default.object,
    optionsUrl: _prop_types2.default.string,
    optionsParam: _prop_types2.default.string,
    nameField: _prop_types2.default.string,
    valueField: _prop_types2.default.string,
    multiple: _prop_types2.default.bool,
    onLoad: _prop_types2.default.func,
    onLoadError: _prop_types2.default.func,
    onSelect: _prop_types2.default.func,
    requestTimeout: _prop_types2.default.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dependsOn: null,
      optionsParam: null,
      nameField: 'name',
      valueField: 'id',
      options: [],
      multiple: false,
      onSelect: null,
      onLoad: function onLoad(data) {
        return true;
      },
      onLoadError: function onLoadError(xhr, status, error) {
        console.log('Select Load error:' + error);
      },
      requestTimeout: 300
    };
  },
  getInitialState: function getInitialState() {
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
  componentWillMount: function componentWillMount() {
    // SelecComponent alwalys handle value as an array.
    this.state.value = this.ensureIsArray(this.state.value);

    if (!!this.props.dependsOn) {
      this.state.mustDisable = true;
    }
  },
  componentDidMount: function componentDidMount() {
    if (this.props.optionsUrl) {
      if (!!this.props.dependsOn) {
        this.listenToDependableChange();
        this.loadDependentOptions(null, true);
      } else {
        this.loadOptions();
      }
    }

    var value = this.ensureIsArray(this.state.value);
    if (value.length > 0) {
      this.triggerDependableChanged();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (!!this.props.dependsOn) {
      this.unbindDependableChangeListener();
    }
  },
  ensureIsArray: function ensureIsArray(value) {
    if (value === null || value === undefined || value.length === 0) {
      value = [];
    } else if (!$.isArray(value)) {
      value = [value];
    }
    return value;
  },
  selectedOptions: function selectedOptions() {
    var value = this.ensureIsArray(this.state.value);
    var selectedOptions = [];

    $.each(this.state.optionsCache, function (i, option) {
      if (value.indexOf(option.value) >= 0) {
        selectedOptions.push(option);
      }
    }.bind(this));

    return selectedOptions;
  },
  loadOptions: function loadOptions() {
    this.state.hasPendingRequest = true;
    var requestTime = new Date().getTime();
    var timeout = 0;

    if (!!this.state.xhr && this.state.xhr.readyState != 4) this.state.xhr.abort();

    if (!!this.state.lastXhrRequestTime) timeout = this.props.requestTimeout;

    if (!!this.state.lastXhrRequestTime && this.state.lastXhrRequestTime + timeout > requestTime) clearTimeout(this.state.xhrTimer);

    var context = this;
    this.state.xhrTimer = setTimeout(function () {
      context.state.xhr = $.ajax({
        url: context.props.optionsUrl,
        method: 'GET',
        dataType: 'json',
        data: context.state.loadParams,
        success: context.handleLoad.bind(this),
        error: context.handleLoadError.bind(this)
      });
    }.bind(this), timeout);

    this.state.lastXhrRequestTime = requestTime;
  },
  handleLoad: function handleLoad(data) {
    var options = [];
    var optionsParam = this.props.optionsParam;
    if (!!optionsParam) {
      data = (0, _utils.getProp)(optionsParam, data);
    }

    for (var i = 0; i < data.length; i++) {
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
      mustDisable: !!this.props.dependsOn && options.length <= 0
    }, this.triggerDependableChanged);

    this.state.hasPendingRequest = false;
    this.props.onLoad(data);
  },
  handleLoadError: function handleLoadError(xhr, status, error) {
    this.state.hasPendingRequest = false;
    this.props.onLoadError(xhr, status, error);
  },
  cacheOptions: function cacheOptions(options) {
    var optionsCache = options.slice(0);
    var optionValuesCache = $.map(optionsCache, function (option) {
      return option.value;
    });

    $.each(this.state.optionsCache, function (i, option) {
      var optionValue = option.value;
      if (optionValuesCache.indexOf(optionValue) < 0) {
        optionsCache.push(option);
      }
    });

    return optionsCache;
  },
  listenToDependableChange: function listenToDependableChange() {
    var dependableId = this.props.dependsOn.dependableId;
    dependableId = dependableId.replace(/(:|\.|\[|]|,)/g, "\\$1");
    $('body').delegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },
  unbindDependableChangeListener: function unbindDependableChangeListener() {
    var dependableId = this.props.dependsOn.dependableId;
    dependableId = dependableId.replace(/(:|\.|\[|]|,)/g, "\\$1");
    $('body').undelegate('#' + dependableId, 'dependable_changed', this.onDependableChange);
  },


  //@autobind
  loadDependentOptions: function loadDependentOptions(dependableValue, keepValue) {
    if (!dependableValue) {
      dependableValue = this.getDependableNode().val();
    }

    if (!dependableValue || dependableValue.length === 0) {
      this.emptyAndDisable(keepValue);
      return false;
    }

    if ($.isArray(dependableValue) && dependableValue.length == 1) {
      dependableValue = dependableValue[0];
    }

    var dependsOnObj = this.props.dependsOn;
    var paramName = dependsOnObj.param || dependsOnObj.dependableId;
    this.state.loadParams[paramName] = dependableValue;
    this.loadOptions();
  },

  onDependableChange: function onDependableChange(event, dependableValue) {
    this.loadDependentOptions(dependableValue, false);
  },
  getDependableNode: function getDependableNode() {
    var dependsOnObj = this.props.dependsOn;
    return $(document.getElementById(dependsOnObj.dependableId));
  },


  triggerDependableChanged: function triggerDependableChanged() {
    var $valuesElement = $(_reactDom2.default.findDOMNode(this.refs.select));
    var optionValues = this.ensureIsArray(this.state.value);

    $valuesElement.trigger('dependable_changed', [optionValues]);
  },

  emptyAndDisable: function emptyAndDisable(keepValue) {
    var newState = {
      options: [],
      optionsCache: [],
      mustDisable: true
    };

    if (!keepValue) {
      newState.value = [];
    }

    this.setState(newState);
  },
  isDisabled: function isDisabled() {
    return this.state.disabled || this.state.mustDisable;
  },


  /* Serializer functions */

  getDisplayValues: function getDisplayValues() {
    return (0, _map2.default)(this.selectedOptions(), function (selectedOption) {
      return selectedOption[this.props.nameField];
    }.bind(this));
  },
  serialize: function serialize() {
    var serializedInput = {};
    serializedInput[this.props.name] = this.getValue();
    serializedInput[this.props.name + "Display"] = this.getDisplayValues();

    return serializedInput;
  }
}, (_applyDecoratedDescriptor(_obj, 'onDependableChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_obj, 'onDependableChange'), _obj)), _obj);