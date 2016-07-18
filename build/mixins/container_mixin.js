'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    forwardedProps: _prop_types2.default.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      forwardedProps: {}
    };
  },
  getChildren: function getChildren() {
    return this.cloneChildrenWithProps();
  },
  renderChildren: function renderChildren() {
    return this.cloneChildrenWithProps();
  },
  filterChildren: function filterChildren(childType) {
    var result = [];
    _react2.default.Children.map(this.props.children, function (child) {
      if (!!child && child.type == childType) {
        result.push(child);
      }
    });

    return result;
  },
  cloneChildrenWithProps: function cloneChildrenWithProps(options) {
    var props = this.buildPropsToForward();

    if (!!options && !!options.childrenType) {
      return _react2.default.Children.map(this.filterChildren(options.childrenType), function (child) {
        var forwardedProps = _jquery2.default.extend({}, this.props.forwardedProps, props);
        if (!child || !child.type) {
          return null;
        }

        return _react2.default.cloneElement(child, _jquery2.default.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
      }.bind(this));
    } else {
      return _react2.default.Children.map(this.props.children, function (child) {
        var forwardedProps = _jquery2.default.extend({}, this.props.forwardedProps, props);
        if (!child || !child.type) {
          return null;
        }

        return _react2.default.cloneElement(child, _jquery2.default.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
      }.bind(this));
    }
  },
  buildChildPropsToKeep: function buildChildPropsToKeep(child) {
    var defaultChildProps = {};
    var keepProps = [];

    if (!!child.type.getDefaultProps) defaultChildProps = child.type.getDefaultProps();

    if (_jquery2.default.isArray(child.props['ignoreForwarded'])) keepProps = child.props['ignoreForwarded'];

    var newProps = {};

    for (var k in child.props) {
      if (this.childPropValueIsNotDefault(child.props[k], defaultChildProps[k]) || this.shouldKeepChildPropValueAnyway(k, keepProps)) newProps[k] = child.props[k];
    }
    return newProps;
  },
  childPropValueIsNotDefault: function childPropValueIsNotDefault(propValue, defaultPropValue) {
    return !(0, _isEqual2.default)(propValue, defaultPropValue);
  },
  shouldKeepChildPropValueAnyway: function shouldKeepChildPropValueAnyway(propName, keepList) {
    return keepList.indexOf(propName) >= 0;
  },
  buildPropsToForward: function buildPropsToForward() {
    var propsToForward = !!this.propsToForward ? this.propsToForward() : [];
    var forwardMapping = !!this.propsToForwardMapping ? this.propsToForwardMapping() : {};
    var props = {};

    for (var i = 0; i < propsToForward.length; i++) {
      var propToForward = propsToForward[i];

      props[propToForward] = this.props[propToForward];
    }

    return _jquery2.default.extend(props, forwardMapping);
  }
};