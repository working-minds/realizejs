'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _form_store = require('../../stores/form_store');

var _form_store2 = _interopRequireDefault(_form_store);

var _capitalize = require('lodash/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    onFormSubmit: _prop_types2.default.func,
    onFormSuccess: _prop_types2.default.func,
    onFormError: _prop_types2.default.func,
    onFormReset: _prop_types2.default.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onFormSubmit: null,
      onFormSuccess: null,
      onFormError: null,
      onFormReset: null
    };
  },

  getInitialState: function getInitialState() {
    return {
      formState: null
    };
  },

  componentDidMount: function componentDidMount() {
    _form_store2.default.listen(this.formActionListener);
  },

  formActionListener: function formActionListener(formState) {
    try {
      this.executePropListener(formState);
    } catch (e) {
      this.executeComponentListener(formState);
    }
  },

  executePropListener: function executePropListener(formState) {
    var formAction = formState.action;
    var propListenerName = "onForm" + (0, _capitalize2.default)(formAction);
    var propListener = this.props[propListenerName];

    if (typeof propListener == "function") {
      propListener.apply(this, this.formActionParameters(formState));
    } else {
      throw 'Prop form listener not defined';
    }
  },

  executeComponentListener: function executeComponentListener(formState) {
    var formAction = formState.action;
    var componentListenerName = "handleForm" + (0, _capitalize2.default)(formAction);
    var componentListener = this[componentListenerName];

    if (typeof componentListener == "function") {
      componentListener.apply(this, this.formActionParameters(formState));
    }
  },

  formActionParameters: function formActionParameters(formState) {
    var formActionData = formState.actionData;
    var formId = formState.formId;

    var formActionParameters = _jquery2.default.map(formActionData, function (value, index) {
      return [value];
    });

    formActionParameters.unshift(formId);
    return formActionParameters;
  }

};