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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    checked: _prop_types2.default.bool,
    renderAsIndeterminate: _prop_types2.default.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      renderAsIndeterminate: false,
      value: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      checked: this.getInitialChecked()
    };
  },

  componentDidMount: function componentDidMount() {
    var inputNode = _reactDom2.default.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;

    var $form = (0, _jquery2.default)(inputNode.form);
    $form.on('reset', this._handleCheckboxReset);
  },

  componentWillUnmount: function componentWillUnmount() {
    var inputNode = _reactDom2.default.findDOMNode(this.refs.input);
    var $form = (0, _jquery2.default)(inputNode.form);
    $form.off('reset', this._handleCheckboxReset);
  },

  valueIsBoolean: function valueIsBoolean() {
    var value = this.props.value;
    return typeof value === "boolean" || value === 0 || value === 1;
  },

  getInitialChecked: function getInitialChecked() {
    var checked = this.props.checked;
    if (checked !== null && this.props.checked !== undefined) {
      return checked;
    }

    if (this.valueIsBoolean()) {
      return !!this.props.value;
    }

    return false;
  },

  /* Event handlers */

  _handleCheckboxReset: function _handleCheckboxReset(event) {
    if (this.isMounted()) {
      this.setState({
        checked: this.getInitialChecked()
      });
    }
  },

  _handleCheckboxChange: function _handleCheckboxChange(event) {
    var newCheckedValue = event.target.checked;
    this.props.onChange(event, newCheckedValue, this);

    if (!event.isDefaultPrevented()) {
      var newState = { checked: newCheckedValue };
      if (this.valueIsBoolean()) {
        newState.value = newCheckedValue;
      }

      this.setState(newState);
    }
  }
};