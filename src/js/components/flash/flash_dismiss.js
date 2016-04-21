var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.FlashDismiss = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string,
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      themeClassKey: 'flash.dismiss flash.' + this.props.type + '.content'
    };
  },

  render: function() {
    return (
      <div className={this.className()} onClick={this.props.onClick}>
        <Icon type="close" />
      </div>
    );
  }
});
