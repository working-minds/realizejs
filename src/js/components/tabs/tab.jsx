var Tab = React.createClass({
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