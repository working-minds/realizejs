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
      <i className={this.className()}>{this.iconType()}</i>
    );
  },

  iconType: function() {
    var iconType = Realize.themeProp('icon.' + this.props.type);
    if(!iconType) {
      iconType = this.props.type;
    }

    return iconType;
  }
});
