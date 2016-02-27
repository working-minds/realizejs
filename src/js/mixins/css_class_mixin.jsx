window.CssClassMixin = {
  propTypes: {
    clearTheme: React.PropTypes.bool,
    className: React.PropTypes.string,
    themeClassKey: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      clearTheme: false
    };
  },

  themedClassName: function(themeClassKey, className) {
    var themedClassName = '';

    if(!this.props.clearTheme && !!themeClassKey) {
      themedClassName += Realize.themes.getCssClass(themeClassKey);
    }

    if(!!className) {
      themedClassName += ' ' + className;
    }

    return themedClassName;
  },

  className: function() {
    var themeClassKey = this.getThemeClassKey();
    var className = this.props.className;

    return this.themedClassName(themeClassKey, className);
  },

  getThemeClassKey: function() {
    var themeClassKey = this.props.themeClassKey;
    if(!!this.state && !!this.state.themeClassKey) {
      themeClassKey = this.state.themeClassKey;
    }

    return themeClassKey;
  },

  propsWithoutCSS: function() {
    var cssProps = ['className', 'themeClassKey'];
    var props = $.extend({}, this.props);
    $.each(cssProps, function(i, cssProp) {
      delete props[cssProp];
    }.bind(this));

    return props;
  }
};

module.exports = CssClassMixin;