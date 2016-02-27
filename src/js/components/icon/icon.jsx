var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.Icon = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    type: React.PropTypes.string,
    tooltipDelay: React.PropTypes.number,
    tooltipText: React.PropTypes.string,
    tooltipPosition: React.PropTypes.oneOf(['bottom', 'top', 'left', 'right'])
  },

  getDefaultProps: function() {
    return {
      type: '',
      tooltipDelay: 10,
      tooltipPosition: 'top'
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'icon'
    };
  },

  render: function() {
    return (
        <i className={this.getClassName()}
          data-position={this.props.tooltipPosition}
          data-delay={this.props.tooltipDelay}
          data-tooltip={this.props.tooltipText}
          {...this.propsWithoutCSS()}>
          {this.iconType()}
        </i>
    );
  },

  getClassName: function() {
    var className = this.className();

    if (this.props.tooltipText != false)
      className += ' tooltipped';

    return className;
  },

  iconType: function() {
    var iconType = Realize.themes.getProp('icon.' + this.props.type);
    if(!iconType) {
      iconType = this.props.type;
    }

    return iconType;
  }
});
