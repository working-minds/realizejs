'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = require('../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    id: _prop_types2.default.string,
    name: _prop_types2.default.string,
    value: _prop_types2.default.any,
    disabled: _prop_types2.default.bool,
    readOnly: _prop_types2.default.bool,
    placeholder: _prop_types2.default.localizedString,
    errors: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.array]),
    onChange: _prop_types2.default.func,
    onFocus: _prop_types2.default.func
  },

  defaultProps: function defaultProps() {
    return {
      disabled: false,
      readOnly: false,
      onChange: function onChange(event) {
        return true;
      },
      onFocus: function onFocus(event) {
        return true;
      },
      errors: []
    };
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },

  componentDidMount: function componentDidMount() {
    var $form = (0, _jquery2.default)(this.getInputFormNode());
    $form.on('reset', this._handleReset);
  },

  componentWillUnmount: function componentWillUnmount() {
    var $form = (0, _jquery2.default)(this.getInputFormNode());
    $form.off('reset', this._handleReset);
  },

  getInputFormNode: function getInputFormNode() {
    var inputRef = this.refs.input;
    if (!!inputRef) {
      return _reactDom2.default.findDOMNode(inputRef).form;
    }

    return null;
  },

  _handleReset: function _handleReset(event) {
    if (this.isMounted() && !this.inputNodeIsCheckbox()) {
      this.setState({
        value: null
      });
    }
  },

  _handleChange: function _handleChange(event) {
    var newValue = event.target.value;
    this.props.onChange(event, newValue, this);

    if (!event.isDefaultPrevented()) {
      this.setState({ value: newValue });
    }
  },

  _handleFocus: function _handleFocus(event) {
    this.props.onFocus(event);

    if (this.props.readOnly) {
      var inputNode = event.currentTarget;
      inputNode.blur();
    }
  },

  inputClassName: function inputClassName() {
    var className = this.className();
    var errors = this.props.errors;

    if (!!errors && errors.length > 0) {
      className += ' ' + _theme2.default.getCssClass('input.error');
    }

    return className;
  },

  getPlaceholder: function getPlaceholder() {
    var placeholder = _i18n2.default.t(this.props.placeholder);
    if (typeof placeholder !== "string" || placeholder.length === 0) {
      return null;
    }

    return placeholder;
  },

  inputNodeIsCheckbox: function inputNodeIsCheckbox() {
    var inputNode = _reactDom2.default.findDOMNode(this.refs.input);
    return !!inputNode && inputNode.type === "checkbox";
  },

  /* Serializer functions */

  getValue: function getValue() {
    var componentGetValue = this._getValue;

    // workaround para o problema de não ser possível sobrescrever funções de mixins.
    if (!!componentGetValue && typeof componentGetValue == "function") {
      return componentGetValue();
    } else {
      return this.state.value;
    }
  }

};