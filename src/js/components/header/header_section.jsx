window.HeaderSection = React.createClass({
  propTypes: {
    align: React.PropTypes.string,
    id: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      align: 'left',
      className: 'hide-on-med-and-down'
    };
  },

  render: function () {
    return (
      <ul className={this.props.className + ' ' + this.props.align} id={this.props.id}>
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
