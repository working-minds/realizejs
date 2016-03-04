var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var TooltipMixin = require('realize/mixins/tooltip_mixin.jsx');

window.Icon = React.createClass({
  mixins: [CssClassMixin, TooltipMixin],

  propTypes: {
    type: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      type: ''
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'icon'
    };
  },

  render: function() {
    return (
      <i className={this.getTooltipClassName()}
        {...this.tooltipAttributes()}
        {...this.propsWithoutCSS()}>
        {this.iconType()}
      </i>
    );
  },

  iconType: function() {
    var iconType = Realize.themes.getProp('icon.' + this.props.type);
    if(!iconType) {
      iconType = this.props.type;
    }

    return iconType;
  }
});
