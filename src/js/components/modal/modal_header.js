var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.ModalHeader = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    withTitle: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'modal.header',
      withTitle: true
    };
  },

  render: function() {
    return <div className={this.getClassName()}>{this.props.children}</div>;
  },

  getClassName: function() {
    var className = Realize.themes.getCssClass(this.props.themeClassKey);
    if(!this.props.clearTheme && this.props.withTitle) {
      className += ' '+ Realize.themes.getCssClass('modal.header.withTitle');
    }

    return className;
  }
});