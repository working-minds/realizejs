import React from 'react'
import themes from '../theme'
import $ from 'jquery'
import PropTypes from '../prop_types';

export default {
  propTypes: {
    clearTheme: PropTypes.bool,
    className: PropTypes.string,
    themeClassKey: PropTypes.string
  },

  getDefaultProps() {
    return {
      clearTheme: false
    };
  },

  themedClassName(themeClassKey, className) {
    let themedClassName = '';

    if(!this.props.clearTheme && !!themeClassKey) {
      themedClassName += themes.getCssClass(themeClassKey);
    }

    if(!!className) {
      themedClassName += ' ' + className;
    }

    return themedClassName;
  },

  className() {
    const themeClassKey = this.getThemeClassKey();
    const className = this.props.className;

    return this.themedClassName(themeClassKey, className);
  },

  getThemeClassKey() {
    let themeClassKey = this.props.themeClassKey;
    if(!!this.state && !!this.state.themeClassKey) {
      themeClassKey = this.state.themeClassKey;
    }

    return themeClassKey;
  },

  propsWithoutCSS() {
    const cssProps = ['className', 'themeClassKey'];
    const props = $.extend({}, this.props);
    $.each(cssProps, function(i, cssProp) {
      delete props[cssProp];
    }.bind(this));

    return props;
  }
}
