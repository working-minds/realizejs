var Icon = React.createClass({displayName: "Icon",
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
      React.createElement("i", {className: this.className()}, WRF.themeProp(this.props.type))
    );
  }
});
