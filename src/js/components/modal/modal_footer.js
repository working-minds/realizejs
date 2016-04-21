var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.ModalFooter = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    separatorThemeClassKey: React.PropTypes.string,
    withSeparator: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'modal.footer',
      separatorThemeClassKey: 'modal.footer.withSeparator',
      withSeparator: true
    };
  },

  render: function() {
    return <div className={this.footerClassName()}>{this.props.children}</div>;
  },

  footerClassName: function() {
    var className = this.className();
    if(this.props.withSeparator) {
      className += " " + Realize.themes.getCssClass(this.props.separatorThemeClassKey);
    }

    return className;
  }
});