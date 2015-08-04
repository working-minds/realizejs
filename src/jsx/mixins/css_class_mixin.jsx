var CssClassMixin = {
  propTypes: {
    clearTheme: React.PropTypes.bool,
    className: React.PropTypes.string,
    themeClassKey: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      clearTheme: false,
      className: ''
    };
  },

  className: function() {
    var className = '';
    var themeClassKey = this.getThemeClassKey();

    if(!this.props.clearTheme && !!themeClassKey) {
      className += WRF.themeClass(themeClassKey);
    }

    if(!!this.props.className) {
      className += ' ' + this.props.className;
    }

    return className;
  },

  getThemeClassKey: function() {
    var themeClassKey = this.props.themeClassKey;
    if(!themeClassKey && !!this.state) {
      themeClassKey = this.state.themeClassKey;
    }

    return themeClassKey;
  },

  propsWithoutCSS: function() {
    var cssProps = ['clearTheme', 'className', 'themeClassKey'];
    var props = $.extend({}, this.props);
    $.each(cssProps, function(i, cssProp) {
      delete props[cssProp];
    }.bind(this));

    return props;
  }
};