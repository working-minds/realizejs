var Icon = React.createClass({
  mixins: [CssClassMixin],
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
      <i className={this.className()}>{WRF.themeProp(this.props.type)}</i>
    );
  }
});
