var PaginationItem = React.createClass({displayName: "PaginationItem",
  mixins: [CssClassMixin],
  propTypes: {
    disabled: React.PropTypes.bool,
    active: React.PropTypes.bool,
    iconType: React.PropTypes.string,
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      active: false,
      iconType: null,
      text: '',
      onClick: function(event) {
        return true;
      }
    };
  },

  getInitialState: function() {
    var themeClassKey = 'pagination.item';
    if(this.props.disabled) {
      themeClassKey += ' pagination.item.disabled';
    }

    if(this.props.active) {
      themeClassKey += ' pagination.item.active';
    }

    return {
      themeClassKey: themeClassKey
    };
  },

  render: function() {
    return (
      React.createElement("li", {className: this.className(), onClick: this.props.onClick}, 
        React.createElement("a", {href: "#!"}, 
          this.props.text, 
          !!this.props.iconType ? this.renderIcon() : ''
        )
      )
    );
  },

  renderIcon: function() {
    return React.createElement(Icon, {type: this.props.iconType});
  }
});
