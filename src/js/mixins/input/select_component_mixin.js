import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';

import { getProp } from '../../utils';
import { autobind } from '../../utils/decorators';
import { map } from 'lodash';

export default {
  propTypes: {
    options: PropTypes.array,
    dependsOn: PropTypes.object,
    optionsUrl: PropTypes.string,
    optionsParam: PropTypes.string,
    nameField: PropTypes.string,
    valueField: PropTypes.string,
    multiple: PropTypes.bool,
    onLoad: PropTypes.func,
    onLoadError: PropTypes.func,
    onSelect: PropTypes.func,
    requestTimeout: PropTypes.number,
  },

  getDefaultProps() {
    return {
      dependsOn: null,
      optionsParam: null,
      nameField: 'name',
      valueField: 'id',
      options: [],
      multiple: false,
      onSelect: null,
      onLoad() { return true; },
      onLoadError(_, __, error) { console.log(`Select Load error: ${error}`); },
      requestTimeout: 300,
    };
  },

  getInitialState() {
    return {
      options: this.props.options,
      optionsCache: this.props.options,
      mustDisable: false,
      loadParams: {},
      loadData: [],
      hasPendingRequest: false,
    };
  },

  componentWillMount() {
    // SelecComponent alwalys handle value as an array.
    this.state.value = this.ensureIsArray(this.state.value);

    if (!!this.props.dependsOn) {
      this.state.mustDisable = true;
    }
  },

  componentDidMount() {
    if (this.props.optionsUrl) {
      if (!!this.props.dependsOn) {
        this.listenToDependableChange();
        this.loadDependentOptions(null, true);
      } else {
        this.loadOptions();
      }
    }

    const value = this.ensureIsArray(this.state.value);
    if (value.length > 0) {
      this.triggerDependableChanged();
    }
  },

  componentWillUnmount() {
    if (!!this.props.dependsOn) {
      this.unbindDependableChangeListener();
    }
  },

  ensureIsArray(value) {
    if (value === null || value === undefined || value.length === 0) {
      return [];
    } else if (!$.isArray(value)) {
      return [value];
    }
    return value;
  },

  selectedOptions() {
    const value = this.ensureIsArray(this.state.value);
    let selectedOptions = [];

    $.each(this.state.optionsCache, function(i, option) {
      if(value.indexOf(option.value) >= 0) {
        selectedOptions.push(option);
      }
    }.bind(this));


    return selectedOptions;
  },

  loadOptions() {
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
        success: context.handleLoad.bind(this),
        error: context.handleLoadError.bind(this)
      });
    }.bind(this), timeout);

    this.state.lastXhrRequestTime = requestTime;
  },

  handleLoad(data) {
    var options = [];
    var optionsParam = this.props.optionsParam;
    if(!!optionsParam) {
      data = getProp(optionsParam, data);
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

  handleLoadError (xhr, status, error) {
    this.state.hasPendingRequest = false;
    this.props.onLoadError(xhr, status, error);
  },

  cacheOptions (options) {
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

  listenToDependableChange () {
    var dependableId = this.props.dependsOn.dependableId;
    dependableId = dependableId.replace( /(:|\.|\[|]|,)/g, "\\$1" );
    this._boundedOnDependableChange = this.onDependableChange.bind(this);
    $('body').delegate('#' + dependableId, 'dependable_changed', this._boundedOnDependableChange);
  },

  unbindDependableChangeListener () {
    var dependableId = this.props.dependsOn.dependableId;
    dependableId = dependableId.replace( /(:|\.|\[|]|,)/g, "\\$1" );
    $('body').undelegate('#' + dependableId, 'dependable_changed', this._boundedOnDependableChange);
  },

  @autobind
  loadDependentOptions (dependableValue, keepValue) {
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
  @autobind
  onDependableChange(event, dependableValue) {
    this.loadDependentOptions (dependableValue, false);
  },

  getDependableNode () {
    var dependsOnObj = this.props.dependsOn;
    return $(document.getElementById(dependsOnObj.dependableId));
  },

  triggerDependableChanged: function() {
    var $valuesElement = $(ReactDOM.findDOMNode(this.select));
    var optionValues = this.ensureIsArray(this.state.value);

    $valuesElement.trigger('dependable_changed', [optionValues]);
  },

  emptyAndDisable (keepValue) {
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

  isDisabled () {
    return this.props.disabled || this.state.mustDisable;
  },

  /* Serializer functions */

  getSelectValue() {
    const { multiple } = this.props;
    const { value } = this.state;

    return (!multiple && Array.isArray(value))
      ? value[0]
      : value;
  },

  serialize() {
    return { [this.props.name]: this.getSelectValue() };
  },
};
