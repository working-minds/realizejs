var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

var _filter = require('lodash/filter');
var _merge = require('lodash/merge');

window.InputGroup = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    inputs: React.PropTypes.object,
    data: React.PropTypes.object,
    errors: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    resource: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    label: React.PropTypes.string,
    separator: React.PropTypes.bool,
    formStyle: React.PropTypes.string,
    wrapperClassName: React.PropTypes.string,
    inputWrapperComponent: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.element, React.PropTypes.string])
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'form.inputGroup',
      inputs: {},
      data: {},
      errors: {},
      formStyle: 'default',
      label: null,
      separator: false,
      disabled: false,
      readOnly: false,
      wrapperClassName: 'wrapper_input_group',
      inputWrapperComponent: null
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
    var InputWrapperComponent = this.getInputWrapperComponent();

    for(var inputId in inputsProps) {
      if(inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if(!inputProps.id) {
          inputProps.id = inputId;
        }

        inputComponents.push(
          <InputWrapperComponent
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
            formStyle={this.props.formStyle}
            inputWrapperComponent={this.props.inputWrapperComponent}
            key={"input_" + inputIndex}
            {...inputProps}
            data={this.props.data}
            errors={this.props.errors}
            resource={this.props.resource}
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
  },

  getInputWrapperComponent: function() {
    var inputWrapperComponent = this.props.inputWrapperComponent;
    if(typeof inputWrapperComponent == "string") {
      return window[inputWrapperComponent];
    }
    else if(typeof inputWrapperComponent == "function") {
      return inputWrapperComponent;
    }
    else {
      return window.Input;
    }
  },

  serialize: function() {
    var inputRefs = _filter(this.refs, function(ref, refName) {
      return refName.match(/^input_/);
    });

    var inputValues = {};
    inputRefs.forEach(function(inputRef) {
      _merge(inputValues, inputRef.serialize());
    });

    return inputValues;
  }
});
