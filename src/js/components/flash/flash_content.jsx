var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.FlashContent = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    type: React.PropTypes.string,
    message: React.PropTypes.node
  },

  getInitialState: function() {
    return {
      themeClassKey: 'flash.content flash.' + this.props.type + '.content'
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        <p>
          {this.props.message}
        </p>
      </div>
    );
  }
});
