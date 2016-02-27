var ContainerMixin = require('realize/mixins/container_mixin.jsx');

window.Container = React.createClass({
  mixins: [ContainerMixin],

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: 'row'
    };
  },

  render: function() {
    return (
      <div className={this.props.className}>
        {this.renderChildren()}
      </div>
    )
  }

});