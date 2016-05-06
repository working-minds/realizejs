var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.InputGridFormFields = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    id: React.PropTypes.string,
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    style: React.PropTypes.string,
    resource: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    submitButton: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]),
    otherButtons: React.PropTypes.array,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      errors: this.props.errors
    };
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'form',
      id: null,
      inputs: {},
      data: {},
      style: 'default',
      resource: null,
      disabled: false,
      readOnly: false,
      submitButton: {
        name: 'actions.send',
        icon: 'send'
      },
      otherButtons: [],
      onSubmit: function(event, postData) {},
      onReset: function(event) {}
    };
  },

  /* Rendering functions */

  render: function() {
    return (
      <div id={this.props.id} className={this.className()} ref="form">
        {this.renderInputs()}
        {this.renderButtons()}
      </div>
    );
  },

  renderInputs: function() {
    if(!this.props.inputs || $.isEmptyObject(this.props.inputs)) {
      return [];
    }

    return (
      <InputGroup
        {...this.propsWithoutCSS()}
        errors={this.state.errors}
        formStyle={this.props.style}
        ref="inputGroup"
      />
    );
  },

  renderButtons: function() {
    return (
      <div className={this.themedClassName("form.buttonGroup")}>
        {this.renderOtherButtons()}
        {this.renderSubmitButton()}
      </div>
    );
  },

  renderOtherButtons: function() {
    var otherButtonsProps = this.props.otherButtons;
    var otherButtons = [];

    for(var i = 0; i < otherButtonsProps.length; i++) {
      var otherButtonProps = otherButtonsProps[i];
      otherButtons.push(
        <Button
          {...otherButtonProps}
          element="a"
          key={otherButtonProps.name}
        />
      );
    }

    return otherButtons;
  },

  renderSubmitButton: function() {
    if(!this.props.submitButton) {
      return [];
    }

    return (
      <Button
        {...this.props.submitButton}
        element="a"
        onClick={this.submitFormFields}
      />
    );
  },

  /* Submit handling functions */

  submitFormFields: function(event) {
    var inputGroupRef = this.refs.inputGroup;
    var fieldsData = inputGroupRef.serialize();

    this.props.onSubmit(event, fieldsData);
    this.clearErrors();
  },

  clearErrors: function() {
    //TODO implementar uma forma de limpar os errors do form nos campos do gridform.
  },

  /* Reset handling functions */

  reset: function() {
    console.log('reset!');
  }
});