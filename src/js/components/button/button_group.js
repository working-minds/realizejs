var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.ButtonGroup = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    buttons: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'button.group',
      buttons: []
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderButtons()}
      </div>
    );
  },

  renderButtons: function() {
    var buttonsProps = this.props.buttons;
    var buttons = [];

    for(var i = 0; i < buttonsProps.length; i++) {
      var buttonProps = buttonsProps[i];

      buttons.push(<Button {...buttonProps} key={"button_" + i} />);
    }

    return buttons;
  }

});
