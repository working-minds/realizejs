var HeaderSection = React.createClass({
  //mixins: [CssClassMixin],

  propTypes: {
    align: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      align: 'left',
      className: 'hide-on-med-and-down'
    };
  },

  render: function () {

    return (
      <ul className={this.props.className + ' ' + this.props.align}>
        {this.renderChildren()}
      </ul>
    );
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, function(child, i) {
      return <li key={"item_" + i}>{child}</li>;
    });
  }

});
