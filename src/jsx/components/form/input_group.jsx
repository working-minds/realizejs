var InputGroup = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    errors: React.PropTypes.object,
    resource: React.PropTypes.string,
    themeClassKey: React.PropTypes.string,
    formStyle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      inputs: {},
      errors: {},
      formStyle: 'default',
      resource: null,
      themeClassKey: 'form.inputGroup'
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderInputs()}
        {this.props.children}
      </div>
    );
  },

  renderInputs: function() {
    var inputsProps = this.props.inputs;
    var inputComponents = [];
    var inputIndex = 0;

    for(var inputId in inputsProps) {
      if(inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if(!inputProps.id) {
          inputProps.id = inputId;
        }

        inputComponents.push(
          <Input {...inputProps}
            errors={this.props.errors}
            resource={this.props.resource}
            formStyle={this.props.formStyle}
            key={"input_" + inputIndex}
            ref={"input_" + inputIndex}
          />
        );

        inputIndex++;
      }
    }

    return inputComponents;
  }
});
