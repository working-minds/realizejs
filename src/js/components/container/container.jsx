var Container = React.createClass({
  mixins: [ ContainerMixin ],

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    className: 'row'
  },

  render: function(){
    return (
      <div className={this.props.className}>
        {this.renderChildren()}
      </div>
    )
  }

});