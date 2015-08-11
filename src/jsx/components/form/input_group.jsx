var InputGroup = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    errors: React.PropTypes.object,
    postObject: React.PropTypes.string,
    themeClassKey: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      inputs: {},
      errors: {},
      style: 'default',
      postObject: null,
      themeClassKey: 'form.inputGroup'
    };
  },

  componentWillMount: function() {
    if(this.props.postObject !== null) {
      this.applyPostObjectToInputsProps();
    }
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

        inputComponents.push(
          <Input {...inputProps}
            errors={this.props.errors[inputId]}
            formStyle={this.props.style}
            key={"input_" + inputIndex}
            ref={"input_" + inputIndex}
          />
        );

        inputIndex++;
      }
    }

    return inputComponents;
  },

  applyPostObjectToInputsProps: function() {
    var postObject = this.props.postObject;
    var inputsProps = this.props.inputs;

    for(var inputId in inputsProps) {
      if (inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];

        inputProps.name = postObject + '[' + (inputProps.name || inputId) + ']';
        inputProps.id = postObject + '_' + inputId;
      }
    }
  }
});
