var Icon = React.createClass({displayName: "Icon",
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
      React.createElement("i", {className: this.className()}, 
        WRF.themeProp(this.prop.iconType)
      )
    );
  }
});
