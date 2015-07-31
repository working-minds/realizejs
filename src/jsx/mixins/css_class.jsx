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
    if(!this.props.clearTheme && !!this.state.themeClassKey) {
      className += WRF.themeClass(this.state.themeClassKey) + ' ';
    }

    className += this.props.className;
    return className;
  }
};