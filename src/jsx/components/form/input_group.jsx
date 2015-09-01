var InputGroup = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    errors: React.PropTypes.object,
    resource: React.PropTypes.string,
    themeClassKey: React.PropTypes.string,
    label: React.PropTypes.string,
    formStyle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      inputs: {},
      data: {},
      errors: {},
      formStyle: 'default',
      label: null,
      themeClassKey: 'form.inputGroup'
    };
  },

  render: function() {
    return (
      <div>
        <div className={this.inputGroupClassName()}>
          {this.renderLabel()}
          {this.renderInputs()}
          {this.props.children}
        </div>
        {this.renderDivider()}
      </div>
    );
  },

  inputGroupClassName: function() {
    var className = this.className();
    if(this.props.label !== null) {
      className += ' ' + Realize.themes.getCssClass('form.inputGroup.section');
    }

    return className;
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
            data={this.props.data}
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
  },

  renderLabel: function() {
    if(this.props.label === null) {
      return '';
    }

    return (<h5>{this.props.label}</h5>);
  },

  renderDivider: function() {
    if(this.props.label === null) {
      return '';
    }

    //TODO: refatorar para um componente
    return (
      <div className={this.props.className}>
        <hr />
      </div>
    );
  }
});
