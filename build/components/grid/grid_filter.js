'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridFilter = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(GridFilter, _Component);

  function GridFilter(props) {
    _classCallCheck(this, GridFilter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GridFilter).call(this, props));

    _this.state = {
      themeClassKey: 'grid.filter.wrapper'
    };
    return _this;
  }

  _createClass(GridFilter, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var collapsible = ReactDOM.findDOMNode(this.refs.collapsible);
      if (!!collapsible) {
        $(collapsible).collapsible();
      }
    }
  }, {
    key: 'renderFilters',
    value: function renderFilters() {
      if (this.props.collapsible) {
        return this.renderCollapsibleFilter();
      } else {
        return this.renderFormFilters();
      }
    }
  }, {
    key: 'renderCollapsibleFilter',
    value: function renderCollapsibleFilter() {
      var component = [];

      component.push(_react2.default.createElement(
        'ul',
        { className: 'collapsible', 'data-collapsible': 'accordion', ref: 'collapsible', key: 'collapsible_form' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'div',
            { className: 'collapsible-header' },
            _react2.default.createElement(
              'span',
              null,
              'Filtrar'
            ),
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'filter_list'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'collapsible-body' },
            this.renderFormFilters()
          )
        )
      ));

      return component;
    }
  }, {
    key: 'renderFormFilters',
    value: function renderFormFilters() {
      return _react2.default.createElement(_components.Form, _extends({}, this.props, { otherButtons: [this.props.clearButton], style: 'filter', ref: 'form' }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        this.renderFilters()
      );
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      return this.refs.form.serialize();
    }
  }]);

  return GridFilter;
}(_react.Component), _class2.propTypes = {
  inputs: _prop_types2.default.object,
  action: _prop_types2.default.string,
  method: _prop_types2.default.string,
  submitButton: _prop_types2.default.object,
  clearButton: _prop_types2.default.object,
  onSuccess: _prop_types2.default.func,
  onError: _prop_types2.default.func,
  onSubmit: _prop_types2.default.func,
  onReset: _prop_types2.default.func,
  isLoading: _prop_types2.default.bool,
  collapsible: _prop_types2.default.bool
}, _class2.defaultProps = {
  method: "GET",
  collapsible: false,
  submitButton: {
    name: 'actions.filter',
    icon: 'search'
  },
  clearButton: {
    name: 'actions.clear',
    type: 'reset',
    style: 'cancel'
  },
  onSuccess: function onSuccess(data) {
    return true;
  },
  onError: function onError(xhr, status, error) {
    return true;
  },
  onSubmit: function onSubmit(event) {
    return true;
  }
}, _temp)) || _class);
exports.default = GridFilter;