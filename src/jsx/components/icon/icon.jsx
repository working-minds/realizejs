var Icon = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    iconType: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconType: ''
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'icon'
    };
  },

  render: function() {
    return (
      <i className={this.className()}>
        {WRF.themeProp(this.prop.iconType)}
      </i>
    );
  }
});
