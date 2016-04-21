var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var _isEmpty = require('lodash/isEmpty');

window.FormButtonGroup = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    submitButton: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]),
    otherButtons: React.PropTypes.array,
    isLoading: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'form.buttonGroup',
      inputs: {},
      submitButton: {
        name: 'actions.send',
        icon: 'send'
      },
      otherButtons: [],
      isLoading: false
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderOtherButtons()}
        {this.renderSubmitButton()}
      </div>
    );
  },

  renderOtherButtons: function() {
    if (!_isEmpty(this.props.inputs) && this.isAllInputsHidden()) {
      return '';
    }

    var otherButtonsProps = this.props.otherButtons;
    var otherButtons = [];

    for(var i = 0; i < otherButtonsProps.length; i++) {
      var otherButtonProps = otherButtonsProps[i];
      otherButtons.push(<Button {...otherButtonProps} key={otherButtonProps.name} />);
    }

    return otherButtons;
  },

  renderSubmitButton: function() {
    if ((!_isEmpty(this.props.inputs) && this.isAllInputsHidden()) || !this.props.submitButton) {
      return '';
    }

    var submitButton = [];
    submitButton.push(<Button {...this.submitButtonProps()} ref="submitButton" key='submit_button' />);
    return submitButton;
  },

  isAllInputsHidden: function() {
    var allHidden = true;
    var inputs = this.props.inputs;

    for(var property in inputs ) {
      if(inputs.hasOwnProperty(property)) {
        var input = inputs[property];
        if (input.component !== 'hidden')
          return allHidden = false;
      }
    }

    return allHidden;
  },

  submitButtonProps: function() {
    var isLoading = this.props.isLoading;
    return $.extend({}, this.props.submitButton, {
      type: "submit",
      disabled: isLoading,
      isLoading: isLoading
    });
  }
});