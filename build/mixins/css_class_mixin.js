'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.CssClassMixin = {
  propTypes: {
    clearTheme: PropTypes.bool,
    className: PropTypes.string,
    themeClassKey: PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      clearTheme: false
    };
  },

  themedClassName: function themedClassName(themeClassKey, className) {
    var themedClassName = '';

    if (!this.props.clearTheme && !!themeClassKey) {
      themedClassName += _theme2.default.getCssClass(themeClassKey);
    }

    if (!!className) {
      themedClassName += ' ' + className;
    }

    return themedClassName;
  },

  className: function className() {
    var themeClassKey = this.getThemeClassKey();
    var className = this.props.className;

    return this.themedClassName(themeClassKey, className);
  },

  getThemeClassKey: function getThemeClassKey() {
    var themeClassKey = this.props.themeClassKey;
    if (!!this.state && !!this.state.themeClassKey) {
      themeClassKey = this.state.themeClassKey;
    }

    return themeClassKey;
  },

  propsWithoutCSS: function propsWithoutCSS() {
    var cssProps = ['className', 'themeClassKey'];
    var props = _jquery2.default.extend({}, this.props);
    _jquery2.default.each(cssProps, function (i, cssProp) {
      delete props[cssProp];
    }.bind(this));

    return props;
  }
};