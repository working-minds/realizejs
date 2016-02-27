var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.InputGroup = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    errors: React.PropTypes.object,
    resource: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    label: React.PropTypes.string,
    separator: React.PropTypes.bool,
    formStyle: React.PropTypes.string,
    wrapperClassName: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      inputs: {},
      data: {},
      errors: {},
      formStyle: 'default',
      label: null,
      separator: false,
      disabled: false,
      readOnly: false,
      themeClassKey: 'form.inputGroup',
      wrapperClassName: 'wrapper_input_group'
    };
  },

  render: function() {
    return (
      <div className={this.props.wrapperClassName}>
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
          <Input
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
            {...inputProps}
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
    if(!this.props.separator) {
      return '';
    }

    //TODO: refatorar para um componente
    var className = Realize.themes.getCssClass('form.inputGroup.divider');
    return (
      <div className={className}>
        <hr />
      </div>
    );
  }
});
