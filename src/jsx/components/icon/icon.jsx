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
      <i className={this.className()}>{this.themeIconType()}</i>
    );
  },

  themeIconType: function() {
    return WRF.themeProp('icon.' + this.props.type);
  }
});
