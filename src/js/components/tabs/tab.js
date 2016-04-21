var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var ContainerMixin = require('realize/mixins/container_mixin.jsx');

window.Tab = React.createClass({
  mixins: [
    CssClassMixin,
    ContainerMixin
  ],

  propTypes: {
    id: React.PropTypes.string
  },

  render: function () {
    return (
      <div id={this.props.id} className={this.className()}>
        {this.renderChildren()}
      </div>
    );
  }
});